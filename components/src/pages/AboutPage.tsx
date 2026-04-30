import { mockTeamMembers } from '../../../api/src/mockData';
import type { TeamMember } from '../../../api/src/types';

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center transform hover:-translate-y-1 transition-transform duration-300">
      <img src={member.imageUrl} alt={member.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-blue-600 font-semibold mt-1">{member.role}</p>
        <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">회사 소개</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Site는 혁신적인 기술과 창의적인 디자인을 통해 고객의 비즈니스에 새로운 가치를 더하는 것을 목표로 합니다. 우리는 웹 개발, 모바일 애플리케이션, UI/UX 디자인, 그리고 클라우드 컨설팅 분야에서 최고의 전문가들로 구성된 팀입니다. 고객의 성공이 곧 우리의 성공이라는 믿음으로, 우리는 모든 프로젝트에 열정과 헌신을 다합니다.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">우리의 팀</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTeamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
