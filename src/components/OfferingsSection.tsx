
import React from 'react';
import { Calendar, Cake, Home, Users, Building, Gift } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const OfferingsSection = () => {
  const offerings = [
    {
      title: 'Weddings',
      description: 'Elegant ceremonies and receptions tailored to your vision, creating magical moments that last a lifetime.',
      icon: Calendar,
      delay: 100,
    },
    {
      title: 'Birthdays',
      description: 'Spectacular celebrations for all ages, from intimate gatherings to lavish themed parties.',
      icon: Cake,
      delay: 200,
    },
    {
      title: 'Gruha Pravesham',
      description: 'Traditional housewarming ceremonies that honor cultural values while welcoming prosperity to your new home.',
      icon: Home,
      delay: 300,
    },
    {
      title: 'Anniversaries',
      description: 'Romantic celebrations marking your special milestones with thoughtful details and meaningful touches.',
      icon: Users,
      delay: 400,
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings from conferences to team-building events, designed to impress and inspire.',
      icon: Building,
      delay: 500,
    },
    {
      title: 'Custom Celebrations',
      description: 'Bespoke events crafted for any occasion, bringing your unique vision to life with creativity and elegance.',
      icon: Gift,
      delay: 600,
    },
  ];

  return (
    <section id="offerings" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement className="text-center mb-16" animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-primary mb-4">
            Our Offerings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-montserrat">
            From intimate gatherings to grand celebrations, we provide comprehensive event management services tailored to your unique vision.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <AnimatedElement 
              key={index} 
              animation="slide-up" 
              delay={offering.delay}
              className="bg-background rounded-lg shadow-sm border border-border p-6 transition-all hover:shadow-md hover:border-secondary group"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <offering.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold font-playfair text-foreground mb-3 transition-all group-hover:text-primary">
                {offering.title}
              </h3>
              <p className="text-muted-foreground font-montserrat">
                {offering.description}
              </p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
