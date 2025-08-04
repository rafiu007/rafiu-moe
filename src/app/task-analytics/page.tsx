import {
  IconActivity,
  IconTarget,
  IconBrain,
  IconMail,
  IconChartBar,
  IconTrendingUp,
} from '@tabler/icons-react';
import { StatusBadge } from '@/components';

export default function TaskAnalyticsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Section - Hero + Cards with same light greyish background */}
      <div className="bg-gray-100/50 py-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-red-400 mb-4 leading-tight">
              Building the Future of Task Analytics
            </h1>
            <p className="text-xl text-gray-500 font-light">
              Join us on our journey to create the best productivity analytics
              tool
            </p>
          </div>

          {/* Main Feature Cards - 3 cards with status badges + features */}
          <div className="grid grid-cols-3 gap-8">
            {/* Card 1 - Planned */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-8">
                <StatusBadge status="planned">✓ Planned</StatusBadge>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <IconActivity size={20} className="text-pink-400 mt-1" />
                  <h3 className="text-gray-700 font-normal text-sm">
                    Track your habits and build routines
                  </h3>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <IconBrain size={20} className="text-red-400 mt-1" />
                  <h3 className="text-gray-700 font-normal text-sm">
                    AI-powered task assistant
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 - In Development */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-8">
                <StatusBadge status="development">
                  ⚡ In Development
                </StatusBadge>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <IconTarget size={20} className="text-red-400 mt-1" />
                <h3 className="text-gray-700 font-normal text-sm">
                  Set and track personal goals
                </h3>
              </div>
            </div>

            {/* Card 3 - Recently Added */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-8">
                <StatusBadge status="added">✓ Recently Added</StatusBadge>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <IconMail size={20} className="text-red-400 mt-1" />
                  <h3 className="text-gray-700 font-normal text-sm">
                    Customizable email preferences
                  </h3>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <IconChartBar size={20} className="text-pink-400 mt-1" />
                  <h3 className="text-gray-700 font-normal text-sm">
                    Daily and weekly stats
                  </h3>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <IconTrendingUp size={20} className="text-pink-400 mt-1" />
                  <h3 className="text-gray-700 font-normal text-sm">
                    Performance comparisons
                  </h3>
                </div>

                {/* View Full Changelog inside this card */}
                <div className="mt-6 bg-red-50 p-4 rounded-lg">
                  <a
                    href="/changelog"
                    className="text-red-400 hover:text-red-500 font-medium text-sm flex items-center gap-1"
                  >
                    View Full Changelog →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Outside the greyish background */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Your Questions, Answered
        </h2>

        <div className="space-y-6">
          {/* FAQ Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Is Task Analytics affiliated with Todoist?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Task Analytics is not created by, affiliated with, or supported by
              Doist, the creators of Todoist. We are an independent service
              providing analytics based on your Todoist data.
            </p>
          </div>

          {/* FAQ Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Is Task Analytics free?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, we offer a free tier (limited in functionalities). Due to
              hosting costs, we can&apos;t provide all the features for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
