export type FilmCategory = 'Weddings' | 'Engagements' | 'Graduations';

export interface Film {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  date: string;
  location: string;
  views: number;
  likes: number;
  featured: boolean;
  tags: string[];
  category: FilmCategory;
}

export const films: Film[] = [
  {
    id: 1,
    title: "Sarah & Michael's Wedding Film",
    description:
      'A cinematic journey through their beautiful wedding day, capturing every emotion and detail.',
  thumbnail: '/images/portfolio/wedding-1.jpg',
    videoUrl: '/videos/wedding-1.mp4',
    duration: '8:45',
    date: 'December 2024',
    location: 'Jaffna, Sri Lanka',
    views: 12340,
    likes: 456,
    featured: true,
    tags: ['traditional', 'outdoor', 'ceremony'],
    category: 'Weddings',
  },
  {
    id: 2,
    title: 'Graduation Celebration Film',
    description:
      'Capturing the joy and achievement of graduation day at University of Jaffna.',
  thumbnail: '/images/portfolio/graduation-1.jpg',
    videoUrl: '/videos/graduation-1.mp4',
    duration: '5:30',
    date: 'November 2024',
    location: 'University of Jaffna',
    views: 8900,
    likes: 234,
    featured: true,
    tags: ['graduation', 'celebration', 'academic'],
    category: 'Graduations',
  },
  {
    id: 3,
    title: 'Romantic Engagement Story',
    description: 'A beautiful engagement story told through cinematic storytelling.',
  thumbnail: '/images/portfolio/engagement-1.jpg',
    videoUrl: '/videos/engagement-1.mp4',
    duration: '6:15',
    date: 'October 2024',
    location: 'Nallur Temple',
    views: 15600,
    likes: 567,
    featured: true,
    tags: ['romantic', 'temple', 'engagement'],
    category: 'Engagements',
  },
  {
    id: 4,
    title: 'Traditional Wedding Ceremony',
    description: 'A grand traditional wedding ceremony captured with artistic excellence.',
  thumbnail: '/images/portfolio/wedding-2.jpg',
    videoUrl: '/videos/wedding-2.mp4',
    duration: '12:20',
    date: 'September 2024',
    location: 'Colombo, Sri Lanka',
    views: 18900,
    likes: 678,
    featured: false,
    tags: ['traditional', 'indoor', 'ceremony'],
    category: 'Weddings',
  },
  {
    id: 5,
    title: 'Medical School Graduation',
    description: 'Celebrating the achievement of medical school graduation.',
  thumbnail: '/images/portfolio/graduation-2.jpg',
    videoUrl: '/videos/graduation-2.mp4',
    duration: '4:45',
    date: 'August 2024',
    location: 'Jaffna Medical College',
    views: 11200,
    likes: 345,
    featured: false,
    tags: ['medical', 'graduation', 'achievement'],
    category: 'Graduations',
  },
  {
    id: 6,
    title: 'Beach Engagement Session',
    description: 'A romantic beach engagement session with stunning sunset views.',
  thumbnail: '/images/portfolio/engagement-2.jpg',
    videoUrl: '/videos/engagement-2.mp4',
    duration: '7:30',
    date: 'July 2024',
    location: 'Trincomalee Beach',
    views: 13400,
    likes: 489,
    featured: false,
    tags: ['beach', 'romantic', 'sunset'],
    category: 'Engagements',
  },
  {
    id: 7,
    title: 'Elegant Wedding Reception',
    description: 'Dancing, laughter, and heartfelt speeches captured with cinematic flair.',
  thumbnail: '/images/portfolio/wedding-3.jpg',
    videoUrl: '/videos/wedding-3.mp4',
    duration: '9:10',
    date: 'June 2024',
    location: 'Kandy, Sri Lanka',
    views: 14200,
    likes: 512,
    featured: false,
    tags: ['reception', 'celebration', 'family'],
    category: 'Weddings',
  },
  {
    id: 8,
    title: 'Sunrise Engagement Adventure',
    description: 'A fun and adventurous engagement session at sunrise.',
  thumbnail: '/images/portfolio/engagement-3.jpg',
    videoUrl: '/videos/engagement-3.mp4',
    duration: '6:50',
    date: 'May 2024',
    location: 'Sigiriya Rock Fortress',
    views: 9800,
    likes: 301,
    featured: false,
    tags: ['adventure', 'sunrise', 'engagement'],
    category: 'Engagements',
  },
  {
    id: 9,
    title: 'Inspiring Graduation Stories',
    description: 'Highlights from inspiring graduation stories across the island.',
  thumbnail: '/images/portfolio/graduation-3.jpg',
    videoUrl: '/videos/graduation-3.mp4',
    duration: '5:05',
    date: 'April 2024',
    location: 'Colombo University',
    views: 7600,
    likes: 245,
    featured: false,
    tags: ['inspiration', 'graduates', 'family'],
    category: 'Graduations',
  },
];

export const getFeaturedFilms = () => films.filter((film) => film.featured);

export const getFilmsByCategory = (category: FilmCategory) =>
  films.filter((film) => film.category === category);
