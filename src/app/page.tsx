import { IconHome, IconUser, IconSettings, IconMail, IconBrandNextjs, IconHeart } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconBrandNextjs size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Next.js App
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Frontend development setup with Tailwind CSS & Tabler Icons
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <IconHome size={32} className="text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Home
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome to your new Next.js application
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <IconUser size={32} className="text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              User management and authentication
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <IconSettings size={32} className="text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Configure your application preferences
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <IconMail size={32} className="text-red-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get in touch with our team
            </p>
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-black text-white rounded-lg p-4 mb-4 inline-block">
                <span className="text-2xl font-bold">Next.js</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                React framework with App Router, TypeScript, and server-side rendering
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-lg p-4 mb-4 inline-block">
                <span className="text-2xl font-bold">Tailwind</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-700 text-white rounded-lg p-4 mb-4 inline-block">
                <span className="text-2xl font-bold">Tabler Icons</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful SVG icons for modern web applications
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
            <span>Built with</span>
            <IconHeart size={20} className="text-red-500" />
            <span>using Next.js, Tailwind CSS & Tabler Icons</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
