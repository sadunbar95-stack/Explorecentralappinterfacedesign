import { 
  Heart, 
  Calendar, 
  User, 
  Plus,
  MapPin,
  Clock,
  ChevronRight,
  Edit,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  Phone,
  Stethoscope,
  Shield,
  Award,
  LayoutDashboard,
  Settings,
  CreditCard,
  Mail,
  Home,
  Check,
  Crown,
  Send,
  Pause
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Footer } from './Footer';
import { useState } from 'react';

interface ParentDashboardProps {
  onNavigate: (view: string) => void;
}

const initialChildProfiles = [
  {
    id: '1',
    firstName: 'Emma',
    lastName: 'Johnson',
    dateOfBirth: '2016-03-15',
    age: 8,
    grade: '3rd Grade',
    gender: 'Female',
    school: 'Lincoln Elementary',
    initials: 'EJ',
    color: 'bg-blue-100 text-blue-700',
    profileComplete: 85,
    emergencyContact: {
      name: 'Sarah Johnson',
      phone: '(555) 123-4567'
    },
    medicalInfo: {
      allergies: ['Peanuts'],
      conditions: [],
      medications: []
    },
    interests: ['Arts & Crafts', 'Swimming', 'Music'],
    permissions: {
      photoConsent: true,
      liabilityAcknowledged: true
    }
  },
  {
    id: '2',
    firstName: 'Lucas',
    lastName: 'Johnson',
    dateOfBirth: '2013-08-22',
    age: 11,
    grade: '6th Grade',
    gender: 'Male',
    school: 'Lincoln Elementary',
    initials: 'LJ',
    color: 'bg-green-100 text-green-700',
    profileComplete: 100,
    emergencyContact: {
      name: 'Sarah Johnson',
      phone: '(555) 123-4567'
    },
    medicalInfo: {
      allergies: [],
      conditions: ['Asthma'],
      medications: ['Albuterol inhaler']
    },
    interests: ['STEM', 'Sports', 'Robotics'],
    permissions: {
      photoConsent: true,
      liabilityAcknowledged: true
    }
  },
];

const applications = [
  {
    id: '1',
    programTitle: 'Summer STEM Camp 2026',
    provider: 'TechKids Learning Center',
    child: 'Lucas Johnson',
    status: 'submitted',
    submittedDate: 'Feb 10, 2026',
    startDate: 'June 15, 2026'
  },
  {
    id: '2',
    programTitle: 'Advanced Swimming',
    provider: 'AquaKids Swim School',
    child: 'Emma Johnson',
    status: 'waitlisted',
    submittedDate: 'Feb 8, 2026',
    startDate: 'March 1, 2026'
  },
  {
    id: '3',
    programTitle: 'Piano Lessons - Beginner',
    provider: 'Harmony Music School',
    child: 'Emma Johnson',
    status: 'waitlisted',
    submittedDate: 'Feb 5, 2026',
    startDate: 'March 1, 2026'
  },
];

const unfinishedApplications = [
  {
    id: 'u1',
    programTitle: 'Ballet & Contemporary Dance',
    provider: 'Grace Dance Studio',
    child: 'Emma Johnson',
    lastSaved: 'Feb 14, 2026',
    completionPercent: 65,
    startDate: 'March 15, 2026'
  },
  {
    id: 'u2',
    programTitle: 'Youth Basketball League',
    provider: 'Community Sports Center',
    child: 'Lucas Johnson',
    lastSaved: 'Feb 12, 2026',
    completionPercent: 40,
    startDate: 'April 1, 2026'
  },
];

