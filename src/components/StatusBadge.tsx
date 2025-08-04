interface StatusBadgeProps {
  readonly status: 'planned' | 'development' | 'added';
  readonly children: React.ReactNode;
}

const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const styles = {
    planned: 'bg-blue-500 text-white',
    development: 'bg-orange-500 text-white',
    added: 'bg-green-500 text-white'
  } as const;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {children}
    </span>
  );
};

export default StatusBadge;