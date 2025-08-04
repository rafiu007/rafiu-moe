import { IconChartPie } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function TaskAnalyticsPage() {
  return (
    <PageTemplate
      title="Task Analytics"
      icon={<IconChartPie size={32} className="text-gray-700" />}
    />
  );
}
