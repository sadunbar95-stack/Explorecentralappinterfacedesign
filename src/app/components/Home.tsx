import { Search, MapPin, Calendar, DollarSign, Star, Heart } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { useState, useEffect } from 'react';
import heroImage1 from 'figma:asset/dce1759de7767a1e0e4aace1c523908f963a273a.png';
import heroImage2 from 'figma:asset/aded0db1b8f7db6e6e55e43d142c1cafb8777363.png';
import heroImage3 from 'figma:asset/81f0a2ba253debb5278713992c1cfc61a91a45d1.png';
import heroImage4 from 'figma:asset/8b0604ddb795d4f6a5ae161dcd784440b3d76c77.png';
import heroImage5 from 'figma:asset/74231829a58ec43f08d6e0acd763a2fa5a83ede9.png';
import heroImage6 from 'figma:asset/f0b538af504f18dfcf454f54ad3c9aebd14f1cfc.png';
import heroImage7 from 'figma:asset/a405003cb27648d0fd3358f87968760242d1ea8a.png';
import heroImage8 from 'figma:asset/d7078176e0cefa613390cf9ba0bfd8faca3c1f67.png';
import heroImage9 from 'figma:asset/6ff045903d6be0565b202b3aa9fd38347e269b5c.png';
import heroImage10 from 'figma:asset/6fad7addfe33d7a9e858751e121676a02c88447e.png';
import heroImage11 from 'figma:asset/4a7a7c74533107d8ef21cd9a12458b033da5e5f1.png';
import heroImage12 from 'figma:asset/9fdccbfaad37b9be7a22e024f688f6a67d3fe1d1.png';
import heroImage13 from 'figma:asset/1c6156e9e9754673a68c5fbbeb7d2bb9367ca459.png';
import heroImage14 from 'figma:asset/d5a18a8552c2b86b0f02a528ab7944b0dda6dff3.png';
import heroImage15 from 'figma:asset/4c21eeb010766d1d0285e1a92fa329654096c8d4.png';
import heroImage16 from 'figma:asset/1cce631edc013a25900c2188b3051d4bb33ee3ad.png';
import heroImage17 from 'figma:asset/cda9614eb2fa5d07cc843e74eb72f26ce6d689a3.png';
import heroImage18 from 'figma:asset/3a7ab2474b9232c00111a4d05c62d8332c3f0a34.png';
import heroImage19 from 'figma:asset/992fdbcbdbb21f38bcbe4a357b3d9ee87fba8964.png';
import heroImage20 from 'figma:asset/dc7207f29f71eb72488a72b38142e201402c1b61.png';

interface HomeProps {
  onNavigate: (view: string, programId?: string) => void;
}

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8, heroImage9, heroImage10, heroImage11, heroImage12, heroImage13, heroImage14, heroImage15, heroImage16, heroImage17, heroImage18, heroImage19, heroImage20];

const categories = [
  { name: 'Arts & Crafts', icon: '🎨', count: 142 },
  { name: 'STEM', icon: '🔬', count: 98 },
  { name: 'Sports', icon: '⚽', count: 215 },
  { name: 'Music', icon: '🎵', count: 87 },
  { name: 'Dance', icon: '💃', count: 64 },
  { name: 'Summer Camps', icon: '⛺', count: 156 },
  { name: 'Tutoring', icon: '📚', count: 124 },
  { name: 'Swimming', icon: '🏊', count: 45 },
];

const featuredPrograms = [
  {
    id: '1',
    title: 'Creative Kids Art Studio',
    provider: 'The Art House',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzcxMTkzMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Downtown District',
    age: '6-12 years',
    price: '$240/month',
    rating: 4.9,
    reviews: 127,
    category: 'Arts',
  },
  {
    id: '2',
    title: 'Robotics & Coding Academy',
    provider: 'TechKids Learning Center',
    image: 'https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcm9ib3RpY3MlMjBTVEVNJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTE5MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Tech Valley',
    age: '8-14 years',
    price: '$320/month',
    rating: 4.8,
    reviews: 94,
    category: 'STEM',
  },
  {
    id: '3',
    title: 'Youth Soccer League',
    provider: 'Elite Sports Academy',
    image: 'https://images.unsplash.com/photo-1762345565397-ba85070a5bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNvY2NlciUyMHNwb3J0cyUyMGZpZWxkfGVufDF8fHx8MTc3MTE5MzM3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Riverside Park',
    age: '5-13 years',
    price: '$180/season',
    rating: 4.7,
    reviews: 203,
    category: 'Sports',
  },
  {
    id: '4',
    title: 'Adventure Summer Camp',
    provider: 'Camp Sunshine',
    image: 'https://images.unsplash.com/photo-1603317581682-c3c3e3a3a588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjYW1wJTIwa2lkcyUyMG91dGRvb3J8ZW58MXx8fHwxNzcxMTkzMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Mountain Ridge',
    age: '7-15 years',
    price: '$850/week',
    rating: 5.0,
    reviews: 156,
    category: 'Camps',
  },
  {
    id: '5',
    title: 'Ballet & Contemporary Dance',
    provider: 'Grace Dance Studio',
    image: 'https://images.unsplash.com/photo-1765939928892-954004cbeec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZGFuY2UlMjBiYWxsZXQlMjBjbGFzc3xlbnwxfHx8fDE3NzExOTMzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Arts District',
    age: '4-16 years',
    price: '$200/month',
    rating: 4.9,
    reviews: 82,
    category: 'Dance',
  },
  {
    id: '6',
    title: 'Piano & Music Theory',
    provider: 'Harmony Music School',
    image: 'https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG11c2ljJTIwcGlhbm8lMjBsZXNzb25zfGVufDF8fHx8MTc3MTE5MzM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Central Square',
    age: '5-17 years',
    price: '$160/month',
    rating: 4.8,
    reviews: 67,
    category: 'Music',
  },
];

export function Home({ onNavigate }: HomeProps) {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentHeroImage === index ? 1 : 0,
              }}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 flex items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="w-full">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-white">
                One platform. One profile. Endless opportunities.
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8">
                Explore local programs, classes, camps, and clubs — all in one place.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary hover:bg-primary/90"
                onClick={() => onNavigate('discover')}
              >
                Start Browsing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl text-foreground">
              Featured programs
            </h2>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary/80"
              onClick={() => onNavigate('discover')}
            >
              View all
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredPrograms.map((program) => (
              <Card
                key={program.id}
                className="group cursor-pointer overflow-hidden border border-border hover:shadow-xl transition-shadow"
                onClick={() => onNavigate('detail', program.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-foreground" />
                  </button>
                  <Badge className="absolute top-3 left-3 bg-white text-foreground border-0">
                    {program.category}
                  </Badge>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-medium text-base sm:text-lg text-foreground line-clamp-1">
                      {program.title}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('reviews', program.id);
                      }}
                      className="flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium underline">{program.rating}</span>
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {program.provider}
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{program.age}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-medium text-foreground">{program.price}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {program.reviews} reviews
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center opacity-90">
          <h2 className="text-2xl sm:text-3xl mb-4 text-white">
            Are you an activity provider?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Reach local families, manage enrollments easily, and fill your programs faster.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => onNavigate('for-providers')}
          >
            Learn more
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}