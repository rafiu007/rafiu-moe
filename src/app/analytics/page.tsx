import { IconChartBar } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function AnalyticsPage() {
  return (
    <PageTemplate
      title="Analytics"
      icon={
        <IconChartBar size={32} className="text-gray-700 dark:text-gray-300" />
      }
    />
  );
}
