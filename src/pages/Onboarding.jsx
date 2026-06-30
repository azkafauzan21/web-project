import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  IconPlanet, IconUser, IconLayoutRows, IconClipboardList, 
  IconRocket, IconArrowRight, IconArrowLeft, IconRobot,
  IconIdBadge, IconMapPin, IconBrain, IconInfoCircle,
  IconChartDots, IconFolderOpen, IconMap2, IconLock,
  IconCheck, IconTrophy, IconChartBar, IconSparkles
} from '@tabler/icons-react';
import './Onboarding.css';

const ASTRO_QUESTIONS = [
  {
    id: 1, topic: 'Cuaca Antariksa', color: '#DC2626', bg: '#FEF2F2',
    stem: 'Jika terjadi Solar Flare (suar matahari) kelas X yang sangat besar menghadap ke Bumi, dampak langsung apa yang paling pertama dirasakan di Bumi?',
    t1: ['Gangguan pada sinyal radio frekuensi tinggi (HF) di siang hari', 'Pemadaman listrik total di seluruh dunia seketika', 'Suhu udara di permukaan Bumi meningkat drastis', 'Badai petir yang sangat hebat di daerah ekuator'],
    t2: ['Radiasi elektromagnetik (sinar-X dan UV) bergerak dengan kecepatan cahaya dan langsung mengionisasi ionosfer Bumi', 'Plasma dari matahari bergerak sangat cepat dan membakar atmosfer Bumi', 'Energi termal matahari menjalar ke Bumi menyebabkan gelombang panas global', 'Suar matahari membawa awan awan badai dari luar angkasa']
  },
  {
    id: 2, topic: 'Cuaca Antariksa', color: '#DC2626', bg: '#FEF2F2',
    stem: 'Coronal Mass Ejection (CME) dapat memicu badai geomagnetik jika materialnya mengenai Bumi. Mengapa CME sangat berbahaya bagi infrastruktur teknologi modern?',
    t1: ['Dapat menginduksi arus listrik berbahaya pada jaringan listrik (GIC) dan merusak trafo', 'Gas beracun dari matahari dapat menembus atmosfer dan meracuni udara', 'Menghancurkan satelit secara fisik karena tumbukan batuan matahari', 'Mengubah iklim Bumi menjadi zaman es'],
    t2: ['Interaksi medan magnet CME dengan magnetosfer Bumi memicu fluktuasi medan magnet yang menginduksi arus listrik (Hukum Faraday)', 'Plasma CME mengandung unsur radioaktif tinggi yang menghancurkan silikon', 'CME adalah awan batu padat yang bergerak dengan kecepatan jutaan km/jam', 'Medan magnet matahari memblokir sinar kosmik secara permanen']
  },
  {
    id: 3, topic: 'Kawah Meteor', color: '#2563EB', bg: '#EFF6FF',
    stem: 'Jika sebuah asteroid berdiameter 50 meter diprediksi akan menumbuk Bumi, di mana lokasi tumbukan yang kemungkinan akan menyebabkan dampak global yang paling kecil?',
    t1: ['Di tengah samudra pasifik yang dalam', 'Di padang pasir luas yang tidak berpenghuni', 'Di dataran es Antartika', 'Tumbukan 50 meter tidak akan pernah sampai permukaan bumi (habis terbakar)'],
    t2: ['Energi tumbukan di daratan kosong melokalisasi kerusakan, sedangkan di laut akan memicu tsunami raksasa lintas benua', 'Samudra akan meredam seluruh energi tumbukan seperti spon', 'Es akan mendinginkan asteroid seketika', 'Semua asteroid di bawah 100 meter pasti menguap sempurna di mesosfer']
  },
  {
    id: 4, topic: 'Kawah Meteor', color: '#2563EB', bg: '#EFF6FF',
    stem: 'Dampak kerusakan (radius kawah dan gelombang kejut) dari tumbukan meteor sangat dipengaruhi oleh energi kinetiknya. Parameter apa yang paling dominan memperbesar energi kinetik tersebut?',
    t1: ['Kecepatan jatuhnya meteor', 'Massa meteor', 'Sudut tumbukan', 'Kepadatan (densitas) atmosfer Bumi'],
    t2: ['Kecepatan dikuadratkan dalam persamaan energi kinetik (E = 1/2 m v²), sehingga efeknya secara eksponensial lebih besar dibanding massa', 'Massa berbanding lurus dengan gravitasi, menarik meteor lebih cepat', 'Sudut tegak lurus mengonsentrasikan seluruh massa ke satu titik kawah', 'Atmosfer memberikan gaya gesek dominan yang menentukan panas']
  },
  {
    id: 5, topic: 'Sampah Antariksa', color: '#D97706', bg: '#FFFBEB',
    stem: 'Apa ancaman terbesar yang dikemukakan oleh teori "Sindrom Kessler" (Kessler Syndrome)?',
    t1: ['Tabrakan beruntun sampah antariksa di Orbit LEO yang membuat orbit bumi tidak bisa digunakan lagi', 'Sampah antariksa berukuran besar berjatuhan ke kota-kota padat penduduk', 'Satelit mata-mata yang meledak dan memicu perang nuklir', 'Sampah antariksa menghalangi sinar matahari dan menurunkan suhu bumi'],
    t2: ['Setiap tabrakan menghasilkan ribuan serpihan baru yang memicu reaksi berantai tabrakan tak terkendali di Low Earth Orbit', 'Sampah orbit ditarik secara eksponensial oleh gravitasi Bumi menuju wilayah ekuator', 'Sindrom Kessler membuktikan sampah logam luar angkasa akan meracuni atmosfer atas', 'Tumpukan sampah logam menciptakan medan elektromagnetik yang menghalangi radiasi surya']
  },
  {
    id: 6, topic: 'Sampah Antariksa', color: '#D97706', bg: '#FFFBEB',
    stem: 'Saat ini mitigasi terbaik yang dilakukan stasiun luar angkasa (seperti ISS) untuk menghindari serpihan sampah antariksa yang melaju kencang adalah...',
    t1: ['Melakukan manuver perubahan orbit (Collision Avoidance Maneuver)', 'Menembakkan laser pelindung untuk menghancurkan serpihan', 'Menangkap sampah dengan jaring raksasa (Space Net)', 'Berlindung dengan baju zirah ekstra tebal'],
    t2: ['Radar di bumi melacak serpihan berbahaya dan ISS menyalakan pendorong (thruster) untuk sedikit menggeser ketinggian orbitnya', 'Laser daya tinggi difokuskan untuk melelehkan logam serpihan di luar angkasa', 'Bahan kevlar ISS tidak bisa tembus oleh material berukuran di atas 10cm', 'ISS memiliki medan gaya elektromagnetik penolak logam']
  },
  {
    id: 7, topic: 'Tsunami Tumbukan', color: '#0D9488', bg: '#F0FDFA',
    stem: 'Apa perbedaan utama antara "Megatsunami" yang diakibatkan oleh tumbukan asteroid di laut dengan tsunami tektonik biasa?',
    t1: ['Megatsunami tumbukan memiliki amplitudo awal sangat tinggi namun cepat melemah karena sumber energinya bertitik tunggal (point source)', 'Megatsunami tektonik selalu jauh lebih besar karena patahan bisa ribuan kilometer panjangnya', 'Gelombang tumbukan hanya berupa air panas yang mendidih', 'Tsunami asteroid bergerak lebih lambat dibanding tsunami gempa'],
    t2: ['Air laut dipindahkan dari satu pusat radial yang melingkar, energinya cepat menyebar dan berhamburan jarak jauh, berbeda dengan patahan tektonik yang linier', 'Energi tektonik berasal dari inti bumi sehingga lebih kuat dari meteor', 'Tumbukan langsung mengubah massa air menjadi uap, bukan memindahkan gelombang', 'Meteor membawa elemen berat yang memperlambat molekul air']
  },
  {
    id: 8, topic: 'Tsunami Tumbukan', color: '#0D9488', bg: '#F0FDFA',
    stem: 'Jika simulasi menunjukkan asteroid jatuh di lautan berjarak 1000 km dari garis pantai, langkah mitigasi darurat apa yang paling relevan dilakukan oleh pemerintah pesisir?',
    t1: ['Segera membunyikan sirene evakuasi tsunami menuju tempat tinggi (jauh dari pantai) dalam waktu kurang dari 1 jam', 'Membangun tembok laut raksasa saat itu juga', 'Menyuruh warga bersembunyi di ruang bawah tanah bangunan beton', 'Mengirimkan kapal ke tengah laut untuk memecah gelombang'],
    t2: ['Tsunami dari jarak 1000 km memakan waktu sekitar 1-2 jam menjalar dengan kecepatan pesawat komersial (~800 km/jam), sangat cukup waktu evakuasi vertikal/horizontal', 'Tembok beton laut adalah satu-satunya penahan gelombang kinetik setinggi 50 meter', 'Ruang bawah tanah melindung dari segala jenis jatuhan dan sapuan air', 'Gelombang laut dalam mudah dipecah oleh massa kapal-kapal tempur']
  },
  {
    id: 9, topic: 'Radiasi Kosmik', color: '#16A34A', bg: '#F0FDF4',
    stem: 'Di luar atmosfer Bumi terdapat partikel energi tinggi dari galaksi (GCR) maupun Matahari (SPE). Mengapa manusia di permukaan Bumi relatif aman dari paparan mematikan ini?',
    t1: ['Karena Bumi dilindungi oleh Magnetosfer (medan magnet) dan Atmosfer tebal yang membelokkan serta menyerap radiasi tersebut', 'Karena jarak Bumi terlalu jauh dari sumber-sumber radiasi kosmik di tata surya', 'Karena radiasi kosmik terhalang oleh Bulan', 'Karena lapisan ozon memantulkan seluruh radiasi tersebut kembali ke luar angkasa'],
    t2: ['Medan magnet bumi membelokkan partikel bermuatan (sebagian terperangkap di Sabuk Van Allen) dan sisa energinya diserap/dipecah oleh ketebalan gas atmosfer (Nuclear Cascade)', 'Hukum kuadrat terbalik (Inverse Square Law) menghilangkan seluruh radiasi secara matematis sebelum mencapai bumi', 'Bulan memiliki tarikan gravitasi spesifik untuk foton dan sinar Gamma', 'Sinar ultraviolet dari matahari bereaksi dengan ozon membentuk pelindung anti-radiasi kosmik']
  },
  {
    id: 10, topic: 'Radiasi Kosmik', color: '#16A34A', bg: '#F0FDF4',
    stem: 'Jika astronaut melakukan misi ke Mars (keluar dari pelindung magnetosfer Bumi), mitigasi apa yang paling penting untuk melindungi kru dari Solar Particle Event (SPE) tiba-tiba?',
    t1: ['Tersedianya ruang perlindungan (shelter) berlapis bahan kaya hidrogen (seperti air atau plastik polietilen) di dalam wahana', 'Menyelam ke dalam air selama durasi badai matahari', 'Menggunakan pakaian luar angkasa berlapis timah setebal 10 sentimeter terus menerus', 'Memutar pesawat ruang angkasa agar membelakangi matahari'],
    t2: ['Bahan kaya hidrogen memiliki penampang lintang interaksi (cross-section) yang efisien menghentikan proton berenergi tinggi dengan radiasi sekunder minimal', 'Air mendinginkan tubuh astronaut yang terkena paparan radiasi termal dari suar matahari', 'Timah (Lead) adalah satu-satunya elemen anti radiasi untuk partikel kosmik berat dan cepat', 'Bagian belakang pesawat terbuat dari cermin khusus untuk membelokkan foton']
  }
];

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // State for Form Step 1
  const [form, setForm] = useState({
    provinsi: '',
    bencana: [],
    kedekatan: '',
    vark: ''
  });

  // State for Questions Step 3
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(
    ASTRO_QUESTIONS.map(() => ({ t1: null, t2: null, t3: null, t4: null }))
  );

  // Functions for Step 1
  const toggleBencana = (b) => {
    setForm(prev => {
      const isSelected = prev.bencana.includes(b);
      let newBencana = [];
      if (b === 'Belum pernah') {
        newBencana = isSelected ? [] : ['Belum pernah'];
      } else {
        newBencana = isSelected 
          ? prev.bencana.filter(x => x !== b)
          : [...prev.bencana.filter(x => x !== 'Belum pernah'), b];
      }
      return { ...prev, bencana: newBencana };
    });
  };

  const handleNext = (nextStep) => {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishPreTest = () => {
    // Navigate to step 4 (Hasil)
    handleNext(4);
  };

  // Functions for Step 3
  const q = ASTRO_QUESTIONS[currentQ];
  const ans = answers[currentQ];

  const handleT1 = (val) => {
    const newAns = [...answers];
    newAns[currentQ].t1 = val;
    setAnswers(newAns);
  };
  const handleT2 = (val) => {
    const newAns = [...answers];
    newAns[currentQ].t2 = val;
    setAnswers(newAns);
  };
  const handleT3 = (val) => {
    const newAns = [...answers];
    newAns[currentQ].t3 = val;
    setAnswers(newAns);
  };
  const handleT4 = (val) => {
    const newAns = [...answers];
    newAns[currentQ].t4 = val;
    setAnswers(newAns);
  };

  // Rendering
  return (
    <div className="min-h-screen bg-brand-bg2 font-sans text-brand-navy pb-10">
      {/* Topbar */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
            <IconPlanet className="text-white w-5 h-5" />
          </div>
          <div className="text-[13px] font-semibold text-brand-navy">
            <span className="text-brand-blue">Astromitigasi</span> · Learning System
          </div>
        </div>
        <div className="text-xs font-medium text-brand-slate bg-brand-bg2 px-3 py-1 rounded-full border border-slate-200">
          Langkah {step} dari 4
        </div>
      </div>

      {/* Stepper */}
      <div className="bg-white border-b border-slate-200 p-4 px-6">
        <div className="flex items-start max-w-[560px] mx-auto">
          {[
            { id: 1, label: 'Profil Belajar', icon: IconUser },
            { id: 2, label: 'Orientasi LMS', icon: IconLayoutRows },
            { id: 3, label: 'Pre-test Diagnostik', icon: IconClipboardList },
            { id: 4, label: 'Hasil & Mulai', icon: IconRocket },
          ].map((s, idx, arr) => {
            const isActive = step === s.id;
            const isDone = step > s.id;
            const Icon = s.icon;
            
            return (
              <div key={s.id} className="flex-1 flex flex-col items-center relative">
                {idx < arr.length - 1 && (
                  <div className="absolute top-[14px] left-1/2 right-[-50%] h-[1px] bg-slate-200 z-0"></div>
                )}
                <div className={`
                  w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold border-[1.5px] relative z-10 transition-all duration-250
                  ${isActive ? 'bg-brand-blue text-white border-brand-blue shadow-[0_0_0_3px_#BFDBFE]' : ''}
                  ${isDone ? 'bg-brand-green text-white border-brand-green' : ''}
                  ${!isActive && !isDone ? 'bg-white text-brand-slate2 border-slate-200' : ''}
                `}>
                  {isDone ? <IconCheck className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                </div>
                <div className={`
                  text-[10px] mt-1.5 text-center leading-[1.3]
                  ${isActive ? 'text-brand-blue font-semibold' : ''}
                  ${isDone ? 'text-brand-green font-medium' : ''}
                  ${!isActive && !isDone ? 'text-brand-slate2 font-medium' : ''}
                `}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[580px] mx-auto px-5 mt-6">

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="mb-[18px]">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] px-2.5 py-1 rounded-full mb-2 bg-blue-50 text-brand-blue">
                <IconUser className="w-3.5 h-3.5" /> Langkah 1
              </div>
              <h1 className="text-lg font-bold text-brand-navy leading-[1.3] mb-1.5">Lengkapi Profil Belajarmu</h1>
              <p className="text-xs text-brand-slate leading-[1.7]">Data ini membantu AI Disaster Assistant menyesuaikan konteks materi dengan pemahaman antariksa kamu. Tidak ada jawaban benar atau salah.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-[10px] p-3 flex gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                <IconRobot className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-blue mb-1 uppercase tracking-[0.4px]">Astro-AI</div>
                <div className="text-xs text-blue-900 leading-[1.65]">Halo! Saya Astro-AI. Isi profil ini dengan jujur — data ini membantu saya memberikan pengalaman belajar yang relevan, terutama untuk topik astromitigasi yang kompleks.</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[14px] p-5 mb-3.5 shadow-sm">
              <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-[0.6px] mb-3 flex items-center gap-1.5">
                <IconIdBadge className="w-3.5 h-3.5 text-brand-blue" /> Identitas Mahasiswa
              </div>
              <div className="mb-3.5">
                <label className="text-[11px] font-semibold text-brand-slate mb-1.5 block uppercase tracking-[0.3px]">Nama Lengkap</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md text-[13px] text-brand-navy focus:outline-none focus:border-brand-blue focus:ring-3 focus:ring-blue-200" placeholder="Nama sesuai KTM / KRS" />
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                <div>
                  <label className="text-[11px] font-semibold text-brand-slate mb-1.5 block uppercase tracking-[0.3px]">Angkatan</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-[13px] text-brand-navy focus:outline-none focus:border-brand-blue focus:ring-3 focus:ring-blue-200">
                    <option>2021</option><option>2022</option><option>2023</option><option>2024</option><option>2025</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-brand-slate mb-1.5 block uppercase tracking-[0.3px]">Institusi</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-[13px] text-brand-navy focus:outline-none focus:border-brand-blue focus:ring-3 focus:ring-blue-200">
                    <option>UPI Bandung</option>
                    <option>Universitas Terbuka</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[14px] p-5 mb-3.5 shadow-sm">
              <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-[0.6px] mb-3 flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-red-600" /> Konteks Kebencanaan
              </div>
              <div className="mb-3.5">
                <label className="text-[11px] font-semibold text-brand-slate mb-1.5 block uppercase tracking-[0.3px]">Minat / Pengalaman Pengetahuan Antariksa</label>
                <div className="flex flex-wrap gap-1.5">
                  {['Suka mengamati langit', 'Sering membaca artikel sains', 'Tahu apa itu Solar Flare', 'Pernah melihat meteor', 'Main game simulasi antariksa', 'Awam sama sekali'].map(chip => (
                    <div 
                      key={chip}
                      onClick={() => toggleBencana(chip)}
                      className={`px-3 py-1.5 rounded-full border text-[11px] cursor-pointer font-medium transition-all ${form.bencana.includes(chip) ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white text-brand-slate2 border-slate-300 hover:bg-blue-50 hover:border-blue-200 hover:text-brand-blue'}`}
                    >
                      {chip}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3.5">
                <label className="text-[11px] font-semibold text-brand-slate mb-1.5 block uppercase tracking-[0.3px]">Tingkat Kekhawatiran pada Bencana Antariksa</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    'Sangat khawatir — sering memikirkan skenario kiamat asteroid',
                    'Cukup khawatir — menyadari risiko dari cuaca antariksa',
                    'Agak peduli — tahu dampaknya tapi merasa itu jarang terjadi',
                    'Tidak peduli — merasa mustahil terjadi di masa hidup kita'
                  ].map(opt => (
                    <div 
                      key={opt}
                      onClick={() => setForm({...form, kedekatan: opt})}
                      className={`flex items-center gap-2.5 px-3 py-2 border rounded-md cursor-pointer text-xs transition-all select-none ${form.kedekatan === opt ? 'bg-blue-50 border-brand-blue text-blue-900 font-medium' : 'border-slate-200 text-brand-navy hover:border-blue-300 hover:bg-blue-50/50'}`}
                    >
                      <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${form.kedekatan === opt ? 'border-brand-blue bg-brand-blue' : 'border-slate-300'}`}>
                        {form.kedekatan === opt && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[14px] p-5 mb-3.5 shadow-sm">
              <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-[0.6px] mb-3 flex items-center gap-1.5">
                <IconBrain className="w-3.5 h-3.5 text-brand-purple" /> Gaya Belajar (VARK)
              </div>
              <div className="mb-3.5">
                <label className="text-[11px] font-semibold text-brand-slate mb-1.5 block uppercase tracking-[0.3px]">Bagaimana cara kamu paling mudah memahami materi baru?</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    { val: 'v', lbl: <><strong className="font-semibold text-brand-navy">Visual</strong> — diagram, grafik, peta, simulasi warna</> },
                    { val: 'a', lbl: <><strong className="font-semibold text-brand-navy">Auditory</strong> — ceramah, diskusi, podcast, video penjelasan</> },
                    { val: 'r', lbl: <><strong className="font-semibold text-brand-navy">Read/Write</strong> — teks tertulis, catatan, membaca mandiri</> },
                    { val: 'k', lbl: <><strong className="font-semibold text-brand-navy">Kinesthetic</strong> — kalkulator interaktif, praktik langsung</> },
                  ].map(opt => (
                    <div 
                      key={opt.val}
                      onClick={() => setForm({...form, vark: opt.val})}
                      className={`flex items-center gap-2.5 px-3 py-2 border rounded-md cursor-pointer text-xs transition-all select-none ${form.vark === opt.val ? 'bg-blue-50 border-brand-blue text-blue-900 font-medium' : 'border-slate-200 text-brand-slate hover:border-blue-300 hover:bg-blue-50/50'}`}
                    >
                      <div className={`w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${form.vark === opt.val ? 'border-brand-blue bg-brand-blue' : 'border-slate-300'}`}>
                        {form.vark === opt.val && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                      {opt.lbl}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button 
                onClick={() => handleNext(2)}
                className="bg-brand-blue hover:bg-blue-800 text-white px-5 py-2 rounded-md text-[13px] font-medium flex items-center gap-1.5 transition-colors"
              >
                Lanjut ke Orientasi LMS <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="mb-[18px]">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] px-2.5 py-1 rounded-full mb-2 bg-purple-50 text-brand-purple">
                <IconLayoutRows className="w-3.5 h-3.5" /> Langkah 2
              </div>
              <h1 className="text-lg font-bold text-brand-navy leading-[1.3] mb-1.5">Orientasi Platform Astromitigasi</h1>
              <p className="text-xs text-brand-slate leading-[1.7]">Kenali cara kerja platform sebelum memulai belajar. Estimasi waktu: 3 menit.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-[10px] p-3 flex gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                <IconRobot className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-blue mb-1 uppercase tracking-[0.4px]">Astro-AI</div>
                <div className="text-xs text-blue-900 leading-[1.65]">Saya akan menemanimu di setiap langkah belajar. Berbeda dari chatbot biasa, saya menggunakan pendekatan <strong className="font-semibold">Socratic</strong> — lebih banyak bertanya balik untuk membantumu berpikir mendalam, bukan sekadar memberi jawaban instan.</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[14px] p-5 mb-3.5 shadow-sm">
              <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-[0.6px] mb-3 flex items-center gap-1.5">
                <IconInfoCircle className="w-4 h-4 text-brand-teal" /> Cara Kerja Astromitigasi
              </div>
              
              <div className="flex gap-3 py-3 border-b border-slate-100 last:border-none last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <IconLayoutRows className="w-[18px] h-[18px] text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1 text-brand-navy">Alur E-DRA di setiap modul</div>
                  <div className="text-[11px] text-brand-slate leading-[1.55]">Setiap modul berjalan dalam 6 fase: <strong className="font-semibold text-brand-navy">Engage</strong> (pemantik), <strong className="font-semibold text-brand-navy">Discover</strong> (eksplorasi konsep), <strong className="font-semibold text-brand-navy">Reason</strong> (analisis kritis), <strong className="font-semibold text-brand-navy">Apply</strong> (proyek/simulasi), <strong className="font-semibold text-brand-navy">Reflection</strong> (jurnal), dan <strong className="font-semibold text-brand-navy">Assessment</strong>. Kamu tidak bisa melewati fase secara acak.</div>
                </div>
              </div>

              <div className="flex gap-3 py-3 border-b border-slate-100 last:border-none last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <IconRobot className="w-[18px] h-[18px] text-brand-purple" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1 text-brand-navy">AI Disaster Assistant — selalu aktif</div>
                  <div className="text-[11px] text-brand-slate leading-[1.55]">Tombol AI tersedia di setiap halaman. Bisa ditanya kapan saja tentang materi. AI merespons secara kontekstual sesuai fase dan modul yang sedang aktif (misalnya saat kalkulator dampak, AI akan membahas rumus dampaknya).</div>
                </div>
              </div>

              <div className="flex gap-3 py-3 border-b border-slate-100 last:border-none last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <IconChartDots className="w-[18px] h-[18px] text-brand-green" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1 text-brand-navy">Pengukuran N-Gain Literasi Bencana</div>
                  <div className="text-[11px] text-brand-slate leading-[1.55]">Setiap modul punya pre-test (di onboarding ini) dan post-test. Perbedaannya dihitung sebagai <strong className="font-semibold text-brand-navy">N-Gain ternormalisasi</strong> — target ≥0.40. Progres ditampilkan real-time di dashboard.</div>
                </div>
              </div>

              <div className="flex gap-3 py-3 border-b border-slate-100 last:border-none last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                  <IconFolderOpen className="w-[18px] h-[18px] text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1 text-brand-navy">Simulasi & Galeri Karya</div>
                  <div className="text-[11px] text-brand-slate leading-[1.55]">Di fase Apply setiap modul, kamu akan berinteraksi dengan simulasi nyata (Kalkulator Asteroid, Tsunami Tumbukan, dll). Kamu dapat menyimpan hasil analisismu ke Galeri Proyek.</div>
                </div>
              </div>

              <div className="flex gap-3 py-3 border-b border-slate-100 last:border-none last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <IconMap2 className="w-[18px] h-[18px] text-brand-red" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1 text-brand-navy">Astro Data Center — data real-time</div>
                  <div className="text-[11px] text-brand-slate leading-[1.55]">Akses data bencana antariksa langsung dari NASA, NOAA, dan lembaga antariksa lainnya untuk memonitor badai matahari atau objek dekat bumi.</div>
                </div>
              </div>

              <div className="flex gap-3 py-3 border-b border-slate-100 last:border-none last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <IconLock className="w-[18px] h-[18px] text-brand-slate2" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1 text-brand-navy">Modul terbuka secara sekuensial</div>
                  <div className="text-[11px] text-brand-slate leading-[1.55]">Modul 2 terbuka setelah Modul 1 selesai, dan seterusnya. Ini memastikan pemahaman astrofisika dasar terbentuk sebelum melanjutkan ke topik berikutnya.</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button 
                onClick={() => handleNext(1)}
                className="bg-white hover:bg-slate-50 text-brand-slate px-5 py-2 rounded-md text-[13px] font-medium border border-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <IconArrowLeft className="w-4 h-4" /> Kembali
              </button>
              <button 
                onClick={() => handleNext(3)}
                className="bg-brand-blue hover:bg-blue-800 text-white px-5 py-2 rounded-md text-[13px] font-medium flex items-center gap-1.5 transition-colors"
              >
                Lanjut ke Pre-test <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="mb-[18px]">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] px-2.5 py-1 rounded-full mb-2 bg-amber-50 text-brand-orange">
                <IconClipboardList className="w-3.5 h-3.5" /> Langkah 3
              </div>
              <h1 className="text-lg font-bold text-brand-navy leading-[1.3] mb-1.5">Pre-test Diagnostik Astromitigasi</h1>
              <p className="text-xs text-brand-slate leading-[1.7]">10 soal · Format Four-Tier Diagnostic Test. Jawab sejujurnya — hasil digunakan untuk baseline N-Gain, bukan untuk nilai kumulatif.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-[10px] p-3 flex gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                <IconRobot className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-blue mb-1 uppercase tracking-[0.4px]">Astro-AI</div>
                <div className="text-xs text-blue-900 leading-[1.65]">Setiap soal punya <strong className="font-semibold">4 lapisan</strong>: (1) Jawaban, (2) Alasan jawaban, (3) Keyakinan terhadap jawaban (skala 1–6), dan (4) Keyakinan terhadap alasan (skala 1–6). Pola ini membantu mengidentifikasi miskonsepsi secara tepat.</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[14px] p-[16px_18px] shadow-sm">
              {/* Progress Bar */}
              <div className="h-1.5 bg-brand-bg2 rounded-full mb-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full transition-all duration-400 ease-out"
                  style={{ width: `${((currentQ + 1) / ASTRO_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-brand-slate2">Soal {currentQ + 1} dari {ASTRO_QUESTIONS.length}</span>
                <span 
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" 
                  style={{ background: q.bg, color: q.color, border: `1px solid ${q.color}40` }}
                >
                  {q.topic}
                </span>
              </div>

              {/* Question Stem */}
              <div 
                className="text-[13px] font-medium leading-[1.65] text-brand-navy p-3.5 rounded-r-md mb-4"
                style={{ borderLeft: `3px solid ${q.color}`, background: q.bg }}
              >
                {q.stem}
              </div>

              {/* TIER 1 */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md tracking-[0.3px] bg-blue-50 text-brand-blue">TIER 1</span>
                  <span className="text-xs font-medium text-brand-navy">Pilih jawaban yang paling tepat</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {q.t1.map((opt, i) => {
                    const sel = ans.t1 === i;
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleT1(i)}
                        className={`flex items-start gap-2.5 px-3 py-2 border rounded-md cursor-pointer text-xs transition-all select-none ${sel ? 'bg-blue-50 border-brand-blue text-blue-900 font-medium' : 'border-slate-200 text-brand-navy hover:border-blue-300 hover:bg-blue-50/50'}`}
                      >
                        <div className={`w-4 h-4 mt-0.5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${sel ? 'border-brand-blue bg-brand-blue' : 'border-slate-300'}`}>
                          {sel && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                        <span className="leading-tight">{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="h-[1px] bg-brand-bg2 my-3"></div>

              {/* TIER 2 */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md tracking-[0.3px] bg-amber-50 text-brand-orange">TIER 2</span>
                  <span className="text-xs font-medium text-brand-navy">Pilih alasan yang paling mendukung jawabanmu</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {q.t2.map((opt, i) => {
                    const sel = ans.t2 === i;
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleT2(i)}
                        className={`flex items-start gap-2.5 px-3 py-2 border rounded-md cursor-pointer text-xs transition-all select-none ${sel ? 'bg-amber-50 border-brand-orange text-orange-900 font-medium' : 'border-slate-200 text-brand-navy hover:border-orange-300 hover:bg-amber-50/50'}`}
                      >
                        <div className={`w-4 h-4 mt-0.5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${sel ? 'border-brand-orange bg-brand-orange' : 'border-slate-300'}`}>
                          {sel && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                        <span className="leading-tight">{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="h-[1px] bg-brand-bg2 my-3"></div>

              {/* TIER 3 */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md tracking-[0.3px] bg-green-50 text-brand-green">TIER 3</span>
                  <span className="text-xs font-medium text-brand-navy">Seberapa yakin kamu dengan jawaban Tier 1?</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6].map((scale) => (
                      <div 
                        key={scale}
                        onClick={() => handleT3(scale)}
                        className={`flex-1 py-1.5 text-center border rounded-md text-xs font-medium cursor-pointer transition-all ${ans.t3 === scale ? 'bg-brand-green text-white border-brand-green' : 'bg-white text-brand-slate2 border-slate-200 hover:bg-green-50 hover:border-green-300 hover:text-brand-green'}`}
                      >
                        {scale}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between px-0.5 text-[10px] text-brand-slate3 mt-0.5">
                    <span>Tidak yakin</span>
                    <span>Sangat yakin</span>
                  </div>
                </div>
              </div>
              <div className="h-[1px] bg-brand-bg2 my-3"></div>

              {/* TIER 4 */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md tracking-[0.3px] bg-teal-50 text-brand-teal">TIER 4</span>
                  <span className="text-xs font-medium text-brand-navy">Seberapa yakin kamu dengan alasan Tier 2?</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6].map((scale) => (
                      <div 
                        key={scale}
                        onClick={() => handleT4(scale)}
                        className={`flex-1 py-1.5 text-center border rounded-md text-xs font-medium cursor-pointer transition-all ${ans.t4 === scale ? 'bg-brand-teal text-white border-brand-teal' : 'bg-white text-brand-slate2 border-slate-200 hover:bg-teal-50 hover:border-teal-300 hover:text-brand-teal'}`}
                      >
                        {scale}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between px-0.5 text-[10px] text-brand-slate3 mt-0.5">
                    <span>Tidak yakin</span>
                    <span>Sangat yakin</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={() => setCurrentQ(prev => Math.max(0, prev - 1))}
                  className={`bg-white hover:bg-slate-50 text-brand-slate px-4 py-2 rounded-md text-xs font-medium border border-slate-200 flex items-center gap-1.5 transition-colors ${currentQ === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                  <IconArrowLeft className="w-3.5 h-3.5" /> Sebelumnya
                </button>

                <button 
                  onClick={() => {
                    // Check if current is fully answered (for prototype we can skip strict validation to allow easy flow)
                    if (currentQ < ASTRO_QUESTIONS.length - 1) {
                      setCurrentQ(prev => prev + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      handleFinishPreTest();
                    }
                  }}
                  className="bg-brand-blue hover:bg-blue-800 text-white px-5 py-2 rounded-md text-[13px] font-medium flex items-center gap-1.5 transition-colors"
                >
                  {currentQ === ASTRO_QUESTIONS.length - 1 ? (
                    <>Selesai & Lihat Hasil <IconCheck className="w-4 h-4" /></>
                  ) : (
                    <>Soal Berikutnya <IconArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ================= STEP 4 ================= */}
        {step === 4 && (
          <div className="animate-fade-in">
            <div className="text-center mb-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-3">
                <IconCheck className="w-7 h-7 text-brand-green" stroke={3} />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.5px] px-2.5 py-1 rounded-full mb-2 bg-green-50 text-brand-green">
                <IconTrophy className="w-3.5 h-3.5" /> Langkah 4
              </div>
              <h1 className="text-lg font-bold text-brand-navy leading-[1.3] mb-1.5">Pre-test Selesai!</h1>
              <p className="text-xs text-brand-slate leading-[1.7]">Berikut profil awal literasi astromitigasimu. Data ini akan dibandingkan dengan post-test setelah kamu menyelesaikan semua modul untuk menghitung N-Gain.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-[10px] p-3 flex gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                <IconRobot className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-blue mb-1 uppercase tracking-[0.4px]">Astro-AI</div>
                <div className="text-xs text-blue-900 leading-[1.65]">Terima kasih sudah mengerjakan pre-test dengan jujur! Berdasarkan profilmu, saya akan menyesuaikan penekanan materi di setiap modul. Skor <strong className="font-semibold">Tsunami Tumbukan</strong> dan <strong className="font-semibold">Radiasi Kosmik</strong> perlu perhatian lebih — tapi kita mulai dari dasar <strong className="font-semibold">Cuaca Antariksa</strong> dulu!</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-3.5">
              <div className="border border-slate-200 rounded-[14px] p-3.5 text-center bg-white shadow-sm">
                <div className="text-2xl font-bold text-brand-orange">42%</div>
                <div className="text-[11px] text-brand-slate2 mt-1 leading-[1.3]">Skor awal literasi astromitigasi keseluruhan</div>
              </div>
              <div className="border border-slate-200 rounded-[14px] p-3.5 text-center bg-white shadow-sm">
                <div className="text-2xl font-bold text-brand-blue">0.00</div>
                <div className="text-[11px] text-brand-slate2 mt-1 leading-[1.3]">N-Gain saat ini (akan meningkat setelah modul)</div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[14px] p-5 mb-3.5 shadow-sm">
              <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-[0.6px] mb-3 flex items-center gap-1.5">
                <IconChartBar className="w-4 h-4 text-brand-blue" /> Profil Literasi Per Topik Bencana
              </div>
              
              {[
                { name: 'Cuaca Antariksa', color: 'bg-brand-red', hex: '#DC2626', score: 48 },
                { name: 'Kawah Meteor', color: 'bg-brand-blue', hex: '#2563EB', score: 55 },
                { name: 'Sampah Antariksa', color: 'bg-brand-orange', hex: '#D97706', score: 42 },
                { name: 'Tsunami Tumbukan', color: 'bg-brand-teal', hex: '#0D9488', score: 38 },
                { name: 'Radiasi Kosmik', color: 'bg-brand-green', hex: '#16A34A', score: 30 },
              ].map(t => (
                <div key={t.name} className="flex items-center gap-2 mb-2 last:mb-0">
                  <div className="text-[11px] font-medium text-brand-slate2 w-24 shrink-0">{t.name}</div>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${t.color}`} style={{ width: `${t.score}%` }}></div>
                  </div>
                  <div className="text-[11px] font-bold w-8 text-right" style={{ color: t.hex }}>{t.score}%</div>
                </div>
              ))}
              
              <div className="mt-3 p-2.5 bg-brand-bg2 border border-dashed border-slate-300 rounded-md text-[11px] text-brand-slate2">
                Grafik ini diperbarui otomatis setiap kamu menyelesaikan post-test di akhir setiap modul.
              </div>
            </div>

            <div className="bg-[#F8FBFF] border border-blue-200 rounded-[14px] p-5 mb-5 shadow-sm">
              <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-[0.6px] mb-2 flex items-center gap-1.5">
                <IconSparkles className="w-4 h-4 text-brand-purple" /> Rekomendasi AI Berdasarkan Profil Awalmu
              </div>
              <div className="text-[12px] text-brand-slate2 leading-[1.7]">
                Topik <strong className="font-semibold text-brand-teal">Tsunami Tumbukan (38%)</strong> dan <strong className="font-semibold text-brand-green">Radiasi Kosmik (30%)</strong> menunjukkan pemahaman paling rendah. Astro-AI akan memberikan <strong className="font-semibold text-brand-navy">penekanan Socratic lebih intens</strong> pada kedua topik tersebut saat kamu sampai di modul yang relevan.
              </div>
            </div>

            <button 
              onClick={() => {
                // Here we simulate completion and redirect to dashboard
                navigate('/dashboard');
              }}
              className="w-full bg-brand-green hover:bg-green-700 text-white px-6 py-3 rounded-[10px] text-[14px] font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <IconRocket className="w-5 h-5" /> Mulai Belajar — Modul 1: Cuaca Antariksa
            </button>
            <div className="text-center mt-3 text-[11px] text-brand-slate3">
              Data pre-test tersimpan otomatis dan tidak dapat diubah setelah ini.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
