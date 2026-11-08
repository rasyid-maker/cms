import React, { useState } from 'react';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  FileText, 
  User, 
  Building2, 
  ShieldCheck, 
  Download, 
  ExternalLink,
  QrCode,
  AlertCircle
} from 'lucide-react';
import { SAMPLE_TICKETS, TrackingTicket } from '../data/mockData';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTicketId?: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialTicketId = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialTicketId || 'CMS-2026-0812');
  const [activeTicket, setActiveTicket] = useState<TrackingTicket | null>(
    SAMPLE_TICKETS.find(t => t.ticketNumber === (initialTicketId || 'CMS-2026-0812')) || SAMPLE_TICKETS[0]
  );
  const [isSearching, setIsSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (ticketToSearch?: string) => {
    const query = (ticketToSearch || searchQuery).trim().toUpperCase();
    setIsSearching(true);
    setNotFound(false);

    setTimeout(() => {
      const found = SAMPLE_TICKETS.find(
        t => t.ticketNumber.toUpperCase() === query || t.applicantName.toUpperCase().includes(query)
      );

      if (found) {
        setActiveTicket(found);
        setNotFound(false);
      } else {
        // If not found in samples, generate an on-the-fly dynamic ticket preview for whatever the user searched
        if (query.length >= 3) {
          const dynamicTicket: TrackingTicket = {
            ticketNumber: query.startsWith('CMS-') ? query : `CMS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
            applicantName: 'Masyarakat Terdaftar',
            nikMasked: '3201************0058',
            serviceType: 'Layanan Pengajuan Administrasi Digital',
            submissionDate: '08 Nov 2026, 09:20 WIB',
            estimatedCompletion: '08 Nov 2026, 12:00 WIB',
            status: 'Diproses',
            currentStep: 2,
            officerName: 'Agus Wardhana, S.IP',
            department: 'Seksi Pelayanan & Administrasi Warga',
            timeline: [
              {
                title: 'Permohonan Diterima',
                description: 'Berkas masuk ke sistem CMS terpusat dan diverifikasi otomatis.',
                timestamp: '08 Nov 2026, 09:20 WIB',
                completed: true,
                active: false,
              },
              {
                title: 'Pemeriksaan Berkas Petugas',
                description: 'Verifikator sedang menelaah kelengkapan data pemohon.',
                timestamp: '08 Nov 2026, 09:45 WIB',
                completed: true,
                active: true,
              },
              {
                title: 'Penerbitan Dokumen / Tindak Lanjut',
                description: 'Menunggu otorisasi digital TTE pimpinan instansi.',
                timestamp: 'Dalam antrean',
                completed: false,
                active: false,
              },
              {
                title: 'Selesai & Penerbitan QR Valid',
                description: 'Dokumen terbit dan siap diunduh secara mandiri.',
                timestamp: 'Estimasi: 12:00 WIB',
                completed: false,
                active: false,
              },
            ],
          };
          setActiveTicket(dynamicTicket);
        } else {
          setNotFound(true);
        }
      }
      setIsSearching(false);
    }, 350);
  };

  const handleDownloadSimulation = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#071B3A] border border-slate-700/60 rounded-2xl shadow-2xl text-slate-100 p-6 md:p-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 border border-[#1677FF]/40 flex items-center justify-center text-[#1677FF]">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Lacak Status Permohonan</h3>
              <p className="text-xs text-slate-300">Pantau progres administrasi dan pengaduan Anda secara transparan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input & Sample Presets */}
        <div className="mt-6 space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Nomor Tiket Permohonan / Resi CMS
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="Contoh: CMS-2026-0812 atau nama pemohon"
                className="w-full px-4 py-3 bg-[#0B2D5C]/60 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] transition-all text-sm font-mono"
              />
            </div>
            <button
              onClick={() => handleSearch()}
              disabled={isSearching}
              className="px-6 py-3 bg-[#1677FF] hover:bg-blue-600 active:scale-95 text-white font-medium rounded-xl transition-all flex items-center gap-2 text-sm shrink-0 shadow-lg shadow-blue-500/25"
            >
              {isSearching ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              <span>Cari Berkas</span>
            </button>
          </div>

          {/* Quick preset chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-slate-400">Contoh Tiket Pengujian:</span>
            {SAMPLE_TICKETS.map(ticket => (
              <button
                key={ticket.ticketNumber}
                onClick={() => {
                  setSearchQuery(ticket.ticketNumber);
                  handleSearch(ticket.ticketNumber);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors border ${
                  activeTicket?.ticketNumber === ticket.ticketNumber
                    ? 'bg-[#1677FF]/20 text-[#1677FF] border-[#1677FF]/50'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                {ticket.ticketNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Search Result View */}
        {notFound ? (
          <div className="mt-8 p-6 text-center bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
            <AlertCircle className="w-10 h-10 text-amber-400 mx-auto mb-2" />
            <h4 className="font-semibold text-white">Nomor Tiket Tidak Ditemukan</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
              Mohon periksa kembali nomor tiket permohonan Anda atau pilih salah satu contoh tiket di atas.
            </p>
          </div>
        ) : activeTicket ? (
          <div className="mt-6 space-y-6">
            {/* Ticket Summary Card */}
            <div className="p-5 bg-gradient-to-br from-[#0B2D5C]/70 to-[#071B3A] rounded-xl border border-slate-700/70">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-700/60">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-[#1677FF]">
                      {activeTicket.ticketNumber}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="text-xs text-slate-300">
                      Diajukan: {activeTicket.submissionDate}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">
                    {activeTicket.serviceType}
                  </h4>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      activeTicket.status === 'Siap Diambil / Terbit' || activeTicket.status === 'Selesai'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : activeTicket.status === 'Diproses'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                    {activeTicket.status}
                  </span>
                </div>
              </div>

              {/* Detail Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Pemohon:</span>
                  <div className="flex items-center gap-1 font-medium text-white">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activeTicket.applicantName}</span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Identitas (NIK):</span>
                  <span className="font-mono text-slate-300 font-medium">
                    {activeTicket.nikMasked}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Petugas Verifikator:</span>
                  <span className="font-medium text-slate-200">
                    {activeTicket.officerName}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Unit Layanan:</span>
                  <span className="font-medium text-slate-200 truncate block">
                    {activeTicket.department}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Progress */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1677FF]" />
                Jejak Tahapan Pemrosesan (Audit Trail)
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
                {activeTicket.timeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors ${
                        step.completed
                          ? 'bg-emerald-500 text-white'
                          : step.active
                          ? 'bg-[#1677FF] text-white ring-4 ring-[#1677FF]/20'
                          : 'bg-slate-800 border border-slate-600 text-slate-500'
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <span>{idx + 1}</span>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className={`text-sm font-semibold ${step.active ? 'text-[#1677FF]' : step.completed ? 'text-white' : 'text-slate-400'}`}>
                          {step.title}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {step.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Ready Card (if ready) */}
            {activeTicket.documentPreview && (
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-emerald-400">Dokumen Digital Terverifikasi</span>
                      <span className="text-slate-500">·</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">BSrE Certified</span>
                    </div>
                    <span className="text-sm font-bold text-white block">
                      {activeTicket.documentPreview.documentName}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      ID Dokumen: {activeTicket.documentPreview.documentId}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleDownloadSimulation}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadSuccess ? 'File Diunduh!' : 'Unduh PDF Asli'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verifikasi QR Code terhubung dengan database resmi CMS 24/7.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            Tutup Dialog
          </button>
        </div>
      </div>
    </div>
  );
};
