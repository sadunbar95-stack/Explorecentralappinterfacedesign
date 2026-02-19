import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Footer } from './Footer';

interface PrivacyPolicyProps {
  onNavigate: (view: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-white pt-16 sm:pt-24 pb-4 sm:pb-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-4 sm:pt-6 pb-16 sm:pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              Effective Date: February 19, 2026
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Explore Central ("we," "our," or "us") respects your privacy and is committed to protecting the information you share with us.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              This Privacy Policy explains how we collect, use, store, and protect information when you use the Explore Central platform (the "Platform").
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              A. Information You Provide Directly
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              When parents or guardians create an account or apply to a program, we may collect:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Parent/guardian name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Child's name</li>
              <li>Child's age or date of birth</li>
              <li>Information voluntarily shared about accommodations or preferences</li>
              <li>Payment information (processed securely through third-party payment providers)</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              When providers create an account, we may collect:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Business name</li>
              <li>Contact information</li>
              <li>Business address</li>
              <li>Program descriptions and details</li>
              <li>Payout or banking information (processed securely through payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              B. Automatically Collected Information
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We may collect limited technical information such as:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>IP address</li>
              <li>Device type</li>
              <li>Browser type</li>
              <li>Pages visited and interactions</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              This information is used to improve platform performance, functionality, and security.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              2. How We Use Information
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We use collected information to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Facilitate connections between families and providers</li>
              <li>Process applications and payments</li>
              <li>Maintain account functionality</li>
              <li>Improve user experience and platform features</li>
              <li>Communicate important updates</li>
              <li>Maintain platform security and integrity</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We do not use personal information for unrelated advertising purposes.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              3. Children's Information
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central is designed for use by parents and guardians.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Children do not create accounts directly on the Platform.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Information about children is provided voluntarily by a parent or guardian for the purpose of applying to programs. We do not knowingly collect personal information directly from children without parental involvement.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              4. We Do Not Sell Personal Information
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central does not sell, rent, or trade personal information, including child information, to third parties.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We do not share user information with advertisers.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Information is shared only as necessary to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Facilitate applications between families and providers</li>
              <li>Process payments securely</li>
              <li>Comply with legal obligations</li>
              <li>Operate and maintain the Platform</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              5. Payment Processing (Stripe)
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central uses Stripe, Inc. and its affiliated entities ("Stripe") as a third-party payment processor to facilitate secure payments between families and providers.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              When making a payment or setting up a payout account, users may be required to provide payment information directly to Stripe. Stripe may collect and process payment details in accordance with its own Privacy Policy and Terms of Service.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central does not store full credit card numbers or complete payment credentials on its servers.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              For providers, use of the Platform may require the creation of a Stripe connected account in order to receive payouts. By using payment features on the Platform, users agree to be bound by Stripe's applicable agreements, as updated from time to time.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-2">
              Stripe's Privacy Policy can be found at:
            </p>
            <p className="text-base mb-4">
              <a 
                href="https://stripe.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://stripe.com/privacy
              </a>
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-2">
              Stripe's Terms of Service can be found at:
            </p>
            <p className="text-base mb-6">
              <a 
                href="https://stripe.com/legal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://stripe.com/legal
              </a>
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              6. Data Sharing
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We may share information:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Between parents and providers when an application is submitted</li>
              <li>With trusted service providers (such as payment processors and hosting services)</li>
              <li>When required by law or legal process</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              All service providers are expected to implement reasonable safeguards.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              7. Data Security
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We use reasonable administrative, technical, and organizational measures to protect personal information. However, no online system can guarantee absolute security.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              8. Data Retention
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We retain information as long as reasonably necessary to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Maintain accounts</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Users may request account deletion by contacting us at{' '}
              <a href="mailto:support@explorecentral.net" className="text-primary hover:underline">
                support@explorecentral.net
              </a>
              .
            </p>

            {/* Section 9 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              9. Your Rights
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              You may:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Access and update your account information</li>
              <li>Request deletion of your account</li>
              <li>Contact us with privacy-related questions</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-2">
              For all privacy inquiries, contact:
            </p>
            <p className="text-base text-primary mb-6">
              <a href="mailto:support@explorecentral.net" className="hover:underline">
                support@explorecentral.net
              </a>
            </p>

            {/* Section 10 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              10. Updates to This Privacy Policy
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We reserve the right to update or modify this Privacy Policy at any time. Updates will be posted on this page with a revised effective date. Continued use of the Platform after changes are posted constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}