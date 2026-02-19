import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Footer } from './Footer';

interface TermsOfUseProps {
  onNavigate: (view: string) => void;
}

export function TermsOfUse({ onNavigate }: TermsOfUseProps) {
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
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Terms of Use
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

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              By accessing or using Explore Central (the "Platform"), you agree to the following Terms of Use.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              1. Platform Purpose and Marketplace Disclaimer
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central is an online marketplace that connects families with independent activity providers.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Does not operate, manage, supervise, or control any listed program</li>
              <li>Does not employ or contract with program staff</li>
              <li>Does not oversee program activities or curriculum</li>
              <li>Does not control how activities are conducted</li>
              <li>Does not guarantee the safety, quality, legality, or suitability of any program</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              All programs listed on the Platform are independently owned and operated by their respective providers.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Parents and guardians are solely responsible for reviewing program details, asking questions, evaluating suitability, and determining whether a program is appropriate for their child.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Any program-specific questions, including questions regarding curriculum, supervision, accommodations, safety policies, background checks, licensing, or refunds, must be directed to the provider directly.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Participation in any listed activity is at the sole discretion and responsibility of the parent or guardian.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              2. User Accounts
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Users must provide accurate and complete information when creating an account.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Users are responsible for maintaining the confidentiality of their login credentials and for all activity under their account.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              3. Provider Responsibility
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Providers are solely responsible for:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>The accuracy of their listings</li>
              <li>Program content and descriptions</li>
              <li>Participant safety</li>
              <li>Compliance with all applicable laws and regulations</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Explore Central does not guarantee the quality, safety, or suitability of any program.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              4. Parent Responsibility
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Parents and guardians are responsible for reviewing program details and communicating directly with providers regarding questions, accommodations, or safety considerations.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Participation in any program is at the discretion and responsibility of the parent or guardian.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              5. Payments
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Payments processed through the Platform are subject to provider pricing and refund policies.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Refund policies are determined by individual providers.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Explore Central may collect subscription fees and/or platform fees from providers according to selected plan terms.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              6. No Employment or Agency Relationship
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Nothing in these Terms creates an employment, agency, partnership, or joint venture relationship between Explore Central and any provider.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Providers operate independently.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              7. Limitation of Liability
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Explore Central is not responsible for:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Injuries, losses, or damages arising from participation in any program</li>
              <li>Disputes between families and providers</li>
              <li>Provider conduct, representations, or program outcomes</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Use of the Platform is at your own risk.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              8. Acceptable Use
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Users agree not to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base text-muted-foreground">
              <li>Provide false or misleading information</li>
              <li>Use the Platform for unlawful purposes</li>
              <li>Attempt unauthorized access to accounts or systems</li>
              <li>Disrupt the functionality or security of the Platform</li>
            </ul>

            {/* Section 9 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              9. Termination
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We reserve the right to suspend or terminate accounts that violate these Terms or misuse the Platform.
            </p>

            {/* Section 10 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              10. Governing Law
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              These Terms of Use are governed by and construed in accordance with the laws of the Commonwealth of Kentucky, without regard to conflict of law principles.
            </p>

            {/* Section 11 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              11. Updates to These Terms
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We reserve the right to update or modify these Terms of Use at any time. Updated Terms will be posted on this page with a revised effective date. Continued use of the Platform after changes are posted constitutes acceptance of the updated Terms.
            </p>

            {/* Section 12 */}
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
              12. Contact Information
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-2">
              For questions regarding these Terms, contact:
            </p>
            <p className="text-base text-primary mb-6">
              <a href="mailto:support@explorecentral.net" className="hover:underline">
                support@explorecentral.net
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}