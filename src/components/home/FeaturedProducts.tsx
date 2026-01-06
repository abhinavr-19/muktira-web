import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProducts } from '@/contexts/ProductContext';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProducts: React.FC = () => {
  const { featuredProducts } = useProducts();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-primary">
            Curated Selection
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Featured Collection
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Handpicked pieces that embody the essence of elegance and craftsmanship
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link to="/collection">
            <Button variant="gold" size="lg">
              View Full Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
