import { useTeamMembers } from '@/hooks/useTeamMembers';

export default function AboutPage() {
  const { data: teamMembers, isLoading, error } = useTeamMembers();

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            우리를 만드는 사람들
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            우리는 열정적인 전문가들로 구성된 팀으로, 최고의 솔루션을 제공하기 위해 협력합니다.
          </p>
        </div>

        {isLoading && <p className="text-center mt-8">로딩 중...</p>}
        {error && <p className="text-center mt-8 text-red-500">데이터를 불러오는 중 오류가 발생했습니다: {error.message}</p>}

        {teamMembers && (
          <div className="mt-10">
            <ul className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
              {teamMembers.map((member) => (
                <li key={member.id} className="text-center">
                  <img className="mx-auto h-24 w-24 rounded-full" src={member.imageUrl} alt={member.name} />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}