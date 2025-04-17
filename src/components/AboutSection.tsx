
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const AboutSection = () => {
  const highlights = [
    'Decade of industry experience',
    'Dedicated team of professionals',
    'Personalized planning approach',
    'Attention to every detail',
    'Trusted by 500+ clients',
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <AnimatedElement animation="fade-in" className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                alt="Avira team planning an event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <AnimatedElement className="absolute -bottom-6 -right-6 w-2/3 h-32 bg-accent rounded-lg shadow-xl hidden md:flex items-center justify-center p-6" animation="slide-left" delay={500}>
              <p className="text-lg font-playfair italic text-primary">
                "We don't just plan events, we craft experiences that create lasting memories."
              </p>
            </AnimatedElement>
          </AnimatedElement>

          {/* Content Column */}
          <AnimatedElement animation="slide-right" delay={200} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary">
              About Avira
            </h2>
            <p className="text-muted-foreground font-montserrat">
              Founded with a passion for creating exceptional events, Avira is Hyderabad's premier event management company. We combine creativity with meticulous planning to transform your vision into unforgettable experiences.
            </p>
            <p className="text-muted-foreground font-montserrat">
              Our team of experienced professionals is dedicated to handling every aspect of your event with precision and elegance. From concept development to flawless execution, we ensure that each celebration reflects your unique style and exceeds your expectations.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((highlight, index) => (
                <AnimatedElement key={index} animation="fade-in" delay={300 + (index * 100)} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <Check size={14} className="text-secondary-foreground" />
                  </div>
                  <p className="font-montserrat text-foreground">{highlight}</p>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
