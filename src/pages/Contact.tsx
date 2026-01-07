import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Muktira | Get in Touch</title>
        <meta
          name="description"
          content="Contact Muktira for inquiries about our jewelry collection, custom orders, or any questions. We're here to help!"
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-ivory-dark to-background">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
              Have a question or need assistance? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-gold">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="font-body text-muted-foreground">
                    We're here to help with any questions about our collection,
                    custom orders, or jewelry care advice.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: 'Phone',
                      content: '+91 99465 82510',
                      href: 'tel:+919946582510',
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      content: 'muktira.store@gmail.com',
                      href: 'mailto:muktira.store@gmail.com',
                    },
                    {
                      icon: MapPin,
                      title: 'Address',
                      content: '123 Jewel Street, Alappuzha, Kerala 690558',
                    },
                    {
                      icon: Clock,
                      title: 'Business Hours',
                      content: 'Mon - Sat: 10:00 AM - 8:00 PM',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 bg-ivory-dark rounded-lg"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {item.title}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-body text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="font-body text-muted-foreground">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8568869875247!2d72.8316!3d18.9322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xffffffff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Muktira Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
