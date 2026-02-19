import { ArrowLeft, Upload, X, Plus, Calendar, DollarSign, Users, MapPin, Clock, Tag, HelpCircle, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Footer } from './Footer';
import { useState } from 'react';

interface CreateProgramProps {
  onNavigate: (view: string) => void;
}

const categories = [
  'Arts & Crafts',
  'Sports & Fitness',
  'STEM & Technology',
  'Music & Dance',
  'Language Learning',
  'Academic Tutoring',
  'Life Skills',
  'Outdoor & Adventure',
  'Drama & Theater',
  'Other',
];

const ageRanges = [
  '3-5 years',
  '6-8 years',
  '9-12 years',
  '13-15 years',
  '16-18 years',
  'All ages',
];

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export function CreateProgram({ onNavigate }: CreateProgramProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [neurodiversityFriendly, setNeurodiversityFriendly] = useState<boolean | null>(null);
  const [showNeurodiversityTooltip, setShowNeurodiversityTooltip] = useState(false);
  const [dayStartTimes, setDayStartTimes] = useState<Record<string, string>>({});
  const [defaultStartTime, setDefaultStartTime] = useState('');

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
      // Remove time for this day
      const newTimes = { ...dayStartTimes };
      delete newTimes[day];
      setDayStartTimes(newTimes);
    } else {
      setSelectedDays([...selectedDays, day]);
      // If default time exists, apply it to new day
      if (defaultStartTime) {
        setDayStartTimes({ ...dayStartTimes, [day]: defaultStartTime });
      }
    }
  };

  const applyTimeToAllDays = () => {
    if (defaultStartTime && selectedDays.length > 0) {
      const newTimes: Record<string, string> = {};
      selectedDays.forEach(day => {
        newTimes[day] = defaultStartTime;
      });
      setDayStartTimes(newTimes);
    }
  };

  const updateDayTime = (day: string, time: string) => {
    setDayStartTimes({ ...dayStartTimes, [day]: time });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate image is uploaded
    if (!selectedImage) {
      alert('Please upload a program image before submitting.');
      return;
    }

    // Validate at least one day is selected
    if (selectedDays.length === 0) {
      alert('Please select at least one day of the week.');
      return;
    }

    // Form is valid, proceed with submission
    alert('Program created successfully!');
    onNavigate('provider-programs');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('provider')}
          className="mb-6 -ml-2"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2 text-foreground">
            Create New Program
          </h1>
          <p className="text-muted-foreground">
            Fill in the details below to create a new program for families to discover
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Basic Information */}
          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <Tag className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Basic Information
              </h2>
            </div>

            <div className="space-y-6">
              {/* Program Name */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Program Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Creative Kids Art Studio"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Age Range */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Age Range <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select age range</option>
                  {ageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Program Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Describe what makes your program special, what kids will learn, and what activities are included..."
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Tip: Include key benefits and what makes your program unique
                </p>
              </div>

              {/* Neurodiversity-Friendly */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Neurodiversity-Friendly <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onMouseEnter={() => setShowNeurodiversityTooltip(true)}
                      onMouseLeave={() => setShowNeurodiversityTooltip(false)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <HelpCircle className="h-4 w-4" />
                    </button>
                    {showNeurodiversityTooltip && (
                      <div className="absolute left-0 top-6 z-10 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
                        Your program is accepting of kids with different learning abilities, including autism, ADHD, and other neurodiversities.
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setNeurodiversityFriendly(true)}
                    className={`flex-1 p-3 border rounded-lg transition-colors ${
                      neurodiversityFriendly === true
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setNeurodiversityFriendly(false)}
                    className={`flex-1 p-3 border rounded-lg transition-colors ${
                      neurodiversityFriendly === false
                        ? 'bg-red-50 border-red-500 text-red-700'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Schedule */}
          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Schedule
              </h2>
            </div>

            <div className="space-y-6">
              {/* Days of Week */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-3">
                  Days of Week <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        selectedDays.includes(day)
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-foreground border-border hover:border-primary'
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Start Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={defaultStartTime}
                    onChange={(e) => setDefaultStartTime(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    This will be the default start time for all selected days
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    End Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Apply Time to All Days Button */}
              {selectedDays.length > 0 && defaultStartTime && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Apply Start Time to All Days
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Click to apply {defaultStartTime} to all {selectedDays.length} selected days
                      </p>
                    </div>
                    <Button
                      type="button"
                      onClick={applyTimeToAllDays}
                      className="shrink-0 ml-4"
                      size="sm"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Apply to All
                    </Button>
                  </div>
                </div>
              )}

              {/* Day-Specific Start Times */}
              {selectedDays.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-foreground block mb-3">
                    Day-Specific Start Times
                  </label>
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    {selectedDays.map((day) => (
                      <div key={day} className="flex items-center gap-3">
                        <div className="w-28 text-sm font-medium text-foreground">
                          {day}
                        </div>
                        <input
                          type="time"
                          className="flex-1 p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={dayStartTimes[day] || ''}
                          onChange={(e) => updateDayTime(day, e.target.value)}
                          placeholder="--:--"
                        />
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground mt-2">
                      Leave blank to use the default start time, or customize for each day
                    </p>
                  </div>
                </div>
              )}

              {/* Program Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Leave blank for ongoing programs
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Location */}
          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Location
              </h2>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Start typing an address..."
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Start typing and select from the dropdown
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-foreground block mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Downtown District"
                    required
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-foreground block mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="CA"
                    required
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="10001"
                    required
                  />
                </div>
              </div>

              {/* Location Notes */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Location Notes (Optional)
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Enter through side door, Building B, Room 205"
                />
              </div>
            </div>
          </Card>

          {/* Pricing & Capacity */}
          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Pricing & Capacity
              </h2>
            </div>

            <div className="space-y-6">
              {/* Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <input
                      type="number"
                      className="w-full p-3 pl-7 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="240"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Billing Frequency <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="per-session">Per Session</option>
                    <option value="one-time">One-time Fee</option>
                  </select>
                </div>
              </div>

              {/* Capacity */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Maximum Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="20"
                  min="1"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Maximum number of students who can enroll in this program
                </p>
              </div>
            </div>
          </Card>

          {/* Program Image */}
          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <Upload className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Program Image
              </h2>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-3">
                Upload Image <span className="text-red-500">*</span>
              </label>
              
              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Program preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(null);
                      setImageFile(null);
                    }}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                    selectedImage ? 'border-green-500 bg-green-50' : 'border-border hover:border-primary bg-gray-50'
                  }`}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="h-12 w-12 text-muted-foreground mb-3" />
                      <p className="mb-2 text-sm text-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG or WEBP (MAX. 5MB)
                      </p>
                      <p className="text-xs text-red-500 mt-2">
                        Required - A program image must be uploaded
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              )}
            </div>
          </Card>

          {/* Additional Details */}
          <Card className="p-6 border-border">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Additional Details
              </h2>
            </div>

            <div className="space-y-6">
              {/* What to Bring */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  What to Bring
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="e.g., Water bottle, comfortable clothing, art smock (provided)"
                />
              </div>

              {/* Prerequisites */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Prerequisites or Requirements
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="e.g., No prior experience needed, all skill levels welcome"
                />
              </div>

              {/* Cancellation Policy */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Cancellation Policy
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="e.g., Full refund if cancelled 7 days before start date. 50% refund if cancelled 3-7 days before."
                />
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 sm:flex-initial bg-primary hover:bg-primary/90"
            >
              Create Program
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate('provider')}
              className="flex-1 sm:flex-initial"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}