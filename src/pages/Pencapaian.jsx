import React from 'react';
import { IconAward, IconBolt, IconGlobe, IconMap, IconRocket, IconShield, IconTarget, IconTrophy } from '@tabler/icons-react';

export function Pencapaian() {
  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-4 fade-in font-sans">
      <div className="mb-4">
        <h1 className="text-lg md:text-xl font-extrabold text-brand-navy mb-1">Pencapaian</h1>
        <p className="text-xs md:text-sm text-brand-slate2">Raih lencana (badge) dengan menyelesaikan modul, simulasi, dan aktivitas Astromitigasi.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-brand-green/30 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/5 rounded-bl-full"></div>
          <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-3">
            <IconRocket className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-brand-navy mb-1">Petualang Antariksa</h3>
          <p className="text-[11px] text-brand-slate2 mb-4 leading-relaxed">Menyelesaikan onboarding Astromitigasi.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-brand-green/10 text-brand-green">
              ✓ Diraih
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-brand-green/30 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-green/5 rounded-bl-full"></div>
          <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-3">
            <IconTarget className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-brand-navy mb-1">Diagnostician</h3>
          <p className="text-[11px] text-brand-slate2 mb-4 leading-relaxed">Menyelesaikan pre-test pengetahuan NEO.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-brand-green/10 text-brand-green">
              ✓ Diraih
            </span>
          </div>
        </div>

        {/* Card 3 (Locked) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center opacity-80 relative overflow-hidden grayscale-[50%]">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
            <IconBolt className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-slate-700 mb-1">Pakar Cuaca Antariksa</h3>
          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Selesaikan Modul 1 Cuaca Antariksa.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 text-slate-600">
              🔒 Terkunci
            </span>
          </div>
        </div>

        {/* Card 4 (Locked) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center opacity-80 relative overflow-hidden grayscale-[50%]">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
            <IconGlobe className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-slate-700 mb-1">Asteroid Defender</h3>
          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Selesaikan Kalkulasi Tumbukan Asteroid.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 text-slate-600">
              🔒 Terkunci
            </span>
          </div>
        </div>

        {/* Card 5 (Locked) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center opacity-80 relative overflow-hidden grayscale-[50%]">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
            <IconShield className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-slate-700 mb-1">Debris Tracker</h3>
          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Pantau data Sampah Antariksa secara real-time.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 text-slate-600">
              🔒 Terkunci
            </span>
          </div>
        </div>

        {/* Card 6 (Locked) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center opacity-80 relative overflow-hidden grayscale-[50%]">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
            <IconTrophy className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-slate-700 mb-1">On Fire!</h3>
          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Belajar 7 hari berturut-turut.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 text-slate-600">
              🔒 Terkunci
            </span>
          </div>
        </div>

        {/* Card 7 (Locked) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center opacity-80 relative overflow-hidden grayscale-[50%]">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
            <IconMap className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-slate-700 mb-1">Mapper</h3>
          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">Simulasikan rute evakuasi Tsunami Tumbukan perdana.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 text-slate-600">
              🔒 Terkunci
            </span>
          </div>
        </div>

        {/* Card 8 (Locked) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col items-center text-center opacity-80 relative overflow-hidden grayscale-[50%]">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
            <IconAward className="w-7 h-7" />
          </div>
          <h3 className="text-sm font-bold text-slate-700 mb-1">Astromitigasi Literate</h3>
          <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">N-Gain ≥0.40 di semua modul.</p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 text-slate-600">
              🔒 Terkunci
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
