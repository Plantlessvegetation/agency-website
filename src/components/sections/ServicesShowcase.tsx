import { motion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  Search, 
  ShoppingCart, 
  Package, 
  Truck,
  Globe,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and applications built with cutting-edge technologies',
    features: ['Responsive Design', 'Performance Optimized', 'SEO Ready'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive engagement and conversions',
    features: ['Social Media Management', 'Content Strategy', 'Paid Advertising'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your search rankings and organic traffic',
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Solutions',
    description: 'Complete e-commerce and marketplace integration',
    features: ['Multi-platform Listing', 'Inventory Management', 'Sales Analytics'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Package,
    title: 'Supplier Network',
    description: 'Access to quality suppliers for various product categories',
    features: ['Product Sourcing', 'Quality Assurance', 'Competitive Pricing'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Truck,
    title: 'Dropshipping Services',
    description: 'End-to-end fulfillment and logistics management',
    features: ['Automated Processing', 'Global Shipping', 'Order Tracking'],
    color: 'from-pink-500 to-pink-600',
  },
];

export default function ServicesShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Digital Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, we provide end-to-end services to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors" asChild>
                    <Link to="/services">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
            <Link to="/services">
              View All Services
              <BarChart3 className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}