import { IconFileText } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function ChangelogPage() {
  return (
    <PageTemplate
      title="Changelog"
      icon={
        <IconFileText size={32} className="text-gray-700 dark:text-gray-300" />
      }
    />
  );
}
