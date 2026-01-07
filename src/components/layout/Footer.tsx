import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-ivory py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-3xl font-bold text-gradient-gold">
              Muktira
            </h3>
            <p className="font-body text-ivory/70 text-sm leading-relaxed">
              Celebrating the timeless beauty of Indian craftsmanship. Each piece tells a story of heritage and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-primary">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'Collection', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="font-body text-sm text-ivory/70 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-primary">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+91 99465 82510"
                className="flex items-center gap-3 text-ivory/70 hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +919946582510
              </a>
              <a
                href="mailto:muktira.store@gmail.com"
                className="flex items-center gap-3 text-ivory/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                muktira.store@gmail.com
              </a>
              <div className="flex items-start gap-3 text-ivory/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Jewel Street, Alappuzha, Kerala 690558</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-primary">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/muktira.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/9946582510"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-ivory/10">
          <p className="text-center text-ivory/50 text-sm font-body">
            © 2026 Muktira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
