import React from 'react';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  FileCheck, 
  Coins, 
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';
import { ServiceItem } from '../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onApply,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#071B3A] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 md:p-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-700/60">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-2.5 py-1 rounded-md border border-[#1677FF]/20 inline-block mb-2">
              Katalog Layanan Publik
            </span>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-xs text-slate-300 mt-1">{service.shortDesc}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Highlights */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-700/70">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Clock className="w-4 h-4 text-[#1677FF]" />
              <span>Estimasi Waktu Proses (SLA)</span>
            </div>
            <span className="text-sm font-bold text-white">{service.sla}</span>
          </div>

          <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-700/70">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span>Biaya Retribusi</span>
            </div>
            <span className="text-sm font-bold text-emerald-400">{service.cost}</span>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Deskripsi Layanan & Mekanisme
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed bg-[#0B2D5C]/40 p-4 rounded-xl border border-slate-700/50">
            {service.fullDesc}
          </p>
        </div>

        {/* Requirements */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#1677FF]" />
            <span>Persyaratan Berkas Pengajuan</span>
          </h4>
          <ul className="space-y-2">
            {service.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#E52535]" />
            <span>Keunggulan Fitur Digital CMS</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-5 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Semua permohonan dilindungi Tanda Tangan Elektronik resmi.</span>
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(service.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#E52535] hover:bg-red-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 transition-all"
            >
              <span>Ajukan Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
