import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Anjali Sharma',
    role: 'Founder, DesiDukaan',
    company: 'DesiDukaan',
    image: '/api/placeholder/64/64',
    rating: 5,
    quote: 'They built a great website for my small business. It was affordable and looks professional. My customers can now find me online easily.',
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    role: 'Marketing Head',
    company: 'InnovateTech Solutions',
    image: '/api/placeholder/64/64',
    rating: 5,
    quote: 'The team helped us with our SEO. We\'ve started ranking for a few keywords, which is a big deal for us. The traffic is slowly improving.',
  },
  {
    id: 3,
    name: 'Priya Singh',
    role: 'E-commerce Lead',
    company: 'EthnicThreads',
    image: '/api/placeholder/64/64',
    rating: 5,
    quote: 'Our new e-commerce site is fantastic. It’s much faster, and the payment gateway integration was seamless. Sales have picked up since the launch.',
  },
  {
    id: 4,
    name: 'Sandeep Reddy',
    role: 'Managing Partner',
    company: 'Reddy & Associates',
    image: '/api/placeholder/64/64',
    rating: 5,
    quote: 'They designed a professional business website for our firm. It has really helped us build credibility with new clients. Very happy with the result.',
  },
  {
    id: 5,
    name: 'Kavita Desai',
    role: 'Founder',
    company: 'Aura Spa & Wellness',
    image: '/api/placeholder/64/64',
    rating: 5,
    quote: 'We needed a simple website to showcase our services. The team delivered a clean, elegant site that our clients love. The booking feature works perfectly.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what some of our happy clients across India have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 mx-auto mb-6 text-primary/20" />
                      
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg lg:text-xl italic mb-8 text-muted-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-sm text-primary">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}