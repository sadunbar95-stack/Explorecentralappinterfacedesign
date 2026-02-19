import { Heart, Star, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Footer } from './Footer';

interface FavoritesProps {
  onNavigate: (view: string, programId?: string) => void;
  favorites: string[];
  onToggleFavorite: (programId: string) => void;
}

// Import the same programs from Discover
const allPrograms = [
  {
    id: '1',
    title: 'Creative Kids Art Studio',
    provider: 'The Art House',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzcxMTkzMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Downtown District',
    age: '6-8 years',
    price: '$240/month',
    rating: 4.9,
  },
  {
    id: '2',
    title: 'Robotics & Coding Academy',
    provider: 'TechKids Learning Center',
    image: 'https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcm9ib3RpY3MlMjBTVEVNJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTE5MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Tech Valley',
    age: '9-12 years',
    price: '$320/month',
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Youth Soccer League',
    provider: 'Elite Sports Academy',
    image: 'https://images.unsplash.com/photo-1762345565397-ba85070a5bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNvY2NlciUyMHNwb3J0cyUyMGZpZWxkfGVufDF8fHx8MTc3MTE5MzM3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Riverside Park',
    age: '6-8 years',
    price: '$180/season',
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Adventure Summer Camp',
    provider: 'Camp Sunshine',
    image: 'https://images.unsplash.com/photo-1603317581682-c3c3e3a3a588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjYW1wJTIwa2lkcyUyMG91dGRvb3J8ZW58MXx8fHwxNzcxMTkzMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Mountain Ridge',
    age: '9-12 years',
    price: '$850/week',
    rating: 5.0,
  },
  {
    id: '5',
    title: 'Ballet & Contemporary Dance',
    provider: 'Grace Dance Studio',
    image: 'https://images.unsplash.com/photo-1765939928892-954004cbeec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZGFuY2UlMjBiYWxsZXQlMjBjbGFzc3xlbnwxfHx8fDE3NzExOTMzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Arts District',
    age: '3-5 years',
    price: '$200/month',
    rating: 4.9,
  },
  {
    id: '6',
    title: 'Piano & Music Theory',
    provider: 'Harmony Music School',
    image: 'https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG11c2ljJTIwcGlhbm8lMjBsZXNzb25zfGVufDF8fHx8MTc3MTE5MzM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Central Square',
    age: '6-8 years',
    price: '$160/month',
    rating: 4.8,
  },
  {
    id: '7',
    title: 'Swimming Lessons',
    provider: 'Aqua Kids Academy',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3dpbW1pbmclMjBsZXNzb25zfGVufDF8fHx8MTc3MTE5MzM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'East Side',
    age: '3-5 years',
    price: '$180/month',
    rating: 4.7,
  },
  {
    id: '8',
    title: 'Math & Science Tutoring',
    provider: 'Bright Minds Education',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvcmluZyUyMGtpZHMlMjBtYXRoJTIwc2NpZW5jZXxlbnwxfHx8fDE3NzExOTMzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'University District',
    age: '13-15 years',
    price: '$95/hour',
    rating: 4.9,
  },
  {
    id: '9',
    title: 'Ski & Snowboard Winter Camp',
    provider: 'Mountain Adventure Camp',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc2tpaW5nJTIwd2ludGVyJTIwY2FtcHxlbnwxfHx8fDE3NzExOTMzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Snowy Peaks',
    age: '9-12 years',
    price: '$1200/week',
    rating: 4.9,
  },
];

export function Favorites({ onNavigate, favorites, onToggleFavorite }: FavoritesProps) {
  // Filter programs to only show favorited ones
  const favoritedPrograms = allPrograms.filter(program => favorites.includes(program.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl sm:text-4xl text-foreground">
              My Favorites
            </h1>
          </div>
          <p className="text-muted-foreground">
            {favoritedPrograms.length} {favoritedPrograms.length === 1 ? 'program' : 'programs'} saved
          </p>
        </div>

        {/* Favorites Grid */}
        {favoritedPrograms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {favoritedPrograms.map((program) => (
              <Card
                key={program.id}
                className="group cursor-pointer overflow-hidden border border-border hover:shadow-lg transition-shadow"
                onClick={() => onNavigate('detail')}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(program.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('reviews', program.id);
                    }}
                    className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium underline">{program.rating}</span>
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-1 line-clamp-1">
                    {program.title}
                  </h3>
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
                    <span className="font-medium text-foreground">{program.price}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 border-border border-dashed">
            <div className="text-center">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No favorites yet
              </h3>
              <p className="text-muted-foreground mb-4">
                Start saving programs you're interested in
              </p>
              <Button onClick={() => onNavigate('discover')}>
                Browse Programs
              </Button>
            </div>
          </Card>
        )}
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}