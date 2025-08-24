import { motion } from 'framer-motion';
import { Users, Award, Target, Lightbulb, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is designed with measurable outcomes and ROI in mind.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies to give you a competitive edge.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting partnerships, not just projects.',
  },
  {
    icon: Zap,
    title: 'Agile Approach',
    description: 'Fast execution without compromising quality. We adapt as we learn.',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Started with a vision to democratize digital excellence for businesses of all sizes.',
  },
  {
    year: '2020',
    title: 'First 100 Clients',
    description: 'Reached our first milestone during the digital transformation boom.',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Extended services internationally, helping businesses across 25+ countries.',
  },
  {
    year: '2022',
    title: 'Innovation Hub',
    description: 'Launched advanced AI-driven marketing solutions and automation platforms.',
  },
  {
    year: '2023',
    title: 'Market Leader',
    description: 'Became the go-to partner for digital transformation in multiple industries.',
  },
  {
    year: '2024',
    title: 'Future Focus',
    description: 'Continuing to innovate with Web3, AI, and next-generation digital solutions.',
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    image: '/api/placeholder/150/150',
    description: 'Visionary leader with 15+ years in digital transformation.',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: '/api/placeholder/150/150',
    description: 'Tech innovator specializing in scalable web architectures.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Marketing',
    image: '/api/placeholder/150/150',
    description: 'Growth expert who has driven $100M+ in client revenue.',
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Operations',
    image: '/api/placeholder/150/150',
    description: 'Operations strategist ensuring seamless project delivery.',
  },
];

export default function About() {
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
              <Users className="w-4 h-4 mr-2" />
              About DigitalForge
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Forging Digital Excellence
              </span>
              <br />
              Since 2019
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another digital agency. We're your partners in transformation, 
              combining strategic thinking with cutting-edge execution to deliver results that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses with digital solutions that drive growth, enhance efficiency, 
                and create lasting competitive advantages in an ever-evolving digital landscape.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the world's most trusted partner for digital transformation, known for 
                delivering exceptional results and fostering long-term business success.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground">[Mission & Vision Graphic]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a global digital agency, here's how we've grown.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-purple-600 hidden sm:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start space-x-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    <div className="flex-grow pb-8">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="secondary">{item.year}</Badge>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind DigitalForge, each bringing unique expertise and passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium mb-2">
                      {member.role}
                    </CardDescription>
                    <CardDescription>
                      {member.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}