import { IconUser } from '@tabler/icons-react';
import { PageTemplate } from '@/components';

export default function TodoistAccountPage() {
  return (
    <PageTemplate
      title="Todoist Account"
      icon={<IconUser size={32} className="text-gray-700 dark:text-gray-300" />}
    />
  );
}
