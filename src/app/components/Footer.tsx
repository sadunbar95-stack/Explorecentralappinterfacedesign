import logo from 'figma:asset/510d9f59edc66e9b9e5cf11f088a9a94ad0fa00a.png';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo and Copyright - Left Aligned */}
          <div>
            <img 
              src={logo} 
              alt="Explore Central" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              © {currentYear} Explore Central. All rights reserved.
            </p>
          </div>

          {/* Links - Center to Right */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:justify-center">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground mb-1">Company</h3>
              <button
                onClick={() => handleNavigation('about')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('contact-us')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact Us
              </button>
              <button
                onClick={() => handleNavigation('faq')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                FAQs
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground mb-1">Legal</h3>
              <button
                onClick={() => handleNavigation('privacy-policy')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('terms-of-use')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            Explore Central simplifies how families discover, compare, and enroll in local programs and activities all in one centralized platform.
          </p>
        </div>
      </div>
    </footer>
  );
}