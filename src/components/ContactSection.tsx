import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageSquare } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement className="text-center mb-12" animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Ready to start planning your special event? Get in touch with our team and let's create something extraordinary together.
          </p>
        </AnimatedElement>

        <AnimatedElement className="bg-background rounded-lg shadow-sm border border-border p-8 max-w-2xl mx-auto" animation="slide-up">
          <h3 className="text-2xl font-semibold font-playfair text-primary mb-6">
            Get in Touch
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1 font-montserrat">Phone</h4>
                <p className="text-muted-foreground font-montserrat">+91 63044 08747</p>
                <p className="text-muted-foreground font-montserrat">+91 99599 79157</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1 font-montserrat">Email</h4>
                <p className="text-muted-foreground font-montserrat">shravyajilla@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1 font-montserrat">Address</h4>
                <p className="text-muted-foreground font-montserrat">
                  House no.8-320, Road no. 5,<br />
                  New Vivekananda Colony,<br />
                  Quthbullapur, Chinthal,<br />
                  Hyderabad-500054
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1 font-montserrat">Social Media</h4>
                <div className="flex items-center gap-4 mt-2">
                  <a 
                    href="https://www.instagram.com/_avira_events_/" 
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;
