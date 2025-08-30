import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, Star, ArrowRight, IndianRupee, MessageCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    name: 'Web Development',
    description: 'Beautiful, high-performing websites to establish and grow your business online.',
    id: 'web-dev',
    hasFixedPricing: false,
    features: [
      'React and Next.js Websites',
      'Custom Shopify Theme Development',
      'WordPress & Framer Sites',
      'Custom Backend & API Development',
      'Multi-user Dashboards',
      'Advanced Security & Performance Optimization',
      'Mobile-first & Responsive Design'
    ]
  },
  {
    name: 'Custom SaaS Development',
    description: 'Build your own scalable Software-as-a-Service platform from the ground up.',
    id: 'saas-dev',
    hasFixedPricing: false,
    features: [
      'Multi-tenant Architecture',
      'Subscription & Billing Management',
      'User Management & Role-Based Access',
      'Custom Dashboards & Analytics',
      'Scalable Cloud Infrastructure (AWS, Azure)',
      'API Integration & Development',
      'Data Security & Compliance',
      'White-label & Brand Customization'
    ]
  },
  {
    name: 'Digital Marketing',
    description: 'Strategic marketing to increase your brand visibility and drive conversions.',
    id: 'marketing',
    hasFixedPricing: false,
    features: [
      'Social Media Management (SMO/SMM)',
      'Paid Advertising (Google Ads, Facebook Ads)',
      'Content Marketing Strategy',
      'Email Marketing Campaigns',
      'Influencer Marketing',
      'Marketing Automation',
      'Conversion Rate Optimization',
      'Analytics & Reporting'
    ]
  },
  {
    name: 'SEO & Reporting',
    description: 'Improve your search engine rankings and get found by more customers.',
    id: 'seo',
    hasFixedPricing: true,
    plans: [
      {
        name: 'SEO Audit & Report',
        price: '3,499',
        popular: false,
        duration: 'One-time',
        features: [
          'Comprehensive website health audit',
          'Competitor analysis (up to 3)',
          'Keyword research report',
          'Actionable plan to improve rankings'
        ],
      },
      {
        name: 'Basic SEO',
        price: '15,999',
        popular: false,
        duration: '/month',
        features: [
          'On-page optimization (up to 10 pages)',
          'Monthly content writing (1 blog post)',
          'Keyword rank tracking',
          'Google Analytics & Search Console setup'
        ],
      },
      {
        name: 'Advanced SEO',
        price: 'Custom Quote',
        popular: true,
        duration: '',
        features: [
          'All Basic SEO features',
          'High-quality link building',
          'Technical SEO audits and fixes',
          'Content cluster strategy',
          'Comprehensive reporting and strategy sessions'
        ],
      },
    ]
  },
  {
    name: 'Dropshipping-Logistics Services',
    description: 'Seamless logistics and reliable shipping for your e-commerce business.',
    id: 'shipping',
    hasFixedPricing: false,
    features: [
      'Automated Order Processing',
      'Global Shipping Network',
      'Real-time Order Tracking',
      'Inventory Management',
      'Customer Service Support',
      'Returns & Refunds Handling',
      'Integration with E-commerce Platforms',
      'Performance Analytics'
    ]
  },
  {
    name: 'Marketplace Listing & Sales Growth',
    description: 'Maximize your reach and sales across multiple online marketplaces.',
    id: 'marketplace',
    hasFixedPricing: false,
    features: [
      'Multi-platform Marketplace Setup',
      'Product Listing Optimization',
      'Inventory Management',
      'Price Optimization',
      'Review Management',
      'Sales Analytics',
      'Cross-platform Synchronization',
      'Performance Monitoring'
    ]
  },
  {
    name: 'Supplier Solutions',
    description: 'Connect with verified suppliers and streamline your sourcing process.',
    id: 'suppliers',
    hasFixedPricing: false,
    features: [
      'Verified Supplier Network',
      'Product Sourcing',
      'Quality Assurance',
      'Competitive Pricing Negotiation',
      'Sample Procurement',
      'Bulk Order Management',
      'Supply Chain Optimization',
      'International Shipping Coordination'
    ]
  },
];

export default function Pricing() {
  const serviceSchema = serviceCategories.map(category => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": category.name,
    "description": category.description,
    "provider": {
      "@type": "Organization",
      "name": "Galaxy V-Ecom"
    }
  }));

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Our Services & Solutions | Web Development & Digital Marketing India - Galaxy V-Ecom</title>
        <meta name="description" content="Explore our comprehensive suite of web development, SEO, digital marketing, and e-commerce solutions. We offer tailored services for every business need in India." />
        <link rel="canonical" href="https://yourdomain.com/pricing" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Services & Solutions | Galaxy V-Ecom" />
        <meta property="og:description" content="Discover our wide range of services for web design, marketing, SEO, and business growth." />
        <meta property="og:url" content="https://yourdomain.com/pricing" />
        <meta property="og:image" content="https://yourdomain.com/og-services.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galaxy V-Ecom Services & Solutions" />
        <meta name="twitter:description" content="Tailored digital solutions for web development and marketing in India." />
        <meta name="twitter:image" content="https://yourdomain.com/og-services.jpg" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Galaxy V-Ecom Pricing Plans for Web Development & Digital Marketing Services in India
      </h1>
      
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
              <Star className="w-4 h-4 mr-2" />
              Our Solutions
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Services Designed for Your Success
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Choose the perfect solution for your business. Our service-based pricing ensures you only pay for what you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.id} className="mb-20">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">{category.name}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </motion.div>

              {category.hasFixedPricing ? (
                // Fixed pricing layout with cards
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.plans.map((plan, planIndex) => (
                    <motion.div
                      key={planIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: planIndex * 0.1 }}
                      className="relative"
                    >
                      <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105' : 'bg-card/50 backdrop-blur-sm border-border/50'} hover:shadow-xl transition-all duration-300`}>
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader>
                          <CardTitle className="text-2xl">{plan.name}</CardTitle>
                          
                          <div className="py-4">
                            <div className="text-4xl font-bold">
                              {plan.price !== 'Custom Quote' ? (
                                <>
                                  <IndianRupee className="inline-block h-6 w-6" />{plan.price}
                                  <span className="text-lg font-normal text-muted-foreground">{plan.duration}</span>
                                </>
                              ) : (
                                <span className="text-2xl font-bold">{plan.price}</span>
                              )}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="flex-grow flex flex-col justify-between">
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Button 
                            className={`w-full mt-auto ${plan.popular 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                              : ''
                            }`}
                            variant={plan.popular ? 'default' : 'outline'}
                            asChild
                          >
                            <Link to="/contact">
                              {plan.price !== 'Custom Quote' ? 'Get Started' : 'Contact Sales'}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Custom quote layout
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Left half: Features */}
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl">Features included in our {category.name}</CardTitle>
                      <CardDescription>
                        A tailored solution for your specific business needs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.features?.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Right half: CTA */}
                  <Card className="h-full flex flex-col justify-center items-center bg-card/50 backdrop-blur-sm border-border/50 text-center">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold">Get a Custom Quote</CardTitle>
                      <CardDescription className="text-lg">
                        Tell us about your project, and we'll create a plan that fits your goals and budget.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="w-full flex flex-col gap-4">
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                        <Link to="/contact">
                          Fill Out the Form
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full" asChild>
                        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:+911234567890">
                          <Phone className="mr-2 h-5 w-5" />
                          Call Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
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
              Join hundreds of businesses that trust us for their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                <Link to="/contact">
                  Start Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}