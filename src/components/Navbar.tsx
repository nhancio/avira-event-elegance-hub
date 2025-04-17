
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Offerings', to: 'offerings' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  // Standardized scroll settings for consistent experience
  const scrollSettings = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 800, // Increased for smoother animation
    delay: 0,      // Remove any delay that might cause the initial slowness
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="home" 
              {...scrollSettings}
              className="cursor-pointer"
            >
              <h1 className="text-2xl md:text-3xl font-bold font-playfair text-primary">
                Avira<span className="text-secondary">.</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                {...scrollSettings}
                className="text-foreground hover:text-primary font-montserrat text-sm uppercase tracking-wide cursor-pointer transition-colors"
                activeClass="text-primary font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              {...scrollSettings}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-montserrat uppercase tracking-wide cursor-pointer transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  {...scrollSettings}
                  className="text-foreground hover:text-primary font-montserrat text-sm uppercase tracking-wide cursor-pointer transition-colors py-2"
                  activeClass="text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                {...scrollSettings}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-montserrat uppercase tracking-wide cursor-pointer transition-colors w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
