import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Sales Growth',
    client: 'Urban Attire',
    description: 'Scaled a Shopify store from ₹50k/month to ₹3L/month in 6 months.',
    image: '/api/placeholder/400/250',
    tags: ['E-commerce', 'Shopify', 'Analytics'],
    results: {
      metric1: '₹3L/month Achieved',
      metric2: '250% Traffic Increase',
      metric3: '45% Conversion Rate',
    },
    category: 'E-commerce',
  },
  {
    id: 2,
    title: 'Lead Generation for SaaS',
    client: 'Synapse Tech',
    description: 'Developed a high-converting SaaS landing page that increased signups by 40%.',
    image: '/api/placeholder/400/250',
    tags: ['Web Development', 'Lead Generation', 'UI/UX'],
    results: {
      metric1: '40% Signup Increase',
      metric2: '50% Bounce Rate Decrease',
      metric3: '1000+ New Users/Month',
    },
    category: 'Web Development',
  },
  {
    id: 3,
    title: 'Corporate Presence & Leads',
    client: 'Global Consultants',
    description: 'Delivered a professional corporate portfolio site that brought 500+ new leads in one year.',
    image: '/api/placeholder/400/250',
    tags: ['Web Development', 'Corporate', 'SEO'],
    results: {
      metric1: '500+ New Leads',
      metric2: 'Top 10 Google Ranking',
      metric3: '200% Increase in Traffic',
    },
    category: 'Web Development',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. Discover how we've helped companies achieve 
            extraordinary growth through strategic digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Image Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 text-primary/60" />
                      <p className="text-xs text-muted-foreground">[Case Study Image]</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {study.client}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground">
                    {study.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Key Results:</span>
                    </div>
                    {Object.values(study.results).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3" />
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors" asChild>
                    <Link to="/portfolio">
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
            <Link to="/portfolio">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}