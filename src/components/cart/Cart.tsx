import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Cart: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-xl font-semibold">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <p className="font-heading text-lg text-muted-foreground">
                Your cart is empty
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Add some beautiful jewelry to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-ivory-dark rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-primary font-semibold text-sm mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-muted-foreground">Subtotal</span>
              <span className="font-heading text-xl font-bold text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Button variant="gold" className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <Button
              variant="ghost"
              className="w-full text-muted-foreground"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
