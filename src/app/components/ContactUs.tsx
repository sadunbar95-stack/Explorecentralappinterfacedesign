import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, Send, Clock, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Footer } from './Footer';
import { useState } from 'react';

interface ContactUsProps {
  onNavigate: (view: string) => void;
}

export function ContactUs({ onNavigate }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'parent',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to your backend
    alert('Thank you for contacting us! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      userType: 'parent',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 border-border">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Send us a message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Smith"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* User Type */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    I am a <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="parent">Parent</option>
                    <option value="provider">Program Provider</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={6}
                    placeholder="Tell us more about your question or concern..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <a href="mailto:support@explorecentral.net" className="text-sm text-primary hover:underline">
                      support@explorecentral.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <a href="tel:+15551234567" className="text-sm text-primary hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Support Hours */}
            <Card className="p-6 border-border bg-blue-50 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-foreground">
                  Support Hours
                </h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">9am - 6pm PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">10am - 4pm PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xs text-blue-900">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </Card>

            {/* FAQ Link */}
            <Card className="p-6 border-border">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Quick Help
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Looking for answers? Check out our frequently asked questions.
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => onNavigate('for-parents')}
                >
                  Parent FAQ
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => onNavigate('for-providers')}
                >
                  Provider FAQ
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Common Questions */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-2">
                How do I enroll in a program?
              </h3>
              <p className="text-sm text-muted-foreground">
                Browse programs, select the one you like, and click "Enroll Now". You'll create a family profile and complete payment to confirm your enrollment.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards and debit cards through our secure payment processor, Stripe.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-2">
                How do I become a provider?
              </h3>
              <p className="text-sm text-muted-foreground">
                Click "For Providers" in the navigation menu, then "Get Started". You'll create a provider account and can start listing your programs immediately.
              </p>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-semibold text-foreground mb-2">
                What are the platform fees?
              </h3>
              <p className="text-sm text-muted-foreground">
                Currently, we're offering 0% platform fees during our launch promotion! Standard subscription plans will be available soon.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}