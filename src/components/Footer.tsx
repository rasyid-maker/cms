import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { CMSLogo } from './CMSLogo';

interface FooterProps {
  onOpenPortal: () => void;
  onOpenTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPortal, onOpenTracking }) => {
  return (
    <footer className="bg-[#051329] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="space-y-4">
            <CMSLogo size="md" />
            <p className="text-slate-300 leading-relaxed text-xs">
              CMS (Chepi Multi System) adalah platform digital terintegrasi yang menghadirkan layanan dan pengelolaan administrasi serta pelayanan masyarakat secara modern, cepat, transparan, dan terpercaya.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Sistem Uptime 99.9% · Standar BSrE & UU PDP</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang CMS
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Layanan Digital
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-white transition-colors">
                  Alur Pelayanan
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-white transition-colors">
                  Dashboard Preview
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi & Kontak */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Informasi & Kontak
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <span>Gedung Digital Services Nusantara Lt. 8, Jakarta Selatan 12190</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1677FF] shrink-0" />
                <a href="mailto:layanan@cms-pelayanan.id" className="hover:text-white transition-colors">
                  layanan@cms-pelayanan.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-slate-300">+62 (021) 5890-2026</span>
              </li>
              <li className="pt-1">
                <div className="text-[11px] text-slate-400">Media Sosial Resmi:</div>
                <div className="flex items-center gap-3 mt-1.5 text-slate-300">
                  <span className="hover:text-white cursor-pointer transition-colors">@cmspelayanan</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                  <span>·</span>
                  <span className="hover:text-white cursor-pointer transition-colors">YouTube Edukasi</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Bantuan & Akses Langsung */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bantuan & Layanan Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenTracking}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#1677FF]">›</span>
                  <span>Lacak Permohonan Dokumen</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#E52535]">›</span>
                  <span>Masuk Portal Warga & Petugas</span>
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-400">›</span>
                  <span>Pusat Bantuan & FAQ</span>
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-400">›</span>
                  <span>Jadwal Demo & Presentasi</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-400">›</span>
                  <span>Katalog Standar Pelayanan (SPBE)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-[11px]">
          <div>
            © 2026 CMS - Chepi Multi System. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Kebijakan Privasi</span>
            <span>·</span>
            <span>Syarat & Ketentuan Penggunaan</span>
            <span>·</span>
            <span>Sertifikasi Keamanan TTE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
