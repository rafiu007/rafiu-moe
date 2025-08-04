import { IconBrain } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function AIInsightsPage() {
  return (
    <PageTemplate
      title="AI Insights"
      icon={
        <IconBrain size={32} className="text-gray-700 dark:text-gray-300" />
      }
    />
  );
}
