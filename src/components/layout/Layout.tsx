import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from '@/components/cart/Cart';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Cart />
    </div>
  );
};

export default Layout;
