import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    agency: '',
    role: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setErrorMessage('Format alamat email tidak valid.');
      return;
    }

    if (formState.phone.length < 9) {
      setErrorMessage('Nomor WhatsApp / telepon minimal 9 digit.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="kontak" className="py-24 bg-[#071B3A] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
              Konsultasi & Kemitraan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hubungi Tim Spesialis CMS
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Diskusikan kebutuhan digitalisasi pelayanan publik di wilayah Anda. Kami siap memberikan presentasi teknis, demo sistem, dan kalkulasi efisiensi biaya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details & SLA Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0B2D5C]/40 border border-slate-700/70 space-y-6">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-700/60">
                Informasi Kontak Layanan
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-[#1677FF] shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Kantor Pusat CMS
                    </span>
                    <span className="text-white font-medium block">
                      Gedung Digital Services Nusantara, Lt. 8
                    </span>
                    <span className="text-slate-400 text-xs">
                      Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan 12190
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Surel Resmi
                    </span>
                    <a
                      href="mailto:layanan@cms-pelayanan.id"
                      className="text-white font-medium hover:text-[#1677FF] transition-colors"
                    >
                      layanan@cms-pelayanan.id
                    </a>
                    <span className="text-slate-400 text-xs block">
                      Respons dalam 1-2 jam kerja
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Layanan WhatsApp & Telepon
                    </span>
                    <span className="text-white font-medium block font-mono">
                      +62 (021) 5890-2026 / 0811-987-2026
                    </span>
                    <span className="text-slate-400 text-xs">
                      Helpdesk teknis 24/7 untuk instansi aktif
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Jam Kerja Konsultasi
                    </span>
                    <span className="text-white font-medium block">
                      Senin - Jumat: 08:00 - 17:00 WIB
                    </span>
                    <span className="text-slate-400 text-xs">
                      Sabtu: 08:30 - 14:00 WIB (Sesi Demo Virtual)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance callout */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Kerahasiaan data instansi dan masyarakat dijamin melalui Non-Disclosure Agreement (NDA) formal.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B2D5C]/30 border border-slate-700/80 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Permintaan Informasi Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Terima kasih, Bapak/Ibu <span className="font-semibold text-white">{formState.name}</span> dari <span className="font-semibold text-white">{formState.agency || 'instansi Anda'}</span>. Tim konsultan CMS kami akan menghubungi kontak Anda dalam waktu kurang dari 2 jam.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        agency: '',
                        role: '',
                        email: '',
                        phone: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-slate-700/60">
                    <h3 className="text-lg font-bold text-white">
                      Formulir Permohonan Presentasi & Konsultasi
                    </h3>
                    <p className="text-xs text-slate-300">
                      Lengkapi data di bawah ini untuk mendapatkan proposal teknis dan demonstrasi sistem.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-xl text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">
                        Nama Lengkap <span className="text-[#E52535]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Drs. Wahyu Hidayat"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#071B3A] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1677FF] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">
                        Instansi / Lembaga / Wilayah <span className="text-[#E52535]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Kelurahan Sukamaju / Disdukcapil"
                        value={formState.agency}
                        onChange={e => setFormState({ ...formState, agency: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#071B3A] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1677FF] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">
                        Jabatan / Posisi
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Kepala Seksi Pelayanan / Lurah"
                        value={formState.role}
                        onChange={e => setFormState({ ...formState, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#071B3A] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1677FF] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">
                        Nomor WhatsApp Aktif <span className="text-[#E52535]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxx"
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#071B3A] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1677FF] text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block text-slate-300 mb-1 font-medium">
                      Alamat Email Dinas / Pribadi <span className="text-[#E52535]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@instansi.go.id atau email aktif"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#071B3A] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1677FF] text-xs"
                    />
                  </div>

                  <div className="text-xs">
                    <label className="block text-slate-300 mb-1 font-medium">
                      Kebutuhan Khusus / Pesan Konsultasi
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan estimasi jumlah penduduk, kendala antrean, atau kebutuhan integrasi SIAK/Dukcapil..."
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#071B3A] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1677FF] text-xs"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-400">
                      Respons cepat dijamin dalam 1 hari kerja resmi.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#E52535] hover:bg-red-600 active:scale-95 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>Kirim Permintaan Konsultasi</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
