import { Star, ThumbsUp, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';

interface ReviewsProps {
  onNavigate: (view: string) => void;
  programId?: string;
}

// Mock reviews data
const programReviews = {
  '1': {
    title: 'Creative Kids Art Studio',
    provider: 'The Art House',
    overallRating: 4.9,
    totalReviews: 127,
    ratingBreakdown: {
      5: 98,
      4: 22,
      3: 5,
      2: 2,
      1: 0,
    },
    reviews: [
      {
        id: '1',
        author: 'Sarah M.',
        rating: 5,
        date: 'Feb 10, 2026',
        text: 'My daughter absolutely loves this art class! The instructors are patient and creative. She comes home excited to show me what she made every week.',
        helpful: 24,
      },
      {
        id: '2',
        author: 'Michael R.',
        rating: 5,
        date: 'Feb 5, 2026',
        text: 'Outstanding program! The curriculum is well-structured and age-appropriate. My son has learned so many new techniques.',
        helpful: 18,
      },
      {
        id: '3',
        author: 'Jennifer K.',
        rating: 4,
        date: 'Jan 28, 2026',
        text: 'Great class overall. The only downside is the parking situation, but the quality of instruction makes up for it.',
        helpful: 12,
      },
      {
        id: '4',
        author: 'David L.',
        rating: 5,
        date: 'Jan 20, 2026',
        text: 'Highly recommend! The teachers are experienced and genuinely care about each child\'s progress.',
        helpful: 15,
      },
      {
        id: '5',
        author: 'Emily W.',
        rating: 5,
        date: 'Jan 15, 2026',
        text: 'Best art class we\'ve found! My kids have been attending for 6 months and their creativity has flourished.',
        helpful: 20,
      },
    ],
  },
  // Default for other programs
  default: {
    title: 'Program Reviews',
    provider: 'Activity Provider',
    overallRating: 4.8,
    totalReviews: 94,
    ratingBreakdown: {
      5: 68,
      4: 18,
      3: 6,
      2: 2,
      1: 0,
    },
    reviews: [
      {
        id: '1',
        author: 'Parent',
        rating: 5,
        date: 'Feb 12, 2026',
        text: 'Excellent program! My child loves attending and has learned so much.',
        helpful: 15,
      },
      {
        id: '2',
        author: 'Guardian',
        rating: 4,
        date: 'Feb 8, 2026',
        text: 'Very good overall. Great instructors and well-organized activities.',
        helpful: 10,
      },
      {
        id: '3',
        author: 'Parent',
        rating: 5,
        date: 'Feb 1, 2026',
        text: 'Highly recommend to other families. Worth every penny!',
        helpful: 12,
      },
    ],
  },
};

export function Reviews({ onNavigate, programId = 'default' }: ReviewsProps) {
  const data = programReviews[programId as keyof typeof programReviews] || programReviews.default;

  const getStarPercentage = (stars: number) => {
    return (data.ratingBreakdown[stars as keyof typeof data.ratingBreakdown] / data.totalReviews) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('discover')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-foreground mb-2">
            {data.title}
          </h1>
          <p className="text-muted-foreground">{data.provider}</p>
        </div>

        {/* Rating Overview */}
        <Card className="p-6 sm:p-8 mb-8 border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-foreground mb-2">
                {data.overallRating}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(data.overallRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on {data.totalReviews} reviews
              </p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12">
                    <span className="text-sm text-foreground">{stars}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${getStarPercentage(stars)}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {data.ratingBreakdown[stars as keyof typeof data.ratingBreakdown]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Reviews List */}
        <div className="space-y-4">
          <h2 className="text-2xl text-foreground mb-4">
            All Reviews ({data.totalReviews})
          </h2>

          {data.reviews.map((review) => (
            <Card key={review.id} className="p-6 border-border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {review.author}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-foreground mb-4">{review.text}</p>

              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful ({review.helpful})
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Write Review Section */}
        <Card className="p-6 sm:p-8 mt-8 border-border bg-primary/5">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Have you tried this program?
            </h3>
            <p className="text-muted-foreground mb-4">
              Share your experience to help other parents make informed decisions
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Write a Review
            </Button>
          </div>
        </Card>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}