import React from 'react';
import { Gem, Award, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Quality',
    description: 'Each piece is crafted with the finest materials and attention to detail.',
  },
  {
    icon: Award,
    title: 'Expert Artisans',
    description: 'Our skilled craftsmen bring decades of experience to every creation.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every piece is infused with passion and dedication to perfection.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality checks ensure lasting beauty and durability.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-ivory-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-gold-lg">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                alt="Muktira craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-gold max-w-xs hidden lg:block">
              <p className="font-heading text-4xl font-bold text-primary">15+</p>
              <p className="font-body text-muted-foreground text-sm mt-1">
                Years of Excellence in Jewelry Crafting
              </p>
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
                Our Heritage
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Celebrating the Art of
                <span className="text-gradient-gold"> Indian Jewelry</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                At Muktira, we believe that jewelry is more than just an accessory—it's 
                a celebration of heritage, a symbol of love, and an expression of 
                individuality. Our collection blends traditional craftsmanship with 
                contemporary designs to create pieces that are both timeless and trendy.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 bg-card rounded-lg hover:shadow-gold transition-shadow duration-300"
                >
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

