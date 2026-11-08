import React, { useState } from 'react';
import { 
  Globe, 
  ListFilter, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  FileCheck, 
  QrCode,
  ShieldAlert
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/mockData';

interface WorkflowSectionProps {
  onOpenPortal: () => void;
  onOpenTracking: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({
  onOpenPortal,
  onOpenTracking,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepPreviews = [
    {
      title: 'Akses Portal CMS Kapan Saja',
      desc: 'Buka browser di ponsel cerdas Anda, masukkan NIK atau PIN komunitas. Tanpa antrean fisik di kantor desa/kelurahan.',
      callout: 'Tersedia 24 Jam Nonstop',
      icon: Globe,
    },
    {
      title: 'Pilih Layanan dari Katalog Cerdas',
      desc: 'Sistem menyajikan pilihan: Surat Domisili, Pengantar SKCK, Pelaporan Jalan Rusak, dll., lengkap dengan panduan berkas.',
      callout: 'Format Formulir Sederhana',
      icon: ListFilter,
    },
    {
      title: 'Kirim Permohonan & Unggah Berkas',
      desc: 'Isi data yang diperlukan dan foto dokumen dari kamera ponsel. Verifikasi otomatis mendeteksi jika ada bidang kosong.',
      callout: 'Enkripsi Data Aman',
      icon: Send,
    },
    {
      title: 'Pantau Status Real-Time & Unduh Dokumen Sah',
      desc: 'Terima nomor tiket resmi dan pantau tahapan verifikasi petugas. Setelah disetujui, unduh PDF resmi ber-TTE secara instan.',
      callout: 'Dokumen Sah Ber-QR Code',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="alur" className="py-24 bg-[#0B2D5C]/25 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E52535]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Alur Pelayanan Digital
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pelayanan Digital dalam Langkah Mudah
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Hanya 4 langkah mudah untuk menyelesaikan urusan administrasi dan menyampaikan pengaduan Anda tanpa birokrasi berbelit.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-700/60 -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                    isCurrent
                      ? 'bg-[#071B3A] border-[#1677FF] shadow-xl shadow-blue-500/15 scale-[1.02]'
                      : 'bg-[#071B3A]/60 border-slate-700/70 hover:border-slate-500'
                  }`}
                >
                  <div>
                    {/* Top Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-lg font-extrabold transition-colors ${
                          isCurrent
                            ? 'bg-[#1677FF] text-white shadow-lg shadow-blue-500/30'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}
                      >
                        {step.step}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step detail note */}
                  <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400">
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Preview Interactive Display */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#071B3A] border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#1677FF] bg-[#1677FF]/15 px-2.5 py-0.5 rounded border border-[#1677FF]/30">
                Tahap {WORKFLOW_STEPS[activeStep].step} Aktif
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                {stepPreviews[activeStep].callout}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white">
              {stepPreviews[activeStep].title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {stepPreviews[activeStep].desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenPortal}
              className="px-6 py-3 bg-[#E52535] hover:bg-red-600 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-red-500/25 transition-all"
            >
              <span>Simulasikan Tahap Ini</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTracking}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-colors"
            >
              Coba Lacak Berkas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
