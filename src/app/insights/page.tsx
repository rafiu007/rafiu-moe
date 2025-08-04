import { IconBulb } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function InsightsPage() {
  return (
    <PageTemplate 
      title="Insights" 
      icon={<IconBulb size={32} className="text-gray-700 dark:text-gray-300" />} 
    />
  );
}