const enrollments = [
  {
    id: '1',
    title: 'Creative Kids Art Studio',
    provider: 'The Art House',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzcxMTkzMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    child: 'Emma Johnson',
    nextSession: 'Mon, Feb 17 at 4:00 PM',
    location: 'Downtown District',
    status: 'active',
  },
  {
    id: '2',
    title: 'Robotics & Coding Academy',
    provider: 'TechKids Learning Center',
    image: 'https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcm9ib3RpY3MlMjBTVEVNJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTE5MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    child: 'Lucas Johnson',
    nextSession: 'Tue, Feb 18 at 3:30 PM',
    location: 'Tech Valley',
    status: 'active',
  },
  {
    id: '3',
    title: 'Youth Soccer League',
    provider: 'Elite Sports Academy',
    image: 'https://images.unsplash.com/photo-1762345565397-ba85070a5bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNvY2NlciUyMHNwb3J0cyUyMGZpZWxkfGVufDF8fHx8MTc3MTE5MzM3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    child: 'Lucas Johnson',
    nextSession: 'Wed, Feb 19 at 5:00 PM',
    location: 'Riverside Park',
    status: 'active',
  },
];

const savedPrograms = [
  {
    id: '4',
    title: 'Ballet & Contemporary Dance',
    provider: 'Grace Dance Studio',
    image: 'https://images.unsplash.com/photo-1765939928892-954004cbeec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZGFuY2UlMjBiYWxsZXQlMjBjbGFzc3xlbnwxfHx8fDE3NzExOTMzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Arts District',
    age: '4-16 years',
    price: '$200/month',
  },
  {
    id: '5',
    title: 'Piano & Music Theory',
    provider: 'Harmony Music School',
    image: 'https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG11c2ljJTIwcGlhbm8lMjBsZXNzb25zfGVufDF8fHx8MTc3MTE5MzM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Central Square',
    age: '5-17 years',
    price: '$160/month',
  },
];

