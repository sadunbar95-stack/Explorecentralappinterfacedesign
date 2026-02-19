import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  User, 
  FileCheck, 
  Heart, 
  Calendar,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { Footer } from './Footer';

interface ForParentsProps {
  onNavigate: (view: string) => void;
}

export function ForParents({ onNavigate }: ForParentsProps) {
  const features = [
    {
      icon: User,
      title: 'Manage Child Profiles',
      description: 'Create reusable profiles for each child with all enrollment information stored in one place.',
      benefits: [
        'One profile, endless opportunities',
        'Auto-fill applications instantly',
        'Update once, apply everywhere',
      ],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: FileCheck,
      title: 'Track Applications',
      description: 'Monitor all your program applications and enrollments in one centralized dashboard.',
      benefits: [
        'Real-time application status',
        'Waitlist notifications',
        'Enrollment confirmations',
      ],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Heart,
      title: 'Save Programs',
      description: "Organize and save programs you're interested in for easy comparison and future reference.",
      benefits: [
        'Create favorites lists',
        'Compare programs side-by-side',
        'Get personalized recommendations',
      ],
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Calendar,
      title: 'View Upcoming Activities',
      description: "See all your children's enrolled programs, upcoming sessions, and schedules in one place.",
      benefits: [
        'Family activity calendar',
        'Session reminders',
        'Schedule management',
      ],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your family information is protected with industry-standard security and privacy controls.',
      benefits: [
        'Bank-level encryption',
        'COPPA compliant',
        'You control your data',
      ],
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Stop filling out the same forms repeatedly. Apply to multiple programs in minutes, not hours.',
      benefits: [
        'No repeated paperwork',
        'Instant application submission',
        'Faster enrollment process',
      ],
      color: 'bg-teal-50 text-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              For Parents
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
              Finding Activities Just Got Easier.
              <br />
              <span className="text-primary">A Lot Easier.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Finding and enrolling in activities shouldn't feel like a second job. Explore Central simplifies discovery, applications, and enrollment so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary hover:bg-primary/90"
                onClick={() => onNavigate('register')}
              >
                Get Started For Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => onNavigate('home')}
              >
                Browse Programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore Central gives parents the tools to manage their family's activities effortlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 border-border hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Create Child Profiles
              </h3>
              <p className="text-muted-foreground">
                Add your children's information once — include medical details, emergency contacts, and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Discover Programs
              </h3>
              <p className="text-muted-foreground">
                Browse local classes, camps, sports, and activities. Save your favorites and compare options.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Apply Instantly
              </h3>
              <p className="text-muted-foreground">
                Submit applications with one click. Your stored information auto-fills every form.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-white opacity-90">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join Explore Central today and discover how easy it is to find and enroll in local programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate('register')}
            >
              Create Free Account
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => onNavigate('login')}
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}