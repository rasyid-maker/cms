import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Eye, 
  Building2, 
  ArrowRight,
  TrendingDown,
  Cpu
} from 'lucide-react';
import { CMSLogo } from './CMSLogo';

export const AboutSection: React.FC<{ onOpenPortal: () => void }> = ({ onOpenPortal }) => {
  const [activeValue, setActiveValue] = useState<number>(0);

  const coreValues = [
    {
      title: 'Digitalisasi Pelayanan',
      shortDesc: 'Peralihan penuh dari loket manual fisik ke sistem online berbasis cloud 24/7.',
      detail: 'Masyarakat dapat mengurus berkas kapan saja tanpa batasan jam kantor dinas, mengurangi antrean fisik di kantor kelurahan hingga 85%.',
      icon: Zap,
      accent: 'text-[#1677FF]',
      border: 'border-[#1677FF]/40',
      badge: 'Transformasi 100% Online',
    },
    {
      title: 'Efisiensi Administrasi',
      shortDesc: 'Otomatisasi pengolahan berkas, validasi data NIK, dan tanda tangan digital sah.',
      detail: 'Mengurangi beban kerja repetitif aparatur, memangkas biaya kertas dan arsip fisik, serta mempercepat durasi disposisi antar bagian.',
      icon: Layers,
      accent: 'text-emerald-400',
      border: 'border-emerald-500/40',
      badge: 'Hemat Biaya & Waktu',
    },
    {
      title: 'Transparansi Informasi',
      shortDesc: 'Jejak rekam audit proses yang terbuka dan dapat dipantau langsung oleh warga.',
      detail: 'Setiap permohonan memiliki nomor resi unik. Warga mengetahui secara pasti posisi berkas, petugas yang bertanggung jawab, dan estimasi waktu selesai.',
      icon: Eye,
      accent: 'text-[#E52535]',
      border: 'border-[#E52535]/40',
      badge: 'Bebas Pungli & Akuntabel',
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-[#071B3A] text-slate-100 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1677FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
              Tentang Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengenal CMS Lebih Dekat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            CMS merupakan platform digital yang dirancang untuk membantu instansi dan pengelola pelayanan masyarakat dalam mengoptimalkan proses administrasi, pengelolaan data, serta penyampaian informasi melalui sistem yang terintegrasi.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & 3 Core Values Interactive Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0B2D5C]/40 border border-slate-700/70 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-2">
                Fondasi Pelayanan Publik Masa Depan
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                CMS dirancang dengan standar arsitektur pemerintahan digital modern (SPBE), mengakomodasi kebutuhan pemerintahan desa, kelurahan, kecamatan, dinas kependudukan, hingga pengelola perumahan/komunitas rukun warga.
              </p>
            </div>

            {/* Three Core Values */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tiga Nilai Utama CMS
              </div>
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                const isSelected = activeValue === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveValue(idx)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-[#0B2D5C]/80 border-[#1677FF] shadow-lg shadow-blue-500/10'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl bg-slate-800 ${val.accent} shrink-0`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-white">
                            {idx + 1}. {val.title}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                            {val.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          {val.shortDesc}
                        </p>
                        {isSelected && (
                          <div className="mt-2.5 pt-2.5 border-t border-slate-700/60 text-xs text-slate-200 animate-in fade-in">
                            {val.detail}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action link */}
            <div className="pt-2">
              <button
                onClick={onOpenPortal}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1677FF] hover:text-blue-400 transition-colors"
              >
                <span>Lihat Simulasi Sistem & Uji Coba Langsung</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset + Tech Callouts */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-[#0B2D5C]">
              {/* Civic Public Service Image */}
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img
                  src="/src/assets/images/hero_public_service_1794132843345.jpg"
                  alt="Pusat Pelayanan Digital Masyarakat Modern CMS"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/30 to-transparent" />
              </div>

              {/* Bottom Overlay Info Box */}
              <div className="p-6 bg-[#071B3A] border-t border-slate-700/70 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1677FF]" />
                    <span className="text-xs font-bold text-white">Standar Pelayanan Prima</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Sertifikasi ISO 27001
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Penurunan Antrean:</span>
                    <span className="text-base font-bold text-emerald-400 font-mono tabular-nums">-85%</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Waktu Verifikasi:</span>
                    <span className="text-base font-bold text-[#1677FF] font-mono tabular-nums">&lt; 15 Menit</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 italic">
                  "Menghubungkan masyarakat dan birokrasi tanpa hambatan fisik dan transparansi tanpa celah."
                </p>
              </div>
            </div>

            {/* Floating Emblem Badge */}
            <div className="absolute -bottom-4 -left-4 p-3 bg-[#071B3A] border border-slate-600 rounded-2xl shadow-xl flex items-center gap-2.5">
              <CMSLogo size="sm" showText={false} />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Status CMS</span>
                <span className="text-xs font-bold text-white">Terhubung 100% Terintegrasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
