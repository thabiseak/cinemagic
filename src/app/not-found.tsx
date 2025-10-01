'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Camera } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-8xl lg:text-9xl font-display font-bold text-gradient mb-8"
          >
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl lg:text-4xl font-display font-bold text-white mb-6"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-white/80 mb-12 leading-relaxed"
          >
            Oops! The page you’re looking for seems to have disappeared into the digital void. 
            Don’t worry, even the best photographers sometimes miss a shot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/">
              <Button variant="primary" size="lg" className="group">
                <Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Go Back
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="relative">
              <Camera className="w-16 h-16 text-white/20" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-white/60"
          >
            <p className="mb-4">Maybe you were looking for:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/portfolio" className="text-primary-500 hover:text-primary-400 transition-colors">
                Portfolio
              </Link>
              <Link href="/albums" className="text-primary-500 hover:text-primary-400 transition-colors">
                Albums
              </Link>
              <Link href="/films" className="text-primary-500 hover:text-primary-400 transition-colors">
                Wedding Films
              </Link>
              <Link href="/about" className="text-primary-500 hover:text-primary-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-primary-500 hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