export function ParentDashboard({ onNavigate }: ParentDashboardProps) {
  const [childProfiles] = useState(initialChildProfiles);
  const [showChildForm, setShowChildForm] = useState(false);
  const [editingChild, setEditingChild] = useState<string | null>(null);
  const [editingAccount, setEditingAccount] = useState(false);

  // Mock account data
  const [accountInfo, setAccountInfo] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const totalChildren = childProfiles.length;
  const activeEnrollments = enrollments.length;
  const submittedApplications = applications.filter(a => a.status === 'submitted').length;
  const waitlistedApplications = applications.filter(a => a.status === 'waitlisted').length;
  const unfinishedCount = unfinishedApplications.length;
  const savedProgramsCount = savedPrograms.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2 text-foreground">
            Parent Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {accountInfo.name.split(' ')[0]}!
          </p>
        </div>

        {/* Main Navigation Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="bg-white border border-border mb-6 grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="dashboard" className="gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="child-profiles" className="gap-2">
              <Users className="h-4 w-4" />
              Child Profiles
              <Badge className="ml-2 bg-primary/10 text-primary border-0">{totalChildren}</Badge>
            </TabsTrigger>
            <TabsTrigger value="account" className="gap-2">
              <Settings className="h-4 w-4" />
              Account
            </TabsTrigger>
            <TabsTrigger value="subscription" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Subscription
            </TabsTrigger>
          </TabsList>

          {/* DASHBOARD TAB */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Card 
                className="p-5 border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('detail')}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-orange-50">
                    <Pause className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <div className="text-2xl font-semibold text-foreground mb-1">
                  {unfinishedCount}
                </div>
                <div className="text-sm text-muted-foreground">
                  Unfinished Applications
                </div>
              </Card>

              <Card 
                className="p-5 border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('detail')}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-yellow-50">
                    <Send className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
                <div className="text-2xl font-semibold text-foreground mb-1">
                  {submittedApplications}
                </div>
                <div className="text-sm text-muted-foreground">
                  Submitted Applications
                </div>
              </Card>

              <Card 
                className="p-5 border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('detail')}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-2xl font-semibold text-foreground mb-1">
                  {waitlistedApplications}
                </div>
                <div className="text-sm text-muted-foreground">
                  Waitlisted Applications
                </div>
              </Card>

              <Card 
                className="p-5 border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('detail')}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-green-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="text-2xl font-semibold text-foreground mb-1">
                  {activeEnrollments}
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Enrollments
                </div>
              </Card>

              <Card 
                className="p-5 border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('detail')}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-red-50">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div className="text-2xl font-semibold text-foreground mb-1">
                  {savedProgramsCount}
                </div>
                <div className="text-sm text-muted-foreground">
                  Saved Programs
                </div>
              </Card>

              <Card 
                className="p-5 border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('child-profiles')}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-purple-50">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div className="text-2xl font-semibold text-foreground mb-1">
                  {totalChildren}
                </div>
                <div className="text-sm text-muted-foreground">
                  {totalChildren === 1 ? 'Child Profile' : 'Child Profiles'}
                </div>
              </Card>
            </div>

            {/* Data Reuse Message */}
            <Card className="p-5 border-primary/20 bg-primary/5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Complete child profiles once, apply everywhere
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Information you enter here automatically fills future applications. Keep profiles up-to-date for faster enrollments.
                  </p>
                </div>
              </div>
            </Card>

            {/* Enrollments & Applications Tabs */}
            <Tabs defaultValue="enrollments" className="w-full">
              <TabsList className="bg-white border border-border mb-6">
                <TabsTrigger value="enrollments" className="gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Active Enrollments
                  <Badge className="ml-2 bg-green-100 text-green-700 border-0">{enrollments.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="applications" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Applications
                  <Badge className="ml-2 bg-yellow-100 text-yellow-700 border-0">{applications.length}</Badge>
                </TabsTrigger>
                <TabsTrigger value="saved" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Saved Programs
                  <Badge className="ml-2 bg-gray-100 text-muted-foreground border-0">{savedPrograms.length}</Badge>
                </TabsTrigger>
              </TabsList>

              {/* Active Enrollments */}
              <TabsContent value="enrollments" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">
                    Upcoming activities and active program enrollments
                  </p>
                </div>
                {enrollments.map((enrollment) => (
                  <Card 
                    key={enrollment.id} 
                    className="overflow-hidden border-border hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => onNavigate('detail')}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5">
                      <div className="w-full sm:w-32 aspect-video sm:aspect-square rounded-lg overflow-hidden shrink-0">
                        <img
                          src={enrollment.image}
                          alt={enrollment.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-lg text-foreground mb-1 truncate">
                              {enrollment.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {enrollment.provider}
                            </p>
                          </div>
                          <Badge className="bg-green-50 text-green-700 border-0 shrink-0">
                            Active
                          </Badge>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            <span>{enrollment.child}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium text-foreground">
                              {enrollment.nextSession}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{enrollment.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            View details
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            Contact provider
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {enrollments.length === 0 && (
                  <Card className="p-12 border-border border-dashed">
                    <div className="text-center">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No active enrollments
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Start exploring programs to enroll your children
                      </p>
                      <Button onClick={() => onNavigate('discover')}>
                        Browse Programs
                      </Button>
                    </div>
                  </Card>
                )}
              </TabsContent>

              {/* Applications */}
              <TabsContent value="applications" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">
                    Track submitted applications and their status
                  </p>
                </div>

                {applications.map((app) => (
                  <Card key={app.id} className="p-5 border-border">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${
                            app.status === 'pending' ? 'bg-yellow-50' : 
                            app.status === 'waitlisted' ? 'bg-blue-50' : 
                            'bg-green-50'
                          }`}>
                            {app.status === 'pending' ? (
                              <Clock className="h-5 w-5 text-yellow-600" />
                            ) : app.status === 'waitlisted' ? (
                              <AlertCircle className="h-5 w-5 text-blue-600" />
                            ) : (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground mb-1">
                              {app.programTitle}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {app.provider}
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                              <span>Child: {app.child}</span>
                              <span>Submitted: {app.submittedDate}</span>
                              <span>Starts: {app.startDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className={
                        app.status === 'pending' ? 'bg-yellow-100 text-yellow-700 border-0' :
                        app.status === 'waitlisted' ? 'bg-blue-100 text-blue-700 border-0' :
                        'bg-green-100 text-green-700 border-0'
                      }>
                        {app.status === 'pending' ? 'Pending Review' :
                         app.status === 'waitlisted' ? 'Waitlisted' :
                         'Accepted'}
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-border">
                      <Button variant="outline" size="sm">View Application</Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        Contact Provider
                      </Button>
                    </div>
                  </Card>
                ))}

                {applications.length === 0 && (
                  <Card className="p-12 border-border border-dashed">
                    <div className="text-center">
                      <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No pending applications
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Applications you submit will appear here for tracking
                      </p>
                      <Button onClick={() => onNavigate('discover')}>
                        Browse Programs
                      </Button>
                    </div>
                  </Card>
                )}
              </TabsContent>

              {/* Saved Programs */}
              <TabsContent value="saved">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">
                    Programs you've saved for later review
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {savedPrograms.map((program) => (
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
                        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
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

                {savedPrograms.length === 0 && (
                  <Card className="p-12 border-border border-dashed">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        No saved programs yet
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Save programs you're interested in for easy access later
                      </p>
                      <Button onClick={() => onNavigate('discover')}>
                        Browse Programs
                      </Button>
                    </div>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* CHILD PROFILES TAB */}
          <TabsContent value="child-profiles" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl text-foreground">Child Profiles</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Manage reusable enrollment information for each child
                </p>
              </div>
              <Button 
                onClick={() => setShowChildForm(true)} 
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                Add Child
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {childProfiles.map((child) => (
                <Card key={child.id} className="p-6 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full ${child.color} flex items-center justify-center shrink-0 text-xl font-semibold`}>
                      {child.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {child.firstName} {child.lastName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {child.age} years old • {child.grade}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setEditingChild(child.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Profile Completeness */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Profile Complete</span>
                          <span className={child.profileComplete === 100 ? 'text-green-600 font-medium' : 'text-yellow-600 font-medium'}>
                            {child.profileComplete}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${child.profileComplete === 100 ? 'bg-green-500' : 'bg-yellow-500'}`}
                            style={{ width: `${child.profileComplete}%` }}
                          />
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          <span>Emergency contact set</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Stethoscope className="h-3 w-3" />
                          <span>{child.medicalInfo.allergies.length + child.medicalInfo.conditions.length} medical notes</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Award className="h-3 w-3" />
                          <span>{child.interests.length} interests</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Shield className="h-3 w-3" />
                          <span>Permissions signed</span>
                        </div>
                      </div>

                      {/* Interests Tags */}
                      <div className="flex flex-wrap gap-1">
                        {child.interests.slice(0, 3).map((interest, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                            {interest}
                          </Badge>
                        ))}
                        {child.interests.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 text-muted-foreground border-0">
                            +{child.interests.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {child.profileComplete < 100 && (
                    <div className="pt-4 border-t border-border">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-yellow-600 border-yellow-200 hover:bg-yellow-50"
                        onClick={() => setEditingChild(child.id)}
                      >
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Complete Profile for Faster Applications
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {childProfiles.length === 0 && (
              <Card className="p-12 border-border border-dashed">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    No child profiles yet
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Add your first child profile to start applying to programs
                  </p>
                  <Button onClick={() => setShowChildForm(true)} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add First Child
                  </Button>
                </div>
              </Card>
            )}
          </TabsContent>

          {/* ACCOUNT TAB */}
          <TabsContent value="account" className="space-y-6">
            <div>
              <h2 className="text-2xl text-foreground mb-1">Account Information</h2>
              <p className="text-sm text-muted-foreground">
                Manage your personal information and contact details
              </p>
            </div>

            <Card className="p-6 border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Personal Information
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Update your account details
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setEditingAccount(!editingAccount)}
                >
                  {editingAccount ? 'Cancel' : 'Edit'}
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Full Name
                    </label>
                    {editingAccount ? (
                      <Input 
                        type="text" 
                        value={accountInfo.name}
                        onChange={(e) => setAccountInfo({...accountInfo, name: e.target.value})}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">{accountInfo.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Email Address
                    </label>
                    <div className="flex items-center gap-2">
                      {editingAccount ? (
                        <Input 
                          type="email" 
                          value={accountInfo.email}
                          onChange={(e) => setAccountInfo({...accountInfo, email: e.target.value})}
                          className="flex-1"
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground py-2">{accountInfo.email}</p>
                      )}
                      <Badge className="bg-green-50 text-green-700 border-0 shrink-0">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Phone Number
                    </label>
                    {editingAccount ? (
                      <Input 
                        type="tel" 
                        placeholder="(555) 123-4567"
                        value={accountInfo.phone}
                        onChange={(e) => setAccountInfo({...accountInfo, phone: e.target.value})}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">
                        {accountInfo.phone || 'Not provided'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Address
                    </label>
                    {editingAccount ? (
                      <Input 
                        type="text" 
                        placeholder="123 Main Street"
                        value={accountInfo.address}
                        onChange={(e) => setAccountInfo({...accountInfo, address: e.target.value})}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">
                        {accountInfo.address || 'Not provided'}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      City
                    </label>
                    {editingAccount ? (
                      <Input 
                        type="text" 
                        placeholder="San Francisco"
                        value={accountInfo.city}
                        onChange={(e) => setAccountInfo({...accountInfo, city: e.target.value})}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">
                        {accountInfo.city || 'Not provided'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      State
                    </label>
                    {editingAccount ? (
                      <Input 
                        type="text" 
                        placeholder="CA"
                        value={accountInfo.state}
                        onChange={(e) => setAccountInfo({...accountInfo, state: e.target.value})}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">
                        {accountInfo.state || 'Not provided'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Zip Code
                    </label>
                    {editingAccount ? (
                      <Input 
                        type="text" 
                        placeholder="94103"
                        value={accountInfo.zipCode}
                        onChange={(e) => setAccountInfo({...accountInfo, zipCode: e.target.value})}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground py-2">
                        {accountInfo.zipCode || 'Not provided'}
                      </p>
                    )}
                  </div>
                </div>

                {editingAccount && (
                  <div className="flex gap-2 pt-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setEditingAccount(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Login & Security */}
            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Login & Security
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">Password</p>
                    <p className="text-xs text-muted-foreground">Last changed 30 days ago</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Change Password
                  </Button>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* SUBSCRIPTION TAB */}
          <TabsContent value="subscription" className="space-y-6">
            <div>
              <h2 className="text-2xl text-foreground mb-1">Manage Subscription</h2>
              <p className="text-sm text-muted-foreground">
                Choose the plan that works best for your family
              </p>
            </div>

            {/* Current Plan */}
            <Card className="p-6 border-primary bg-primary/5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">Free Plan</h3>
                    <Badge className="bg-primary text-white border-0">Current</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Basic features to get started with Explore Central
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">$0</p>
                  <p className="text-xs text-muted-foreground">per month</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Up to 3 child profiles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Browse and save unlimited programs</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Basic application tracking</span>
                </div>
              </div>
            </Card>

            {/* Premium Plan */}
            <Card className="p-6 border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-orange-600 text-white px-4 py-1 text-xs font-semibold">
                COMING SOON
              </div>
              
              <div className="flex items-start justify-between mb-4 mt-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="h-5 w-5 text-orange-500" />
                    <h3 className="text-lg font-semibold text-foreground">Premium Plan</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced features for busy families
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">$9.99</p>
                  <p className="text-xs text-muted-foreground">per month</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Unlimited child profiles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Priority application processing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Advanced calendar integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Personalized program recommendations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Exclusive early access to new programs</span>
                </div>
              </div>

              <Button className="w-full opacity-50 cursor-not-allowed" disabled>
                Coming Soon
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}