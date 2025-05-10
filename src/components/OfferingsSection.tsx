import React from 'react';
import { Calendar, Cake, Home, Users, Building, Gift } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

const OfferingsSection = () => {
  const offerings = [
    {
      title: 'Weddings',
      description: 'Elegant ceremonies and receptions tailored to your vision, creating magical moments that last a lifetime.',
      icon: Calendar,
      delay: 100,
      gradient: 'from-rose-100 to-rose-200',
      rotation: 'hover:-rotate-1',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Birthdays',
      description: 'Spectacular celebrations for all ages, from intimate gatherings to lavish themed parties.',
      icon: Cake,
      delay: 200,
      gradient: 'from-amber-50 to-amber-200',
      rotation: 'hover:rotate-1',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Gruha Pravesham',
      description: 'Traditional housewarming ceremonies that honor cultural values while welcoming prosperity to your new home.',
      icon: Home,
      delay: 300,
      gradient: 'from-green-50 to-green-200',
      rotation: 'hover:-rotate-1',
      image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Anniversaries',
      description: 'Romantic celebrations marking your special milestones with thoughtful details and meaningful touches.',
      icon: Users,
      delay: 400,
      gradient: 'from-purple-50 to-purple-200',
      rotation: 'hover:rotate-1',
      image: '/images/anniversary.jpg',
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings from conferences to team-building events, designed to impress and inspire.',
      icon: Building,
      delay: 500,
      gradient: 'from-blue-50 to-blue-200',
      rotation: 'hover:-rotate-1',
      image: '/images/corporate.jpg',
    },
    {
      title: 'Custom Celebrations',
      description: 'Bespoke events crafted for any occasion, bringing your unique vision to life with creativity and elegance.',
      icon: Gift,
      delay: 600,
      gradient: 'from-secondary/20 to-secondary/40',
      rotation: 'hover:rotate-1',
      image: '/images/custom.jpg',
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
            >
              <Card className={`overflow-hidden border-none shadow-lg transition-all duration-300 ${offering.rotation} h-full`}>
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={offering.image} 
                    alt={offering.title} 
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
                
                <CardContent className={`p-6 relative bg-gradient-to-br ${offering.gradient}`}>
                  <div className="absolute -top-8 left-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-primary shadow-md border-4 border-background transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <offering.icon size={28} />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold font-playfair text-foreground mb-3 transition-all group-hover:text-primary">
                      {offering.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-montserrat">
                      {offering.description}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/30" />
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
