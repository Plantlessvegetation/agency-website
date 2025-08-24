import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-48 translate-y-48" />
            </div>
            
            <CardContent className="relative p-8 lg:p-12 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Join 500+ successful businesses that have accelerated their growth with our 
                  comprehensive digital solutions. Let's build something amazing together.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-3 h-auto"
                  asChild
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 h-auto"
                  asChild
                >
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Free</div>
                  <div className="text-white/80">Initial Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">30-Day</div>
                  <div className="text-white/80">Money-Back Guarantee</div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}