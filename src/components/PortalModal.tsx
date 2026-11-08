import React, { useState } from 'react';
import { 
  X, 
  User, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Send, 
  FileCheck, 
  Clock, 
  Eye, 
  ThumbsUp, 
  AlertTriangle,
  FileText,
  KeyRound,
  Building
} from 'lucide-react';
import { CMSLogo } from './CMSLogo';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTracking: (ticketId: string) => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  onOpenTracking,
}) => {
  const [role, setRole] = useState<'citizen' | 'admin'>('citizen');
  
  // Citizen demo state
  const [citizenForm, setCitizenForm] = useState({
    nik: '3201198500010009',
    name: 'Ahmad Faisal',
    service: 'Surat Keterangan Domisili',
    phone: '081298765432',
    notes: 'Keperluan pembukaan rekening bank syariah dan kelengkapan berkas usaha.',
  });
  const [isSubmittingCitizen, setIsSubmittingCitizen] = useState(false);
  const [citizenSuccessTicket, setCitizenSuccessTicket] = useState<string | null>(null);

  // Admin demo state
  const [pendingQueue, setPendingQueue] = useState([
    {
      id: 'CMS-2026-9041',
      name: 'Dewi Lestari',
      service: 'Surat Pengantar Nikah (N1-N4)',
      date: '10 Menit lalu',
      status: 'Menunggu Otorisasi',
      urgency: 'Tinggi',
    },
    {
      id: 'CMS-2026-9042',
      name: 'Rudi Hermawan',
      service: 'Pengaduan: Jalan Berlubang RT 04',
      date: '25 Menit lalu',
      status: 'Menunggu Disposisi',
      urgency: 'Sedang',
    },
    {
      id: 'CMS-2026-9043',
      name: 'Kartika Chandra',
      service: 'Surat Keterangan Tidak Mampu (SKTM)',
      date: '45 Menit lalu',
      status: 'Menunggu Verifikasi',
      urgency: 'Tinggi',
    },
  ]);
  const [adminActionSuccess, setAdminActionSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCitizenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCitizen(true);

    setTimeout(() => {
      const generatedTicket = `CMS-2026-${Math.floor(5000 + Math.random() * 4000)}`;
      setIsSubmittingCitizen(false);
      setCitizenSuccessTicket(generatedTicket);
    }, 600);
  };

  const handleAdminApprove = (id: string, name: string) => {
    setPendingQueue(prev => prev.filter(item => item.id !== id));
    setAdminActionSuccess(`Berkas ${id} (${name}) berhasil disetujui & ditandatangani digital (TTE)!`);
    setTimeout(() => setAdminActionSuccess(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#071B3A] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 md:p-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-700/60">
          <CMSLogo size="sm" />
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              Interactive Preview Mode
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0B2D5C]/50 p-2 rounded-xl border border-slate-700/60">
          <div className="text-xs text-slate-300 font-medium px-2">
            Pilih Mode Eksplorasi Aplikasi CMS:
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                setRole('citizen');
                setCitizenSuccessTicket(null);
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                role === 'citizen'
                  ? 'bg-[#1677FF] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Portal Warga (Pemohon)</span>
            </button>
            <button
              onClick={() => {
                setRole('admin');
              }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                role === 'admin'
                  ? 'bg-[#E52535] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Panel Petugas (Verifikator)</span>
            </button>
          </div>
        </div>

        {/* ROLE 1: CITIZEN VIEW */}
        {role === 'citizen' && (
          <div className="mt-6 space-y-6">
            {citizenSuccessTicket ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Permohonan Berhasil Dikirim!</h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                    Berkas Anda telah masuk ke meja verifikasi dinas. Notifikasi WhatsApp otomatis telah dikirimkan.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/60 rounded-lg inline-block border border-slate-700 text-left">
                  <span className="text-[11px] text-slate-400 block">Nomor Resi / Tiket Anda:</span>
                  <span className="font-mono text-xl font-bold text-[#1677FF]">
                    {citizenSuccessTicket}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenTracking(citizenSuccessTicket);
                    }}
                    className="px-5 py-2.5 bg-[#1677FF] hover:bg-blue-600 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg transition-colors"
                  >
                    <span>Lacak Status Berkas Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCitizenSuccessTicket(null)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs transition-colors"
                  >
                    Buat Permohonan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCitizenSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/40">
                  <div>
                    <h4 className="text-base font-bold text-white">Formulir Pelayanan Mandiri Warga</h4>
                    <p className="text-xs text-slate-300">Uji coba pengajuan surat keterangan atau dokumen kependudukan secara instan.</p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Sistem Siap 24/7
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Nomor Induk Kependudukan (NIK)</label>
                    <input
                      type="text"
                      required
                      value={citizenForm.nik}
                      onChange={e => setCitizenForm({ ...citizenForm, nik: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0B2D5C]/60 border border-slate-600 rounded-lg text-white font-mono focus:border-[#1677FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Nama Lengkap Sesuai KTP</label>
                    <input
                      type="text"
                      required
                      value={citizenForm.name}
                      onChange={e => setCitizenForm({ ...citizenForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0B2D5C]/60 border border-slate-600 rounded-lg text-white focus:border-[#1677FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Jenis Layanan yang Dibutuhkan</label>
                    <select
                      value={citizenForm.service}
                      onChange={e => setCitizenForm({ ...citizenForm, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0B2D5C]/60 border border-slate-600 rounded-lg text-white focus:border-[#1677FF] focus:outline-none"
                    >
                      <option value="Surat Keterangan Domisili">Surat Keterangan Domisili</option>
                      <option value="Surat Pengantar SKCK">Surat Pengantar SKCK</option>
                      <option value="Surat Pengantar Nikah">Surat Pengantar Nikah (N1-N4)</option>
                      <option value="Permohonan Kartu Keluarga Baru">Permohonan Kartu Keluarga Baru</option>
                      <option value="Pengaduan Infrastruktur Warga">Pengaduan Infrastruktur Warga</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Nomor WhatsApp Aktif (Notifikasi Berkas)</label>
                    <input
                      type="tel"
                      required
                      value={citizenForm.phone}
                      onChange={e => setCitizenForm({ ...citizenForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0B2D5C]/60 border border-slate-600 rounded-lg text-white font-mono focus:border-[#1677FF] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 text-xs font-medium">Keterangan / Keperluan Dokumen</label>
                  <textarea
                    rows={2}
                    value={citizenForm.notes}
                    onChange={e => setCitizenForm({ ...citizenForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#0B2D5C]/60 border border-slate-600 rounded-lg text-white text-xs focus:border-[#1677FF] focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/60 flex items-center gap-3 text-xs text-slate-300">
                  <FileCheck className="w-5 h-5 text-[#1677FF] shrink-0" />
                  <span>Lampiran scan KTP & KK tersinkronisasi otomatis dari database kependudukan lokal.</span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingCitizen}
                    className="px-6 py-2.5 bg-[#1677FF] hover:bg-blue-600 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
                  >
                    {isSubmittingCitizen ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>Kirim Permohonan Digital</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ROLE 2: ADMIN VIEW */}
        {role === 'admin' && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/40">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Meja Otorisasi & Verifikasi Petugas</span>
                  <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full font-semibold">
                    Admin Active
                  </span>
                </h4>
                <p className="text-xs text-slate-300">
                  Antrean berkas masuk yang membutuhkan tinjauan dan pengesahan Tanda Tangan Elektronik (TTE).
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Antrean Aktif: <span className="font-bold text-[#1677FF]">{pendingQueue.length}</span>
              </div>
            </div>

            {adminActionSuccess && (
              <div className="p-3 bg-emerald-950/50 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{adminActionSuccess}</span>
              </div>
            )}

            {pendingQueue.length === 0 ? (
              <div className="p-8 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-700">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <h5 className="font-semibold text-white">Semua Berkas Hari Ini Selesai Diproses!</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Tidak ada permohonan yang tertunda. Tingkat kepatuhan SLA instansi 100%.
                </p>
                <button
                  onClick={() => {
                    setPendingQueue([
                      {
                        id: 'CMS-2026-9041',
                        name: 'Dewi Lestari',
                        service: 'Surat Pengantar Nikah (N1-N4)',
                        date: '10 Menit lalu',
                        status: 'Menunggu Otorisasi',
                        urgency: 'Tinggi',
                      },
                      {
                        id: 'CMS-2026-9042',
                        name: 'Rudi Hermawan',
                        service: 'Pengaduan: Jalan Berlubang RT 04',
                        date: '25 Menit lalu',
                        status: 'Menunggu Disposisi',
                        urgency: 'Sedang',
                      },
                    ]);
                  }}
                  className="mt-3 px-3.5 py-1.5 bg-slate-800 text-xs text-slate-300 rounded-lg hover:text-white"
                >
                  Muat Ulang Simulasi Antrean
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingQueue.map(item => (
                  <div
                    key={item.id}
                    className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/70 hover:border-slate-600 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#1677FF]">{item.id}</span>
                        <span className="text-slate-500">·</span>
                        <span className="text-xs font-medium text-white">{item.name}</span>
                        <span className="text-slate-500">·</span>
                        <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          {item.urgency}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-200">
                        {item.service}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Masuk {item.date}</span>
                        <span>·</span>
                        <span className="text-slate-300">{item.status}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenTracking(item.id);
                        }}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg flex items-center gap-1 transition-colors"
                        title="Tinjau Berkas Lengkap"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Tinjau</span>
                      </button>
                      <button
                        onClick={() => handleAdminApprove(item.id, item.name)}
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors shadow-sm"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Verifikasi & TTE</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-[#1677FF]" />
            <span>Hak Cipta © 2026 CMS Community Management System. Dilindungi enkripsi institusional.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
