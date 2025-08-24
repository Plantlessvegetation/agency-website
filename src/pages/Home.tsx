import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />
      <ServicesShowcase />
      <StatsSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <CTASection />
    </motion.div>
  );
}