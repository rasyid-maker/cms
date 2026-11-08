import React, { useState } from 'react';
import { 
  FileText, 
  Megaphone, 
  Globe, 
  Users, 
  Activity, 
  BarChart3, 
  ArrowRight, 
  Clock, 
  Coins, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenPortal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenPortal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Layanan' },
    { id: 'administrasi', label: 'Administrasi' },
    { id: 'pengaduan', label: 'Pengaduan Warga' },
    { id: 'informasi', label: 'Informasi Publik' },
    { id: 'data', label: 'Manajemen Data' },
    { id: 'analitik', label: 'Monitoring & Laporan' },
  ];

  const filteredServices = SERVICES_DATA.filter(service => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'analitik') return service.category === 'monitoring' || service.category === 'analitik';
    return service.category === activeCategory;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <section id="layanan" className="py-24 bg-[#0B2D5C]/30 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E52535]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Modul Ekosistem Terpadu
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Digital untuk Kebutuhan Masyarakat
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Menghadirkan rangkaian instrumen digital lengkap untuk mempercepat alur birokrasi, merespons aduan warga, dan menjaga akuntabilitas pelayanan publik.
          </p>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#071B3A]/80 rounded-2xl border border-slate-700/70 max-w-2xl mx-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#1677FF] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => {
            const isRedAccent = service.id === 'pengaduan-masyarakat';
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative p-6 rounded-2xl bg-[#071B3A] border border-slate-700/80 hover:border-[#1677FF] hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isRedAccent
                          ? 'bg-[#E52535]/15 text-[#E52535] border border-[#E52535]/30'
                          : 'bg-[#1677FF]/15 text-[#1677FF] border border-[#1677FF]/30'
                      }`}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      {service.sla}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Footer Info & Action */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Coins className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{service.cost}</span>
                  </div>

                  <span className="text-xs font-semibold text-[#1677FF] group-hover:text-blue-400 flex items-center gap-1">
                    <span>Lihat Detail</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0B2D5C] to-[#071B3A] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Perlu integrasi layanan custom untuk wilayah Anda?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              CMS mendukung konfigurasi jenis surat khusus, alur persetujuan bertingkat, dan format TTE lokal.
            </p>
          </div>
          <button
            onClick={onOpenPortal}
            className="px-6 py-2.5 bg-[#E52535] hover:bg-red-600 text-white rounded-xl text-xs font-semibold shrink-0 shadow-lg shadow-red-500/20 transition-all flex items-center gap-2"
          >
            <span>Uji Coba Portal Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
