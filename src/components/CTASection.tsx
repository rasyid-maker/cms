import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { CMSLogo } from './CMSLogo';

interface CTASectionProps {
  onOpenPortal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenPortal }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#071B3A] via-[#0B2D5C] to-[#071B3A] text-slate-100 border-y border-slate-700/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E52535]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1677FF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0B2D5C]/80 to-[#071B3A]/90 border border-slate-600/70 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle logo watermark pattern in background */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <CMSLogo size="xl" showText={false} />
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#E52535]"></span>
              <span>Siap Diimplementasikan di Seluruh Indonesia</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Mulai Transformasi Pelayanan Masyarakat Bersama CMS.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Optimalkan pengelolaan pelayanan dan administrasi masyarakat melalui solusi digital yang modern, mudah, dan terintegrasi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onOpenPortal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#E52535] hover:bg-red-600 active:scale-95 text-white font-bold text-sm rounded-xl transition-all shadow-xl shadow-red-500/25 flex items-center justify-center gap-2"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#kontak"
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white font-semibold text-sm rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#1677FF]" />
                <span>Hubungi Kami</span>
              </a>
            </div>

            {/* Key benefits list */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Implementasi Cepat 3-7 Hari</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pendampingan Teknis Penuh 30 Hari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
