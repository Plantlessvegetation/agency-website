import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Award,
    number: 20,
    suffix: '+',
    label: 'Websites Delivered',
    description: 'Beautiful and functional sites launched',
  },
  {
    icon: TrendingUp,
    number: 25,
    suffix: 'L+',
    label: 'Client Revenue Generated',
    description: 'For our clients, in Indian Rupees',
  },
  {
    icon: Users,
    number: 15,
    suffix: '+',
    label: 'Ongoing Clients',
    description: 'Long-term partnerships for continuous growth',
  },
  {
    icon: Clock,
    number: 3,
    suffix: '+',
    label: 'Years Experience',
    description: 'Expertise in digital transformation',
  },
];

function Counter({ number, duration = 2 }: { number: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const startCount = 0;
      const endCount = number;

      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(startCount + (endCount - startCount) * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(endCount);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, number, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Proven Track Record of Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers don't lie. See how we've helped businesses achieve remarkable growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-border transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.label === 'Client Revenue Generated' && '₹'}
                    <Counter number={stat.number} />
                    {stat.suffix}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}