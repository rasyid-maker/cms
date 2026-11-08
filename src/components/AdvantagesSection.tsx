import React from 'react';
import { 
  Zap, 
  Clock, 
  Cpu, 
  Database, 
  Eye, 
  Smile, 
  Smartphone, 
  TrendingUp,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { ADVANTAGES_LIST } from '../data/mockData';

export const AdvantagesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#1677FF]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#E52535]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#1677FF]" />;
    }
  };

  return (
    <section id="keunggulan" className="py-24 bg-[#071B3A] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
              Nilai Tambah & Efisiensi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Memilih CMS?
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Didesain khusus untuk menjawab tantangan birokrasi konvensional, meningkatkan indeks kepuasan masyarakat, dan menciptakan tata kelola administrasi yang akuntabel.
          </p>
        </div>

        {/* 8 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVANTAGES_LIST.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0B2D5C]/40 border border-slate-700/70 hover:border-slate-500 hover:bg-[#0B2D5C]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Metric Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(adv.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800 tabular-nums">
                    {adv.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {adv.desc}
                </p>
              </div>

              {/* Bottom Subtle Context */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>{adv.metricLabel}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Comparison Matrix Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B2D5C] via-[#071B3A] to-[#0B2D5C] border border-slate-700/80 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-700/80">
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Waktu Tunggu Berkas
              </span>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-3xl font-extrabold text-white font-mono tabular-nums">15 Menit</span>
                <span className="text-xs text-emerald-400 font-semibold">vs 3 Hari Manual</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Verifikasi digital instan menghilangkan penumpukan berkas di meja petugas.
              </p>
            </div>

            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Kepatuhan Dokumen Sah (TTE)
              </span>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-3xl font-extrabold text-white font-mono tabular-nums">100% Sah</span>
                <span className="text-xs text-[#1677FF] font-semibold">Standar BSrE BSSN</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                QR Code validasi keaslian dokumen dapat dipindai instansi mana pun.
              </p>
            </div>

            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Tingkat Kepuasan Publik
              </span>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">98.6%</span>
                <span className="text-xs text-slate-400">Survei 24,000+ Warga</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Transparansi status menghilangkan kecurigaan pungutan liar dan ketidakpastian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
