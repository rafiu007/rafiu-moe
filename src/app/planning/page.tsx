import { IconClipboardList } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function PlanningPage() {
  return (
    <PageTemplate 
      title="Planning" 
      icon={<IconClipboardList size={32} className="text-gray-700 dark:text-gray-300" />} 
    />
  );
}