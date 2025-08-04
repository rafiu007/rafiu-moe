'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconMenu2,
  IconChartPieFilled,
  IconCalendarFilled,
  IconBulbFilled,
  IconClipboardFilled,
  IconChartAreaFilled,
  IconUserFilled,
  IconBrain,
  IconFileTextFilled,
  IconSettingsFilled,
} from '@tabler/icons-react';

const menuItems = [
  {
    href: '/',
    label: 'Task Analytics',
    icon: IconChartPieFilled,
  },
  { href: '/today', label: 'Today', icon: IconCalendarFilled },
  { href: '/insights', label: 'Insights', icon: IconBulbFilled },
  { href: '/planning', label: 'Planning', icon: IconClipboardFilled },
  { href: '/analytics', label: 'Analytics', icon: IconChartAreaFilled },
  { href: '/todoist-account', label: 'Todoist Account', icon: IconUserFilled },
  { href: '/ai-insights', label: 'AI Insights', icon: IconBrain },
  { href: '/changelog', label: 'Changelog', icon: IconFileTextFilled },
  { href: '/settings', label: 'Settings', icon: IconSettingsFilled },
] as const;

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`${
        isCollapsed ? 'w-16' : 'w-[15%] min-w-[200px]'
      } bg-gray-100 h-screen flex flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Menu Icon */}
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
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
                ${
                  isActive
                    ? 'text-white bg-red-500'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              title={isCollapsed ? label : undefined}
            >
              <Icon size={18} />
              {!isCollapsed && (
                <span className="transition-opacity duration-200">{label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
