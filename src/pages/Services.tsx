import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, 
  TrendingUp, 
  Search, 
  ShoppingCart, 
  Package, 
  Truck,
  Globe,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development & Maintenance',
    shortDescription: 'Custom websites and applications built with cutting-edge technologies',
    fullDescription: 'From concept to deployment, we create responsive, fast, and SEO-optimized websites that convert visitors into customers.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Performance Optimization',
      'Ongoing Maintenance & Support',
      'Security Implementation',
      'Cross-browser Compatibility'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'WordPress', 'Shopify'],
    color: 'from-blue-500 to-blue-600',
    pricing: 'Starting from ₹22,000'
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    shortDescription: 'Strategic campaigns that drive engagement and conversions',
    fullDescription: 'Comprehensive digital marketing strategies that amplify your brand presence and drive measurable business growth.',
    features: [
      'Social Media Management (SMO/SMM)',
      'Paid Advertising (Google Ads, Facebook Ads)',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Influencer Marketing',
      'Marketing Automation',
      'Conversion Rate Optimization',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'Facebook Business', 'HubSpot', 'Mailchimp', 'Hootsuite'],
    color: 'from-green-500 to-green-600',
    pricing: 'Starting from ₹14,999/month'
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Reports & Rank Optimization',
    shortDescription: 'Boost your search rankings and organic traffic',
    fullDescription: 'Data-driven SEO strategies that improve your search engine visibility and drive qualified organic traffic to your website.',
    features: [
      'Comprehensive SEO Audits',
      'Keyword Research & Strategy',
      'On-page Optimization',
      'Technical SEO',
      'Link Building Campaigns',
      'Local SEO',
      'Monthly Ranking Reports',
      'Competitor Analysis'
    ],
    technologies: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'Moz'],
    color: 'from-purple-500 to-purple-600',
    pricing: 'Starting from ₹3,499 (report generation)'
  },
  {
    id: 'marketplace',
    icon: ShoppingCart,
    title: 'Marketplace Listing & Sales Growth',
    shortDescription: 'Complete e-commerce and marketplace integration',
    fullDescription: 'Maximize your reach and sales across multiple online marketplaces with our comprehensive listing and optimization services.',
    features: [
      'Multi-platform Marketplace Setup',
      'Product Listing Optimization',
      'Inventory Management',
      'Price Optimization',
      'Review Management',
      'Sales Analytics',
      'Cross-platform Synchronization',
      'Performance Monitoring'
    ],
    technologies: ['Amazon Seller Central', 'eBay', 'Etsy', 'Walmart', 'Shopify', 'WooCommerce'],
    color: 'from-orange-500 to-orange-600',
    pricing: 'Starting from ₹7,999/month'
  },
  {
    id: 'suppliers',
    icon: Package,
    title: 'Supplier Solutions',
    shortDescription: 'Access to quality suppliers for various product categories',
    fullDescription: 'Connect with verified suppliers and streamline your sourcing process for clothing, gadgets, household items, and more.',
    features: [
      'Verified Supplier Network',
      'Product Sourcing',
      'Quality Assurance',
      'Competitive Pricing Negotiation',
      'Sample Procurement',
      'Bulk Order Management',
      'Supply Chain Optimization',
      'International Shipping Coordination'
    ],
    technologies: ['Alibaba', 'Global Sources', 'Made-in-China', 'TradeIndia'],
    color: 'from-cyan-500 to-cyan-600',
    pricing: 'Custom pricing based on requirements'
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Solutions',
    shortDescription: 'End-to-end fulfillment and logistics management',
    fullDescription: 'Complete dropshipping solution that handles everything from order processing to customer delivery, allowing you to focus on growth.',
    features: [
      'Automated Order Processing',
      'Global Shipping Network',
      'Real-time Order Tracking',
      'Inventory Management',
      'Customer Service Support',
      'Returns & Refunds Handling',
      'Integration with E-commerce Platforms',
      'Performance Analytics'
    ],
    technologies: ['Oberlo', 'Spocket', 'DSers', 'AliDropship', 'Modalyst'],
    color: 'from-pink-500 to-pink-600',
    pricing: 'Starting from ₹499'
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Digital
              </span>
              <br />
              Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From web development to digital marketing, we provide end-to-end services 
              that drive growth and transform your business in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Each card is a link that directs to a specific section on the pricing page */}
                <Link to={`/pricing#${service.id}`}>
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mb-4">
                        {service.shortDescription}
                      </CardDescription>
                      <div className="text-sm font-medium text-primary">{service.pricing}</div>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Detailed Service View */}
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{selectedService.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {selectedService.fullDescription}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="technologies">Technologies</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="technologies" className="mt-6">
                    <div className="flex flex-wrap gap-3">
                      {selectedService.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing" className="mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-4">
                        {selectedService.pricing}
                      </div>
                      <p className="text-muted-foreground mb-6">
                        All packages include consultation, strategy development, and ongoing support.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                          <Link to="/contact">
                            Get Custom Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                          <Link to="/pricing">View All Plans</Link>
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives results for your business.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link to="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}