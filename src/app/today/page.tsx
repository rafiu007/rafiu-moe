import { IconCalendar } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function TodayPage() {
  return (
    <PageTemplate 
      title="Today" 
      icon={<IconCalendar size={32} className="text-gray-700" />} 
    />
  );
}