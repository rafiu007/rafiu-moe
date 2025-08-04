import { ReactNode } from 'react';

interface PageTemplateProps {
  readonly title: string;
  readonly icon: ReactNode;
  readonly children?: ReactNode;
}

const PageTemplate = ({ title, icon, children }: PageTemplateProps) => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          {icon}
          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-sm">
          {children || (
            <p className="text-gray-600 text-center">
              {title} page content will be implemented here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;