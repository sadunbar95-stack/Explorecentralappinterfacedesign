import { 
  Plus, 
  Users, 
  DollarSign, 
  Calendar,
  MessageSquare,
  CreditCard,
  Building2,
  FileText,
  TrendingUp,
  ExternalLink,
  CheckCircle2,
  Settings,
  User,
  CreditCard as SubscriptionIcon
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { useState } from 'react';

interface ProviderPortalProps {
  onNavigate: (view: string) => void;
}

const PLATFORM_FEE_PERCENTAGE = 0; // Currently 0% during launch

const dashboardStats = [
  {
    label: 'Total Programs',
    value: '3',
    icon: FileText,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Total Enrollments',
    value: '47',
    icon: Users,
    color: 'bg-green-50 text-green-600',
  },
  {
    label: 'Revenue Collected',
    value: '$11,280',
    icon: DollarSign,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    label: 'Next Payout',
    value: '$3,240',
    subtext: 'Friday, Feb 21',
    icon: TrendingUp,
    color: 'bg-yellow-50 text-yellow-600',
  },
];

const pendingApplications = 3;
const unreadMessages = 1;

export function ProviderPortal({ onNavigate }: ProviderPortalProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stripeConnected] = useState(true);
  const [currentPlan, setCurrentPlan] = useState<'launch' | 'starter' | 'growth' | 'scale'>('launch');
  const [showStripeModal, setShowStripeModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2 text-foreground">
            Provider Dashboard
          </h1>
          <p className="text-muted-foreground">
            Complete program and enrollment management system
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-border">
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'dashboard'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate('provider-programs')}
              className="px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => onNavigate('provider-applications')}
              className="px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              Applications
              {pendingApplications > 0 && (
                <Badge className="bg-yellow-100 text-yellow-700 border-0 text-xs px-1.5 py-0">
                  {pendingApplications}
                </Badge>
              )}
            </button>
            <button
              onClick={() => onNavigate('provider-revenue')}
              className="px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors"
            >
              Revenue
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'profile'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'subscription'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Subscription
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Create Program Button */}
            <div className="mb-8 flex justify-end">
              <Button 
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={() => onNavigate('create-program')}
              >
                <Plus className="h-4 w-4" />
                Create New Program
              </Button>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {dashboardStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-5 border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="text-2xl font-semibold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                    {stat.subtext && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {stat.subtext}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Stripe Payment Setup */}
            <Card className="p-6 mb-8 border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-50 shrink-0">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-1">
                        Payment & Payout Setup
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Connect your bank account to receive payouts from enrollments
                      </p>
                    </div>
                    {stripeConnected && (
                      <Badge className="bg-green-50 text-green-700 border-0 shrink-0">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    )}
                  </div>

                  {stripeConnected && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                            <Building2 className="h-4 w-4" />
                            <span>Bank Account</span>
                          </div>
                          <div className="font-medium text-foreground">
                            ••••4242
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Chase Bank
                          </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">
                            Payout Schedule
                          </div>
                          <div className="font-medium text-foreground">
                            Weekly
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Every Friday
                          </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">
                            Platform Fee
                          </div>
                          <div className="font-medium text-foreground">
                            {PLATFORM_FEE_PERCENTAGE}%
                          </div>
                          <div className="text-xs text-green-600">
                            Launch promotion
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setShowStripeModal(true)}
                        >
                          Update Bank Account
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          View Payout History
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                className="p-6 border-border cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onNavigate('provider-applications')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Pending Applications
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Review and manage new enrollment requests
                    </p>
                  </div>
                  {pendingApplications > 0 && (
                    <Badge className="bg-yellow-100 text-yellow-700 border-0">
                      {pendingApplications}
                    </Badge>
                  )}
                </div>
                <Button variant="outline" className="w-full">
                  View Applications
                </Button>
              </Card>

              <Card 
                className="p-6 border-border cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onNavigate('messages')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Messages
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Communicate with enrolled families
                    </p>
                  </div>
                  {unreadMessages > 0 && (
                    <Badge className="bg-red-100 text-red-700 border-0">
                      {unreadMessages}
                    </Badge>
                  )}
                </div>
                <Button variant="outline" className="w-full">
                  View Messages
                </Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <Card className="p-8 border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Business Profile
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-border rounded-lg"
                  defaultValue="The Art House"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-border rounded-lg"
                  defaultValue="info@thearthouselc.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-border rounded-lg"
                  defaultValue="(555) 123-4567"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-border rounded-lg mb-2"
                  defaultValue="123 Creative Lane"
                />
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    className="p-3 border border-border rounded-lg"
                    placeholder="City"
                    defaultValue="Downtown District"
                  />
                  <input
                    type="text"
                    className="p-3 border border-border rounded-lg"
                    placeholder="State"
                    defaultValue="CA"
                  />
                  <input
                    type="text"
                    className="p-3 border border-border rounded-lg"
                    placeholder="Zip"
                    defaultValue="10001"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Website
                </label>
                <input
                  type="url"
                  className="w-full p-3 border border-border rounded-lg"
                  defaultValue="www.thearthouselc.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  About Your Business
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg"
                  rows={4}
                  defaultValue="The Art House is a premier creative studio dedicated to nurturing young artists."
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'subscription' && (
          <div>
            {/* Current Plan */}
            <Card className="p-8 border-border mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Current Plan
                  </h2>
                  <p className="text-muted-foreground">
                    Manage your subscription and billing
                  </p>
                </div>
                <Badge className="bg-green-50 text-green-700 border-0">
                  Active
                </Badge>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Launch Promotion
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Limited-time offer for early adopters
                    </p>
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-foreground mb-2">
                  $0<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <div className="text-sm font-medium text-green-600 mb-4">
                  0% platform fee • Unlimited programs
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                  <p className="text-sm text-blue-900">
                    <strong>Limited Time:</strong> Enjoy 0% platform fees while we're in launch mode. Standard subscription plans will be available soon.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Unlimited programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>0% platform fee on all enrollments</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Payment processing via Stripe</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Automatic weekly payouts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Family messaging system</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Subscription Plans */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Available Plans
              </h2>
              <p className="text-muted-foreground mb-6">
                Choose the plan that best fits your business needs
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Starter Plan */}
                <Card className="p-6 border-border hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Starter
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for getting started
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-foreground mb-1">
                      Free
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs text-blue-900 leading-relaxed">
                        Only pay when families enroll.<br />
                        No upfront costs. No contracts. No risk.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Up to 5 active programs</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>4% fee on paid enrollments</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Payment processing</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Weekly payouts</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Family messaging</span>
                    </div>
                  </div>

                  {currentPlan === 'starter' ? (
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : currentPlan === 'launch' ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setCurrentPlan('starter')}
                    >
                      Switch to Starter
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full text-orange-600 hover:text-orange-700"
                      onClick={() => setCurrentPlan('starter')}
                    >
                      Downgrade to Starter
                    </Button>
                  )}
                </Card>

                {/* Growth Plan */}
                <Card className="p-6 border-2 border-primary relative hover:shadow-lg transition-shadow">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white border-0">
                    Popular
                  </Badge>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Growth
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      For growing businesses
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-foreground mb-1">
                      $19<span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Up to 10 active programs</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>3% fee on paid enrollments</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Priority payment processing</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Weekly payouts</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Family messaging</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Analytics dashboard</span>
                    </div>
                  </div>

                  {currentPlan === 'growth' ? (
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : currentPlan === 'scale' ? (
                    <Button 
                      variant="outline" 
                      className="w-full text-orange-600 hover:text-orange-700"
                      onClick={() => setCurrentPlan('growth')}
                    >
                      Downgrade to Growth
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => setCurrentPlan('growth')}
                    >
                      Upgrade to Growth
                    </Button>
                  )}
                </Card>

                {/* Scale Plan */}
                <Card className="p-6 border-border hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Scale
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      For established providers
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-foreground mb-1">
                      $29<span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span className="font-medium">Unlimited programs</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>2% fee on paid enrollments</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Priority payment processing</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Daily payouts available</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Family messaging</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Advanced analytics</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Dedicated support</span>
                    </div>
                  </div>

                  {currentPlan === 'scale' ? (
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => setCurrentPlan('scale')}
                    >
                      Upgrade to Scale
                    </Button>
                  )}
                </Card>
              </div>

              {/* Plan Comparison Note */}
              <div className="mt-6 p-4 bg-gray-50 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Platform fees are calculated as a percentage of each paid enrollment. All plans include Stripe payment processing (standard Stripe fees apply separately).
                </p>
              </div>
            </div>

            {/* Featured Programs Add-On */}
            <Card className="p-8 border-border">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Featured Program Slots
                </h2>
                <p className="text-muted-foreground">
                  Boost your visibility with featured placement in search results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-yellow-100">
                      <TrendingUp className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Premium Visibility
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get your programs featured at the top of search results
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-yellow-700 mt-0.5" />
                      <span>Top placement in search results</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-yellow-700 mt-0.5" />
                      <span>Highlighted program card</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-yellow-700 mt-0.5" />
                      <span>"Featured" badge on listings</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-yellow-700 mt-0.5" />
                      <span>Increased enrollment potential</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg mb-4">
                    <div className="text-sm text-muted-foreground mb-1">
                      Starting at
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      $49<span className="text-lg font-normal text-muted-foreground">/week</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      per program • limited slots available
                    </div>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    View Available Slots
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      How It Works
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Select your program to feature</li>
                      <li>2. Choose available time slots (by week)</li>
                      <li>3. Select your target zip code radius</li>
                      <li>4. Your program appears at the top of searches</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">
                      Limited Availability
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Featured slots are limited by zip code radius to ensure quality and visibility for all featured programs.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Your Area (10001)</span>
                        <Badge variant="secondary" className="bg-green-50 text-green-700 border-0">
                          3 slots available
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Next 4 weeks</span>
                        <button className="text-primary hover:underline text-sm font-medium">
                          View calendar →
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">
                      Performance Metrics
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Track the impact of your featured placement with detailed analytics including views, clicks, and enrollment conversions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
      <Footer onNavigate={onNavigate} />

      {/* Stripe Connect Modal */}
      {showStripeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Connect with Stripe
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Secure payment processing and automatic payouts
                  </p>
                </div>
                <button
                  onClick={() => setShowStripeModal(false)}
                  className="text-muted-foreground hover:text-foreground p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Stripe Logo */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">Stripe Connect</div>
                    <div className="text-sm text-muted-foreground">Powered by Stripe</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore Central uses Stripe Connect to securely process payments and send money directly to your bank account.
                </p>
              </div>

              {/* How It Works */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-4">How It Works</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Families pay on Explore Central</div>
                      <div className="text-sm text-muted-foreground">Parents enroll and pay through our secure platform</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Stripe processes payments</div>
                      <div className="text-sm text-muted-foreground">Secure payment processing with automatic platform fee deduction</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-foreground">You receive payouts</div>
                      <div className="text-sm text-muted-foreground">Money is transferred directly to your bank account on your schedule</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-4">Why Stripe Connect?</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Secure & Compliant</div>
                      <div className="text-muted-foreground">PCI-DSS Level 1 certified</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Automatic Transfers</div>
                      <div className="text-muted-foreground">Weekly or daily payouts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Easy Setup</div>
                      <div className="text-muted-foreground">Connect in minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Detailed Reports</div>
                      <div className="text-muted-foreground">Track every transaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You'll Need */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-3">What You'll Need</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Business information (EIN or SSN)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Bank account details for payouts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Business address
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Phone number for verification
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    // In production, this would redirect to Stripe Connect onboarding
                    alert('Redirecting to Stripe Connect...');
                    setShowStripeModal(false);
                  }}
                >
                  Connect with Stripe
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowStripeModal(false)}
                >
                  Cancel
                </Button>
              </div>

              {/* Footer Note */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                By connecting, you agree to Stripe's{' '}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}