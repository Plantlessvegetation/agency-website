import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/15551234567',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+15551234567',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@digitalforge.com',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4"
          >
            <Card className="p-4 w-64 bg-background/95 backdrop-blur-sm border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm">Contact Us</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-2">
                {contactOptions.map((option) => (
                  <a
                    key={option.label}
                    href={option.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-colors ${option.color}`}
                  >
                    <option.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{option.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
}