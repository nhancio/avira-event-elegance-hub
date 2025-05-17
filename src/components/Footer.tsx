import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, MessageCircle, ChevronRight } from 'lucide-react';

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
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="mb-4">
              <img 
                src="/images/avirapng.png" 
                alt="Avira Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 font-montserrat text-sm">
              Crafting unforgettable memories through exceptional event planning and management in Hyderabad and beyond.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/_avira_events_/" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/916304408747?text=Hey%2C%20I%20want%20to%20enquire%20about%20Avira%20events" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold font-playfair mb-3">Quick Links</h4>
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
            <h4 className="text-base font-semibold font-playfair mb-3">Our Events</h4>
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
            <h4 className="text-base font-semibold font-playfair mb-3">Contact Information</h4>
            <address className="not-italic space-y-3 text-primary-foreground/80 font-montserrat text-sm">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                House no.8-320, Road no. 5, New Vivekananda Colony,<br />
                Quthbullapur, Chinthal, Hyderabad-500054
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                +91 63044 08747, +91 99599 79157
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                shravyajilla@gmail.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center">
          <p className="text-primary-foreground/70 font-montserrat text-sm">
            Copyright &copy; {currentYear} Avira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
