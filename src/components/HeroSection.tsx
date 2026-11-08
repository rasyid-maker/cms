import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Search, 
  Activity, 
  FileText, 
  Bell, 
  Users, 
  Layers, 
  Smartphone,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { CMSLogo } from './CMSLogo';

interface HeroSectionProps {
  onOpenPortal: () => void;
  onOpenTracking: (ticketId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPortal,
  onOpenTracking,
}) => {
  const [quickTicketInput, setQuickTicketInput] = useState('');

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickTicketInput.trim()) {
      onOpenTracking(quickTicketInput.trim());
    } else {
      onOpenTracking('CMS-2026-0812');
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#071B3A] via-[#0B2D5C] to-[#071B3A]"
    >
      {/* Background Geometric Network Grid & Digital Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1677FF]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#E52535]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Kicker Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E52535]"></span>
            <span className="font-semibold text-white">CMS</span>
            <span className="text-slate-500">·</span>
            <span>Chepi Multi System</span>
          </div>
        </div>

        {/* Main Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            Transformasi Digital Pelayanan Masyarakat dalam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-[#1677FF] to-blue-200">
              Satu Platform.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto text-balance">
            CMS hadir sebagai solusi digital terintegrasi untuk mempermudah pengelolaan administrasi, meningkatkan kualitas pelayanan, dan membangun komunikasi yang lebih efektif antara masyarakat dan penyelenggara layanan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href="#layanan"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#071B3A] hover:bg-slate-100 active:scale-95 rounded-xl font-bold text-sm transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
            >
              <span>Jelajahi Layanan</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenPortal}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E52535] hover:bg-red-600 active:scale-95 text-white rounded-xl font-bold text-sm transition-all shadow-xl shadow-red-500/25 flex items-center justify-center gap-2"
            >
              <span>Masuk Aplikasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Indicators Bar */}
          <div className="pt-8 pb-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-300 border-y border-slate-700/50 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#1677FF]" />
              <span className="font-semibold text-white">Pelayanan Lebih Cepat</span>
              <span className="text-slate-400">(Rata-rata 15 Menit)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-white">Administrasi Terintegrasi</span>
              <span className="text-slate-400">(TTE BSrE)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E52535]" />
              <span className="font-semibold text-white">Informasi Transparan</span>
              <span className="text-slate-400">(Audit Trail 24/7)</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL SHOWCASE: Desktop Dashboard Mockup + Smartphone Mockup + Floating Activity Cards */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          {/* Main Desktop Dashboard Container with Glassmorphism Border */}
          <div className="relative rounded-2xl bg-[#0B2D5C]/80 border border-slate-600/70 shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl">
            {/* Window Top Chrome Bar */}
            <div className="px-4 py-3 bg-[#071B3A] border-b border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E52535]"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  cms.pelayanan.go.id/portal-terpadu
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Sistem Operasional Aktif
                </span>
                <CMSLogo size="sm" showText={false} />
              </div>
            </div>

            {/* Mockup Dashboard Content Grid */}
            <div className="p-4 sm:p-6 bg-gradient-to-b from-[#071B3A]/90 to-[#0B2D5C]/90">
              {/* Dashboard Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/60">
                <div>
                  <span className="text-xs text-slate-400">Pusat Komando Pelayanan Terpadu</span>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Ringkasan Pelayanan Masyarakat Terpadu</span>
                    <span className="text-xs bg-[#1677FF]/20 text-[#1677FF] px-2 py-0.5 rounded font-mono">
                      Hari Ini
                    </span>
                  </h3>
                </div>

                {/* Quick Track Input in Mockup */}
                <form onSubmit={handleQuickTrack} className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cek Tiket (cth: CMS-2026-0812)"
                      value={quickTicketInput}
                      onChange={e => setQuickTicketInput(e.target.value)}
                      className="px-3 py-1.5 bg-[#071B3A] border border-slate-600 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#1677FF] font-mono w-48 sm:w-56"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#1677FF] hover:bg-blue-600 text-white rounded-lg text-xs font-medium flex items-center gap-1 transition-colors shrink-0 shadow-sm"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Lacak</span>
                  </button>
                </form>
              </div>

              {/* 4 Stat Cards Grid inside Mockup */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5">
                <div className="p-3.5 rounded-xl bg-[#071B3A]/80 border border-slate-700/60">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Total Pengguna</span>
                    <Users className="w-4 h-4 text-[#1677FF]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                    24,850
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12.4% bulan ini</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071B3A]/80 border border-slate-700/60">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Permohonan Masuk</span>
                    <FileText className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                    4,920
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    48 sedang diproses
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071B3A]/80 border border-slate-700/60">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Permohonan Selesai</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
                    4,872
                  </div>
                  <div className="text-[11px] text-emerald-400/90 mt-1">
                    Tingkat Sukses 99.0%
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#071B3A]/80 border border-slate-700/60">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Kepuasan Warga</span>
                    <Activity className="w-4 h-4 text-[#E52535]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                    98.6%
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    SLA rata-rata 12 menit
                  </div>
                </div>
              </div>

              {/* Graphic Activity Mini Bars & Live Table Preview */}
              <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Volume Graph Simulation */}
                <div className="lg:col-span-2 p-4 rounded-xl bg-[#071B3A]/80 border border-slate-700/60">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-200">
                      Volume Permohonan Pelayanan (Mingguan)
                    </span>
                    <span className="text-[11px] text-[#1677FF] font-mono">
                      Senin - Minggu
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-28 pt-4 border-b border-slate-700/60">
                    {[
                      { day: 'Sen', val: 78, num: 340 },
                      { day: 'Sel', val: 92, num: 410 },
                      { day: 'Rab', val: 85, num: 380 },
                      { day: 'Kam', val: 96, num: 450 },
                      { day: 'Jum', val: 80, num: 360 },
                      { day: 'Sab', val: 45, num: 180 },
                      { day: 'Min', val: 30, num: 120 },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                        <div className="w-full max-w-[36px] bg-slate-800 rounded-t-md overflow-hidden h-20 flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-[#0B2D5C] to-[#1677FF] rounded-t-md group-hover:from-[#1677FF] group-hover:to-blue-400 transition-all duration-300"
                            style={{ height: `${bar.val}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                    <span>Puncak Pengajuan: Kamis (09:00 - 11:30 WIB)</span>
                    <span className="text-emerald-400 font-medium">Beban Server 24% Normal</span>
                  </div>
                </div>

                {/* Service Types Breakdown */}
                <div className="p-4 rounded-xl bg-[#071B3A]/80 border border-slate-700/60 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block mb-3">
                      Komposisi Layanan Teratas
                    </span>
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>Surat Kependudukan</span>
                          <span className="font-mono text-white">46%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#1677FF] rounded-full w-[46%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>Pengaduan Prasarana</span>
                          <span className="font-mono text-white">28%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#E52535] rounded-full w-[28%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>Bansos & Rekomendasi</span>
                          <span className="font-mono text-white">18%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full w-[18%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>Informasi Publik</span>
                          <span className="font-mono text-white">8%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full w-[8%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenPortal}
                    className="mt-3 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors font-medium flex items-center justify-center gap-1.5"
                  >
                    <span>Buka Panel Petugas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 1: Live Processed Document (Left Top) */}
          <div className="hidden md:flex absolute -top-6 -left-8 p-3.5 rounded-2xl bg-[#071B3A]/95 border border-slate-600/80 shadow-2xl backdrop-blur-xl max-w-xs items-center gap-3 animate-bounce [animation-duration:5s]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-emerald-400">Selesai Diproses</span>
                <span className="text-[10px] text-slate-400">· 2 menit lalu</span>
              </div>
              <div className="text-xs font-semibold text-white truncate">
                Surat Keterangan Domisili
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Resi: CMS-2026-0812 (TTE Sah)
              </div>
            </div>
          </div>

          {/* Floating Card 2: Smartphone View Mockup (Right Bottom) */}
          <div className="hidden lg:flex absolute -bottom-8 -right-8 w-60 rounded-3xl bg-[#071B3A] border-4 border-slate-700 shadow-2xl overflow-hidden p-3 flex-col gap-2">
            <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto" />
            <div className="flex items-center justify-between px-1">
              <CMSLogo size="sm" showText={false} />
              <span className="text-[9px] font-mono text-slate-400">Aplikasi Warga</span>
            </div>
            <div className="p-2.5 bg-[#0B2D5C]/70 rounded-xl border border-slate-600/60 text-[11px] space-y-1">
              <span className="text-slate-400 text-[10px] block">Layanan Tercepat</span>
              <span className="font-bold text-white block">Buat Surat Pengantar</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <Zap className="w-2.5 h-2.5" /> Siap dalam 15 menit
              </span>
            </div>
            <div className="p-2 bg-slate-900/60 rounded-xl border border-slate-800 text-[10px] flex items-center justify-between text-slate-300">
              <span>Status Aduan Lampu</span>
              <span className="text-blue-400 font-semibold">Ditindak</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
