import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Gem, Users, Award, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const stats = [
  { icon: Clock, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Gem, value: '1000+', label: 'Unique Designs' },
  { icon: Award, value: '25+', label: 'Industry Awards' },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Muktira - Our Story | Premium Imitation Jewelry</title>
        <meta
          name="description"
          content="Learn about Muktira's journey in crafting premium imitation jewelry. Our commitment to quality, tradition, and innovation."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-ivory-dark to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Our Story
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Crafting Dreams in Gold
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                For over a decade, Muktira has been at the forefront of creating 
                exquisite imitation jewelry that captures the essence of Indian heritage 
                while embracing contemporary elegance.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="font-heading text-3xl md:text-4xl font-bold text-ivory mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-ivory/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  A Legacy of Craftsmanship
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, Muktira began as a small family workshop in the 
                    heart of Mumbai. What started as a passion for preserving traditional 
                    jewelry-making techniques has blossomed into a beloved brand trusted 
                    by thousands of customers across India.
                  </p>
                  <p>
                    Our artisans, many of whom are third-generation craftsmen, bring 
                    decades of expertise to every piece they create. Each design is 
                    meticulously crafted, combining age-old techniques with modern 
                    aesthetics to create jewelry that's both timeless and trendy.
                  </p>
                  <p>
                    At Muktira, we believe that everyone deserves to wear beautiful 
                    jewelry without breaking the bank. That's why we use premium 
                    materials and expert craftsmanship to create pieces that look 
                    and feel luxurious, yet remain accessible to all.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-gold-lg">
                  <img
                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
                    alt="Muktira craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-ivory-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality First',
                  description: 'We never compromise on quality. Every piece undergoes rigorous quality checks to ensure it meets our high standards.',
                },
                {
                  title: 'Customer Love',
                  description: 'Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.',
                },
                {
                  title: 'Sustainable Practices',
                  description: 'We are committed to ethical sourcing and sustainable practices to protect our planet for future generations.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-card p-8 rounded-xl shadow-sm hover:shadow-gold transition-shadow duration-300"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
