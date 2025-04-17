
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Ready to start planning your special event? Get in touch with our team and let's create something extraordinary together.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedElement className="bg-background rounded-lg shadow-sm border border-border p-8" animation="slide-right">
            <h3 className="text-2xl font-semibold font-playfair text-primary mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-montserrat">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-montserrat">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 font-montserrat">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-montserrat">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-montserrat font-medium transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </AnimatedElement>

          {/* Contact Info and Map */}
          <AnimatedElement className="space-y-8" animation="slide-left" delay={200}>
            {/* Contact Info */}
            <div className="bg-background rounded-lg shadow-sm border border-border p-8">
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
                    <p className="text-muted-foreground font-montserrat">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1 font-montserrat">Email</h4>
                    <p className="text-muted-foreground font-montserrat">contact@aviraevents.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1 font-montserrat">Address</h4>
                    <p className="text-muted-foreground font-montserrat">
                      123 Event Avenue, Banjara Hills<br />
                      Hyderabad, Telangana 500034<br />
                      India
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
                      <a href="#" className="text-foreground hover:text-primary transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-foreground hover:text-primary transition-colors">
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-background rounded-lg shadow-sm border border-border p-8">
              <h3 className="text-2xl font-semibold font-playfair text-primary mb-6">
                Our Location
              </h3>
              <div className="aspect-video w-full rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60882.91737674308!2d78.4073110889341!3d17.44927169449932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1684309182456!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Avira Events Location"
                ></iframe>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
