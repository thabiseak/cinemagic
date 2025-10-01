'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, MapPin, Star, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactCTA() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+94 77 621 6556',
      action: 'Call Now',
      href: 'tel:+94776216556',
      color: 'text-primary-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Instant messaging',
      action: 'WhatsApp Chat',
      href: 'https://wa.me/94776216556',
      color: 'text-green-500',
    },
    {
      icon: Calendar,
      title: 'Book Consultation',
      description: 'Free 30-min call',
      action: 'Schedule Now',
      href: '#booking',
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      title: 'Visit Studio',
      description: 'Jaffna, Sri Lanka',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=Jaffna,Sri+Lanka',
      color: 'text-purple-500',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Couples' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-20 bg-cosmic-gradient relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-star-field opacity-10"></div>
      <div className="absolute inset-0 bg-nebula opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Create <span className="text-cosmic">Magic</span> Together?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Let’s discuss your vision and create something extraordinary. 
            Every love story deserves to be told beautifully.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-space-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300 premium-hover cosmic-glow">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-space-800/50 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300`}>
                    <method.icon className={`w-8 h-8 ${method.color} group-hover:text-primary-500 transition-colors duration-300`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {method.description}
                    </p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary-500/20 group-hover:text-primary-500 transition-all duration-300"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-space-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-500 mb-2 animate-pulse-glow">
                  {stat.number}
                </div>
                <div className="text-white/70 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">
              Let’s Start Your Journey
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Every great love story begins with a single moment. 
              Let’s capture yours together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="primary"
              size="lg"
              className="cosmic-glow group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +94 77 621 6556
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="glass-effect group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-primary-500 fill-current" />
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
              <span>Premium Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}