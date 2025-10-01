'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, Calendar, MapPin, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AlbumsPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: 'Sarah & Michael\'s Wedding',
      description: 'A beautiful traditional wedding ceremony captured in Jaffna',
      coverImage: '/images/albums/wedding-1/cover.jpg',
      date: 'December 2024',
      location: 'Jaffna, Sri Lanka',
      imageCount: 45,
      featured: true,
      images: [
        '/images/albums/wedding-1.jpg',
        '/images/albums/wedding-2.jpg',
        '/images/albums/wedding-3.jpg',
        '/images/albums/wedding-1.jpg',
        '/images/albums/wedding-2.jpg',
        '/images/albums/wedding-3.jpg',
        '/images/albums/wedding-1.jpg',
        '/images/albums/wedding-2.jpg',
      ],
    },
    {
      id: 2,
      title: 'Graduation Celebration 2024',
      description: 'University of Jaffna graduation ceremony highlights',
      coverImage: '/images/albums/graduation-1/cover.jpg',
      date: 'November 2024',
      location: 'University of Jaffna',
      imageCount: 32,
      featured: true,
      images: [
        '/images/albums/graduation-1.jpg',
        '/images/albums/graduation-2.jpg',
        '/images/albums/graduation-1.jpg',
        '/images/albums/graduation-2.jpg',
        '/images/albums/graduation-1.jpg',
        '/images/albums/graduation-2.jpg',
      ],
    },
    {
      id: 3,
      title: 'Romantic Engagement Session',
      description: 'A beautiful engagement shoot at Nallur Temple',
      coverImage: '/images/albums/engagement-1/cover.jpg',
      date: 'October 2024',
      location: 'Nallur Temple',
      imageCount: 28,
      featured: false,
      images: [
        '/images/albums/engagement-1.jpg',
        '/images/albums/engagement-2.jpg',
        '/images/albums/engagement-3.jpg',
        '/images/albums/engagement-1.jpg',
        '/images/albums/engagement-2.jpg',
      ],
    },
    {
      id: 4,
      title: 'Traditional Wedding Ceremony',
      description: 'A grand traditional wedding in Colombo',
      coverImage: '/images/albums/wedding-2/cover.jpg',
      date: 'September 2024',
      location: 'Colombo, Sri Lanka',
      imageCount: 52,
      featured: false,
      images: [
        '/images/albums/wedding-3.jpg',
        '/images/albums/wedding-1.jpg',
        '/images/albums/wedding-2.jpg',
        '/images/albums/wedding-3.jpg',
        '/images/albums/wedding-1.jpg',
        '/images/albums/wedding-2.jpg',
        '/images/albums/wedding-1.jpg',
      ],
    },
    {
      id: 5,
      title: 'Medical School Graduation',
      description: 'Jaffna Medical College graduation ceremony',
      coverImage: '/images/albums/graduation-2/cover.jpg',
      date: 'August 2024',
      location: 'Jaffna Medical College',
      imageCount: 38,
      featured: false,
      images: [
        '/images/albums/graduation-2.jpg',
        '/images/albums/graduation-1.jpg',
        '/images/albums/graduation-2.jpg',
        '/images/albums/graduation-1.jpg',
        '/images/albums/graduation-2.jpg',
      ],
    },
    {
      id: 6,
      title: 'Beach Engagement',
      description: 'Romantic beach engagement session in Trincomalee',
      coverImage: '/images/albums/engagement-2/cover.jpg',
      date: 'July 2024',
      location: 'Trincomalee Beach',
      imageCount: 24,
      featured: false,
      images: [
        '/images/albums/engagement-2.jpg',
        '/images/albums/engagement-1.jpg',
        '/images/albums/engagement-3.jpg',
        '/images/albums/engagement-2.jpg',
      ],
    },
  ];

  const featuredAlbums = albums.filter(album => album.featured);
  const regularAlbums = albums.filter(album => !album.featured);

  const openAlbum = (albumId: number) => {
    setSelectedAlbum(albumId);
    setCurrentImageIndex(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const album = albums.find(a => a.id === selectedAlbum);
    if (album) {
      setCurrentImageIndex((prev) => (prev + 1) % album.images.length);
    }
  };

  const prevImage = () => {
    const album = albums.find(a => a.id === selectedAlbum);
    if (album) {
      setCurrentImageIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
    }
  };

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
              Photo <span className="text-gradient">Albums</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Browse through our complete wedding and graduation photo albums. 
              Each album tells a complete story from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Albums */}
      {featuredAlbums.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-white mb-12 text-center"
            >
              Featured Albums
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer"
                  onClick={() => openAlbum(album.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-white/70 mb-4">{album.description}</p>
                    
                    <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{album.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{album.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-primary-500 font-medium">
                        {album.imageCount} Photos
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-white/60 hover:text-primary-500 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-white/60 hover:text-primary-500 transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Albums */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-white mb-12 text-center"
          >
            All Albums
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 cursor-pointer"
                onClick={() => openAlbum(album.id)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {album.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{album.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{album.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 font-medium">
                      {album.imageCount} Photos
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-white/60 hover:text-primary-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-white/60 hover:text-primary-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Lightbox */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeAlbum}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeAlbum}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Album Info */}
              {(() => {
                const album = albums.find(a => a.id === selectedAlbum);
                if (!album) return null;
                
                return (
                  <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{album.description}</p>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span>{album.location}</span>
                      <span>{album.date}</span>
                      <span>{currentImageIndex + 1} of {album.images.length}</span>
                    </div>
                  </div>
                );
              })()}

              {/* Main Image */}
              {(() => {
                const album = albums.find(a => a.id === selectedAlbum);
                if (!album) return null;
                
                return (
                  <Image
                    src={album.images[currentImageIndex]}
                    alt={`${album.title} - Image ${currentImageIndex + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain rounded-lg"
                  />
                );
              })()}

              {/* Thumbnail Strip */}
              {(() => {
                const album = albums.find(a => a.id === selectedAlbum);
                if (!album) return null;
                
                return (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto">
                    {album.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'ring-2 ring-primary-500 scale-110'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default AlbumsPage;
