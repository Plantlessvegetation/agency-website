import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import LoadingScreen from '@/components/ui/loading-screen';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Marketplace from '@/pages/Marketplace';
import Pricing from '@/pages/Pricing';
import Portfolio from '@/pages/Portfolio';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import NotFound from '@/pages/NotFound';
import BlogPost from '@/pages/BlogPost';
import { useState, useEffect } from 'react';

// New import for the dedicated scroll-to-top component
import ScrollToTopOnNavigate from '@/components/ScrollToTopOnNavigate';

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="digitalforge-theme">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <HelmetProvider>
              <BrowserRouter>
                {/* Add the new component here to handle automatic scrolling on navigation */}
                <ScrollToTopOnNavigate />
                <div className="relative min-h-screen bg-background overflow-x-hidden">
                  <Navbar />
                  <main className="relative z-10">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogPost />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/dashboard/*" element={<Dashboard />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <FloatingCTA />
                  <ScrollToTop />
                </div>
              </BrowserRouter>
            </HelmetProvider>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;