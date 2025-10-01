'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Award, Users, Heart, Star, Quote, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  const stats = [
    { icon: Camera, value: '500+', label: 'Weddings Captured' },
    { icon: Video, value: '200+', label: 'Films Created' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: Users, value: '1000+', label: 'Happy Couples' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael',
      role: 'Wedding Couple',
  content: 'Keerththikan captured our special day with such artistry and emotion. Every photo tells our love story beautifully. We couldn’t have asked for a better photographer.',
      rating: 5,
      image: '/images/testimonials/couple-1.jpg',
      location: 'Jaffna, Sri Lanka',
    },
    {
      id: 2,
      name: 'Dr. Priya Rajan',
      role: 'Graduation Client',
      content: 'The graduation photos were absolutely stunning. He made me feel like a movie star on my special day! The attention to detail and artistic vision is incredible.',
      rating: 5,
      image: '/images/testimonials/graduation-1.jpg',
      location: 'University of Jaffna',
    },
    {
      id: 3,
      name: 'Rajesh & Priya',
      role: 'Engagement Couple',
  content: 'Our engagement session was magical. Keerththikan has a gift for capturing genuine emotions and creating timeless memories. Highly recommended!',
      rating: 5,
      image: '/images/testimonials/engagement-1.jpg',
      location: 'Nallur Temple',
    },
    {
      id: 4,
      name: 'Dr. Suresh Kumar',
      role: 'Medical Graduation',
  content: 'Professional, creative, and passionate. The graduation film captured every emotion of our achievement. Thank you for making our day unforgettable.',
      rating: 5,
      image: '/images/testimonials/graduation-2.jpg',
      location: 'Jaffna Medical College',
    },
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Best Wedding Photographer',
      organization: 'Jaffna Photography Awards',
      description: 'Recognized for outstanding wedding photography in Northern Sri Lanka',
    },
    {
      year: '2023',
      title: 'Excellence in Cinematography',
      organization: 'Sri Lanka Film Awards',
      description: 'Award for exceptional wedding film production and storytelling',
    },
    {
      year: '2022',
      title: 'Client Choice Award',
      organization: 'Wedding Industry Awards',
      description: 'Highest client satisfaction rating in the region',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              About <span className="text-gradient">Keerththikan</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Passionate storyteller, artistic visionary, and your trusted partner in capturing life’s most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                  My <span className="text-gradient">Story</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  With over 8 years of experience in wedding photography and cinematography, 
                  I specialize in capturing the raw emotions and intimate moments that make 
                  your special day truly unforgettable.
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Based in Jaffna, Sri Lanka, I bring a unique artistic perspective to every 
                  wedding, engagement, and graduation celebration. My passion lies in 
                  storytelling through the lens, creating timeless memories that you’ll 
                  treasure forever.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Every couple has a unique love story, and my mission is to capture that 
                  story with authenticity, creativity, and emotional depth. From the nervous 
                  excitement of getting ready to the joyful celebration of the reception, 
                  I’m there to document every precious moment.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    >
                      <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/keerththikan.jpg"
                  alt="Keerththikan - Wedding Photographer"
                  fill
                  priority
                  sizes="(min-width: 1280px) 540px, (min-width: 1024px) 480px, (min-width: 768px) 60vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-xl shadow-2xl"
              >
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Passionate Storyteller</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Awards & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Recognition for excellence in wedding photography and cinematography
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">{achievement.year}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <div className="text-primary-500 font-medium mb-3">{achievement.organization}</div>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Hear from the couples and families who trusted us with their special moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Quote className="w-5 h-5 text-primary-500" />
                      <p className="text-white/80 italic">“{testimonial.content}”</p>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                      <div className="flex items-center space-x-1 text-white/50 text-xs mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500/10 via-black to-primary-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Let’s Create <span className="text-gradient">Magic</span> Together
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Ready to capture your special moments? Let’s discuss your vision and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-5 h-5" />
                <span>+94 77 621 6556</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-5 h-5" />
                <span>info@cinemagiccreations.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Jaffna, Sri Lanka</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="primary" size="lg">
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
