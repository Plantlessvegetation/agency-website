import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@digitalforge.com',
    description: 'Send us an email anytime',
    href: 'mailto:hello@digitalforge.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Digital Avenue',
    description: 'Tech City, TC 12345',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 8:00 AM - 6:00 PM',
    description: 'Weekend: By appointment',
    href: '#'
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DigitalForge",
    "image": "https://yourdomain.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "Tech City",
      "postalCode": "12345",
      "addressCountry": "India"
    },
    "telephone": "+1-555-123-4567",
    "email": "hello@digitalforge.com",
    "url": "https://yourdomain.com/contact"
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Contact DigitalForge | Web Development & Marketing Agency India</title>
        <meta name="description" content="Get in touch with DigitalForge for web development, SEO, and marketing services in India. Call, email, or visit us today." />
        <link rel="canonical" href="https://yourdomain.com/contact" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact DigitalForge | Web Development & Marketing Agency India" />
        <meta property="og:description" content="Reach out to DigitalForge for your website, SEO, and digital marketing needs." />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:image" content="https://yourdomain.com/og-contact.jpg" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Badge>
            {/* The main <h1> for the page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact DigitalForge – Web Development & Marketing Agency India
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business? Get in touch with our experts and discover 
              how we can help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="marketplace">Marketplace Solutions</SelectItem>
                          <SelectItem value="dropshipping">Dropshipping</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project and goals..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Quick Response Guarantee</h3>
                  <p className="text-white/90 text-sm mb-4">
                    We respond to all inquiries within 2 hours during business hours.
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Find Us on the Map</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our office is located in the heart of Tech City, ready to welcome you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9"
          >
            {/* Note: Replace this iframe with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019864234057!2d144.96328!3d-37.81421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6b3a2f7c0a!2sTech%20City!5e0!3m2!1sen!2sin!4v1625458055660!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Our location on Google Maps"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Prefer a Different Way to Connect?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the communication method that works best for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@digitalforge.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}