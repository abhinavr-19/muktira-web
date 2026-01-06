import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Trash2, Package, LogOut, Shield, Loader2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useProducts } from '@/contexts/ProductContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Admin: React.FC = () => {
  const { products, addProduct, deleteProduct } = useProducts();
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  const handleLogout = async () => {
    await signOut();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.image) {
      toast.error('Please fill in all required fields');
      return;
    }

    addProduct({
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      description: formData.description,
      category: formData.category,
    });

    setFormData({ name: '', price: '', image: '', description: '', category: '' });
    toast.success('Product added successfully');
  };

  const handleDeleteProduct = (id: string, name: string) => {
    deleteProduct(id);
    toast.success(`${name} has been deleted`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <>
        <Helmet>
          <title>Access Denied - Muktira</title>
        </Helmet>
        <Layout>
          <section className="min-h-screen flex items-center justify-center py-32 px-4">
            <div className="text-center max-w-md">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-secondary" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
                Access Denied
              </h1>
              <p className="font-body text-muted-foreground mb-8">
                You don't have permission to access the admin dashboard. 
                Only administrators can manage products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="gold">Go to Home</Button>
                </Link>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Muktira</title>
      </Helmet>
      <Layout>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Admin Dashboard
                  </h1>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                    <Shield className="h-3 w-3" />
                    Admin
                  </span>
                </div>
                <p className="font-body text-muted-foreground">
                  Welcome, {user.email}
                </p>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Add Product Form */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded-xl shadow-sm sticky top-28">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" />
                    Add New Product
                  </h2>
                  <form onSubmit={handleAddProduct} className="space-y-4">
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Product Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Royal Kundan Necklace"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Price (INR) *
                      </label>
                      <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="4999"
                        required
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Image URL *
                      </label>
                      <Input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://images.unsplash.com/..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Category
                      </label>
                      <Input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Necklaces"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Description
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the product..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" variant="gold" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Product
                    </Button>
                  </form>
                </div>
              </div>

              {/* Products List */}
              <div className="lg:col-span-2">
                <div className="bg-card p-6 rounded-xl shadow-sm">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Products ({products.length})
                  </h2>
                  
                  {products.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                      <p className="font-body text-muted-foreground">
                        No products yet. Add your first product!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="flex gap-4 p-4 bg-ivory-dark rounded-lg hover:shadow-gold transition-shadow duration-300"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-heading font-semibold text-foreground truncate">
                                  {product.name}
                                </h3>
                                {product.category && (
                                  <span className="inline-block text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded mt-1">
                                    {product.category}
                                  </span>
                                )}
                              </div>
                              <span className="font-heading font-bold text-primary whitespace-nowrap">
                                {formatPrice(product.price)}
                              </span>
                            </div>
                            <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:bg-destructive/10 shrink-0"
                            onClick={() => handleDeleteProduct(product.id, product.name)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Admin;
