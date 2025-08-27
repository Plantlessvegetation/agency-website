import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, BookOpen, ArrowRight, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

// This is the same blogPosts data as in your Blog.tsx file
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
    image: '/api/placeholder/600/300',
    content: `
      <p>In today's competitive landscape, having a strong online presence is no longer a luxury—it's a necessity. For Indian businesses, a well-designed website acts as a digital storefront that is open 24/7, providing a crucial platform to connect with customers, build credibility, and drive sales.</p>
      <p>A professional website is a powerful tool for building trust. It shows that your business is legitimate and serious about its offerings. Customers today are more likely to trust a business with a well-maintained, informative website than one without. It serves as a central hub for all your information, from your mission and services to your contact details and portfolio.</p>
      <p>Furthermore, an optimized online presence, including a strong social media presence and search engine visibility, allows you to reach a wider audience. This is particularly important in India, where the digital population is growing at an incredible pace. By leveraging platforms like Google and social media, you can attract new customers who are actively searching for your products or services.</p>
      <h3>Key Takeaways for Indian Businesses</h3>
      <ul>
        <li>A website is your digital storefront, open 24/7.</li>
        <li>It builds credibility and customer trust.</li>
        <li>Digital presence helps you reach a wider, national audience.</li>
        <li>It provides a platform to showcase your services and portfolio.</li>
      </ul>
      <p>Investing in your online presence is investing in the future of your business. It's the foundation for all your digital marketing efforts and the key to unlocking new growth opportunities.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>Modern web development has evolved significantly over the past decade. Gone are the days of static HTML pages. Today, the focus is on creating dynamic, fast, and highly interactive user experiences.</p>
      <p>At the forefront of this revolution are frameworks like **React** and **Next.js**. React is a JavaScript library for building user interfaces, while Next.js is a React framework that enables server-side rendering and static site generation, leading to incredible performance and improved SEO.</p>
      <p>For designers and those who want a code-free experience, tools like **Framer** are changing the game. Framer allows you to build stunning, animated websites with a visual editor, then gives you the option to export clean React code. This bridges the gap between design and development like never before.</p>
      <h3>Choosing the Right Technology Stack</h3>
      <p>The choice of technology depends on your project's needs. For a complex web application with a lot of data and user interactions, a MERN stack (MongoDB, Express, React, Node.js) might be a great choice. For a content-heavy website or blog, WordPress remains a powerful and user-friendly option. For an e-commerce platform, Shopify or WooCommerce offer robust, all-in-one solutions.</p>
      <p>Ultimately, a successful web development project relies on choosing the right tools for the job. Our team specializes in a wide range of modern technologies to ensure your website is not only beautiful but also scalable, secure, and future-proof.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>Digital marketing is more than just running ads; it's about building meaningful relationships with your customers. A well-executed marketing strategy creates a consistent brand voice and builds a community around your business.</p>
      <p>One of the most effective ways to build trust is through high-quality content. By creating valuable blog posts, articles, and videos, you position your brand as an industry expert. This not only attracts new customers but also keeps your existing customers engaged and loyal.</p>
      <h3>The Pillars of a Strong Digital Presence</h3>
      <ul>
        <li><b>Social Media:</b> Engage directly with your audience and build a community.</li>
        <li><b>Content Marketing:</b> Provide value through blogs, guides, and tutorials.</li>
        <li><b>Paid Advertising:</b> Use targeted ads to reach the right people at the right time.</li>
        <li><b>Email Marketing:</b> Nurture leads and build long-term relationships.</li>
      </ul>
      <p>A holistic digital marketing strategy ensures that every interaction a customer has with your brand is a positive one, reinforcing their trust and turning them into loyal advocates for your business.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>While keyword research is still foundational to SEO, the game has evolved. Search engines are now smarter than ever, prioritizing high-quality content and user experience. To stay ahead, you need to think beyond simple keyword stuffing.</p>
      <p>Technical SEO is now a non-negotiable. This includes ensuring your website has a fast loading speed, a mobile-first design, and a clean, logical site structure. A technically sound website is the bedrock of any successful SEO campaign.</p>
      <p>Another powerful strategy is **Content Clustering**. Instead of writing isolated articles, you create a central "pillar page" on a broad topic and then link to it from multiple related "cluster pages." This signals to Google that your pillar page is a comprehensive resource on the topic, boosting its authority and ranking potential.</p>
      <h3>What's Next for SEO?</h3>
      <ul>
        <li><b>Core Web Vitals:</b> Focus on user experience metrics for better rankings.</li>
        <li><b>E-E-A-T:</b> Build your brand's Expertise, Authoritativeness, and Trust.</li>
        <li><b>AI & Machine Learning:</b> Leverage AI tools for keyword discovery and content generation.</li>
      </ul>
      <p>The future of SEO is about providing the best possible experience for your users. By focusing on quality content, technical excellence, and user-centric design, you can achieve sustainable, long-term growth in search rankings.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>Shopify has become a go-to platform for e-commerce, offering a powerful, user-friendly solution for businesses of all sizes. But to succeed in the competitive Indian market, you need a store that not only looks great but also converts visitors into buyers.</p>
      <p>A key to success is a custom theme. While Shopify offers many templates, a custom theme allows you to create a unique brand identity and tailor the user experience to your specific audience. This can lead to higher conversion rates and a stronger brand perception.</p>
      <p>Equally important is the seamless integration of local payment gateways, a feature our team specializes in. Customers in India prefer a variety of payment options, from UPI to COD. Ensuring these integrations are smooth and secure is crucial for a successful checkout experience.</p>
      <h3>Essential Elements of a High-Converting Store</h3>
      <ul>
        <li><b>Custom Theme:</b> A unique design that reflects your brand.</li>
        <li><b>Local Payment Gateways:</b> Offer popular payment methods in India.</li>
        <li><b>Mobile Optimization:</b> Ensure a flawless shopping experience on all devices.</li>
        <li><b>Logistics Integration:</b> Partner with reliable Dropshipping-Logistics Services for timely delivery.</li>
      </ul>
      <p>By focusing on these core elements, you can build a Shopify store that not only drives sales but also fosters customer loyalty and long-term business growth in the Indian market.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>In a world where every second counts, custom software can be the secret weapon that gives your business a competitive edge. It's about building a solution that is perfectly tailored to your unique workflows, eliminating inefficiencies and boosting productivity.</p>
      <p>One of the most powerful tools we build is a multi-user panel. This allows different members of your team to have specific access and roles, ensuring a secure and streamlined workflow. From managing customer data to tracking project progress, a custom panel centralizes your operations.</p>
      <p><h3>Beyond the Website: Our Custom Solutions</h3>
      <p>Our custom software solutions are designed to simplify your life. We can build custom dashboards to give you a real-time overview of your business analytics, automate repetitive tasks with API integrations, and create scalable backend systems that grow with your company.</p>
      <p>Stop trying to fit a square peg into a round hole with off-the-shelf software. Our custom solutions are built from the ground up to solve your specific problems, giving you the power and flexibility you need to succeed.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>Marketing automation is the practice of using software to automate marketing activities. It's a game-changer for businesses looking to save time, increase efficiency, and deliver a more personalized customer experience.</p>
      <p>Tools like HubSpot and Mailchimp allow you to automate everything from email campaigns and social media posts to lead nurturing and customer support. By setting up these automated workflows, you can engage with your audience at the right time, with the right message, without manual intervention.</p>
      <p>This not only frees up your team to focus on higher-level strategy but also ensures a consistent and timely communication with your customers. The result is a more efficient marketing process, higher conversion rates, and a better return on your investment.</p>
    `
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
    image: '/api/placeholder/400/250',
    content: `
      <p>Building a successful SaaS platform is a marathon, not a sprint. It requires a strategic approach, from initial concept validation to final deployment and scaling. At DigitalForge, we guide you through every step of this journey, ensuring your vision becomes a profitable reality.</p>
      <p>The first step is always to validate your idea. We work with you to define your target audience, identify the core problem you're solving, and build a minimum viable product (MVP) to test the market. This lean approach saves time and resources, ensuring you're building a product that people actually need.</p>
      <p>Once validated, we focus on a scalable architecture. Using modern cloud technologies, we build a multi-tenant platform that can securely serve thousands of users. This includes implementing robust user management, flexible subscription models, and a custom API for future integrations.</p>
      <p>Finally, we don't just build and leave. We provide ongoing support, performance monitoring, and analytics dashboards to help you track your growth and make data-driven decisions. Our goal is to be your long-term technology partner, helping you scale your SaaS platform to new heights.</p>
    `
  },
];

