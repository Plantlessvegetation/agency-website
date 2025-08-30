import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ShoppingCart, 
  Filter, 
  Star, 
  Truck, 
  Shield, 
  Award,
  Search,
  Package
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing & Fashion',
    description: 'Trendy apparel and accessories',
    productCount: '10,000+',
    image: '/api/placeholder/300/200',
    suppliers: 250
  },
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    description: 'Latest tech and electronic devices',
    productCount: '5,000+',
    image: '/api/placeholder/300/200',
    suppliers: 180
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Household items and home decor',
    productCount: '8,000+',
    image: '/api/placeholder/300/200',
    suppliers: 320
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    description: 'Wellness and beauty products',
    productCount: '3,000+',
    image: '/api/placeholder/300/200',
    suppliers: 150
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Fitness and outdoor equipment',
    productCount: '4,000+',
    image: '/api/placeholder/300/200',
    suppliers: 120
  },
  {
    id: 'toys',
    name: 'Toys & Kids',
    description: 'Children toys and accessories',
    productCount: '2,500+',
    image: '/api/placeholder/300/200',
    suppliers: 90
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Bluetooth Headphones',
    category: 'Electronics',
    price: 'From ₹300',
    discount: '50%',
    rating: 4.8,
    reviews: 1249,
    supplier: 'TechGlobal Co.',
    image: '/api/placeholder/250/250',
    shipping: 'Free worldwide'
  },
  {
    id: 2,
    name: 'Premium Cotton T-Shirt',
    category: 'Clothing',
    price: 'From ₹120',
    discount: '48%',
    rating: 4.6,
    reviews: 856,
    supplier: 'Fashion Hub Ltd.',
    image: '/api/placeholder/250/250',
    shipping: '2-day delivery'
  },
  {
    id: 3,
    name: 'Smart Home Security Camera',
    category: 'Home & Living',
    price: 'From ₹1299',
    discount: '49%',
    rating: 4.9,
    reviews: 2103,
    supplier: 'SmartTech Solutions',
    image: '/api/placeholder/250/250',
    shipping: 'Express shipping'
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Verified Suppliers',
    description: 'All suppliers are thoroughly vetted and verified for quality and reliability.'
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Worldwide shipping options with tracking and insurance included.'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: '30-day quality guarantee on all products with easy returns.'
  },
  {
    icon: Star,
    title: 'Best Prices',
    description: 'Competitive wholesale prices with bulk order discounts available.'
  }
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
              <Package className="w-4 h-4 mr-2" />
              Marketplace & Suppliers
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Global Marketplace
              </span>
              <br />
              Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with verified suppliers worldwide. Access thousands of products 
              across multiple categories with competitive pricing and reliable shipping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products or suppliers..."
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive range of product categories with verified suppliers and competitive prices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Package className="w-12 h-12 mx-auto mb-2 text-primary/60" />
                        <p className="text-xs text-muted-foreground">[Category Image]</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm">
                        <span className="font-semibold text-primary">{category.productCount}</span>
                        <span className="text-muted-foreground"> products</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {category.suppliers} suppliers
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Explore Category
                      <ShoppingCart className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of trending products with the best deals and fastest shipping.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ShoppingCart className="w-12 h-12 mx-auto mb-2 text-primary/60" />
                        <p className="text-xs text-muted-foreground">[Product Image]</p>
                      </div>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      -{product.discount}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">by {product.supplier}</p>
                    <p className="text-sm text-green-600 mb-4">{product.shipping}</p>
                    
                    <Button className="w-full">
                      Contact Supplier
                      <ShoppingCart className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Marketplace?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a secure, reliable platform that connects you with trusted suppliers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses who trust our marketplace for their sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Become a Partner
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}