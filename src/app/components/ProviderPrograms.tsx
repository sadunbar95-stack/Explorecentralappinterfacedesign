import { Plus, Edit, Eye, MessageSquare, Calendar, Users, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';

interface ProviderProgramsProps {
  onNavigate: (view: string) => void;
}

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

export function ProviderPrograms({ onNavigate }: ProviderProgramsProps) {
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl mb-2 text-foreground">
              Programs
            </h1>
            <p className="text-muted-foreground">
              Manage your programs and enrollment capacity
            </p>
          </div>
          <Button className="gap-2 bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            Create New Program
          </Button>
        </div>

        {/* Programs List */}
        <div className="space-y-4">
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
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}