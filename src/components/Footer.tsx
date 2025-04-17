
import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, Facebook, MessageCircle, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Offerings', to: 'offerings' },
    { name: 'About Us', to: 'about' },
    { name: 'Contact Us', to: 'contact' },
  ];

  const eventTypes = [
    'Weddings', 
    'Birthdays', 
    'Gruha Pravesham', 
    'Anniversaries', 
    'Corporate Events', 
    'Custom Celebrations'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair mb-4">
              Avira<span className="text-secondary">.</span>
            </h3>
            <p className="text-primary-foreground/80 font-montserrat text-sm">
              Crafting unforgettable memories through exceptional event planning and management in Hyderabad and beyond.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer font-montserrat text-sm"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Our Events</h4>
            <ul className="space-y-2">
              {eventTypes.map((event, index) => (
                <li key={index}>
                  <Link
                    to="offerings"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer font-montserrat text-sm"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    {event}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Contact Information</h4>
            <address className="not-italic space-y-3 text-primary-foreground/80 font-montserrat text-sm">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                123 Event Avenue, Banjara Hills,<br />
                Hyderabad, Telangana 500034
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                +91 9876543210
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                contact@aviraevents.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70 font-montserrat text-sm">
            Copyright &copy; {currentYear} Avira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
