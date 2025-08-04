'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IconMenu2,
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
    <aside className="w-[15%] min-w-[200px] bg-gray-100 h-screen flex flex-col">
      {/* Menu Icon */}
      <div className="p-4">
        <IconMenu2 size={20} className="text-gray-600" />
      </div>

      {/* Task Analytics Header */}
      <div className="bg-red-500 text-white py-3 px-4">
        <h1 className="text-base font-semibold">
          Task Analytics
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                ${isActive 
                  ? 'text-gray-900 bg-gray-200' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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