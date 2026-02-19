import { MessageSquare, Send, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Footer } from './Footer';
import { Badge } from './ui/badge';

interface MessagesProps {
  onNavigate: (view: string) => void;
}

const conversations = [
  {
    id: '1',
    providerName: 'The Art House',
    providerLogo: '🎨',
    lastMessage: 'Thank you for your interest! We have spots available for Emma.',
    timestamp: '2 hours ago',
    unread: true,
  },
  {
    id: '2',
    providerName: 'TechKids Learning Center',
    providerLogo: '🤖',
    lastMessage: 'Lucas has been accepted! Welcome to our summer camp.',
    timestamp: '1 day ago',
    unread: false,
  },
  {
    id: '3',
    providerName: 'Grace Dance Studio',
    providerLogo: '💃',
    lastMessage: 'We reviewed your application and would love to schedule a trial class.',
    timestamp: '3 days ago',
    unread: true,
  },
];

export function Messages({ onNavigate }: MessagesProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl text-foreground">
              Messages
            </h1>
          </div>
          <p className="text-muted-foreground">
            Communicate with activity providers
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search messages..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="space-y-3">
          {conversations.map((conversation) => (
            <Card
              key={conversation.id}
              className={`p-4 border-border hover:shadow-md transition-shadow cursor-pointer ${
                conversation.unread ? 'bg-primary/5 border-primary/20' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Provider Logo */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                  {conversation.providerLogo}
                </div>

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">
                      {conversation.providerName}
                    </h3>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className={`text-sm line-clamp-2 ${
                    conversation.unread ? 'text-foreground font-medium' : 'text-muted-foreground'
                  }`}>
                    {conversation.lastMessage}
                  </p>
                </div>

                {/* Unread Badge */}
                {conversation.unread && (
                  <Badge className="bg-primary text-white border-0 shrink-0">
                    New
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {conversations.length === 0 && (
          <Card className="p-12 border-border border-dashed">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No messages yet
              </h3>
              <p className="text-muted-foreground mb-4">
                Start applying to programs to connect with providers
              </p>
              <Button onClick={() => onNavigate('discover')}>
                Browse Programs
              </Button>
            </div>
          </Card>
        )}
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}