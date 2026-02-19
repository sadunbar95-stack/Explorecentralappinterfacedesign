import { Star, MapPin, Phone, Mail, Globe, Clock, Heart, ArrowLeft, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';

interface ProviderProfileProps {
  onNavigate: (view: string, programId?: string) => void;
  providerId?: string;
  favorites: string[];
  onToggleFavorite: (programId: string) => void;
}

// Mock provider data
const providerData = {
  'the-art-house': {
    id: 'the-art-house',
    name: 'The Art House',
    logo: '🎨',
    email: 'info@thearthouselc.com',
    phone: '(555) 123-4567',
    website: 'www.thearthouselc.com',
    address: '123 Creative Lane, Downtown District',
    city: 'Downtown District',
    zipCode: '10001',
    rating: 4.9,
    totalReviews: 127,
    description: 'The Art House is a premier creative studio dedicated to nurturing young artists. With over 10 years of experience, we provide a welcoming environment where children can explore various art mediums including painting, drawing, sculpture, and mixed media. Our experienced instructors are passionate about helping each child discover their creative voice.',
    hours: {
      monday: '3:00 PM - 7:00 PM',
      tuesday: 'Closed',
      wednesday: '3:00 PM - 7:00 PM',
      thursday: '3:00 PM - 7:00 PM',
      friday: '3:00 PM - 7:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: '10:00 AM - 2:00 PM',
    },
    programs: [
      {
        id: '1',
        title: 'Creative Kids Art Studio',
        image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzcxMTkzMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        age: '6-8 years',
        price: '$240/month',
        rating: 4.9,
        category: 'Arts & Crafts',
      },
      {
        id: '10',
        title: 'Teen Art Workshop',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwYXJ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzM5NzU5Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        age: '13-17 years',
        price: '$280/month',
        rating: 4.8,
        category: 'Arts & Crafts',
      },
    ],
    specialties: ['Painting', 'Drawing', 'Sculpture', 'Mixed Media', 'Art History'],
    amenities: ['Free Parking', 'Art Supplies Included', 'Small Class Sizes', 'Portfolio Development'],
  },
  'techkids-learning': {
    id: 'techkids-learning',
    name: 'TechKids Learning Center',
    logo: '🤖',
    email: 'hello@techkidslearning.com',
    phone: '(555) 234-5678',
    website: 'www.techkidslearning.com',
    address: '456 Innovation Drive, Tech Valley',
    city: 'Tech Valley',
    zipCode: '10002',
    rating: 4.8,
    totalReviews: 94,
    description: 'TechKids Learning Center empowers the next generation of innovators through hands-on STEM education. Our curriculum combines robotics, coding, engineering, and design thinking to prepare students for the digital future. We believe every child can be a creator, not just a consumer of technology.',
    hours: {
      monday: '4:00 PM - 8:00 PM',
      tuesday: '4:00 PM - 8:00 PM',
      wednesday: '4:00 PM - 8:00 PM',
      thursday: '4:00 PM - 8:00 PM',
      friday: '4:00 PM - 8:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    programs: [
      {
        id: '2',
        title: 'Robotics & Coding Academy',
        image: 'https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcm9ib3RpY3MlMjBTVEVNJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTE5MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        age: '9-12 years',
        price: '$320/month',
        rating: 4.8,
        category: 'STEM',
      },
      {
        id: '4',
        title: 'Adventure Summer Camp',
        image: 'https://images.unsplash.com/photo-1603317581682-c3c3e3a3a588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjYW1wJTIwa2lkcyUyMG91dGRvb3J8ZW58MXx8fHwxNzcxMTkzMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        age: '9-12 years',
        price: '$850/week',
        rating: 5.0,
        category: 'Summer Camps',
      },
    ],
    specialties: ['Python Programming', 'Robotics', 'Game Development', '3D Printing', 'Web Design'],
    amenities: ['Latest Technology', 'Project-Based Learning', 'Competition Teams', 'Industry Partnerships'],
  },
};

export function ProviderProfile({ onNavigate, providerId = 'the-art-house', favorites, onToggleFavorite }: ProviderProfileProps) {
  const provider = providerData[providerId as keyof typeof providerData] || providerData['the-art-house'];

  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayLabels: { [key: string]: string } = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('discover')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Button>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-4xl shrink-0">
                  {provider.logo}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl text-foreground mb-2">
                    {provider.name}
                  </h1>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold">{provider.rating}</span>
                    </div>
                    <button
                      onClick={() => onNavigate('reviews', provider.programs[0]?.id)}
                      className="text-sm text-muted-foreground hover:text-primary underline"
                    >
                      ({provider.totalReviews} reviews)
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{provider.address}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {provider.description}
                </p>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {provider.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="px-3 py-1">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {provider.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact & Hours Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6 border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href={`tel:${provider.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{provider.phone}</span>
                </a>
                <a
                  href={`mailto:${provider.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{provider.email}</span>
                </a>
                <a
                  href={`https://${provider.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{provider.website}</span>
                </a>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </Card>

            {/* Hours */}
            <Card className="p-6 border-border">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-foreground" />
                <h2 className="text-lg font-semibold text-foreground">Hours</h2>
              </div>
              <div className="space-y-2">
                {daysOfWeek.map((day) => (
                  <div key={day} className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{dayLabels[day]}</span>
                    <span className="text-muted-foreground">
                      {provider.hours[day as keyof typeof provider.hours]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Programs Offered */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Programs Offered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {provider.programs.map((program) => {
              const isFavorited = favorites.includes(program.id);
              
              return (
                <Card
                  key={program.id}
                  className="group cursor-pointer overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  onClick={() => onNavigate('detail', program.id)}
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
                      <Heart 
                        className={`h-4 w-4 transition-colors ${
                          isFavorited ? 'text-red-500 fill-red-500' : 'text-foreground'
                        }`} 
                      />
                    </button>
                    <Badge className="absolute top-3 left-3 bg-white text-foreground border-0">
                      {program.category}
                    </Badge>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-foreground line-clamp-1">
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

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{program.age}</span>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <span className="font-medium text-foreground">{program.price}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}