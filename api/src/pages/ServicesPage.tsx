import { useServices } from '@/hooks/useServices';
import Icon from '@/components/Icon';

export default function ServicesPage() {
  const { data: services, isLoading, error } = useServices();

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            우리가 제공하는 것
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            고객의 성공을 돕기 위해 설계된 포괄적인 서비스 제품군입니다.
          </p>
        </div>
        
        {isLoading && <p className="text-center mt-8">로딩 중...</p>}
        {error && <p className="text-center mt-8 text-red-500">데이터를 불러오는 중 오류가 발생했습니다: {error.message}</p>}

        {services && (
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {services.map((service) => (
                <div key={service.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Icon name={service.icon} className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}