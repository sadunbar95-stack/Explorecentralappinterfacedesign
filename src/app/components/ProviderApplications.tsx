import { FileText, CheckCircle2, Check, Clock, X, Mail, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';

interface ProviderApplicationsProps {
  onNavigate: (view: string) => void;
}

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
  {
    id: '3',
    childName: 'Sofia Martinez',
    age: 8,
    program: 'Painting Fundamentals',
    parent: 'Ana Martinez',
    email: 'ana.m@email.com',
    phone: '(555) 456-7890',
    submittedDate: 'Feb 13, 2026',
    allergies: ['Dairy', 'Shellfish'],
    medicalNotes: 'Asthma - inhaler required',
    emergencyContact: 'Juan Martinez - (555) 456-7891',
    profileComplete: 100,
  },
];

export function ProviderApplications({ onNavigate }: ProviderApplicationsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('provider')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2 text-foreground">
            Applications
          </h1>
          <p className="text-muted-foreground">
            Review and manage incoming applications ({pendingApplications.length} pending)
          </p>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
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
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}