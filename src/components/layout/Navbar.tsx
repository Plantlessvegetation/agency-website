import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const ABOUT_URL = 'https://galaxyvecom.netlify.app/about';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: ABOUT_URL, external: true }, // handled by slide panel
  { name: 'Our Services', href: '/services' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeTimedOut, setIframeTimedOut] = useState(false);
  const iframeRef = useRef(null);

  const { theme, setTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timeout fallback: if iframe not loaded within N ms, show fallback and offer 'open in new tab'
  useEffect(() => {
    let t;
    if (isAboutOpen) {
      setIframeLoaded(false);
      setIframeTimedOut(false);
      t = setTimeout(() => {
        if (!iframeLoaded) setIframeTimedOut(true);
      }, 10000); // 10s fallback
    } else {
      setIframeLoaded(false);
      setIframeTimedOut(false);
    }
    return () => clearTimeout(t);
  }, [isAboutOpen, iframeLoaded]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DF</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Galaxy V-Ecom
                  </span>
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>

                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-80">
                    <div className="flex flex-col space-y-4 mt-8">
                      {navigation.map((item) =>
                        item.external ? (
                          // For About us on mobile, open the sliding About panel instead of new tab
                          <button
                            key={item.name}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsAboutOpen(true);
                            }}
                            className="text-left text-lg font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        )
                      )}

                      <div className="border-t border-border pt-4 space-y-2">
                        {isAuthenticated ? (
                          <>
                            <Button className="w-full" asChild>
                              <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                                Dashboard
                              </Link>
                            </Button>
                            <Button variant="outline" className="w-full" onClick={logout}>
                              Logout
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button variant="outline" className="w-full" asChild>
                              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                Login
                              </Link>
                            </Button>
                            <Button className="w-full" asChild>
                              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                                Get Started
                              </Link>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DF</span>
                </div>
                <span className="hidden sm:inline-block text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Galaxy V-Ecom
                </span>
              </Link>

              <div className="relative flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
                {navigation.map((item) =>
                  item.external ? (
                    // Render as a button that triggers the About slide panel
                    <button
                      key={item.name}
                      onClick={() => setIsAboutOpen(true)}
                      className="relative px-4 py-2 text-sm font-medium rounded-full z-10 transition-colors duration-300 text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="relative px-4 py-2 text-sm font-medium rounded-full z-10 transition-colors duration-300"
                    >
                      <motion.span
                        className={`relative z-20 transition-colors duration-300 ${
                          location.pathname === item.href
                            ? 'text-white'
                            : 'text-muted-foreground hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </motion.span>
                      {location.pathname === item.href && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute inset-0 rounded-full bg-orange-500/80"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  )
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>

                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <User className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={logout}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Button variant="ghost" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/register">Get Started</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* About Slide Panel (iframe) */}
      <Sheet open={isAboutOpen} onOpenChange={(open) => setIsAboutOpen(open)}>
        {/* We don't need a trigger here: we control it programmatically */}
        <SheetContent side="right" className="w-full sm:w-3/4 md:w-2/3 lg:w-3/5">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center text-white font-bold">
                DF
              </div>
              <div>
                <h3 className="text-lg font-semibold">About Galaxy V-Ecom</h3>
                <p className="text-sm text-muted-foreground">Sliding preview of the About page</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {iframeTimedOut && (
                <Button
                  variant="ghost"
                  onClick={() => window.open(ABOUT_URL, '_blank', 'noopener noreferrer')}
                >
                  Open in new tab
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={() => setIsAboutOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content area */}
          <div className="h-[calc(100vh-5.5rem)]">
            {!iframeLoaded && !iframeTimedOut && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin mb-4 w-8 h-8 border-2 border-t-transparent rounded-full" />
                  <p className="text-sm text-muted-foreground">Loading About page…</p>
                </div>
              </div>
            )}

            {iframeTimedOut ? (
              <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                <p className="mb-4">Looks like the page couldn't be embedded. You can open it in a new tab.</p>
                <div className="flex gap-3">
                  <Button onClick={() => window.open(ABOUT_URL, '_blank', 'noopener noreferrer')}>
                    Open in new tab
                  </Button>
                  <Button variant="outline" onClick={() => setIsAboutOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <iframe
                ref={iframeRef}
                src={ABOUT_URL}
                title="About - Galaxy V-Ecom"
                onLoad={() => setIframeLoaded(true)}
                className={`w-full h-full border-0 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
              />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
