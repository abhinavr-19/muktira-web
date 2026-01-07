import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Elegant jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-body text-primary tracking-wide">
              Crafted with Love
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Timeless
            <span className="block text-gradient-gold">Elegance</span>
            Redefined
          </h1>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-ivory/80 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our exquisite collection of handcrafted imitation jewelry,
            where tradition meets contemporary design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/collection">
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="xl"
                className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-ivory/50 text-xs font-body uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
