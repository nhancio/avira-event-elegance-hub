import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop",
      alt: "Elegant wedding ceremony setup"
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop",
      alt: "Corporate event venue"
    },
    {
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop",
      alt: "Luxury birthday celebration"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40" />
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center z-10">
          <AnimatedElement className="max-w-4xl mx-auto" animation="fade-in">
            <h1 className="text-primary-foreground font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Crafting Unforgettable Memories
            </h1>
            <p className="text-primary-foreground/90 font-montserrat text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              From intimate gatherings to grand celebrations, we transform your vision into reality with elegance and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-montserrat font-medium transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Plan Your Event With Us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="offerings"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-md font-montserrat font-medium transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Slider Navigation Dots */}
      <AnimatedElement className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20" animation="slide-up" delay={600}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-6'
                : 'bg-primary-foreground/60 hover:bg-primary-foreground'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </AnimatedElement>
    </section>
  );
};

export default HeroSection;
