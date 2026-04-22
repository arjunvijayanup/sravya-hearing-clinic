import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Header = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Locations', href: '#locations' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 mr-2">
            <img
              src="/images/clinic-photo.jpg"
              alt="Sravya Speech & Hearing Clinic"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover flex-shrink-0"
            />
            <span className={`font-semibold text-sm sm:text-base lg:text-lg leading-tight header-clinic-name transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Sravya Speech & Hearing Clinic
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium hover:text-primary transition-colors duration-300 ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-8">
            <Button
              onClick={onBookAppointment}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] hidden sm:flex"
            >
              Book appointment
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className={`flex-shrink-0 transition-colors duration-300 ${!isScrolled ? 'text-white hover:text-white hover:bg-white/10' : ''}`}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookAppointment();
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4"
                  >
                    Book appointment
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;