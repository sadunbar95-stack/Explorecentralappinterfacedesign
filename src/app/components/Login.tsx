import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { User, Building2 } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LoginProps {
  onLogin: (userType: 'parent' | 'provider') => void;
  onNavigate: (view: string) => void;
}

export function Login({ onLogin, onNavigate }: LoginProps) {
  const handleParentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin('parent');
  };

  const handleProviderLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin('provider');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={onNavigate} 
        currentView="login"
        isLoggedIn={false}
        userType={null}
        onLogout={() => {}}
      />
      
      <div className="bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Choose how you'd like to login
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parent Login */}
            <Card className="p-8 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Login as Parent
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Access your family dashboard
                  </p>
                </div>
              </div>

              <form onSubmit={handleParentLogin} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="parent@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Password
                  </label>
                  <Input 
                    type="password" 
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Login as Parent
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => onNavigate('register')}
                    className="text-primary hover:underline font-medium"
                  >
                    Register as Parent
                  </button>
                </p>
              </div>
            </Card>

            {/* Provider Login */}
            <Card className="p-8 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-orange-50">
                  <Building2 className="h-6 w-6 text-orange-600 opacity-80" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Login as Provider
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Manage your programs
                  </p>
                </div>
              </div>

              <form onSubmit={handleProviderLogin} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="provider@organization.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Password
                  </label>
                  <Input 
                    type="password" 
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 opacity-80">
                  Login as Provider
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => onNavigate('register')}
                    className="text-orange-600 hover:underline font-medium opacity-80"
                  >
                    Register as Provider
                  </button>
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => onNavigate('home')}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}