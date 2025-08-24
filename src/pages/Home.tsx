import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigitalForge",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/digitalforge",
      "https://www.linkedin.com/company/digitalforge"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Helmet>
        <title>Best Web Development & Digital Marketing Agency India | DigitalForge</title>
        <meta name="description" content="DigitalForge is India's top web development and digital marketing agency, offering SEO, eCommerce, branding, and business growth solutions." />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Web Development & Digital Marketing Agency India | DigitalForge" />
        <meta property="og:description" content="DigitalForge delivers expert web development, SEO, and digital marketing services in India." />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-home.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Development & Digital Marketing Agency India | DigitalForge" />
        <meta name="twitter:description" content="Web development, SEO & marketing solutions tailored for Indian businesses." />
        <meta name="twitter:image" content="https://yourdomain.com/og-home.jpg" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      </Helmet>

      {/* Main H1 for SEO */}
      <h1 className="sr-only">
        DigitalForge | Web Development & Digital Marketing Company India
      </h1>

      <HeroSection />
      <ServicesShowcase />
      <StatsSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <CTASection />
    </motion.div>
  );
}