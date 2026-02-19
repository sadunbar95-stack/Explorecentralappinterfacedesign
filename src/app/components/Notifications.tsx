import { Bell, CheckCircle2, AlertCircle, Info, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';

interface NotificationsProps {
  onNavigate: (view: string) => void;
}

const notifications = [
  {
    id: '1',
    type: 'success',
    title: 'Application Accepted',
    message: 'Lucas has been accepted to Summer STEM Camp 2026 at TechKids Learning Center!',
    timestamp: '1 hour ago',
    read: false,
  },
  {
    id: '2',
    type: 'info',
    title: 'New Message',
    message: 'The Art House sent you a message about Emma\'s application.',
    timestamp: '2 hours ago',
    read: false,
  },
  {
    id: '3',
    type: 'warning',
    title: 'Waitlist Update',
    message: 'You\'ve moved up to position #3 on the waitlist for Advanced Swimming.',
    timestamp: '1 day ago',
    read: true,
  },
  {
    id: '4',
    type: 'info',
    title: 'Application Received',
    message: 'Your application for Piano Lessons has been received and is under review.',
    timestamp: '2 days ago',
    read: true,
  },
  {
    id: '5',
    type: 'reminder',
    title: 'Session Reminder',
    message: 'Emma has Creative Kids Art Studio tomorrow at 4:00 PM.',
    timestamp: '3 days ago',
    read: true,
  },
];

export function Notifications({ onNavigate }: NotificationsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'reminder':
        return <Clock className="h-5 w-5 text-blue-600" />;
      default:
        return <Info className="h-5 w-5 text-primary" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'reminder':
        return 'bg-blue-50';
      default:
        return 'bg-primary/10';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-primary" />
              <h1 className="text-3xl sm:text-4xl text-foreground">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <Badge className="bg-primary text-white border-0">
                  {unreadCount} new
                </Badge>
              )}
            </div>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm">
                Mark all as read
              </Button>
            )}
          </div>
          <p className="text-muted-foreground">
            Stay updated on your applications and enrollments
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-5 border-border hover:shadow-md transition-shadow ${
                !notification.read ? 'bg-primary/5 border-primary/20' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`p-2 rounded-lg ${getIconBg(notification.type)} shrink-0`}>
                  {getIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`font-semibold ${
                      !notification.read ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {notification.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                </div>

                {/* Unread Indicator */}
                {!notification.read && (
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <Card className="p-12 border-border border-dashed">
            <div className="text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No notifications yet
              </h3>
              <p className="text-muted-foreground mb-4">
                You'll see updates about your applications and enrollments here
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