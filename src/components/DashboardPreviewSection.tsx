import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Activity, 
  Search, 
  Filter, 
  ArrowUpRight, 
  TrendingUp, 
  BarChart3, 
  Layers, 
  Monitor, 
  ShieldCheck,
  ChevronRight,
  RefreshCw,
  Eye
} from 'lucide-react';
import { CMSLogo } from './CMSLogo';
import { SAMPLE_TICKETS } from '../data/mockData';

interface DashboardPreviewProps {
  onOpenTracking: (ticketId: string) => void;
  onOpenPortal: () => void;
}

export const DashboardPreviewSection: React.FC<DashboardPreviewProps> = ({
  onOpenTracking,
  onOpenPortal,
}) => {
  const [activeTimeframe, setActiveTimeframe] = useState<'today' | 'week' | 'month' | 'year'>('month');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'software' | 'command_center'>('software');

  // Realistic sample rows for recent requests
  const recentRequests = [
    {
      id: 'CMS-2026-0812',
      name: 'Rian Pratama',
      service: 'Surat Keterangan Domisili Usaha',
      date: '08 Nov 2026, 08:30',
      status: 'Selesai',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      officer: 'Hendra Setiawan, S.AP',
      timeSpent: '14 Menit',
    },
    {
      id: 'CMS-2026-0491',
      name: 'Siti Nurhaliza',
      service: 'Pengaduan: Lampu Penerangan Jalan Rusak',
      date: '07 Nov 2026, 19:40',
      status: 'Diproses',
      badgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      officer: 'Bambang Trianto (Teknisi)',
      timeSpent: 'Dalam Pengerjaan',
    },
    {
      id: 'CMS-2026-0335',
      name: 'Dedi Kurniawan',
      service: 'Surat Pengantar Pembuatan SKCK',
      date: '08 Nov 2026, 09:05',
      status: 'Menunggu Verifikasi',
      badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      officer: 'Maya Anggraini, S.Kom',
      timeSpent: 'Antrean Ke-2',
    },
    {
      id: 'CMS-2026-0219',
      name: 'Anisa Rahmawati',
      service: 'Permohonan Akta Kelahiran Baru',
      date: '08 Nov 2026, 07:15',
      status: 'Selesai',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      officer: 'Agus Wardhana, S.IP',
      timeSpent: '18 Menit',
    },
    {
      id: 'CMS-2026-0184',
      name: 'Budi Santoso',
      service: 'Laporan Saluran Drainase Tersumbat',
      date: '06 Nov 2026, 14:10',
      status: 'Selesai',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      officer: 'Tim Reaksi Cepat PU',
      timeSpent: '1 Hari 2 Jam',
    },
  ];

  const filteredRequests = recentRequests.filter(req => {
    const matchesStatus = filterStatus === 'all' || req.status === filterStatus;
    const matchesSearch = 
      req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <section id="dashboard" className="py-24 bg-[#071B3A] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
              Executive Command & Monitoring
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kelola Pelayanan dalam Satu Dashboard
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Visibilitas penuh terhadap setiap permohonan, performa kecepatan penanganan petugas, serta indeks kepuasan warga secara real-time.
          </p>

          {/* Toggle View Mode: UI Software vs Command Center */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="p-1 bg-[#0B2D5C]/60 rounded-xl border border-slate-700/80 inline-flex">
              <button
                onClick={() => setViewMode('software')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'software'
                    ? 'bg-[#1677FF] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Antarmuka Dashboard CMS</span>
              </button>
              <button
                onClick={() => setViewMode('command_center')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'command_center'
                    ? 'bg-[#E52535] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Command Center Fisik</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Physical Command Center Photo Showcase */}
        {viewMode === 'command_center' && (
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0B2D5C] mb-8 animate-in fade-in duration-300">
            <div className="aspect-[16/9] w-full relative">
              <img
                src="/src/assets/images/cms_command_center_1794132843562.jpg"
                alt="Command Center Digital CMS"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/40 to-transparent" />
            </div>
            <div className="p-6 bg-[#071B3A] border-t border-slate-700/70 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Pusat Kendali Operasi Pelayanan Terpadu</span>
                  <span className="text-[10px] bg-[#1677FF]/20 text-[#1677FF] px-2 py-0.5 rounded border border-[#1677FF]/30 font-mono">
                    Live Operational Hub
                  </span>
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  Foto representasi ruang kendali operasional dinas/pemerintahan yang memanfaatkan platform CMS untuk memantau ratusan kelurahan secara terpusat.
                </p>
              </div>
              <button
                onClick={() => setViewMode('software')}
                className="px-5 py-2.5 bg-[#1677FF] hover:bg-blue-600 text-white rounded-xl text-xs font-semibold shrink-0 transition-colors shadow-md flex items-center gap-2"
              >
                <span>Beralih ke Tampilan Software</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Software Mockup */}
        <div className="relative rounded-2xl bg-[#0B2D5C]/60 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#071B3A] border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CMSLogo size="sm" />
              <span className="text-slate-600">|</span>
              <span className="text-xs font-semibold text-slate-300 hidden sm:inline">
                Panel Utama Administrator Pelayanan
              </span>
            </div>

            {/* Timeframe Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-700/70 text-xs">
              {(['today', 'week', 'month', 'year'] as const).map(tf => (
                <button
                  key={tf}
                  onClick={() => setActiveTimeframe(tf)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    activeTimeframe === tf
                      ? 'bg-[#1677FF] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tf === 'today' ? 'Hari Ini' : tf === 'week' ? '7 Hari' : tf === 'month' ? 'Bulan Ini' : 'Tahun 2026'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Data Simulasi Ilustrasi
              </span>
              <button
                onClick={onOpenPortal}
                className="px-3 py-1.5 bg-[#E52535] hover:bg-red-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>Kelola Antrean</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Main Dashboard Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* 4 Primary Metric Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Total Pengguna Terdaftar</span>
                    <Users className="w-4 h-4 text-[#1677FF]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                    24,850
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+1,420 warga baru (Bulan ini)</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Total Permohonan Masuk</span>
                    <FileText className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                    4,920
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                  <span className="text-amber-400 font-semibold">48 Berkas</span> sedang diverifikasi
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Permohonan Selesai</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                    4,872
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
                  Rasio Keberhasilan 99.0%
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Indeks Kepuasan (IKM)</span>
                    <Activity className="w-4 h-4 text-[#E52535]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                    98.6%
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                  SLA Rata-rata: <span className="font-semibold text-white">12 Menit</span>
                </div>
              </div>
            </div>

            {/* Analytics Visual Section: Service Breakdown & Hourly Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left 2 Cols: Monthly Flow Chart */}
              <div className="lg:col-span-2 p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div>
                    <h4 className="text-sm font-bold text-white">Tren Aktivitas Pelayanan & Pengaduan</h4>
                    <span className="text-[11px] text-slate-400">Statistik agregat mingguan tahun 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
                      <span>Surat Kependudukan</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E52535]" />
                      <span>Pengaduan Warga</span>
                    </span>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="space-y-4 pt-2">
                  {[
                    { label: 'Minggu I (1-7 Nov)', adm: 88, aduan: 42, total: 1120 },
                    { label: 'Minggu II (8-14 Nov)', adm: 95, aduan: 38, total: 1340 },
                    { label: 'Minggu III (15-21 Nov)', adm: 82, aduan: 55, total: 1210 },
                    { label: 'Minggu IV (22-28 Nov)', adm: 90, aduan: 32, total: 1250 },
                  ].map((row, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium">{row.label}</span>
                        <span className="text-slate-400 font-mono tabular-nums">{row.total} Dokumen</span>
                      </div>
                      <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                        <div
                          className="bg-[#1677FF] h-full"
                          style={{ width: `${(row.adm / (row.adm + row.aduan)) * 100}%` }}
                          title={`Administrasi: ${row.adm}`}
                        />
                        <div
                          className="bg-[#E52535] h-full"
                          style={{ width: `${(row.aduan / (row.adm + row.aduan)) * 100}%` }}
                          title={`Pengaduan: ${row.aduan}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Waktu Rata-rata Respons: 12 Menit</span>
                  <span className="text-emerald-400 font-medium">Beban Server 18% Optimal</span>
                </div>
              </div>

              {/* Right Col: Performance SLA Gauge */}
              <div className="p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Kepatuhan Standar Waktu (SLA)</h4>
                  <span className="text-[11px] text-slate-400 block mb-4">Target operasional kantor dinas</span>

                  <div className="space-y-4 text-xs">
                    <div className="p-3 bg-[#0B2D5C]/40 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1 text-slate-300">
                        <span>Surat Domisili & Keterangan</span>
                        <span className="font-bold text-emerald-400">100% Sesuai SLA</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Maksimal 30 menit (Capaian: 14 menit)</div>
                    </div>

                    <div className="p-3 bg-[#0B2D5C]/40 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1 text-slate-300">
                        <span>Surat Pengantar SKCK / Nikah</span>
                        <span className="font-bold text-emerald-400">98.5% Sesuai SLA</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Maksimal 1 jam (Capaian: 22 menit)</div>
                    </div>

                    <div className="p-3 bg-[#0B2D5C]/40 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1 text-slate-300">
                        <span>Respon Pengaduan Warga</span>
                        <span className="font-bold text-blue-400">96.8% Terdisposisi</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Maksimal 2 jam (Capaian: 48 menit)</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sertifikat Tanda Tangan Elektronik Valid BSrE.</span>
                </div>
              </div>
            </div>

            {/* Recent Incoming Applications Table */}
            <div className="p-5 rounded-2xl bg-[#071B3A] border border-slate-700/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
                <div>
                  <h4 className="text-sm font-bold text-white">Daftar Permohonan Terbaru</h4>
                  <p className="text-xs text-slate-400">Klik baris untuk membuka detail dan pelacakan langsung</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Search inside table */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari ID / Nama pemohon..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="px-3 py-1.5 bg-[#0B2D5C]/60 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#1677FF] w-44"
                    />
                  </div>

                  {/* Filter Status Selector */}
                  <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-700 text-xs">
                    {['all', 'Diproses', 'Selesai'].map(st => (
                      <button
                        key={st}
                        onClick={() => setFilterStatus(st)}
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                          filterStatus === st ? 'bg-[#1677FF] text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {st === 'all' ? 'Semua' : st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0B2D5C]/40 text-slate-400 font-semibold border-b border-slate-700/80">
                    <tr>
                      <th className="py-2.5 px-3">No. Resi Tiket</th>
                      <th className="py-2.5 px-3">Nama Pemohon</th>
                      <th className="py-2.5 px-3">Jenis Permohonan</th>
                      <th className="py-2.5 px-3">Waktu Masuk</th>
                      <th className="py-2.5 px-3">Petugas Penanggung Jawab</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {filteredRequests.map(req => (
                      <tr
                        key={req.id}
                        onClick={() => onOpenTracking(req.id)}
                        className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                      >
                        <td className="py-3 px-3 font-mono font-bold text-[#1677FF] whitespace-nowrap">
                          {req.id}
                        </td>
                        <td className="py-3 px-3 font-medium text-white whitespace-nowrap">
                          {req.name}
                        </td>
                        <td className="py-3 px-3 max-w-xs truncate text-slate-200">
                          {req.service}
                        </td>
                        <td className="py-3 px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                          {req.date}
                        </td>
                        <td className="py-3 px-3 text-slate-300 whitespace-nowrap">
                          {req.officer}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold border ${req.badgeClass}`}>
                            {req.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right whitespace-nowrap">
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              onOpenTracking(req.id);
                            }}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-[#1677FF] text-slate-300 hover:text-white transition-colors"
                            title="Lacak Berkas"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Menampilkan {filteredRequests.length} dari {recentRequests.length} permohonan terkini</span>
                <span className="font-mono text-slate-400">
                  Data disinkronisasi setiap 60 detik secara otomatis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
