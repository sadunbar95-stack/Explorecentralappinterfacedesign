import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Discover } from './components/Discover';
import { ProgramDetail } from './components/ProgramDetail';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ParentDashboard } from './components/ParentDashboard';
import { ProviderPortal } from './components/ProviderPortalNew';
import { ForParents } from './components/ForParents';
import { ForProviders } from './components/ForProviders';
import { Favorites } from './components/Favorites';
import { Messages } from './components/Messages';
import { Notifications } from './components/Notifications';
import { Reviews } from './components/Reviews';
import { ProviderProfile } from './components/ProviderProfile';
import { ProviderPrograms } from './components/ProviderPrograms';
import { ProviderApplications } from './components/ProviderApplications';
import { ProviderRevenue } from './components/ProviderRevenue';
import { CreateProgram } from './components/CreateProgram';
import { ContactUs } from './components/ContactUs';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'parent' | 'provider' | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleNavigate = (view: string, programId?: string) => {
    setCurrentView(view);
    if (programId) {
      setSelectedProgramId(programId);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFavorite = (programId: string) => {
    setFavorites(prev => {
      if (prev.includes(programId)) {
        return prev.filter(id => id !== programId);
      } else {
        return [...prev, programId];
      }
    });
  };

  const handleLogin = (type: 'parent' | 'provider') => {
    setIsLoggedIn(true);
    setUserType(type);
    // Navigate to appropriate dashboard
    if (type === 'parent') {
      setCurrentView('dashboard');
    } else {
      setCurrentView('provider');
    }
  };

  const handleRegister = (type: 'parent' | 'provider') => {
    setIsLoggedIn(true);
    setUserType(type);
    // Navigate to appropriate dashboard
    if (type === 'parent') {
      setCurrentView('dashboard');
    } else {
      setCurrentView('provider');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentView !== 'login' && currentView !== 'register' && (
        <Header 
          onNavigate={handleNavigate} 
          currentView={currentView}
          isLoggedIn={isLoggedIn}
          userType={userType}
          onLogout={handleLogout}
        />
      )}
      
      {currentView === 'home' && (
        <Home onNavigate={handleNavigate} />
      )}
      
      {currentView === 'discover' && (
        <Discover 
          onNavigate={handleNavigate} 
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
      
      {currentView === 'detail' && (
        <ProgramDetail onNavigate={handleNavigate} />
      )}
      
      {currentView === 'login' && (
        <Login onLogin={handleLogin} onNavigate={handleNavigate} />
      )}

      {currentView === 'register' && (
        <Register onRegister={handleRegister} onNavigate={handleNavigate} />
      )}
      
      {currentView === 'dashboard' && isLoggedIn && userType === 'parent' && (
        <ParentDashboard onNavigate={handleNavigate} />
      )}
      
      {currentView === 'provider' && isLoggedIn && userType === 'provider' && (
        <ProviderPortal onNavigate={handleNavigate} />
      )}
      
      {currentView === 'for-parents' && (
        <ForParents onNavigate={handleNavigate} />
      )}
      
      {currentView === 'for-providers' && (
        <ForProviders onNavigate={handleNavigate} />
      )}
      
      {currentView === 'favorites' && isLoggedIn && (
        <Favorites 
          onNavigate={handleNavigate}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
      
      {currentView === 'messages' && isLoggedIn && (
        <Messages onNavigate={handleNavigate} />
      )}
      
      {currentView === 'notifications' && isLoggedIn && (
        <Notifications onNavigate={handleNavigate} />
      )}
      
      {currentView === 'reviews' && isLoggedIn && (
        <Reviews onNavigate={handleNavigate} programId={selectedProgramId || undefined} />
      )}
      
      {currentView === 'provider-profile' && (
        <ProviderProfile 
          onNavigate={handleNavigate} 
          providerId={selectedProgramId || undefined}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
      
      {currentView === 'provider-programs' && isLoggedIn && userType === 'provider' && (
        <ProviderPrograms onNavigate={handleNavigate} />
      )}
      
      {currentView === 'provider-applications' && isLoggedIn && userType === 'provider' && (
        <ProviderApplications onNavigate={handleNavigate} />
      )}
      
      {currentView === 'provider-revenue' && isLoggedIn && userType === 'provider' && (
        <ProviderRevenue onNavigate={handleNavigate} />
      )}
      
      {currentView === 'create-program' && isLoggedIn && userType === 'provider' && (
        <CreateProgram onNavigate={handleNavigate} />
      )}
      
      {currentView === 'contact-us' && (
        <ContactUs onNavigate={handleNavigate} />
      )}
      
      {currentView === 'about' && (
        <About onNavigate={handleNavigate} />
      )}
      
      {currentView === 'faq' && (
        <FAQ onNavigate={handleNavigate} />
      )}
      
      {currentView === 'privacy-policy' && (
        <PrivacyPolicy onNavigate={handleNavigate} />
      )}
      
      {currentView === 'terms-of-use' && (
        <TermsOfUse onNavigate={handleNavigate} />
      )}
    </div>
  );
}