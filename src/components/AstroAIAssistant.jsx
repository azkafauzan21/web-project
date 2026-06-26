import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inisialisasi Gemini SDK (Akan gagal jika API Key belum diset)
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export function AstroAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Halo! Saya ASTRO AI, asisten mitigasi bencana astronomi Anda. Ada yang ingin didiskusikan tentang cuaca antariksa atau ancaman asteroid hari ini?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const popupRef = useRef(null);

  // Close on outside click or window scroll
  useEffect(() => {
    function handleOutsideEvent(event) {
      if (isOpen && popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideEvent);
      window.addEventListener("scroll", handleOutsideEvent, { capture: true, passive: true });
    }
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideEvent);
      window.removeEventListener("scroll", handleOutsideEvent, { capture: true });
    };
  }, [isOpen]);

  // Auto-open chat panel setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => scrollToBottom(), [messages]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
    setInput('');
    setIsLoading(true);

    if (!genAI) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "[DUMMY FALLBACK] API Key Gemini belum dikonfigurasi di .env. Anda bertanya: " + userMsg, 
          sender: "bot" 
        }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      let targetModel = "gemini-1.5-flash"; // Default fallback
      
      // Auto-detect model yang tersedia untuk API Key ini
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          const validModels = data.models.filter(m => 
            m.supportedGenerationMethods?.includes("generateContent") && 
            m.name.includes("gemini") && 
            !m.name.includes("vision") // hindari vision-only jika ada
          );
          if (validModels.length > 0) {
            // Prioritaskan model flash terbaru
            const flashModel = validModels.find(m => m.name.includes("flash"));
            targetModel = flashModel ? flashModel.name.replace('models/', '') : validModels[0].name.replace('models/', '');
          }
        }
      } catch (e) {
        console.warn("Gagal mengecek daftar model, menggunakan fallback.", e);
      }

      const model = genAI.getGenerativeModel({ 
        model: targetModel,
      });
      const prompt = `Anda adalah ASTRO AI, asisten edukasi mitigasi bencana astronomi. Jawablah pertanyaan berikut dengan jelas dan informatif, MAKSIMAL 2 PARAGRAF: ${userMsg}`;
      
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      
      setMessages(prev => [...prev, { text: responseText, sender: "bot" }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      
      let errorMessage = "Maaf, terjadi kesalahan saat menghubungi server AI.";
      if (error.message) {
        if (error.message.includes("API key not valid")) {
          errorMessage = "API Key tidak valid. Silakan periksa kembali API Key Anda di file .env.";
        } else {
          errorMessage = `Kesalahan AI: ${error.message}`;
        }
      }

      setMessages(prev => [...prev, { text: errorMessage, sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/30 hover:scale-110 hover:shadow-purple-600/50 transition-all cursor-pointer border-2 border-white/10" onClick={() => setIsOpen(!isOpen)} aria-label="ASTRO AI Assistant">
        <Bot className="w-6 h-6 text-white" />
        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Panel */}
      <div ref={popupRef} className={`fixed bottom-24 right-6 z-50 w-[350px] h-[500px] max-h-[calc(100vh-8rem)] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            ASTRO AI <span className="text-[10px] px-1.5 py-0.5 bg-white/20 rounded-md font-medium tracking-wide">Beta</span>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1" onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50/50 dark:bg-slate-950/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'bot' ? 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 self-start rounded-tl-sm' : 'bg-blue-600 text-white self-end rounded-tr-sm'}`}>
              {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
                }
                return <span key={i}>{part}</span>;
              })}
            </div>
          ))}
          {isLoading && (
            <div className="max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 self-start rounded-tl-sm animate-pulse">Mengetik...</div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2" onSubmit={handleSend}>
          <input 
            type="text" 
            className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-slate-200" 
            placeholder="Tanya seputar cuaca antariksa..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
