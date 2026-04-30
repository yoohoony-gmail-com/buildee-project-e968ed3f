import { mockServices } from '@/api/mockData';
import type { Service } from '@/types';

const ServiceIcon = ({ icon, className }: { icon: string; className?: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    Code: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    Smartphone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    PenTool: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    Cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
  };

  return icons[icon] || null;
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 text-blue-600 rounded-full p-3 mr-4">
          <ServiceIcon icon={service.icon} className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">우리의 서비스</h1>
      <p className="text-lg text-gray-600 mb-8">
        우리는 비즈니스 성장을 지원하는 다양한 솔루션을 제공합니다.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}