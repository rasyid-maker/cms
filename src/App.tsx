/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { DashboardPreviewSection } from './components/DashboardPreviewSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { TrackingModal } from './components/TrackingModal';
import { PortalModal } from './components/PortalModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './data/mockData';

export default function App() {
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [activeTrackingTicketId, setActiveTrackingTicketId] = useState('CMS-2026-0812');
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenTracking = (ticketId?: string) => {
    if (ticketId) {
      setActiveTrackingTicketId(ticketId);
    }
    setIsTrackingModalOpen(true);
  };

  const handleOpenPortal = () => {
    setIsPortalModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleApplyFromService = (serviceTitle: string) => {
    setSelectedService(null);
    setIsPortalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#071B3A] text-slate-100 selection:bg-[#1677FF] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navbar */}
      <Navbar
        onOpenPortal={handleOpenPortal}
        onOpenTracking={() => handleOpenTracking('CMS-2026-0812')}
      />

      {/* Main Page Flow */}
      <main>
        {/* A. Hero Section */}
        <HeroSection
          onOpenPortal={handleOpenPortal}
          onOpenTracking={handleOpenTracking}
        />

        {/* B. About Section */}
        <AboutSection onOpenPortal={handleOpenPortal} />

        {/* C. Services Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenPortal={handleOpenPortal}
        />

        {/* D. Advantages Section */}
        <AdvantagesSection />

        {/* E. Workflow Section */}
        <WorkflowSection
          onOpenPortal={handleOpenPortal}
          onOpenTracking={() => handleOpenTracking('CMS-2026-0812')}
        />

        {/* F. Dashboard Preview Section */}
        <DashboardPreviewSection
          onOpenTracking={handleOpenTracking}
          onOpenPortal={handleOpenPortal}
        />

        {/* G. FAQ Accordion Section */}
        <FAQSection />

        {/* H. Call To Action Section */}
        <CTASection onOpenPortal={handleOpenPortal} />

        {/* I. Contact Section */}
        <ContactSection />
      </main>

      {/* J. Footer */}
      <Footer
        onOpenPortal={handleOpenPortal}
        onOpenTracking={() => handleOpenTracking('CMS-2026-0812')}
      />

      {/* Back to top floating button */}
      <BackToTop />

      {/* Interactive Modals */}
      <TrackingModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
        initialTicketId={activeTrackingTicketId}
      />

      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        onOpenTracking={handleOpenTracking}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onApply={handleApplyFromService}
      />
    </div>
  );
}
