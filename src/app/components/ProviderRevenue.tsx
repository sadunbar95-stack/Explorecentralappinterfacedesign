import { DollarSign, TrendingUp, CreditCard, Building2, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';

interface ProviderRevenueProps {
  onNavigate: (view: string) => void;
}

const PLATFORM_FEE_PERCENTAGE = 0; // Currently 0% during launch

const programs = [
  {
    id: '1',
    title: 'Creative Kids Art Studio',
    enrolled: 24,
    price: 240,
    revenue: 5760,
  },
  {
    id: '2',
    title: 'Advanced Drawing Techniques',
    enrolled: 15,
    price: 240,
    revenue: 3600,
  },
  {
    id: '3',
    title: 'Painting Fundamentals',
    enrolled: 8,
    price: 240,
    revenue: 1920,
  },
];

export function ProviderRevenue({ onNavigate }: ProviderRevenueProps) {
  const calculatePlatformFee = (amount: number) => {
    return (amount * PLATFORM_FEE_PERCENTAGE) / 100;
  };

  const calculateNetPayout = (amount: number) => {
    return amount - calculatePlatformFee(amount);
  };

  const totalRevenue = programs.reduce((sum, p) => sum + p.revenue, 0);
  const totalNetPayout = calculateNetPayout(totalRevenue);

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
            Revenue
          </h1>
          <p className="text-muted-foreground">
            Revenue breakdown and payout details
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-50">
                <DollarSign className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm text-muted-foreground">Total Revenue</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              From all programs
            </p>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-green-50">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-sm text-muted-foreground">Net Payout</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              ${totalNetPayout.toLocaleString()}
            </div>
            <p className="text-xs text-green-600 mt-1">
              0% platform fee during launch
            </p>
          </Card>

          <Card className="p-6 border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-yellow-50">
                <CreditCard className="h-5 w-5 text-yellow-600" />
              </div>
              <span className="text-sm text-muted-foreground">Next Payout</span>
            </div>
            <div className="text-3xl font-bold text-foreground">
              $3,240
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Friday, Feb 21
            </p>
          </Card>
        </div>

        {/* Payout Details */}
        <Card className="p-6 mb-8 border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Payout Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Update Bank Account
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              View Payout History
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </Card>

        {/* Revenue by Program */}
        <Card className="p-6 border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Revenue by Program
          </h2>

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
                    ${totalNetPayout.toLocaleString()}
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
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}