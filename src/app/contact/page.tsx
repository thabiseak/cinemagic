'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+94 77 621 6556',
      action: 'tel:+94776216556',
      color: 'text-green-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Instant messaging',
      action: 'https://wa.me/94776216556',
      color: 'text-green-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@cinemagiccreations.com',
      action: 'mailto:info@cinemagiccreations.com',
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Jaffna, Sri Lanka',
      action: '#map',
      color: 'text-red-500',
    },
  ];

  const eventTypes = [
    'Wedding Photography',
    'Wedding Film',
    'Engagement Session',
    'Graduation Photography',
    'Graduation Film',
    'Other',
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' },
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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to capture your special moments? Let’s discuss your vision and create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/80">Thank you for your message. We’ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+94 XX XXX XXXX"
                    />
                    <div>
                      <label className="block text-sm font-medium text-white/90 mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Input
                    label="Event Date"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    placeholder="Select your event date"
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your vision, requirements, and any special requests..."
                    rows={5}
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-white/80 mb-8">
                  Get in touch with us through any of these channels. We’re here to help make your special day unforgettable.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.action}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                        <p className="text-white/70">{info.details}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-500" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-white/80">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button variant="primary" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +94 77 621 6556
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Find Us in <span className="text-gradient">Jaffna</span>
            </h2>
            <p className="text-xl text-white/80">
              Located in the heart of Jaffna, we serve clients across Northern Sri Lanka and beyond
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gray-800 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary-500" />
                <h3 className="text-2xl font-semibold mb-2">Jaffna, Sri Lanka</h3>
                <p className="text-white/80">Interactive map will be integrated here</p>
                <p className="text-white/60 text-sm mt-2">
                  We serve clients across Northern Sri Lanka and beyond
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
