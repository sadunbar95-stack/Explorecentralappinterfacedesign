import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  CreditCard, 
  FileText, 
  MessageSquare, 
  Users,
  TrendingUp,
  Building2,
  CheckCircle2,
  Zap,
  Eye,
  Search
} from 'lucide-react';
import { Footer } from './Footer';

interface ForProvidersProps {
  onNavigate: (view: string) => void;
}

export function ForProviders({ onNavigate }: ForProvidersProps) {
  const features = [
    {
      icon: Search,
      title: 'Get Discovered by Families',
      description: 'List your programs on the centralized platform where parents actively search for local activities.',
      benefits: [
        'Parents prefer Explore Central',
        'Increased program visibility',
        'Reach families actively enrolling',
      ],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: CreditCard,
      title: 'Accept Payments & Get Paid',
      description: 'Integrated Stripe payments with automatic payouts to your bank account. No manual invoicing.',
      benefits: [
        'Secure payment processing',
        'Weekly automatic payouts',
        'Currently 0% platform fee',
      ],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: FileText,
      title: 'Manage Applications',
      description: 'Review standardized applications from families with all the information you need in one place.',
      benefits: [
        'Accept or decline instantly',
        'Waitlist management',
        'Complete child profiles',
      ],
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: MessageSquare,
      title: 'Message Families',
      description: 'Built-in communication center to broadcast announcements or message families individually.',
      benefits: [
        'Email all enrolled families',
        'Session-specific messages',
        'Individual parent messaging',
      ],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Users,
      title: 'Enrollment Management',
      description: 'Track enrollments, manage capacity, and control waitlists all from your dashboard.',
      benefits: [
        'Real-time enrollment tracking',
        'Capacity monitoring',
        'Automated waitlist notifications',
      ],
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Analytics',
      description: 'Clear visibility into your program revenue, upcoming payouts, and financial performance.',
      benefits: [
        'Revenue by program',
        'Payout schedule tracking',
        'Transparent fee structure',
      ],
      color: 'bg-teal-50 text-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              For Providers
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
              Do What You Do Best.
              <br />
              <span className="text-orange-600 opacity-90">We Handle the Rest.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Complete enrollment management system for activity providers. Accept payments, manage applications, and communicate with families — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-orange-600 hover:bg-orange-700 opacity-90"
                onClick={() => onNavigate('register')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Visibility Highlight Section */}
      <div className="py-16 sm:py-24 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Eye className="h-8 w-8 text-orange-700 opacity-90" />
              </div>
              <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
                Get Your Programs in Front of Parents
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore Central is the go-to platform where families discover and compare local programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-border bg-white text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center mx-auto mb-4 text-2xl font-bold opacity-90">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Centralized Discovery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Parents search one platform instead of browsing dozens of websites
                </p>
              </Card>

              <Card className="p-6 border-border bg-white text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center mx-auto mb-4 text-2xl font-bold opacity-90">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Active Family Network
                </h3>
                <p className="text-sm text-muted-foreground">
                  Connect with families actively looking to enroll in programs right now
                </p>
              </Card>

              <Card className="p-6 border-border bg-white text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center mx-auto mb-4 text-2xl font-bold opacity-90">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Increased Enrollment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill spots faster when parents can easily find and apply to your programs
                </p>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-white border-2 border-orange-200 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-100 shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-orange-700 opacity-90" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Why Parents Choose Explore Central
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-700 shrink-0 opacity-90">✓</span>
                      <span>One reusable family profile eliminates repetitive paperwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-700 shrink-0 opacity-90">✓</span>
                      <span>Compare multiple programs side-by-side in one place</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-700 shrink-0 opacity-90">✓</span>
                      <span>Apply to programs with one click instead of filling out dozens of forms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore Central replaces spreadsheets, email coordination, and manual payments with one complete system
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

      {/* Payment Info */}
      <div className="py-16 sm:py-24 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Launch promotion: 0% platform fee
              </p>
            </div>

            <Card className="p-8 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-orange-100">
                  <CreditCard className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Keep 100% of Your Revenue
                  </h3>
                  <p className="text-muted-foreground">
                    No platform fees during our launch period
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Platform Fee
                  </div>
                  <div className="text-2xl font-semibold text-green-600">
                    0%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Launch promotion
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Payout Schedule
                  </div>
                  <div className="text-2xl font-semibold text-foreground">
                    Weekly
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Automatic to your bank
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Payment Processing
                  </div>
                  <div className="text-2xl font-semibold text-foreground">
                    Stripe
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Industry-standard security
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6 text-center">
                Payment processing fees are handled by Stripe. No hidden fees from Explore Central.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your programs online in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Create Account
              </h3>
              <p className="text-muted-foreground text-sm">
                Sign up and set up your organization profile
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Connect Stripe
              </h3>
              <p className="text-muted-foreground text-sm">
                Link your bank account for automatic payouts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                List Programs
              </h3>
              <p className="text-muted-foreground text-sm">
                Add your classes, camps, and activities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 opacity-90">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Accept Enrollments
              </h3>
              <p className="text-muted-foreground text-sm">
                Review applications and get paid automatically
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-orange-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-orange-600 opacity-90">
            Ready to Simplify Your Enrollment Process?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join Explore Central and start accepting enrollments today. No setup fees, no contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-orange-600 hover:bg-orange-700 text-white opacity-90"
              onClick={() => onNavigate('register')}
            >
              Create Provider Account
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-transparent text-orange-700 border-orange-600 hover:bg-orange-50"
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