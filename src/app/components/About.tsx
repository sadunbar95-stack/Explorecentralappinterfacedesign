import { ArrowLeft, Users, Search, Shield, Heart, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Footer } from './Footer';

interface AboutProps {
  onNavigate: (view: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-white pt-16 sm:pt-24 pb-4 sm:pb-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              About Explore Central
            </h1>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="pt-4 sm:pt-6 pb-16 sm:pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Explore Central was created after experiencing firsthand how complicated it can be to find the right activity for a child.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The search often meant navigating dozens of websites, social media pages, and scattered registration links. Each new program required creating another account. Filling out another form. Re-entering the same information again and again.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              There was no centralized place to browse different types of activities in one space, and even less visibility into which programs were thoughtful about neurodiversity or sensory needs.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              Explore Central was built to simplify that process.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              One platform. One parent profile. Clear, organized program listings across categories, with transparent details about age ranges, pricing, schedules, and inclusivity.
            </p>

            <p className="text-lg text-primary leading-relaxed font-medium">
              Because discovering opportunities for children should feel exciting, not overwhelming.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-border text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Simplicity
              </h3>
              <p className="text-sm text-muted-foreground">
                Finding programs should be straightforward, not a full-time job
              </p>
            </Card>

            <Card className="p-6 border-border text-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Transparency
              </h3>
              <p className="text-sm text-muted-foreground">
                Clear information about programs, pricing, and what to expect
              </p>
            </Card>

            <Card className="p-6 border-border text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Inclusivity
              </h3>
              <p className="text-sm text-muted-foreground">
                Visibility for programs that support neurodiversity and diverse needs
              </p>
            </Card>

            <Card className="p-6 border-border text-center">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Community
              </h3>
              <p className="text-sm text-muted-foreground">
                Connecting families with local providers who care
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 sm:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl mb-6 text-white opacity-90">
            One platform. One profile. Endless opportunities.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            We're building a centralized platform where parents can discover programs, providers can reach families, and children can explore their potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate('register')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => onNavigate('contact-us')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}