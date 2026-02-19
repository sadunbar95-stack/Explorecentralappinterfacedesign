import { Search, MapPin, Calendar, DollarSign, Star, Heart, Filter, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { useState } from 'react';

interface DiscoverProps {
  onNavigate: (view: string, programId?: string) => void;
  favorites: string[];
  onToggleFavorite: (programId: string) => void;
}

const categories = [
  { name: 'Arts & Crafts', icon: '🎨', count: 142 },
  { name: 'STEM', icon: '🔬', count: 98 },
  { name: 'Sports', icon: '⚽', count: 215 },
  { name: 'Music', icon: '🎵', count: 87 },
  { name: 'Dance', icon: '💃', count: 64 },
  { name: 'Summer Camps', icon: '⛺', count: 156 },
  { name: 'Winter Camps', icon: '⛷️', count: 82 },
  { name: 'Tutoring', icon: '📚', count: 124 },
  { name: 'Swimming', icon: '🏊', count: 45 },
];

const allPrograms = [
  {
    id: '1',
    title: 'Creative Kids Art Studio',
    provider: 'The Art House',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBhaW50aW5nJTIwYXJ0JTIwY2xhc3N8ZW58MXx8fHwxNzcxMTkzMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Downtown District',
    age: '6-8 years',
    price: '$240/month',
    rating: 4.9,
    reviews: 127,
    category: 'Arts & Crafts',
    ageRange: '6-8',
    difficulty: 'beginner',
    providerGender: 'female',
    zipCode: '10001',
    daysOfWeek: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: '2',
    title: 'Robotics & Coding Academy',
    provider: 'TechKids Learning Center',
    image: 'https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcm9ib3RpY3MlMjBTVEVNJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MTE5MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Tech Valley',
    age: '9-12 years',
    price: '$320/month',
    rating: 4.8,
    reviews: 94,
    category: 'STEM',
    ageRange: '9-12',
    difficulty: 'intermediate',
    providerGender: 'male',
    zipCode: '10002',
    daysOfWeek: ['Tuesday', 'Thursday'],
  },
  {
    id: '3',
    title: 'Youth Soccer League',
    provider: 'Elite Sports Academy',
    image: 'https://images.unsplash.com/photo-1762345565397-ba85070a5bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNvY2NlciUyMHNwb3J0cyUyMGZpZWxkfGVufDF8fHx8MTc3MTE5MzM3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Riverside Park',
    age: '6-8 years',
    price: '$180/season',
    rating: 4.7,
    reviews: 203,
    category: 'Sports',
    ageRange: '6-8',
    difficulty: 'all levels',
    providerGender: 'male',
    zipCode: '10003',
    daysOfWeek: ['Saturday', 'Sunday'],
  },
  {
    id: '4',
    title: 'Adventure Summer Camp',
    provider: 'Camp Sunshine',
    image: 'https://images.unsplash.com/photo-1603317581682-c3c3e3a3a588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBjYW1wJTIwa2lkcyUyMG91dGRvb3J8ZW58MXx8fHwxNzcxMTkzMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Mountain Ridge',
    age: '9-12 years',
    price: '$850/week',
    rating: 5.0,
    reviews: 156,
    category: 'Summer Camps',
    ageRange: '9-12',
    difficulty: 'all levels',
    providerGender: 'mixed',
    zipCode: '10004',
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  {
    id: '5',
    title: 'Ballet & Contemporary Dance',
    provider: 'Grace Dance Studio',
    image: 'https://images.unsplash.com/photo-1765939928892-954004cbeec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZGFuY2UlMjBiYWxsZXQlMjBjbGFzc3xlbnwxfHx8fDE3NzExOTMzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Arts District',
    age: '3-5 years',
    price: '$200/month',
    rating: 4.9,
    reviews: 82,
    category: 'Dance',
    ageRange: '3-5',
    difficulty: 'beginner',
    providerGender: 'female',
    zipCode: '10001',
    daysOfWeek: ['Tuesday', 'Thursday', 'Saturday'],
  },
  {
    id: '6',
    title: 'Piano & Music Theory',
    provider: 'Harmony Music School',
    image: 'https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG11c2ljJTIwcGlhbm8lMjBsZXNzb25zfGVufDF8fHx8MTc3MTE5MzM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Central Square',
    age: '6-8 years',
    price: '$160/month',
    rating: 4.8,
    reviews: 67,
    category: 'Music',
    ageRange: '6-8',
    difficulty: 'beginner',
    providerGender: 'mixed',
    zipCode: '10002',
    daysOfWeek: ['Monday', 'Wednesday'],
  },
  {
    id: '7',
    title: 'Swimming Lessons',
    provider: 'Aqua Kids Academy',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3dpbW1pbmclMjBsZXNzb25zfGVufDF8fHx8MTc3MTE5MzM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'East Side',
    age: '3-5 years',
    price: '$180/month',
    rating: 4.7,
    reviews: 143,
    category: 'Swimming',
    ageRange: '3-5',
    difficulty: 'all levels',
    providerGender: 'female',
    zipCode: '10003',
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  {
    id: '8',
    title: 'Math & Science Tutoring',
    provider: 'Bright Minds Education',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvcmluZyUyMGtpZHMlMjBtYXRoJTIwc2NpZW5jZXxlbnwxfHx8fDE3NzExOTMzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'University District',
    age: '13-15 years',
    price: '$95/hour',
    rating: 4.9,
    reviews: 215,
    category: 'Tutoring',
    ageRange: '13-15',
    difficulty: 'all levels',
    providerGender: 'mixed',
    zipCode: '10004',
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  {
    id: '9',
    title: 'Ski & Snowboard Winter Camp',
    provider: 'Mountain Adventure Camp',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc2tpaW5nJTIwd2ludGVyJTIwY2FtcHxlbnwxfHx8fDE3NzExOTMzODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Snowy Peaks',
    age: '9-12 years',
    price: '$1200/week',
    rating: 4.9,
    reviews: 89,
    category: 'Winter Camps',
    ageRange: '9-12',
    difficulty: 'all levels',
    providerGender: 'mixed',
    zipCode: '10005',
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
];

export function Discover({ onNavigate, favorites, onToggleFavorite }: DiscoverProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [zipCodeRadius, setZipCodeRadius] = useState<string>('10');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [neurodiversityFriendly, setNeurodiversityFriendly] = useState<boolean>(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Helper function to convert provider name to ID
  const getProviderId = (providerName: string) => {
    return providerName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const filteredPrograms = allPrograms.filter((program) => {
    if (selectedCategory && program.category !== selectedCategory) return false;
    if (selectedAgeRange && program.ageRange !== selectedAgeRange) return false;
    if (selectedDifficulty && program.difficulty !== selectedDifficulty) return false;
    if (selectedGender && program.providerGender !== selectedGender) return false;
    if (selectedDays.length > 0 && !selectedDays.some(day => program.daysOfWeek.includes(day))) return false;
    if (searchQuery && !program.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !program.category.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedAgeRange(null);
    setSelectedDifficulty(null);
    setSelectedGender(null);
    setZipCodeRadius('10');
    setSelectedDays([]);
    setNeurodiversityFriendly(false);
  };

  const activeFiltersCount = [
    selectedCategory, 
    selectedAgeRange, 
    selectedDifficulty, 
    selectedGender,
    selectedDays.length > 0 ? 'days' : null,
    neurodiversityFriendly ? 'neurodiversity' : null
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar Section */}
      <div className="bg-gray-50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl mb-6 text-foreground">
            Discover Programs
          </h1>
          <div className="bg-white rounded-xl shadow-sm border border-border p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search activities, programs, or camps..."
                  className="pl-10 h-12 border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="sm:w-64 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="City or zip code"
                  className="pl-10 h-12 border-border"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </div>
              <Button className="h-12 px-8 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Programs with Filters */}
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block w-64 shrink-0">
              <Card className="p-6 border-border sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-xs text-primary hover:text-primary/80"
                    >
                      Clear all
                    </Button>
                  )}
                </div>

                {/* Activity Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Activity Type
                  </label>
                  <select
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full p-2 border border-border rounded-md text-sm"
                  >
                    <option value="">All Types</option>
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Age Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Age Range
                  </label>
                  <select
                    value={selectedAgeRange || ''}
                    onChange={(e) => setSelectedAgeRange(e.target.value || null)}
                    className="w-full p-2 border border-border rounded-md text-sm"
                  >
                    <option value="">All Ages</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-8">6-8 years</option>
                    <option value="9-12">9-12 years</option>
                    <option value="13-15">13-15 years</option>
                    <option value="16-18">16-18 years</option>
                  </select>
                </div>

                {/* Difficulty Level */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Difficulty Level
                  </label>
                  <select
                    value={selectedDifficulty || ''}
                    onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                    className="w-full p-2 border border-border rounded-md text-sm"
                  >
                    <option value="">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="all levels">All Levels</option>
                  </select>
                </div>

                {/* Provider Gender */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Provider Gender
                  </label>
                  <select
                    value={selectedGender || ''}
                    onChange={(e) => setSelectedGender(e.target.value || null)}
                    className="w-full p-2 border border-border rounded-md text-sm"
                  >
                    <option value="">Any</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="mixed">Mixed/Co-ed</option>
                  </select>
                </div>

                {/* Zip Code Radius */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Distance (miles)
                  </label>
                  <select
                    value={zipCodeRadius}
                    onChange={(e) => setZipCodeRadius(e.target.value)}
                    className="w-full p-2 border border-border rounded-md text-sm"
                  >
                    <option value="5">Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                    <option value="50">Within 50 miles</option>
                  </select>
                </div>

                {/* Neurodiversity-Friendly */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={neurodiversityFriendly}
                      onChange={(e) => setNeurodiversityFriendly(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        Neurodiversity-Friendly
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Programs designed for kids with autism, ADHD, and other neurodiversities
                      </div>
                    </div>
                  </label>
                </div>

                {/* Days of the Week */}
                <div className="mt-6">
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Days of the Week
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {daysOfWeek.map(day => (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`w-full p-2 border rounded-md text-sm ${
                          selectedDays.includes(day) ? 'bg-primary text-white' : 'bg-white text-foreground'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Mobile Filters Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-40">
              <Button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="rounded-full shadow-lg h-14 px-6"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </Button>
            </div>

            {/* Mobile Filters Overlay */}
            {mobileFiltersOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileFiltersOpen(false)}>
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Filters</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {activeFiltersCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="w-full mb-6"
                    >
                      Clear all filters
                    </Button>
                  )}

                  {/* Same filter controls as desktop */}
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Activity Type
                      </label>
                      <select
                        value={selectedCategory || ''}
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        className="w-full p-2 border border-border rounded-md text-sm"
                      >
                        <option value="">All Types</option>
                        {categories.map((cat) => (
                          <option key={cat.name} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Age Range
                      </label>
                      <select
                        value={selectedAgeRange || ''}
                        onChange={(e) => setSelectedAgeRange(e.target.value || null)}
                        className="w-full p-2 border border-border rounded-md text-sm"
                      >
                        <option value="">All Ages</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-8">6-8 years</option>
                        <option value="9-12">9-12 years</option>
                        <option value="13-15">13-15 years</option>
                        <option value="16-18">16-18 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Difficulty Level
                      </label>
                      <select
                        value={selectedDifficulty || ''}
                        onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                        className="w-full p-2 border border-border rounded-md text-sm"
                      >
                        <option value="">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="all levels">All Levels</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Provider Gender
                      </label>
                      <select
                        value={selectedGender || ''}
                        onChange={(e) => setSelectedGender(e.target.value || null)}
                        className="w-full p-2 border border-border rounded-md text-sm"
                      >
                        <option value="">Any</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="mixed">Mixed/Co-ed</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Distance (miles)
                      </label>
                      <select
                        value={zipCodeRadius}
                        onChange={(e) => setZipCodeRadius(e.target.value)}
                        className="w-full p-2 border border-border rounded-md text-sm"
                      >
                        <option value="5">Within 5 miles</option>
                        <option value="10">Within 10 miles</option>
                        <option value="25">Within 25 miles</option>
                        <option value="50">Within 50 miles</option>
                      </select>
                    </div>

                    {/* Neurodiversity-Friendly */}
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={neurodiversityFriendly}
                          onChange={(e) => setNeurodiversityFriendly(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            Neurodiversity-Friendly
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Programs designed for kids with autism, ADHD, and other neurodiversities
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Days of the Week */}
                    <div className="mt-6">
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        Days of the Week
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {daysOfWeek.map(day => (
                          <button
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={`w-full p-2 border rounded-md text-sm ${
                              selectedDays.includes(day) ? 'bg-primary text-white' : 'bg-white text-foreground'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="w-full mt-6"
                  >
                    View {filteredPrograms.length} Programs
                  </Button>
                </div>
              </div>
            )}

            {/* Programs Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredPrograms.length} programs found
                </p>
                {activeFiltersCount > 0 && (
                  <div className="hidden lg:flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {activeFiltersCount} active {activeFiltersCount === 1 ? 'filter' : 'filters'}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                {filteredPrograms.map((program) => {
                  const isFavorited = favorites.includes(program.id);
                  
                  return (
                  <Card
                    key={program.id}
                    className="group cursor-pointer overflow-hidden border border-border hover:shadow-xl transition-shadow"
                    onClick={() => onNavigate('detail', program.id)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(program.id);
                        }}
                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      >
                        <Heart 
                          className={`h-4 w-4 transition-colors ${
                            isFavorited ? 'text-red-500 fill-red-500' : 'text-foreground'
                          }`} 
                        />
                      </button>
                      <Badge className="absolute top-3 left-3 bg-white text-foreground border-0">
                        {program.category}
                      </Badge>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-medium text-base sm:text-lg text-foreground line-clamp-1">
                          {program.title}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('reviews', program.id);
                          }}
                          className="flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity"
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium underline">{program.rating}</span>
                        </button>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('provider-profile', getProviderId(program.provider));
                        }}
                        className="text-sm text-muted-foreground mb-3 hover:text-primary hover:underline transition-colors text-left"
                      >
                        {program.provider}
                      </button>

                      <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{program.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{program.age}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          <span className="font-medium text-foreground">{program.price}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('reviews', program.id);
                          }}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
                        >
                          {program.reviews} reviews
                        </button>
                      </div>
                    </div>
                  </Card>
                  );
                })}
              </div>

              {filteredPrograms.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No programs found matching your filters.</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}