const categories = ['All', 'SEO', 'Marketing', 'E-commerce', 'Business', 'Technology', 'Web Development'];

export default function BlogPost() {
  const { id } = useParams();
  const postId = parseInt(id as string);
  const post = blogPosts.find(p => p.id === postId);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://yourdomain.com${post.image}`,
    "datePublished": post.publishDate,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DigitalForge",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    },
    "description": post.excerpt,
    "url": `https://yourdomain.com/blog/${post.id}`
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>{post.title} | DigitalForge Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.id}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${post.title} | DigitalForge Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://yourdomain.com/blog/${post.id}`} />
        <meta property="og:image" content={`https://yourdomain.com${post.image}`} />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(postSchema)}
        </script>
      </Helmet>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="ghost" className="p-0" asChild>
                <Link to="/blog">
                  <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
                </Link>
              </Button>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-4 mb-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback className="text-xs">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <p className="font-medium text-sm">{post.author}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <p className="text-sm">{new Date(post.publishDate).toLocaleDateString()}</p>
              </div>
              <Badge variant="secondary" className="hidden sm:block">{post.category}</Badge>
            </div>
            
            <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl overflow-hidden mb-8">
              <img src={post.image} alt={`Featured image for ${post.title}`} className="w-full h-full object-cover" />
            </div>
            
            <div
              className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
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

// Re-export the blog posts to use in other files if needed
export { blogPosts };