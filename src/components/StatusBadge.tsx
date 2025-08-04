import { IconRocket, IconCode, IconCheck } from '@tabler/icons-react';

interface StatusBadgeProps {
  readonly status: 'planned' | 'development' | 'added';
  readonly children: React.ReactNode;
}

const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const styles = {
    planned: 'bg-blue-500 text-white',
    development: 'bg-orange-500 text-white',
    added: 'bg-green-500 text-white',
  } as const;

  const icons = {
    planned: IconRocket,
    development: IconCode,
    added: IconCheck,
  } as const;

  const Icon = icons[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}
    >
      <Icon size={14} />
      {children}
    </span>
  );
};

export default StatusBadge;
