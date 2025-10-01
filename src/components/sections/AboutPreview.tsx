'use client';

import { motion } from 'framer-motion';
import { Camera, Film, Award, Users, Star } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function AboutPreview() {
  const stats = [
    { number: '500+', label: 'Weddings Captured', icon: Camera },
    { number: '200+', label: 'Films Created', icon: Film },
    { number: '8+', label: 'Years Experience', icon: Award },
    { number: '1000+', label: 'Happy Couples', icon: Users },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael',
      role: 'Wedding Couple',
      content: 'Keerththikan captured our special day with such artistry and emotion. Every photo tells our love story beautifully.',
      image: '/images/testimonials/couple-1.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Priya Rajan',
      role: 'Graduation Client',
      content: 'The graduation photos were absolutely stunning. He made me feel like a movie star on my special day!',
      image: '/images/testimonials/graduation-1.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Raj & Priya',
      role: 'Engagement Couple',
      content: 'The engagement session was magical. Keerththikan has an incredible eye for capturing authentic moments.',
      image: '/images/testimonials/engagement-1.jpg',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-cosmic-gradient relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-star-field opacity-10"></div>
      <div className="absolute inset-0 bg-nebula opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
                Meet <span className="text-cosmic">Keerththikan</span>
              </h2>
              
              <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                <p>
                  With over 8 years of experience in wedding photography and cinematography, 
                  I specialize in capturing the raw emotions and intimate moments that make 
                  your special day truly unforgettable.
                </p>
                <p>
                  Based in Jaffna, Sri Lanka, I bring a unique artistic perspective to every 
                  wedding, engagement, and graduation celebration. My passion lies in 
                  storytelling through the lens, creating timeless memories that you’ll 
                  treasure forever.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-space-900/50 backdrop-blur-sm rounded-xl border border-white/10 cosmic-glow"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-500 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="cosmic-glow"
              >
                Read Full Story
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="glass-effect"
              >
                View Testimonials
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image & Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Photographer Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/keerththikan.jpg"
                  alt="Keerththikan - Wedding Photographer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium cosmic-glow"
              >
                Passionate Storyteller
              </motion.div>
            </div>

            {/* Testimonials Carousel */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">What Our Clients Say</h3>
              
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-space-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 cosmic-glow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-primary-500 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-white/80 text-sm mb-3">
                          “{testimonial.content}”
                        </blockquote>
                        
                        <div className="text-white/60 text-xs">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div>{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
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