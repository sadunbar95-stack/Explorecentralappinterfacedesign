import { ArrowLeft, Users, Building2, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Footer } from './Footer';
import { useState } from 'react';

interface FAQProps {
  onNavigate: (view: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps extends FAQItem {
  isOpen: boolean;
  onClick: () => void;
}

function FAQAccordion({ question, answer, isOpen, onClick }: FAQAccordionProps) {
  return (
    <Card className="p-6 border-border">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <h3 className="font-semibold text-foreground">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
      )}
    </Card>
  );
}

export function FAQ({ onNavigate }: FAQProps) {
  const [openParentIndex, setOpenParentIndex] = useState<number | null>(null);
  const [openProviderIndex, setOpenProviderIndex] = useState<number | null>(
    null
  );

  const parentFAQs: FAQItem[] = [
    {
      question: 'What is Explore Central?',
      answer:
        'Explore Central is a centralized platform where families can discover, compare, and apply to children\'s activities across sports, arts, tutoring, enrichment, and more, all in one place.',
    },
    {
      question: 'Is Explore Central free for parents?',
      answer:
        'Yes. Parents can browse and explore activities at no cost. Providers set their own program pricing.',
    },
    {
      question: 'Do I need to create a new account for every program?',
      answer:
        'No. Families create one profile on Explore Central and can use it to apply to multiple programs without repeatedly entering the same information.',
    },
    {
      question: 'How do I register my child for a program?',
      answer:
        'Once you find a program you\'re interested in, you can apply directly through the listing. Each provider manages their own enrollment and acceptance process.',
    },
    {
      question: 'Does Explore Central run the programs?',
      answer:
        'No. Explore Central is a marketplace that connects families and providers. Each activity is independently owned and operated by the provider.',
    },
    {
      question: 'How do I know if a program is inclusive or neurodiverse-aware?',
      answer:
        'Providers can share details about their approach, including sensory considerations, accommodations, staff training, and learning styles supported. These details are visible within each listing to help families make informed decisions.',
    },
    {
      question: 'Are providers vetted?',
      answer:
        'Providers create verified accounts and submit required business information. Families are encouraged to review program details and communicate directly with providers if they have specific questions.',
    },
    {
      question: 'How does payment work?',
      answer:
        'Payments are securely processed through the platform. Providers set their own pricing and refund policies, which are displayed on their listing.',
    },
    {
      question: 'What if I need a refund?',
      answer:
        'Refund policies are determined by the individual provider and are outlined in their program details.',
    },
    {
      question: 'Can I message providers before applying?',
      answer:
        'Yes. Families can contact providers directly through the platform to ask questions before submitting an application.',
    },
  ];

  const providerFAQs: FAQItem[] = [
    {
      question: 'What is Explore Central?',
      answer:
        'Explore Central is a centralized activity marketplace designed to connect families with children\'s programs across categories, from sports and arts to tutoring and enrichment.',
    },
    {
      question: 'Why should I list my program on Explore Central?',
      answer:
        'Explore Central helps increase visibility for your programs by placing them in front of families actively searching for activities, all within a centralized, organized platform.',
    },
    {
      question: 'How does my listing appear?',
      answer:
        'Your listing includes program descriptions, age ranges, schedules, pricing, photos, and optional details about inclusivity or accommodations. You control the information displayed.',
    },
    {
      question: 'Do I control enrollment decisions?',
      answer:
        'Yes. Providers manage and review their own applications and maintain full control over acceptance decisions.',
    },
    {
      question: 'How do I manage my listings?',
      answer:
        'Providers have access to a dashboard where they can create and edit programs, update availability, upload photos, review applications, and track activity.',
    },
    {
      question: 'How does pricing work?',
      answer:
        'Providers set their own program pricing. Explore Central offers tiered plans that may include a platform fee on paid applications.',
    },
    {
      question: 'When do I receive payment?',
      answer:
        'Payments are securely processed through the platform and transferred directly to your connected account according to the payout schedule.',
    },
    {
      question: 'Can I update or remove my listing at any time?',
      answer:
        'Yes. Providers can edit or deactivate listings through their dashboard.',
    },
    {
      question: 'Can I highlight that my program supports neurodiverse learners?',
      answer:
        'Yes. Providers are encouraged to share details about their approach, accommodations, staff training, and environment so families can make informed decisions.',
    },
    {
      question: 'Is there a contract or long-term commitment?',
      answer:
        'No. There is no long-term contract required to list your programs on Explore Central. Providers can create, update, pause, or remove listings at any time through their dashboard.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-white pt-16 sm:pt-24 pb-8 sm:pb-12">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </div>

      {/* Parent FAQs */}
      <div className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-foreground">
              Parent FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {parentFAQs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openParentIndex === index}
                onClick={() =>
                  setOpenParentIndex(openParentIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Provider FAQs */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-foreground">
              Provider FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {providerFAQs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openProviderIndex === index}
                onClick={() =>
                  setOpenProviderIndex(openProviderIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-white opacity-90">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            We're here to help. Reach out to our support team anytime.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 bg-white text-primary hover:bg-white/90"
            onClick={() => onNavigate('contact-us')}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}