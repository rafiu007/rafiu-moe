import { 
  IconTarget, 
  IconBrain, 
  IconMail, 
  IconChartBar, 
  IconTrendingUp,
  IconSettings
} from '@tabler/icons-react';
import { StatusBadge } from '@/components';

export default function TodayPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Building the Future of Task Analytics
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Join us on our journey to create the best productivity analytics tool
        </p>
        
        {/* Status Badges */}
        <div className="flex justify-center gap-4 mb-8">
          <StatusBadge status="planned">✓ Planned</StatusBadge>
          <StatusBadge status="development">⚡ In Development</StatusBadge>
          <StatusBadge status="added">✓ Recently Added</StatusBadge>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <IconTarget size={24} className="text-pink-500 mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">Track your habits and build routines</h3>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <IconTarget size={24} className="text-red-500 mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">Set and track personal goals</h3>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <IconMail size={24} className="text-red-500 mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">Customizable email preferences</h3>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <IconBrain size={24} className="text-red-500 mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">AI-powered task assistant</h3>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <IconChartBar size={24} className="text-pink-500 mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">Daily and weekly stats</h3>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <IconTrendingUp size={24} className="text-pink-500 mb-3" />
          <h3 className="font-medium text-gray-900 mb-2">Performance comparisons</h3>
        </div>
      </div>

      {/* View Full Changelog Link */}
      <div className="text-center mb-12">
        <a href="/changelog" className="text-red-500 hover:text-red-600 font-medium">
          View Full Changelog →
        </a>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Your Questions, Answered
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Is Task Analytics affiliated with Todoist?
            </h3>
            <p className="text-gray-600">
              Task Analytics is not created by, affiliated with, or supported by Doist, the creators of Todoist. 
              We are an independent service providing analytics based on your Todoist data.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Is Task Analytics free?
            </h3>
            <p className="text-gray-600">
              Yes, we offer a free tier (limited in functionalities). Due to hosting costs, we can't provide all the features for free.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What is your refund policy?
            </h3>
            <p className="text-gray-600">
              We offer a 100% refund, no questions asked, within 30 days of purchase. Your satisfaction is our priority!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
