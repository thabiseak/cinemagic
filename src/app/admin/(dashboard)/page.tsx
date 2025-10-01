'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Camera,
  FileText,
  Film,
  FolderKanban,
  GalleryHorizontal,
  MessageCircle,
  PlusCircle,
  Sparkles,
  Users,
} from 'lucide-react';

import Button from '@/components/ui/Button';

const metrics = [
  {
    title: 'Albums',
    value: 18,
    delta: '+2 this week',
    icon: FolderKanban,
    accent: 'from-primary-500/60 to-primary-600/40',
  },
  {
    title: 'Photos',
    value: 684,
    delta: '+76 awaiting review',
    icon: GalleryHorizontal,
    accent: 'from-purple-500/60 to-purple-600/40',
  },
  {
    title: 'Films',
    value: 32,
    delta: '3 scheduled launches',
    icon: Film,
    accent: 'from-rose-500/60 to-rose-600/40',
  },
  {
    title: 'Blog Drafts',
    value: 7,
    delta: 'Ready for editorial',
    icon: FileText,
    accent: 'from-amber-500/60 to-amber-600/40',
  },
];

const quickActions = [
  {
    label: 'New Album',
    description: 'Curate a cinematic story and publish instantly.',
    icon: Camera,
    href: '/admin/albums/new',
  },
  {
    label: 'Upload Gallery',
    description: 'Drag & drop a collection of hero images.',
    icon: GalleryHorizontal,
    href: '/admin/photos/upload',
  },
  {
    label: 'Publish Film',
    description: 'Embed a Cloudinary, Vimeo, or YouTube highlight.',
    icon: Film,
    href: '/admin/films/new',
  },
  {
    label: 'Compose Blog',
    description: 'Tell a story with the Markdown editor.',
    icon: FileText,
    href: '/admin/blog/new',
  },
];

const pipeline = [
  {
    title: 'Candid Love Story',
    stage: 'Final color grading',
    owner: 'Naveen',
    due: 'Oct 12',
    type: 'Film',
  },
  {
    title: 'Graduation Glory',
    stage: 'Album curation',
    owner: 'Keerththi',
    due: 'Oct 08',
    type: 'Album',
  },
  {
    title: 'Winter Weddings Guide',
    stage: 'Editorial review',
    owner: 'Anjali',
    due: 'Oct 05',
    type: 'Blog',
  },
];

const testimonials = [
  {
    name: 'Thiven & Nethra',
    event: 'Destination Wedding',
    quote:
      'Every frame felt like a dream. The cinematic storytelling left us speechless.',
  },
  {
    name: 'Aarav & Maya',
    event: 'Engagement',
    quote:
      'From the direction to the lighting, it was pure artistry. Our families are obsessed.',
  },
];

const AdminPage = () => {
  return (
    <section className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/2 to-white/5 p-10 shadow-2xl"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(200,200,255,0.15),_transparent_45%)]" />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Control Center</p>
            <h1 className="mt-4 text-4xl font-display font-semibold text-white">
              Welcome back, visionary.
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              Your cinematic universe is humming. Track launches, ship new stories, and keep the
              magic alive.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="ghost" className="gap-2 border border-white/10 bg-white/5 text-white">
              <Sparkles className="h-5 w-5" />
              Inspire me
            </Button>
            <Button variant="primary" className="gap-2">
              <PlusCircle className="h-5 w-5" />
              New project
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${metric.accent} opacity-30`}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{metric.title}</p>
                  <p className="mt-4 text-4xl font-display font-semibold text-white">{metric.value}</p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </span>
              </div>
              <p className="mt-6 text-sm text-white/60">{metric.delta}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Launch pipeline</h2>
              <p className="text-sm text-white/60">Monitor every masterpiece before it debuts.</p>
            </div>
            <Button variant="ghost" className="gap-2 text-white/70">
              View all
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            {pipeline.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-primary-500/60 hover:bg-primary-500/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">{item.type}</p>
                    <h3 className="mt-2 text-lg font-medium text-white">{item.title}</h3>
                  </div>
                  <span className="text-sm text-white/50">Due {item.due}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                  <span>{item.stage}</span>
                  <span>Lead: {item.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Quick actions</h2>
              <p className="text-sm text-white/60">Jump straight into creation moments.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-primary-500/60 hover:bg-primary-500/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <div className="flex-1">
                    <p className="text-base font-medium text-white">{action.label}</p>
                    <p className="text-sm text-white/60">{action.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Client testimonials</h2>
              <p className="text-sm text-white/60">Highlight words that make prospects fall in love.</p>
            </div>
            <Button variant="ghost" className="gap-2 text-white/70">
              Manage
              <Users className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40"
              >
                <p className="text-white/80">“{testimonial.quote}”</p>
                <div className="mt-4 flex items-center justify-between text-sm text-white/50">
                  <span>{testimonial.name}</span>
                  <span>{testimonial.event}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Contact pulse</h2>
              <p className="text-sm text-white/60">Follow up with prospects while the spark is hot.</p>
            </div>
            <Button variant="ghost" className="gap-2 text-white/70">
              View inbox
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div>
                  <p className="text-base font-medium text-white">Prospect #{item}</p>
                  <p className="text-sm text-white/60">Wedding enquiry • Reply within 24h</p>
                </div>
                <Button variant="primary" size="sm" className="gap-2">
                  Reply now
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPage;
