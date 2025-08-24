import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to E-commerce SEO in 2024',
    excerpt: 'Discover the latest SEO strategies that are driving e-commerce success in 2024. From technical optimizations to content strategies.',
    category: 'SEO',
    author: 'Sarah Chen',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-03-15',
    readTime: '8 min read',
    featured: true,
    image: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'Dropshipping vs. Traditional E-commerce: Which is Right for You?',
    excerpt: 'A comprehensive comparison of dropshipping and traditional e-commerce models, including pros, cons, and when to choose each.',
    category: 'Business',
    author: 'Michael Rodriguez',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-03-12',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Web Design Trends That Will Dominate 2024',
    excerpt: 'From AI-powered interfaces to sustainable design practices, explore the web design trends shaping the digital landscape.',
    category: 'Design',
    author: 'Emily Johnson',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-03-10',
    readTime: '5 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'How to Scale Your Digital Marketing in 2024',
    excerpt: 'Proven strategies for scaling your digital marketing efforts, from automation tools to advanced analytics.',
    category: 'Marketing',
    author: 'Alex Morgan',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-03-08',
    readTime: '7 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Building High-Converting Landing Pages',
    excerpt: 'Learn the essential elements and psychology behind landing pages that convert visitors into customers.',
    category: 'Conversion',
    author: 'David Kim',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-03-05',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing and what it means for businesses.',
    category: 'Technology',
    author: 'Lisa Wang',
    authorImage: '/api/placeholder/40/40',
    publishDate: '2024-03-01',
    readTime: '9 min read',
    featured: false,
    image: '/api/placeholder/400/250'
  }
];

const categories = ['All', 'SEO', 'Marketing', 'Design', 'Business', 'Technology', 'Conversion'];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              <BookOpen className="w-4 h-4 mr-2" />
              Blog & Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Insights
              </span>
              <br />
              & Expert Tips
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
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary/60" />
                        <p className="text-sm text-muted-foreground">[Featured Article Image]</p>
                      </div>
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
                      
                      <Button>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
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
                      <div className="text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary/60" />
                        <p className="text-xs text-muted-foreground">[Article Image]</p>
                      </div>
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
                    
                    <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary/10 transition-colors">
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3" />
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