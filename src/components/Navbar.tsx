import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import { CMSLogo } from './CMSLogo';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenTracking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenTracking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang CMS', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Alur', href: '#alur' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071B3A]/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-lg"
          >
            <CMSLogo size="md" />
          </a>

          {/* Zone 2: Clean 1-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1677FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA & Utility Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTracking}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>Lacak Berkas</span>
            </button>

            <button
              onClick={onOpenPortal}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#E52535] hover:bg-red-600 active:scale-95 rounded-xl transition-all shadow-md shadow-red-500/25 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Masuk Aplikasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTracking}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
              aria-label="Lacak Berkas"
            >
              <Search className="w-4 h-4 text-[#1677FF]" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Buka Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 pt-2 border-t border-slate-700/60 bg-[#071B3A]/98 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-slate-700/70 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-700/50 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenTracking();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-medium text-slate-200 bg-slate-800 rounded-xl flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#1677FF]" />
                  <span>Lacak Status Permohonan</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenPortal();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#E52535] hover:bg-red-600 rounded-xl flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Masuk Aplikasi CMS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
