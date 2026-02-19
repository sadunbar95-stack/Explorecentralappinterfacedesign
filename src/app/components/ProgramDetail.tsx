import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  DollarSign, 
  Star, 
  Heart, 
  Share2,
  ChevronLeft,
  Check
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Footer } from './Footer';

interface ProgramDetailProps {
  onNavigate: (view: string) => void;
}

export function ProgramDetail({ onNavigate }: ProgramDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-border bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="text-sm">Back to search</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[21/6] overflow-hidden bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzcxMTkzMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Creative Kids Art Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <Badge className="mb-3 bg-primary/10 text-primary border-0">
                    Arts & Crafts
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl text-foreground mb-2">
                    Creative Kids Art Studio
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    The Art House
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity"
                >
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-medium underline">4.9</span>
                  <span className="text-muted-foreground underline">({127})</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Downtown District, New York</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Ages 6-12 years</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* About */}
            <div>
              <h2 className="text-2xl mb-4 text-foreground">About this program</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Creative Kids Art Studio offers a dynamic and inspiring environment where children 
                  explore their creativity through various art forms. Our experienced instructors guide 
                  students through painting, drawing, sculpture, and mixed media projects.
                </p>
                <p>
                  Each session focuses on building fundamental art skills while encouraging personal 
                  expression and creative thinking. Students work with professional-grade materials 
                  in our bright, spacious studio designed specifically for young artists.
                </p>
                <p>
                  We believe every child is an artist, and our curriculum is designed to nurture 
                  confidence, technical skills, and a lifelong love of art.
                </p>
              </div>
            </div>

            <Separator />

            {/* What's Included */}
            <div>
              <h2 className="text-2xl mb-4 text-foreground">What's included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'All art supplies and materials',
                  'Professional instruction',
                  'Small class sizes (max 12 students)',
                  'End-of-term art showcase',
                  'Take-home art portfolio',
                  'Flexible scheduling options',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Schedule */}
            <div>
              <h2 className="text-2xl mb-4 text-foreground">Schedule & availability</h2>
              <div className="space-y-3">
                <Card className="p-4 border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-medium text-foreground mb-1">
                        Monday & Wednesday Afternoons
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>4:00 PM - 5:30 PM</span>
                        </div>
                        <span>8 spots left</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-0">
                      Available
                    </Badge>
                  </div>
                </Card>

                <Card className="p-4 border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-medium text-foreground mb-1">
                        Saturday Mornings
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>10:00 AM - 12:00 PM</span>
                        </div>
                        <span>3 spots left</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-0">
                      Available
                    </Badge>
                  </div>
                </Card>

                <Card className="p-4 border-border opacity-60">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-medium text-foreground mb-1">
                        Tuesday & Thursday Evenings
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>5:30 PM - 7:00 PM</span>
                        </div>
                        <span>Waitlist only</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                      Full
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Provider Info */}
            <div>
              <h2 className="text-2xl mb-4 text-foreground">About the provider</h2>
              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-primary">AH</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      The Art House
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Established 2015 • 500+ students served
                    </p>
                    <p className="text-muted-foreground mb-4">
                      The Art House is a premier creative learning center dedicated to nurturing 
                      young artists. Our experienced team of professional artists and educators 
                      have created a welcoming space where creativity flourishes.
                    </p>
                    <Button variant="outline" size="sm">
                      View all programs
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6 border-border shadow-lg">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-semibold text-foreground">$240</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    4 sessions per month • 1.5 hours each
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Next session starts</div>
                    <div className="font-medium text-foreground">March 4, 2026</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Registration fee</span>
                      <span className="text-foreground">$50</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Monthly tuition</span>
                      <span className="text-foreground">$240</span>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex items-center justify-between font-medium">
                      <span className="text-foreground">Total first month</span>
                      <span className="text-foreground">$290</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 mb-3">
                  Request enrollment
                </Button>

                <Button size="lg" variant="outline" className="w-full border-border">
                  Schedule a tour
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  No commitment required. Cancel anytime.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}