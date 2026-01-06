import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-ivory-dark">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button
            className="p-3 bg-card rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 hover:bg-primary hover:text-primary-foreground"
            aria-label="Quick view"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={handleAddToCart}
            className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150 hover:bg-primary/90"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>

        {/* Category Badge */}
        {product.category && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-card/90 backdrop-blur-sm text-xs font-body uppercase tracking-wider rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-heading text-lg font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-heading text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddToCart}
            className="group/btn"
          >
            <ShoppingBag className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
