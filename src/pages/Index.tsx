import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Muktira - Premium Imitation Jewelry | Elegant Indian Craftsmanship</title>
        <meta
          name="description"
          content="Discover Muktira's exquisite collection of handcrafted imitation jewelry. Premium kundan, polki, and traditional designs at affordable prices. Shop now!"
        />
        <meta name="keywords" content="imitation jewelry, kundan jewelry, Indian jewelry, bridal jewelry, gold plated jewelry, Muktira" />
      </Helmet>
      <Layout>
        <Hero />
        <FeaturedProducts />
        <AboutSection />
      </Layout>
    </>
  );
};

export default Index;
