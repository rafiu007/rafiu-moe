'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IconMenu2,
  IconChartPie,
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
  { href: '/task-analytics', label: 'Task Analytics', icon: IconChartPie },
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-[15%] min-w-[200px]'} bg-gray-100 h-screen flex flex-col transition-all duration-300 ease-in-out`}>
      {/* Menu Icon */}
      <div className="p-4">
        <button 
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <IconMenu2 size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200
                ${isActive 
                  ? 'text-white bg-red-500' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? label : undefined}
            >
              <Icon size={18} />
              {!isCollapsed && (
                <span className="transition-opacity duration-200">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;