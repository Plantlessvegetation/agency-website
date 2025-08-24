import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, TrendingUp, Award, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Helmet } from 'react-helmet-async';

const projects = [
  // --- Web Development Projects (12 new + 1 existing = 13 total) ---
  {
    id: 1,
    title: 'Corporate Website for "Innovate Solutions"',
    category: 'Web Development',
    description: 'Designed and developed a professional corporate website to enhance brand credibility and lead generation.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Responsive Design', 'SEO', 'Lead Generation'],
    results: {
      leads: '+500/year',
      rankings: 'Top 10',
      credibility: 'Enhanced'
    },
    testimonial: 'We now have a professional online presence that truly reflects our brand. New client inquiries have increased dramatically.',
    client: 'Ankit Patel, Director',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 2,
    title: 'Portfolio Site for "Creative Minds"',
    category: 'Web Development',
    description: 'Developed a dynamic online portfolio to showcase creative work and attract new freelance clients.',
    image: '/api/placeholder/600/400',
    tags: ['Gatsby', 'Contentful', 'Animation', 'SEO'],
    results: {
      traffic: '+150%',
      inquiries: '+80%',
      design: 'Award Winning'
    },
    testimonial: 'My new portfolio site is a work of art! It’s professional, fast, and has already helped me land new clients.',
    client: 'Priya Singh, Freelance Artist',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 3,
    title: 'Website for "Bharat Architects"',
    category: 'Web Development',
    description: 'A modern, clean website to showcase architectural projects and attract high-end clients.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Next.js', 'UI/UX', 'Gallery'],
    results: {
      inquiries: '+60%',
      engagement: '+40%',
      loading: 'Fast'
    },
    testimonial: 'The website beautifully displays our work. It has given our firm a significant professional edge.',
    client: 'Sameer Gupta, Lead Architect',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 4,
    title: 'Booking Site for "The Urban Salon"',
    category: 'Web Development',
    description: 'Designed a seamless online booking system, reducing no-shows and simplifying appointment management.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Booking System', 'Payments', 'Local SEO'],
    results: {
      bookings: '+70%',
      efficiency: 'Improved',
      retention: '+25%'
    },
    testimonial: 'Our clients love the new booking site. It has made managing our appointments so much easier.',
    client: 'Kavita Desai, Owner',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 5,
    title: 'Business Website for "LegalShield India"',
    category: 'Web Development',
    description: 'Developed a secure and informative website for a legal firm, ensuring client confidentiality and trust.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Security', 'Content Management', 'Analytics'],
    results: {
      leads: '+40%',
      trust: 'High',
      traffic: '+80%'
    },
    testimonial: 'The new site has elevated our online credibility. We are getting more qualified leads than ever before.',
    client: 'Aarav Kumar, Partner',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 6,
    title: 'Web Application for "TaskManager"',
    category: 'Web Development',
    description: 'Built a custom project management web application for internal use, improving team productivity.',
    image: '/api/placeholder/600/400',
    tags: ['MERN Stack', 'Custom App', 'Real-time', 'Dashboard'],
    results: {
      productivity: '+30%',
      efficiency: 'Streamlined',
      adoption: '100%'
    },
    testimonial: 'This app has completely transformed how our team works. It\'s intuitive and perfectly tailored to our needs.',
    client: 'Rohit Verma, Operations Head',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 7,
    title: 'Restaurant Website for "Spice Route"',
    category: 'Web Development',
    description: 'Designed a visually appealing website with an integrated menu and online ordering system.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Online Ordering', 'Gallery', 'UX'],
    results: {
      orders: '+50%',
      visibility: 'Increased',
      engagement: '+60%'
    },
    testimonial: 'The online ordering system has been a game-changer for us. It’s so easy for our customers to use.',
    client: 'Meera Singh, Owner',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 8,
    title: 'NGO Website for "Help India Now"',
    category: 'Web Development',
    description: 'A donation-focused website to raise awareness and funds for social causes across India.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Donation System', 'SEO', 'Mobile-first'],
    results: {
      donations: '+100%',
      reach: 'Wider',
      volunteers: '+75%'
    },
    testimonial: 'Their work has helped us connect with more donors and volunteers than ever. It\'s truly making a difference.',
    client: 'Deepak Rao, Program Director',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 9,
    title: 'Healthcare Website for "AyuCare Clinic"',
    category: 'Web Development',
    description: 'A professional and trustworthy platform for a modern healthcare clinic, with a focus on patient information and appointments.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Security', 'Appointments', 'Blog'],
    results: {
      patients: '+30%',
      credibility: 'High',
      info: 'Accessible'
    },
    testimonial: 'The website is a great resource for our patients and has streamlined our appointment process significantly.',
    client: 'Dr. Neha Shah, Clinic Head',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 10,
    title: 'Educational Portal for "SkillUp Academy"',
    category: 'Web Development',
    description: 'Developed an online portal with course listings and registration forms for a training institute.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Firebase', 'CMS', 'Enrollment'],
    results: {
      enrollments: '+40%',
      conversions: '+20%',
      usability: 'Excellent'
    },
    testimonial: 'The new portal has made it incredibly easy for students to find and enroll in our courses.',
    client: 'Kunal Verma, Administrator',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 11,
    title: 'Real Estate Website for "Prime Properties"',
    category: 'Web Development',
    description: 'A professional property listing website with advanced search filters and lead capture forms.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'Maps API', 'Filters'],
    results: {
      leads: '+90%',
      listings: 'Showcased',
      traffic: '+60%'
    },
    testimonial: 'The website has become our most effective lead generation tool. We get so many inquiries from it now.',
    client: 'Vijay Sharma, Real Estate Agent',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 12,
    title: 'Portfolio for "Digital Artist"',
    category: 'Web Development',
    description: 'A sleek, minimalist portfolio site to showcase high-resolution digital art to a global audience.',
    image: '/api/placeholder/600/400',
    tags: ['Vue.js', 'Netlify', 'Cloudinary', 'Masonry'],
    results: {
      visibility: 'Global',
      commissions: '+50%',
      load: 'Instant'
    },
    testimonial: 'I am so happy with my new site. It loads fast and makes my art look stunning. I\'ve already received multiple commission requests.',
    client: 'Alisha Khan, Digital Artist',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 13,
    title: 'Company Blog for "TechGeeks"',
    category: 'Web Development',
    description: 'A robust blog platform built for a tech company to share industry insights and news.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Blog', 'SEO', 'Mobile-Friendly'],
    results: {
      subscribers: '+200%',
      organic_traffic: '+120%',
      domain_authority: 'Increased'
    },
    testimonial: 'Our new blog is a powerhouse for content marketing. We’ve seen a huge spike in our organic reach.',
    client: 'Sanjay Rawat, Content Head',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  // --- E-commerce Projects (9 new) ---
  {
    id: 14,
    title: 'E-commerce Store for "FashionForward"',
    category: 'E-commerce',
    description: 'Developed a high-converting e-commerce store on Shopify, leading to significant sales growth.',
    image: '/api/placeholder/600/400',
    tags: ['Shopify', 'E-commerce', 'Payment Gateway', 'Analytics'],
    results: {
      revenue: '₹5L+ M.o.M',
      conversion: '+30%',
      traffic: '+50%'
    },
    testimonial: 'The team helped us launch our online store seamlessly. The sales have been fantastic and the site is easy to manage.',
    client: 'Priya Sharma, Founder',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 15,
    title: 'Online Store for "Artisanal Foods"',
    category: 'E-commerce',
    description: 'Created a digital storefront for a premium food brand with secure, user-friendly ordering.',
    image: '/api/placeholder/600/400',
    tags: ['WooCommerce', 'WordPress', 'Inventory', 'Logistics'],
    results: {
      orders: '+80%',
      revenue: '₹2L+ M.o.M',
      repeat_customers: '30%'
    },
    testimonial: 'Our online sales have grown so much since the launch. The platform is reliable and easy to use.',
    client: 'Anjali Gupta, Owner',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 16,
    title: 'Dropshipping Site for "Trendy Gadgets"',
    category: 'E-commerce',
    description: 'Built an automated dropshipping store to tap into the high-demand electronics market in India.',
    image: '/api/placeholder/600/400',
    tags: ['Shopify', 'Automation', 'Logistics', 'Suppliers'],
    results: {
      revenue: '₹1L+ M.o.M',
      efficiency: 'High',
      margin: 'Healthy'
    },
    testimonial: 'The system runs on its own, allowing us to focus on marketing. It\'s a brilliant solution.',
    client: 'Rahul Singh, Entrepreneur',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 17,
    title: 'Marketplace for "Handmade Treasures"',
    category: 'E-commerce',
    description: 'A multi-vendor marketplace connecting local artisans with buyers across India.',
    image: '/api/placeholder/600/400',
    tags: ['Marketplace', 'Multi-vendor', 'Payments', 'Logistics'],
    results: {
      vendors: '100+',
      users: '10K+',
      orders: '+100%'
    },
    testimonial: 'The platform has empowered so many artisans. It\'s the perfect space to showcase handmade crafts.',
    client: 'Sonali Verma, Founder',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 18,
    title: 'FMCG E-commerce Site for "FreshHarvest"',
    category: 'E-commerce',
    description: 'A full-fledged e-commerce platform for a food and beverage brand, with subscription options.',
    image: '/api/placeholder/600/400',
    tags: ['Magento', 'FMCG', 'Subscriptions', 'SEO'],
    results: {
      revenue: '₹3L+ M.o.M',
      repeat_orders: '40%',
      traffic: '+60%'
    },
    testimonial: 'The subscription model they integrated has given us predictable revenue. The platform is highly scalable.',
    client: 'Gaurav Jain, CEO',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 19,
    title: 'Custom Store for "Wellness Labs"',
    category: 'E-commerce',
    description: 'A custom-built e-commerce site for a niche health and wellness brand with specific product requirements.',
    image: '/api/placeholder/600/400',
    tags: ['Custom Build', 'React', 'Node.js', 'Payments'],
    results: {
      conversion: '+35%',
      sales: '+50%',
      brand_image: 'Premium'
    },
    testimonial: 'We needed a highly customized solution, and they delivered exactly what we envisioned. It\'s a perfect fit for our brand.',
    client: 'Nisha Bedi, Marketing Head',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 20,
    title: 'Jewelry E-commerce Site for "Aarna Jewels"',
    category: 'E-commerce',
    description: 'A stunning e-commerce site focused on high-quality visuals and a luxurious user experience.',
    image: '/api/placeholder/600/400',
    tags: ['Shopify', 'Photography', 'UI/UX', 'Mobile-first'],
    results: {
      average_order: '+20%',
      conversions: '+25%',
      user_satisfaction: 'High'
    },
    testimonial: 'Our new store looks exquisite and functions flawlessly. Our customers love the beautiful design and simple checkout process.',
    client: 'Sneha Rao, Designer',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 21,
    title: 'Apparel Store for "Urban Threads"',
    category: 'E-commerce',
    description: 'A modern and trendy online store for a fast-fashion brand, with a focus on quick product updates and social media integration.',
    image: '/api/placeholder/600/400',
    tags: ['Shopify', 'Instagram', 'Analytics', 'Fulfillment'],
    results: {
      sales: '+150%',
      traffic: '+80%',
      social_reach: '+100%'
    },
    testimonial: 'The platform is perfect for our needs. We can add new collections effortlessly, and the site is a hit on social media.',
    client: 'Rohan Mehta, Brand Manager',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 22,
    title: 'Sports Gear E-commerce for "Active Life"',
    category: 'E-commerce',
    description: 'An easy-to-navigate store for a sports equipment brand, with clear product categories and a seamless purchasing experience.',
    image: '/api/placeholder/600/400',
    tags: ['WooCommerce', 'Content', 'Payments', 'SEO'],
    results: {
      sales: '+90%',
      bounce_rate: 'Reduced',
      organic_traffic: '+70%'
    },
    testimonial: 'The site has made our products much more accessible to a wider audience. The sales are a clear sign of success.',
    client: 'Aditya Singh, Operations',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 23,
    title: 'Bakery E-commerce Site for "The Sweet Spot"',
    category: 'E-commerce',
    description: 'A charming online bakery store with custom delivery slot and order-ahead features.',
    image: '/api/placeholder/600/400',
    tags: ['WordPress', 'Local Delivery', 'Order Ahead', 'Payments'],
    results: {
      orders: '+120%',
      customer_satisfaction: 'High',
      repeat_orders: '40%'
    },
    testimonial: 'The new site is fantastic! The pre-ordering feature has been incredibly popular and helps us manage our kitchen better.',
    client: 'Pooja Sharma, Head Baker',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 24,
    title: 'Home Decor E-commerce for "Casa Bella"',
    category: 'E-commerce',
    description: 'A visually driven e-commerce platform for a home decor brand, with a focus on product showcases and interior inspiration.',
    image: '/api/placeholder/600/400',
    tags: ['Shopify', 'UI/UX', 'Visuals', 'Content Marketing'],
    results: {
      average_order: '+30%',
      engagement: '+60%',
      brand_image: 'Refined'
    },
    testimonial: 'The website is a work of art. It truly captures the essence of our brand and has helped us attract a premium clientele.',
    client: 'Karan Malhotra, Designer',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  // --- Digital Marketing Projects (7 new) ---
  {
    id: 25,
    title: 'Lead Generation Campaign for "Global Realty"',
    category: 'Digital Marketing',
    description: 'Executed a targeted digital marketing campaign to generate high-quality leads for a real estate firm.',
    image: '/api/placeholder/600/400',
    tags: ['Google Ads', 'SEO', 'Lead Magnets', 'Landing Page'],
    results: {
      leads: '+150%',
      cost_per_lead: 'Reduced by 40%',
      conversion_rate: '+20%'
    },
    testimonial: 'The campaign has been incredibly successful. We are getting more qualified leads at a much lower cost.',
    client: 'Rajiv Kapoor, Marketing Manager',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 26,
    title: 'Content Marketing for "Healthify"',
    category: 'Digital Marketing',
    description: 'Developed and executed a content strategy to establish a health and wellness brand as an industry authority.',
    image: '/api/placeholder/600/400',
    tags: ['Content Marketing', 'SEO', 'Blog', 'Social Media'],
    results: {
      organic_traffic: '+200%',
      subscribers: '+150%',
      domain_authority: 'Increased'
    },
    testimonial: 'Our blog is now a go-to resource for our audience. The growth in our organic traffic is a testament to their strategy.',
    client: 'Ananya Sharma, Founder',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 27,
    title: 'Social Media Strategy for "Artisans of India"',
    category: 'Digital Marketing',
    description: 'Managed social media channels to build a community and increase brand engagement for a local craft business.',
    image: '/api/placeholder/600/400',
    tags: ['Social Media', 'Community', 'Engagement', 'Instagram'],
    results: {
      engagement: '+300%',
      followers: '+200%',
      brand_awareness: 'High'
    },
    testimonial: 'They have truly captured our brand voice on social media. Our community is more active than ever!',
    client: 'Megha Reddy, Co-Founder',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 28,
    title: 'SEO for "Travel Trails"',
    category: 'Digital Marketing',
    description: 'A comprehensive SEO campaign to improve search engine rankings and attract more qualified traffic.',
    image: '/api/placeholder/600/400',
    tags: ['SEO', 'Keyword Research', 'Link Building', 'Analytics'],
    results: {
      organic_traffic: '+180%',
      ranking: 'Top 3',
      leads: '+90%'
    },
    testimonial: 'We now rank for our main keywords. The increase in organic traffic has been incredible.',
    client: 'Vikram Choudhury, CEO',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 29,
    title: 'PPC Management for "Gadget Hub"',
    category: 'Digital Marketing',
    description: 'Managed a Google Ads campaign to maximize ROI and drive targeted sales for an electronics retailer.',
    image: '/api/placeholder/600/400',
    tags: ['PPC', 'Google Ads', 'ROI', 'Retargeting'],
    results: {
      ROI: '5X',
      sales: '+120%',
      ad_spend: 'Optimized'
    },
    testimonial: 'Our ad spend is now much more efficient, and we\'re seeing a fantastic return on our investment.',
    client: 'Sameer Khan, Manager',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 30,
    title: 'Email Marketing for "Bookworm Cafe"',
    category: 'Digital Marketing',
    description: 'Developed an email marketing strategy to build a loyal customer base and promote events.',
    image: '/api/placeholder/600/400',
    tags: ['Email Marketing', 'Automation', 'CRM', 'Promotions'],
    results: {
      open_rate: '+40%',
      event_signups: '+75%',
      customer_loyalty: 'Increased'
    },
    testimonial: 'Our email list has become our most valuable asset. The automated campaigns are working wonders for us.',
    client: 'Rhea Desai, Owner',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
  {
    id: 31,
    title: 'Digital Marketing for "The Fitness Studio"',
    category: 'Digital Marketing',
    description: 'A comprehensive digital marketing package to drive local memberships and online class signups.',
    image: '/api/placeholder/600/400',
    tags: ['Local SEO', 'Social Media', 'PPC', 'Community Building'],
    results: {
      memberships: '+60%',
      online_signups: '+50%',
      local_ranking: 'Improved'
    },
    testimonial: 'We are now visible to so many more people in our area. The online signups have made our lives so much easier.',
    client: 'Amit Sharma, Studio Manager',
    liveUrl: '#',
    caseStudyUrl: '#'
  },
];

const categories = ['All', 'Web Development', 'E-commerce', 'Digital Marketing'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Portfolio - Web Development & Digital Marketing Projects India | DigitalForge</title>
        <meta name="description" content="Explore successful web development, e-commerce, and digital marketing projects by DigitalForge. See how we've helped Indian businesses grow." />
        <link rel="canonical" href="https://yourdomain.com/portfolio" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Portfolio | Web Development & Digital Marketing" />
        <meta property="og:description" content="View our case studies and successful projects for businesses in India." />
        <meta property="og:url" content="https://yourdomain.com/portfolio" />
        <meta property="og:image" content="https://yourdomain.com/og-portfolio.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Portfolio | DigitalForge" />
        <meta name="twitter:description" content="See our work in web development, e-commerce, and digital marketing." />
        <meta name="twitter:image" content="https://yourdomain.com/og-portfolio.jpg" />
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
              <Award className="w-4 h-4 mr-2" />
              Portfolio & Case Studies
            </Badge>
            {/* The main <h1> for the page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Portfolio – Web Development & Digital Marketing Projects India
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover how we've helped businesses achieve extraordinary growth through 
              strategic digital solutions and innovative approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm py-2">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Note: Replace this placeholder with a real image */}
                      <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </CardDescription>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-sm italic text-muted-foreground mb-2">
                      "{project.testimonial}"
                    </blockquote>
                    <cite className="text-xs font-medium">- {project.client}</cite>

                    {/* CTA */}
                    <Button className="w-full mt-6" variant="outline" asChild>
                      <a href={project.caseStudyUrl}>
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Portfolio Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real numbers from real projects that showcase our commitment to delivering results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Websites Delivered' },
              { number: '₹25L+', label: 'Client Revenue Generated' },
              { number: '15+', label: 'Ongoing Clients' },
              { number: '3+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <a href="/contact">
                Start Your Project
                <TrendingUp className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}