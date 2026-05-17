import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Results', path: '/results' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-2 rounded-lg transition-transform group-hover:rotate-12">
            <BarChart3 className="text-brand-secondary w-6 h-6" />
          </div>
          <span className={cn(
            "text-xl font-serif font-bold tracking-tight",
            scrolled ? "text-brand-primary" : "text-brand-primary"
          )}>
            AllTrade<span className="text-brand-secondary">Forex</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-secondary',
                location.pathname === link.path ? 'text-brand-secondary' : 'text-brand-primary/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm">Enroll Now</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Enroll Now</Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
