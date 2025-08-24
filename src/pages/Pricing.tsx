import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, Star, ArrowRight, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    name: 'Web Development',
    description: 'Beautiful, high-performing websites to establish and grow your business online.',
    id: 'web-dev',
    plans: [
      {
        name: 'Basic Website',
        price: '22,590',
        popular: false,
        duration: 'One-time',
        features: [
          'Responsive design (mobile-friendly)',
          'Up to 5 pages',
          'Contact form integration',
          'Basic SEO setup',
          'Google Maps integration',
          '2 rounds of design revisions'
        ],
      },
      {
        name: 'Advanced Business Website',
        price: '35,799',
        popular: true,
        duration: 'One-time',
        features: [
          'All Basic features',
          'Up to 10 pages',
          'Content Management System (CMS)',
          'Integrated blog with strategy',
          'Social media feed integration',
          'Advanced SEO features',
          'User testimonials section'
        ],
      },
      {
        name: 'E-commerce Store',
        price: '45,639',
        popular: false,
        duration: 'One-time',
        features: [
          'All Advanced features',
          'Up to 25 products listed',
          'Shopping cart functionality',
          'Secure payment gateway integration',
          'Product catalog and inventory management',
          'Order tracking and management',
          'Basic shipping and tax setup'
        ],
      },
    ]
  },
  {
    name: 'Digital Marketing',
    description: 'Strategic marketing to increase your brand visibility and drive conversions.',
    id: 'marketing',
    plans: [
      {
        name: 'Basic Marketing',
        price: '14,999',
        popular: false,
        duration: '/month',
        features: [
          'Social media setup on 2 platforms',
          '8 social media posts per month',
          'Basic keyword research',
          'Monthly performance reports',
          'Email support'
        ],
      },
      {
        name: 'Growth Marketing',
        price: '29,999',
        popular: true,
        duration: '/month',
        features: [
          'All Basic features',
          'Social media on 3 platforms',
          '15 posts/month including video',
          'Google Ads setup & management',
          'Bi-weekly performance reports',
          'Priority email & phone support'
        ],
      },
      {
        name: 'Comprehensive Marketing',
        price: '49,999',
        popular: false,
        duration: '/month',
        features: [
          'All Growth features',
          'Social media on 5 platforms',
          '30 posts/month with high-quality graphics',
          'Advanced content strategy',
          'Dedicated account manager',
          '24/7 priority support'
        ],
      },
    ]
  },
  {
    name: 'SEO & Reporting',
    description: 'Improve your search engine rankings and get found by more customers.',
    id: 'seo',
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
    name: 'Shipping Solutions',
    description: 'Seamless logistics and reliable shipping for your e-commerce business.',
    id: 'shipping',
    plans: [
      {
        name: 'Starter',
        price: '499',
        popular: false,
        duration: '/month',
        features: [
          'Rates starting at ₹35/500g',
          'Access to multiple courier partners',
          'Real-time tracking',
          'Basic customer support',
          'Up to 50 shipments per month'
        ],
      },
      {
        name: 'Growth',
        price: '1,499',
        popular: true,
        duration: '/month',
        features: [
          'Rates starting at ₹32/500g',
          'All Starter features',
          'Up to 500 shipments per month',
          'Automated COD remittance',
          'Priority customer support',
          'Basic analytics and reporting'
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom Quote',
        popular: false,
        duration: '',
        features: [
          'Negotiated shipping rates',
          'Dedicated account manager',
          'API access for custom integrations',
          'Advanced analytics and reporting',
          'Unlimited monthly shipments'
        ],
      },
    ]
  }
];

export default function Pricing() {
  const serviceSchema = serviceCategories.map(category => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": category.name,
    "description": category.description,
    "provider": {
      "@type": "Organization",
      "name": "DigitalForge"
    }
  }));

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Pricing Plans | Web Development, Marketing & SEO Services India - DigitalForge</title>
        <meta name="description" content="Affordable pricing plans for web development, SEO, digital marketing, and shipping solutions in India. Choose a package that fits your business." />
        <link rel="canonical" href="https://yourdomain.com/pricing" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Pricing Plans | DigitalForge Services India" />
        <meta property="og:description" content="Transparent pricing for web design, marketing, SEO, and eCommerce solutions." />
        <meta property="og:url" content="https://yourdomain.com/pricing" />
        <meta property="og:image" content="https://yourdomain.com/og-pricing.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing Plans | DigitalForge" />
        <meta name="twitter:description" content="Affordable web development & digital marketing services in India." />
        <meta name="twitter:image" content="https://yourdomain.com/og-pricing.jpg" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        DigitalForge Pricing Plans for Web Development & Digital Marketing Services in India
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
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pricing Plans
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
            // Added id to each category for direct linking from Services page
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