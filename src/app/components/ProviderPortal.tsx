import { 
  Plus, 
  Users, 
  DollarSign, 
  Calendar,
  Eye,
  Edit,
  CheckCircle2,
  Clock,
  AlertCircle,
  MessageSquare,
  Send,
  Mail,
  CreditCard,
  Building2,
  FileText,
  X,
  Check,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
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
    value: '247',
    icon: Users,
    color: 'bg-green-50 text-green-600',
  },
  {
    label: 'Revenue Collected',
    value: '$42,850',
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

const programs = [
  {
    id: '1',
    title: 'Creative Kids Art Studio',
    category: 'Arts & Crafts',
    enrolled: 24,
    capacity: 30,
    available: 6,
    price: 240,
    revenue: 5760,
    status: 'active',
  },
  {
    id: '2',
    title: 'Advanced Drawing Techniques',
    category: 'Arts & Crafts',
    enrolled: 15,
    capacity: 15,
    available: 0,
    price: 240,
    revenue: 3600,
    status: 'active',
  },
  {
    id: '3',
    title: 'Painting Fundamentals',
    category: 'Arts & Crafts',
    enrolled: 8,
    capacity: 20,
    available: 12,
    price: 240,
    revenue: 1920,
    status: 'active',
  },
];

const pendingApplications = [
  {
    id: '1',
    childName: 'Emma Rodriguez',
    age: 9,
    program: 'Creative Kids Art Studio',
    parent: 'Maria Rodriguez',
    email: 'maria.r@email.com',
    phone: '(555) 234-5678',
    submittedDate: 'Feb 15, 2026',
    allergies: ['None'],
    medicalNotes: 'None',
    emergencyContact: 'Carlos Rodriguez - (555) 234-5679',
    profileComplete: 100,
  },
  {
    id: '2',
    childName: 'Lucas Chen',
    age: 10,
    program: 'Advanced Drawing Techniques',
    parent: 'Wei Chen',
    email: 'wei.chen@email.com',
    phone: '(555) 345-6789',
    submittedDate: 'Feb 14, 2026',
    allergies: ['Peanuts'],
    medicalNotes: 'None',
    emergencyContact: 'Lin Chen - (555) 345-6780',
    profileComplete: 100,
  },
];

const messages = [
  {
    id: '1',
    from: 'Sarah Johnson',
    program: 'Creative Kids Art Studio',
    subject: 'Question about upcoming session',
    preview: 'Hi, I wanted to ask about the materials needed for...',
    date: 'Feb 16, 2:30 PM',
    unread: true,
  },
  {
    id: '2',
    from: 'Michael Lee',
    program: 'Painting Fundamentals',
    subject: 'Schedule change request',
    preview: 'Is it possible to switch from Wednesday to...',
    date: 'Feb 15, 4:15 PM',
    unread: false,
  },
];

export function ProviderPortal({ onNavigate }: ProviderPortalProps) {
  const [stripeConnected, setStripeConnected] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState<string>('all');

  const calculatePlatformFee = (amount: number) => {
    return (amount * PLATFORM_FEE_PERCENTAGE) / 100;
  };

  const calculateNetPayout = (amount: number) => {
    return amount - calculatePlatformFee(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl mb-2 text-foreground">
              Provider Dashboard
            </h1>
            <p className="text-muted-foreground">
              Complete program and enrollment management system
            </p>
          </div>
          <Button className="gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto">
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

        {/* Stripe Payment Setup Section */}
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

              {stripeConnected ? (
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
                    <Button variant="outline" size="sm">
                      Update Bank Account
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      View Payout History
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with Stripe to accept payments and receive automatic payouts. Stripe handles all payment processing securely.
                    </p>
                  </div>
                  <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                    <CreditCard className="h-4 w-4" />
                    Connect with Stripe
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="programs" className="w-full">
          <TabsList className="bg-white border border-border mb-6">
            <TabsTrigger value="programs" className="gap-2">
              <Calendar className="h-4 w-4" />
              Programs
            </TabsTrigger>
            <TabsTrigger value="applications" className="gap-2">
              <FileText className="h-4 w-4" />
              Applications
              <Badge className="ml-2 bg-yellow-100 text-yellow-700 border-0">
                {pendingApplications.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
              <Badge className="ml-2 bg-red-100 text-red-700 border-0">
                {messages.filter(m => m.unread).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="revenue" className="gap-2">
              <DollarSign className="h-4 w-4" />
              Revenue
            </TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Manage your programs and enrollment capacity
              </p>
            </div>

            {programs.map((program) => {
              const spotsRemaining = program.capacity - program.enrolled;
              const percentFull = (program.enrolled / program.capacity) * 100;

              return (
                <Card key={program.id} className="p-6 border-border">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {program.title}
                          </h3>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                            {program.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Enrollment
                          </div>
                          <div className="font-semibold text-foreground">
                            {program.enrolled}/{program.capacity}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {spotsRemaining} spots left
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Price
                          </div>
                          <div className="font-semibold text-foreground">
                            ${program.price}/month
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Revenue
                          </div>
                          <div className="font-semibold text-foreground">
                            ${program.revenue.toLocaleString()}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Status
                          </div>
                          <Badge className="bg-green-50 text-green-700 border-0">
                            Active
                          </Badge>
                        </div>
                      </div>

                      {/* Capacity Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Capacity</span>
                          <span className={percentFull >= 90 ? 'text-yellow-600 font-medium' : 'text-muted-foreground'}>
                            {percentFull.toFixed(0)}% full
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${percentFull >= 90 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${percentFull}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="h-3 w-3" />
                      Edit Program
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-3 w-3" />
                      View Enrollments
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageSquare className="h-3 w-3" />
                      Message Families
                    </Button>
                  </div>
                </Card>
              );
            })}
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Review and manage incoming applications
              </p>
            </div>

            {pendingApplications.map((app) => (
              <Card key={app.id} className="p-6 border-border">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-semibold text-lg">
                        {app.childName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {app.childName}, {app.age}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Applying for: {app.program}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-green-50 text-green-700 border-0">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Profile Complete
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            Submitted {app.submittedDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Application Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Parent/Guardian
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {app.parent}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          {app.email}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {app.phone}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Emergency Contact
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {app.emergencyContact}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Allergies
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {app.allergies.join(', ')}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">
                          Medical Notes
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {app.medicalNotes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  <Button className="gap-2 bg-green-600 hover:bg-green-700">
                    <Check className="h-4 w-4" />
                    Accept Application
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Clock className="h-4 w-4" />
                    Add to Waitlist
                  </Button>
                  <Button variant="outline" className="gap-2 text-red-600 hover:text-red-700">
                    <X className="h-4 w-4" />
                    Decline
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Request More Info
                  </Button>
                </div>
              </Card>
            ))}

            {pendingApplications.length === 0 && (
              <Card className="p-12 border-border border-dashed">
                <div className="text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    No pending applications
                  </h3>
                  <p className="text-muted-foreground">
                    Applications will appear here for review
                  </p>
                </div>
              </Card>
            )}
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Message Actions */}
              <div className="lg:col-span-1">
                <Card className="p-5 border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Send Message
                  </h3>
                  
                  <div className="space-y-3">
                    <Button className="w-full justify-start gap-2 bg-primary hover:bg-primary/90">
                      <Send className="h-4 w-4" />
                      Broadcast to All Families
                    </Button>
                    
                    <div className="pt-3 border-t border-border">
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Filter by Program
                      </label>
                      <select 
                        className="w-full p-2 border border-border rounded-lg text-sm"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                      >
                        <option value="all">All Programs</option>
                        {programs.map((program) => (
                          <option key={program.id} value={program.id}>
                            {program.title}
                          </option>
                        ))}
                      </select>
                      
                      <Button variant="outline" className="w-full mt-2 gap-2">
                        <Send className="h-4 w-4" />
                        Email Selected Program
                      </Button>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">
                        Message Templates
                      </p>
                      <div className="space-y-1">
                        <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                          Schedule Change
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                          Reminder
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                          Announcement
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Message List */}
              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">
                    Message History
                  </h3>
                </div>

                {messages.map((message) => (
                  <Card 
                    key={message.id} 
                    className={`p-5 border-border cursor-pointer hover:shadow-md transition-shadow ${
                      message.unread ? 'bg-blue-50/50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-medium text-foreground">
                            {message.from}
                          </h4>
                          <span className="text-xs text-muted-foreground shrink-0">
                            {message.date}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {message.program}
                        </p>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {message.subject}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {message.preview}
                        </p>
                      </div>
                      {message.unread && (
                        <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      )}
                    </div>
                  </Card>
                ))}

                {messages.length === 0 && (
                  <Card className="p-12 border-border border-dashed">
                    <div className="text-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No messages yet
                      </h3>
                      <p className="text-muted-foreground">
                        Messages from families will appear here
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Revenue Tab */}
          <TabsContent value="revenue" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                Revenue breakdown and payout details
              </p>
            </div>

            <Card className="p-6 border-border mb-6">
              <h3 className="font-semibold text-foreground mb-4">
                Revenue by Program
              </h3>

              <div className="space-y-4">
                {programs.map((program) => {
                  const platformFee = calculatePlatformFee(program.revenue);
                  const netPayout = calculateNetPayout(program.revenue);

                  return (
                    <div key={program.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">
                            {program.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {program.enrolled} enrollments × ${program.price}/month
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-foreground">
                            ${program.revenue.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Total Revenue
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Program Price
                          </div>
                          <div className="font-medium text-foreground">
                            ${program.revenue.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Platform Fee ({PLATFORM_FEE_PERCENTAGE}%)
                          </div>
                          <div className="font-medium text-green-600">
                            ${platformFee.toFixed(2)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">
                            Net Payout
                          </div>
                          <div className="font-semibold text-foreground">
                            ${netPayout.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Total Net Payout
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        ${programs.reduce((sum, p) => sum + calculateNetPayout(p.revenue), 0).toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-600 font-medium mb-1">
                        0% Platform Fee (Launch Promo)
                      </div>
                      <div className="text-xs text-muted-foreground">
                        You keep 100% of revenue
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}