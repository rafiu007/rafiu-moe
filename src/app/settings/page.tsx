import { IconSettings } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function SettingsPage() {
  return (
    <PageTemplate
      title="Settings"
      icon={
        <IconSettings size={32} className="text-gray-700 dark:text-gray-300" />
      }
    />
  );
}
