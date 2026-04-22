import React from 'react';
import { Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'Services',
    href: '#services'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Locations',
    href: '#locations'
  }];
  const handleNavClick = (e, href) => {
    e.preventDefault();
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
  return <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/clinic-photo.jpg" alt="Sravya Speech & Hearing Clinic" className="h-12 w-12 rounded-xl object-cover" />
              <span className="font-semibold text-lg">Sravya Speech & Hearing Clinic</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Your trusted partner in speech and hearing health across Thrissur district.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.href}>
                  <a href={link.href} onClick={e => handleNavClick(e, link.href)} className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className="font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Valapad Clinic</p>
                  <a href="https://maps.app.goo.gl/cNVoijXZDoNjGL618" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/80 hover:text-primary hover:underline transition-colors duration-200 mb-1 block">Kothakulam Stop, PO, Valapad, Thrissur, Kerala 680567</a>
                  <a href="tel:+918848320580" className="text-sm text-primary hover:underline">+91 88483 20580</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Kodungallore Clinic</p>
                  <a href="https://maps.app.goo.gl/YUmq4N4t3Nu7U1Lw8" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/80 hover:text-primary hover:underline transition-colors duration-200 mb-1 block">Thiruvanchikulam, Kodungallore, Thrissur, Kerala 680664</a>
                  <a href="tel:+918848320580" className="text-sm text-primary hover:underline">+91 88483 20580</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Thrissur Clinic</p>
                  <a href="https://maps.google.com/?q=10.52,76.21" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/80 hover:text-primary hover:underline transition-colors duration-200 mb-1 block">Kizhakkumpattukara, East Fort-5</a>
                  <a href="tel:+918848320580" className="text-sm text-primary hover:underline">+91 88483 20580</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} Sravya Speech & Hearing Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;