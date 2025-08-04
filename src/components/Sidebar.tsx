'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IconCalendar, 
  IconBulb, 
  IconClipboardList, 
  IconChartBar, 
  IconUser, 
  IconBrain, 
  IconFileText, 
  IconSettings 
} from '@tabler/icons-react';

const menuItems = [
  { href: '/', label: 'Today', icon: IconCalendar },
  { href: '/insights', label: 'Insights', icon: IconBulb },
  { href: '/planning', label: 'Planning', icon: IconClipboardList },
  { href: '/analytics', label: 'Analytics', icon: IconChartBar },
  { href: '/todoist-account', label: 'Todoist Account', icon: IconUser },
  { href: '/ai-insights', label: 'AI Insights', icon: IconBrain },
  { href: '/changelog', label: 'Changelog', icon: IconFileText },
  { href: '/settings', label: 'Settings', icon: IconSettings },
] as const;

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[15%] min-w-[200px] bg-white h-screen flex flex-col shadow-sm">
      {/* Logo/Brand */}
      <div className="p-4">
        <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
          <h1 className="text-lg font-bold">
            Task Analytics
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-4 py-3 mx-2 text-sm font-medium transition-colors rounded-lg
                ${isActive 
                  ? 'text-red-600 bg-red-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;