import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Why a Strong Online Presence is Critical for Indian Businesses Today',
    excerpt: 'In the digital age, a professional website is your most valuable asset. Learn how it builds trust, attracts customers, and drives growth in the Indian market.',
    category: 'Business',
    author: 'Vinayak Shukla',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-25',
    readTime: '7 min read',
    featured: true,
    image: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Modern Web Development Technologies',
    excerpt: 'Explore the latest technologies like React, Next.js, and Framer that are used to build high-performance, scalable websites. A must-read for anyone starting a new project.',
    category: 'Web Development',
    author: 'Aditya Bajpai',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-22',
    readTime: '10 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'How Digital Marketing Builds Trust and Drives Customer Loyalty',
    excerpt: 'Discover the strategic steps to build a strong brand presence and engage with your audience. We cover social media, content strategy, and paid advertising.',
    category: 'Marketing',
    author: 'Rhythm',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-20',
    readTime: '8 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Beyond Keywords: Advanced SEO Strategies for 2025',
    excerpt: 'Move past the basics. Our experts share insights on technical SEO, link building, and content clusters to help your website dominate search rankings.',
    category: 'SEO',
    author: 'Priya Sharma',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-18',
    readTime: '9 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Creating High-Converting Shopify Stores for the Indian Market',
    excerpt: 'A step-by-step guide to building a profitable e-commerce store. We cover custom theme development, payment gateways, and local marketing tips.',
    category: 'E-commerce',
    author: 'Kunal Verma',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-15',
    readTime: '12 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'The Role of Custom Software in Streamlining Your Operations',
    excerpt: 'Learn how multi-user panels, custom dashboards, and automation tools can improve your team\'s productivity and business efficiency.',
    category: 'Technology',
    author: 'Anjali Gupta',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-10',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 7,
    title: 'Marketing Automation 101: Tools and Tactics for Beginners',
    excerpt: 'An introductory guide to marketing automation. Discover how to save time and increase your ROI with tools like HubSpot and Mailchimp.',
    category: 'Marketing',
    author: 'Rohit Mehta',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-05',
    readTime: '5 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 8,
    title: 'From Idea to Reality: Building Your Custom SaaS Platform',
    excerpt: 'A deep dive into the process of building a custom SaaS platform. We explore key steps from concept validation to launch, focusing on scalability and user experience.',
    category: 'Technology',
    author: 'Aditya Bajpai',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2025-08-01',
    readTime: '11 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
];

const categories = ['All', 'SEO', 'Marketing', 'E-commerce', 'Business', 'Technology', 'Web Development'];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const blogSchema = blogPosts.map(post => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://yourdomain.com${post.image}`,
    "datePublished": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  }));

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>DigitalForge Blog | SEO, Web Development & Marketing Insights</title>
        <meta name="description" content="Read the latest articles on SEO, digital marketing, web development, and business growth strategies by DigitalForge experts." />
        <link rel="canonical" href="https://yourdomain.com/blog" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="DigitalForge Blog | SEO & Digital Marketing Insights" />
        <meta property="og:description" content="Stay updated with expert tips on SEO, marketing, and web development." />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta property="og:image" content="https://yourdomain.com/og-blog.jpg" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
      
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
              <BookOpen className="w-4 h-4 mr-2" />
              Blog & Resources
            </Badge>
            {/* The main <h1> for the page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              DigitalForge Blog – Web Development & Marketing Tips India
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stay ahead of the curve with our latest insights on digital marketing, 
              web development, and business growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Note: Replace this placeholder with a real image and descriptive alt text */}
                      <img src={featuredPost.image} alt={`Article image for ${featuredPost.title}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <Badge>Featured</Badge>
                    </div>
                    
                    <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={featuredPost.authorImage} alt={featuredPost.author} />
                          <AvatarFallback>
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{featuredPost.author}</p>
                          <div className="flex items-center text-muted-foreground space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild>
                        {/* The "Read More" button for the featured post now links to a dynamic URL */}
                        <Link to={`/blog/${featuredPost.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Note: Replace this placeholder with a real image and descriptive alt text */}
                      <img src={post.image} alt={`Article image for ${post.title}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.authorImage} alt={post.author} />
                          <AvatarFallback className="text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-xs text-muted-foreground">
                          <p>{post.author}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-xs text-muted-foreground space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary/10 transition-colors" asChild>
                      {/* The "Read More" buttons now link to dynamic URLs */}
                      <Link to={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
                <p className="text-white/90 mb-6">
                  Get the latest articles and insights delivered straight to your inbox. 
                  No spam, just valuable content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button variant="secondary">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}