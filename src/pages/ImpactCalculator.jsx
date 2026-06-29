import React, { useState, useEffect } from 'react';
import { ShieldAlert, Activity, ArrowLeft, Wind, Flame, Mountain, Target, Database, Calculator, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AsteroidOrbitMap } from '../components/AsteroidOrbitMap';

export function ImpactCalculator() {
  const { neoData, fetchData, hasFetched, isLoading, impactParams, setImpactParams, impactResult, setImpactResult } = useStore();
  const [selectedNeo, setSelectedNeo] = useState('');
  
  const params = impactParams;
  const setParams = setImpactParams;
  const result = impactResult;
  const setResult = setImpactResult;
  
  const [isSimulating, setIsSimulating] = useState(false);
  const [showOrbitMap, setShowOrbitMap] = useState(true);
  const [zoomSide, setZoomSide] = useState(1);
  const [zoomTop, setZoomTop] = useState(1);
  const sideCanvasRef = React.useRef(null);
  const topCanvasRef = React.useRef(null);

  useEffect(() => {
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched, fetchData]);

  // Handle zooming via scroll wheel
  useEffect(() => {
    const side = sideCanvasRef.current;
    const top = topCanvasRef.current;
    
    if (!side || !top) return;
    
    const handleSideWheel = (e) => {
      e.preventDefault();
      setZoomSide(prev => Math.max(0.1, Math.min(e.deltaY > 0 ? prev * 1.1 : prev * 0.9, 10)));
    };
    
    const handleTopWheel = (e) => {
      e.preventDefault();
      setZoomTop(prev => Math.max(0.1, Math.min(e.deltaY > 0 ? prev * 1.1 : prev * 0.9, 10)));
    };
    
    side.addEventListener('wheel', handleSideWheel, { passive: false });
    top.addEventListener('wheel', handleTopWheel, { passive: false });
    
    return () => {
      side.removeEventListener('wheel', handleSideWheel);
      top.removeEventListener('wheel', handleTopWheel);
    };
  }, [result]);

  useEffect(() => {
    if (!result || !sideCanvasRef.current || !topCanvasRef.current) return;

    const sideCanvas = sideCanvasRef.current;
    const topCanvas = topCanvasRef.current;
    
    const baseW = 1000;
    const baseH = 562;
    const dpr = window.devicePixelRatio || 1;
    
    sideCanvas.width = baseW * dpr;
    sideCanvas.height = baseH * dpr;
    topCanvas.width = baseW * dpr;
    topCanvas.height = baseH * dpr;
    
    const sideCtx = sideCanvas.getContext('2d');
    const topCtx = topCanvas.getContext('2d');
    
    sideCtx.scale(dpr, dpr);
    topCtx.scale(dpr, dpr);
    
    const craterDiameterKm = result.crater_diameter_m / 1000;
    const d = params.diameter_m;

    sideCtx.clearRect(0, 0, baseW, baseH);
    topCtx.clearRect(0, 0, baseW, baseH);
    
    // --- 1. Draw Side View ---
    const scaleViewKm = Math.max(2, craterDiameterKm * 2.5) * zoomSide; // 2.5x the crater width
    const pixelsPerKm = baseW / scaleViewKm;
    const groundY = baseH / 2 + 50; 
    
    // Background and ground
    sideCtx.fillStyle = '#0f172a';
    sideCtx.fillRect(0, 0, baseW, baseH);
    
    sideCtx.fillStyle = '#334155'; // Original Ground color
    sideCtx.fillRect(0, groundY, baseW, baseH - groundY);
    
    sideCtx.strokeStyle = '#475569'; // Original ground line
    sideCtx.lineWidth = 4;
    sideCtx.beginPath();
    sideCtx.moveTo(0, groundY);
    sideCtx.lineTo(baseW, groundY);
    sideCtx.stroke();
    
    // Distance markers
    sideCtx.fillStyle = '#94a3b8'; // Original color
    sideCtx.font = '14px Arial'; // Original font
    sideCtx.textAlign = 'center';
    const step = scaleViewKm > 50 ? 20 : (scaleViewKm > 10 ? 5 : 1);
    for(let i=-Math.floor(scaleViewKm/2); i<=Math.floor(scaleViewKm/2); i+=step) {
        let px = (baseW / 2) + (i * pixelsPerKm);
        sideCtx.beginPath();
        sideCtx.moveTo(px, groundY - 5);
        sideCtx.lineTo(px, groundY + 5);
        sideCtx.strokeStyle = '#94a3b8';
        sideCtx.lineWidth = 2;
        sideCtx.stroke();
        if(i !== 0) sideCtx.fillText(Math.abs(i) + 'km', px, groundY + 25);
    }
    
    // Scale reference objects
    if (scaleViewKm < 15) {
        const bWidth = 0.1 * pixelsPerKm;
        const bHeight = 0.5 * pixelsPerKm;
        sideCtx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        sideCtx.fillRect(baseW/2 - (craterDiameterKm/2 * pixelsPerKm) - bWidth*3, groundY - bHeight, bWidth, bHeight);
        sideCtx.fillStyle = '#94a3b8';
        sideCtx.fillText('Gedung 500m', baseW/2 - (craterDiameterKm/2 * pixelsPerKm) - bWidth*3, groundY - bHeight - 10);
    } else {
        const mWidth = 10 * pixelsPerKm;
        const mHeight = 8 * pixelsPerKm;
        sideCtx.beginPath();
        sideCtx.moveTo(baseW/2 - (craterDiameterKm/2 * pixelsPerKm) - mWidth, groundY);
        sideCtx.lineTo(baseW/2 - (craterDiameterKm/2 * pixelsPerKm) - mWidth/2, groundY - mHeight);
        sideCtx.lineTo(baseW/2 - (craterDiameterKm/2 * pixelsPerKm), groundY);
        sideCtx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        sideCtx.fill();
        sideCtx.fillStyle = '#94a3b8';
        sideCtx.fillText('Gunung 8km', baseW/2 - (craterDiameterKm/2 * pixelsPerKm) - mWidth/2, groundY - mHeight - 10);
    }

    // Crater bowl
    const craterRadiusPx = (craterDiameterKm / 2) * pixelsPerKm;
    sideCtx.beginPath();
    sideCtx.arc(baseW / 2, groundY, craterRadiusPx, 0, Math.PI, false);
    sideCtx.fillStyle = '#0f172a'; // Match background
    sideCtx.fill();
    sideCtx.strokeStyle = '#ef4444';
    sideCtx.lineWidth = 3;
    sideCtx.stroke();
    
    // Asteroid object
    const astRadiusPx = (d / 1000 / 2) * pixelsPerKm;
    const drawAstRadius = Math.max(astRadiusPx, 3);
    sideCtx.beginPath();
    sideCtx.arc(baseW / 2, groundY - 60, drawAstRadius, 0, Math.PI * 2);
    sideCtx.fillStyle = '#f59e0b';
    sideCtx.fill();
    
    // Impact trail
    sideCtx.beginPath();
    sideCtx.moveTo(baseW / 2, groundY - 60 - drawAstRadius);
    sideCtx.lineTo(baseW / 2, groundY - 60 - drawAstRadius - 50); // Original straight line
    sideCtx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    sideCtx.lineWidth = Math.max(astRadiusPx * 1.5, 4);
    sideCtx.stroke();

    // --- 2. Draw Top-Down View ---
    const thermalRadiusKm = result.thermal_radius_km || (craterDiameterKm * 2); // fallback if not present
    const topScaleKm = Math.max(10, thermalRadiusKm * 1.5) * zoomTop;
    const topPxPerKm = baseH / topScaleKm;
    const centerX = baseW / 2;
    const centerY = baseH / 2;
    
    // Background for top-down
    topCtx.fillStyle = '#0f172a';
    topCtx.fillRect(0, 0, baseW, baseH);

    topCtx.lineWidth = 1;
    const topGridStep = topScaleKm > 50 ? 20 : (topScaleKm > 10 ? 5 : 1);
    const gridStepPx = topGridStep * topPxPerKm;
    
    topCtx.fillStyle = '#94a3b8'; // Original color
    topCtx.font = '12px Arial'; // Original font
    
    for (let i=0; i<baseW/2; i+=gridStepPx) {
        topCtx.beginPath(); topCtx.moveTo(centerX + i, 0); topCtx.lineTo(centerX + i, baseH);
        topCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)'; topCtx.stroke(); // Original opacity
        if (i > 0) {
            topCtx.textAlign = 'left';
            topCtx.fillText(`${(i/topPxPerKm).toFixed(0)}km`, centerX + i + 4, centerY + 14);
        }
        
        topCtx.beginPath(); topCtx.moveTo(centerX - i, 0); topCtx.lineTo(centerX - i, baseH);
        topCtx.stroke();
        if (i > 0) {
            topCtx.textAlign = 'right';
            topCtx.fillText(`-${(i/topPxPerKm).toFixed(0)}km`, centerX - i - 4, centerY + 14);
        }
    }
    for (let i=0; i<baseH/2; i+=gridStepPx) {
        topCtx.beginPath(); topCtx.moveTo(0, centerY + i); topCtx.lineTo(baseW, centerY + i);
        topCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)'; topCtx.stroke();
        if (i > 0) {
            topCtx.textAlign = 'left';
            topCtx.fillText(`${(i/topPxPerKm).toFixed(0)}km`, centerX + 4, centerY + i - 4);
        }
        
        topCtx.beginPath(); topCtx.moveTo(0, centerY - i); topCtx.lineTo(baseW, centerY - i);
        topCtx.stroke();
        if (i > 0) {
            topCtx.textAlign = 'left';
            topCtx.fillText(`-${(i/topPxPerKm).toFixed(0)}km`, centerX + 4, centerY - i - 4);
        }
    }

    // Radius Termal
    topCtx.beginPath();
    topCtx.arc(centerX, centerY, thermalRadiusKm * topPxPerKm, 0, Math.PI * 2);
    topCtx.fillStyle = 'rgba(239, 68, 68, 0.15)'; // Original opacity
    topCtx.fill();
    topCtx.strokeStyle = 'rgba(239, 68, 68, 0.8)';
    // Original did not have dashed line
    topCtx.stroke();
    
    // Kawah
    topCtx.beginPath();
    topCtx.arc(centerX, centerY, (craterDiameterKm/2) * topPxPerKm, 0, Math.PI * 2);
    topCtx.fillStyle = '#0f172a'; // Original dark
    topCtx.fill();
    topCtx.strokeStyle = '#f59e0b';
    topCtx.lineWidth = 2;
    topCtx.stroke();
    
    // Ground Zero point
    topCtx.beginPath();
    topCtx.arc(centerX, centerY, 4, 0, Math.PI * 2); // Original size 4
    topCtx.fillStyle = '#fff';
    topCtx.fill();
    
    // Labels
    topCtx.fillStyle = '#f8fafc';
    topCtx.font = '14px Arial'; // Original font & size
    topCtx.textAlign = 'center';
    topCtx.fillText('Radius Termal', centerX, centerY - (thermalRadiusKm * topPxPerKm) - 10);
    topCtx.fillStyle = '#f59e0b';
    topCtx.fillText('Zona Kawah', centerX, centerY - (craterDiameterKm/2 * topPxPerKm) + 20);

  }, [result, params.diameter_m, zoomSide, zoomTop]);

  const handleNeoChange = (e) => {
    const neoId = e.target.value;
    setSelectedNeo(neoId);
    if (neoId) {
      const neo = neoData.find(n => n.id === neoId);
      if (neo) {
        setParams(prev => ({
          ...prev,
          diameter_m: Math.round(neo.diameterMax),
          velocity_kms: Math.round(neo.velocity)
        }));
        toast.success(`Data disalin dari ${neo.name}`);
      }
    }
  };

  const runSimulation = async () => {
    setIsSimulating(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const res = await axios.post(`${apiUrl}/api/simulate/impact`, params);
      setResult(res.data);
      toast.success('Simulasi berhasil dijalankan!');
    } catch (err) {
      toast.error('Gagal menghubungi backend simulasi');
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-bg p-4 md:p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-4 fade-in">
        
        {/* Header like topbar */}
        <div className="flex items-center gap-4 mb-4 bg-white border border-brand-border rounded-xl p-4 shadow-sm">
          <Link to="/#modul" className="w-8 h-8 rounded border border-brand-border flex items-center justify-center text-brand-slate hover:bg-brand-bg hover:text-brand-navy transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-sm font-bold text-brand-navy uppercase tracking-wide">Kalkulator Efek Tumbukan</h1>
            <p className="text-[11px] text-brand-slate2">Model Fisika C. Rumpf (2018) & G. Collins (2005)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Input Panel */}
          <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-sm h-fit">
            <h2 className="text-[11px] font-bold text-brand-slate uppercase tracking-wide mb-4 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-brand-blue" /> Parameter Bencana
            </h2>
            
            <div className="space-y-4">
              {/* CNEOS Dropdown */}
              <div className="p-3 bg-brand-blueLt border border-brand-blueBd rounded-xl">
                <label className="flex items-center gap-1 text-[11px] font-bold text-brand-blue mb-1">
                  <Database className="w-3 h-3" /> Ambil Data Real-time (CNEOS NASA)
                </label>
                <select 
                  className="w-full text-xs p-2 rounded-lg border border-brand-blueBd bg-white text-brand-navy"
                  value={selectedNeo}
                  onChange={handleNeoChange}
                >
                  <option value="">-- Pilih Asteroid Mendekat --</option>
                  {neoData.map(neo => (
                     <option key={neo.id} value={neo.id}>
                        {neo.name} ({neo.diameterMax.toFixed(0)}m - {neo.velocity.toFixed(1)} km/s)
                     </option>
                  ))}
                </select>
                {isLoading && <div className="text-[10px] text-brand-blue mt-1">Mengambil data...</div>}
              </div>

              <div>
                <label className="flex justify-between text-[11px] font-semibold text-brand-slate mb-1">
                  <span>Diameter Asteroid</span>
                  <span className="text-brand-blue font-bold">{params.diameter_m} m</span>
                </label>
                <input 
                  type="range" min="10" max="1000" step="10"
                  value={params.diameter_m}
                  onChange={(e) => setParams({...params, diameter_m: Number(e.target.value)})}
                  className="w-full accent-brand-blue"
                />
              </div>

              <div>
                <label className="flex justify-between text-[11px] font-semibold text-brand-slate mb-1">
                  <span>Kecepatan Jatuh</span>
                  <span className="text-brand-red font-bold">{params.velocity_kms} km/s</span>
                </label>
                <input 
                  type="range" min="11" max="72" step="1"
                  value={params.velocity_kms}
                  onChange={(e) => setParams({...params, velocity_kms: Number(e.target.value)})}
                  className="w-full accent-brand-red"
                />
              </div>

              <div>
                <label className="flex justify-between text-[11px] font-semibold text-brand-slate mb-1">
                  <span>Jarak Anda (Pengamat)</span>
                  <span className="text-brand-green font-bold">{params.distance_km} km</span>
                </label>
                <input 
                  type="range" min="1" max="200" step="1"
                  value={params.distance_km}
                  onChange={(e) => setParams({...params, distance_km: Number(e.target.value)})}
                  className="w-full accent-brand-green"
                />
              </div>
              
              <button 
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-xs font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(239,68,68,0.39)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.23)] disabled:opacity-50 hover:-translate-y-0.5"
              >
                <Calculator className="w-4 h-4" />
                {isSimulating ? 'Menghitung Fisika...' : 'Jalankan Simulasi'}
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-4">
            
            {!result ? (
               <div className="bg-white rounded-2xl border border-brand-border p-10 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                 <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center text-brand-slate2 mb-4">
                    <Activity className="w-8 h-8" />
                 </div>
                 <div className="text-sm font-bold text-brand-navy mb-1">Belum Ada Hasil Simulasi</div>
                 <div className="text-xs text-brand-slate">Atur parameter di sebelah kiri dan klik "Jalankan Simulasi" untuk melihat dampak yang dihasilkan.</div>
               </div>
            ) : (
              <>
              <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-brand-border">
                  <h2 className="text-[11px] font-bold text-brand-slate uppercase tracking-wide flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> Kerentanan Fisik
                  </h2>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                    result.max_fatality_pct > 50 ? 'bg-brand-redLt text-brand-red border-red-200' :
                    result.max_fatality_pct > 10 ? 'bg-brand-orangeLt text-brand-orange border-orange-200' :
                    'bg-brand-greenLt text-brand-green border-green-200'
                  }`}>
                    Risiko Fatalitas Maks: {result.max_fatality_pct.toFixed(1)}%
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Seismic */}
                  <div className="p-4 rounded-xl border border-brand-border flex gap-3 items-start bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-orangeLt text-brand-orange flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-slate uppercase mb-1">Seismic Shock</div>
                      <div className="text-lg font-black text-brand-navy leading-none">M {result.eff_mag.toFixed(1)}</div>
                      <div className="text-[10px] text-brand-orange font-bold mt-1">Fatalitas: {result.vuln_seismic_pct.toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Wind */}
                  <div className="p-4 rounded-xl border border-brand-border flex gap-3 items-start bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-blueLt text-brand-blue flex items-center justify-center shrink-0">
                      <Wind className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-slate uppercase mb-1">Angin Kencang</div>
                      <div className="text-lg font-black text-brand-navy leading-none">{result.v_wind_ms.toFixed(0)} <span className="text-xs font-normal">m/s</span></div>
                      <div className="text-[10px] text-brand-blue font-bold mt-1">Fatalitas: {result.vuln_wind_pct.toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Thermal */}
                  <div className="p-4 rounded-xl border border-brand-border flex gap-3 items-start bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-redLt text-brand-red flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-slate uppercase mb-1">Radiasi Panas</div>
                      <div className="text-lg font-black text-brand-navy leading-none">{(result.thermal_radiation_jm2/1000).toFixed(0)} <span className="text-xs font-normal">kJ/m²</span></div>
                      <div className="text-[10px] text-brand-red font-bold mt-1">Fatalitas: {result.vuln_thermal_pct.toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Pressure */}
                  <div className="p-4 rounded-xl border border-brand-border flex gap-3 items-start bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-purpleLt text-brand-purple flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-slate uppercase mb-1">Overpressure</div>
                      <div className="text-lg font-black text-brand-navy leading-none">{(result.overpressure_pa/1000).toFixed(1)} <span className="text-xs font-normal">kPa</span></div>
                      <div className="text-[10px] text-brand-purple font-bold mt-1">Fatalitas: {result.vuln_pressure_pct.toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Crater */}
                  <div className="p-4 rounded-xl border border-brand-border flex gap-3 items-start bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-slate uppercase mb-1">Kawah Utama</div>
                      <div className="text-lg font-black text-brand-navy leading-none">{result.crater_diameter_m.toFixed(0)} <span className="text-xs font-normal">m</span></div>
                      <div className="text-[10px] text-slate-600 font-bold mt-1">Fatalitas: {result.vuln_crater_pct.toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Ejecta */}
                  <div className="p-4 rounded-xl border border-brand-border flex gap-3 items-start bg-white shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                      <Mountain className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-brand-slate uppercase mb-1">Tebal Ejecta</div>
                      <div className="text-lg font-black text-brand-navy leading-none">{result.ejecta_thickness_m > 1 ? result.ejecta_thickness_m.toFixed(1) : result.ejecta_thickness_m.toFixed(3)} <span className="text-xs font-normal">m</span></div>
                      <div className="text-[10px] text-yellow-600 font-bold mt-1">Fatalitas: {result.vuln_ejecta_pct.toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border border-[#FDE68A] rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <Mountain className="w-10 h-10 text-[#92400E] shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-[#92400E] uppercase mb-1">Estimasi Kawah (Radius Tumbukan)</h3>
                  <div className="text-xs text-[#92400E] leading-relaxed">
                    Tumbukan ini menghasilkan energi <strong>{result.energy_megatons.toFixed(2)} Megaton TNT</strong> dan menciptakan kawah selebar <strong>{(result.crater_diameter_m).toFixed(0)} meter</strong>. Ketebalan lontaran material (ejecta) di lokasi pengamat diperkirakan <strong>{result.ejecta_thickness_m > 1 ? result.ejecta_thickness_m.toFixed(1) : result.ejecta_thickness_m.toFixed(3)} meter</strong>.
                  </div>
                </div>
              </div>

              {/* 3D Orbit Map is now here in the right column */}
              <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-sm mt-4">
                 <div className="flex items-center justify-between mb-4">
                   <h2 className="text-xs font-bold text-brand-navy uppercase flex items-center gap-2">
                     Orbit & Sistem Tata Surya 3D
                   </h2>
                   <button 
                     onClick={() => setShowOrbitMap(!showOrbitMap)}
                     className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-slate hover:text-brand-navy transition-colors bg-slate-50 px-2 py-1 rounded-md border border-brand-border"
                   >
                     {showOrbitMap ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                     {showOrbitMap ? 'Sembunyikan' : 'Tampilkan'}
                   </button>
                 </div>
                 
                 <div className={`transition-all duration-300 ease-in-out origin-top ${showOrbitMap ? 'opacity-100 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
                   {/* Wrapping in a container with specific height so it fits well in the column */}
                   <div className="h-[350px]">
                     <AsteroidOrbitMap neoData={neoData} />
                   </div>
                 </div>
              </div>
              </>
            )}

          </div>
        </div>
        
        {/* 2D Canvas Simulation moved to bottom for larger view */}
        {result && (
          <div className="mt-8">
            <h2 className="text-sm font-bold text-brand-navy mb-4 flex items-center gap-2">
              Visualisasi Dampak (2D Canvas)
              <span className="text-xs font-normal text-brand-slate ml-2">(Scroll pada area gambar untuk Zoom)</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-sm">
                <h3 className="text-xs font-bold text-brand-slate uppercase tracking-wide mb-4 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-brand-orange" /> Tampak Samping (Skala Ketinggian)
                </h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-brand-bg relative border border-slate-200">
                  <canvas ref={sideCanvasRef} width={1000} height={562} className="w-full h-full object-contain" />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl border border-brand-border p-5 shadow-sm">
                <h3 className="text-xs font-bold text-brand-slate uppercase tracking-wide mb-4 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-brand-red" /> Tampak Atas (Radius Dampak)
                </h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-brand-bg relative border border-slate-200">
                  <canvas ref={topCanvasRef} width={1000} height={562} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
