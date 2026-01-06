import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from './CartContext';

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Royal Kundan Necklace',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    description: 'Exquisite kundan necklace with intricate craftsmanship',
    category: 'Necklaces',
  },
  {
    id: '2',
    name: 'Pearl Drop Earrings',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
    description: 'Elegant pearl drop earrings for a classic look',
    category: 'Earrings',
  },
  {
    id: '3',
    name: 'Temple Gold Bangles',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    description: 'Traditional temple design gold-plated bangles',
    category: 'Bangles',
  },
  {
    id: '4',
    name: 'Diamond Studded Ring',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',
    description: 'Stunning diamond-studded ring for special occasions',
    category: 'Rings',
  },
  {
    id: '5',
    name: 'Antique Maang Tikka',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80',
    description: 'Beautiful antique finish maang tikka',
    category: 'Hair Accessories',
  },
  {
    id: '6',
    name: 'Polki Choker Set',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    description: 'Royal polki choker set with matching earrings',
    category: 'Necklaces',
  },
  {
    id: '7',
    name: 'Meenakari Jhumkas',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80',
    description: 'Colorful meenakari jhumka earrings',
    category: 'Earrings',
  },
  {
    id: '8',
    name: 'Bridal Haath Phool',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    description: 'Intricate bridal hand jewelry',
    category: 'Bridal',
  },
];

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
  featuredProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('muktira-products');
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem('muktira-products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const featuredProducts = products.slice(0, 4);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        featuredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
