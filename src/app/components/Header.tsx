import { Search, Menu, User, Bell, Heart, ChevronDown, LogOut, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import logo from 'figma:asset/510d9f59edc66e9b9e5cf11f088a9a94ad0fa00a.png';

interface HeaderProps {
  onNavigate: (view: string) => void;
  currentView: string;
  isLoggedIn: boolean;
  userType: 'parent' | 'provider' | null;
  onLogout: () => void;
}

export function Header({ onNavigate, currentView, isLoggedIn, userType, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [parentDropdownOpen, setParentDropdownOpen] = useState(false);
  const [providerDropdownOpen, setProviderDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-28 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="Explore Central" 
              className="h-12 sm:h-20 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm transition-colors ${
                currentView === 'home' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate('discover')}
              className={`text-sm transition-colors ${
                currentView === 'discover' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Discover
            </button>

            {/* Logged Out - Show For Parents & For Providers links */}
            {!isLoggedIn && (
              <>
                <button
                  onClick={() => onNavigate('for-parents')}
                  className={`text-sm transition-colors ${
                    currentView === 'for-parents'
                      ? 'text-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  For Parents
                </button>

                <button
                  onClick={() => onNavigate('for-providers')}
                  className={`text-sm transition-colors ${
                    currentView === 'for-providers'
                      ? 'text-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  For Providers
                </button>
              </>
            )}

            {/* Logged In - Show My Dashboard */}
            {isLoggedIn && (
              <button
                onClick={() => onNavigate(userType === 'parent' ? 'dashboard' : 'provider')}
                className={`text-sm transition-colors ${
                  currentView === 'dashboard' || currentView === 'provider'
                    ? 'text-foreground font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                My Dashboard
              </button>
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onNavigate('favorites')}
                  className="hidden md:flex text-muted-foreground hover:text-foreground"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onNavigate('messages')}
                  className="hidden md:flex text-muted-foreground hover:text-foreground"
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onNavigate('notifications')}
                  className="hidden md:flex text-muted-foreground hover:text-foreground"
                >
                  <Bell className="h-5 w-5" />
                </Button>
                
                {/* User Menu */}
                <div className="relative hidden md:block">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    onBlur={() => setTimeout(() => setUserMenuOpen(false), 200)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                  {userMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2">
                      <div className="px-4 py-2 border-b border-border">
                        <p className="text-xs text-muted-foreground">
                          Logged in as {userType === 'parent' ? 'Parent' : 'Provider'}
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          onLogout();
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 text-red-600"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Button
                onClick={() => onNavigate('login')}
                variant="ghost"
                size="icon"
                className="hidden md:flex text-muted-foreground hover:text-foreground"
              >
                <User className="h-5 w-5" />
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-sm text-left px-2 py-2 rounded-md transition-colors ${
                  currentView === 'home' 
                    ? 'bg-accent text-foreground font-medium' 
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => {
                  onNavigate('discover');
                  setMobileMenuOpen(false);
                }}
                className={`text-sm text-left px-2 py-2 rounded-md transition-colors ${
                  currentView === 'discover' 
                    ? 'bg-accent text-foreground font-medium' 
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                Discover
              </button>

              {!isLoggedIn && (
                <>
                  <button
                    onClick={() => {
                      onNavigate('for-parents');
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm text-left px-2 py-2 rounded-md transition-colors ${
                      currentView === 'for-parents'
                        ? 'bg-accent text-foreground font-medium' 
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                  >
                    For Parents
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('for-providers');
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm text-left px-2 py-2 rounded-md transition-colors ${
                      currentView === 'for-providers'
                        ? 'bg-accent text-foreground font-medium' 
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                  >
                    For Providers
                  </button>
                  <div className="border-t border-border mt-2 pt-2">
                    <Button
                      onClick={() => {
                        onNavigate('login');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      Login or Register
                    </Button>
                  </div>
                </>
              )}

              {isLoggedIn && (
                <>
                  <button
                    onClick={() => {
                      onNavigate(userType === 'parent' ? 'dashboard' : 'provider');
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm text-left px-2 py-2 rounded-md transition-colors ${
                      currentView === 'dashboard' || currentView === 'provider'
                        ? 'bg-accent text-foreground font-medium' 
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                  >
                    My Dashboard
                  </button>
                  <div className="border-t border-border mt-2 pt-2">
                    <button
                      onClick={() => {
                        onLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="text-sm text-left px-2 py-2 rounded-md transition-colors text-red-600 hover:bg-red-50 w-full flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}