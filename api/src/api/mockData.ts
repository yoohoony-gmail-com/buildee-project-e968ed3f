import type { Service, TeamMember } from '@/types';

export const mockServices: Service[] = [
  {
    id: '1',
    title: '웹 개발',
    description: '최신 기술을 사용한 반응형 웹사이트 및 웹 애플리케이션을 구축합니다.',
    icon: 'Code',
  },
  {
    id: '2',
    title: '모바일 앱 개발',
    description: 'iOS와 Android를 위한 네이티브 및 크로스플랫폼 앱을 개발합니다.',
    icon: 'Smartphone',
  },
  {
    id: '3',
    title: 'UI/UX 디자인',
    description: '사용자 중심의 직관적이고 아름다운 디자인을 제공합니다.',
    icon: 'PenTool',
  },
  {
    id: '4',
    title: '클라우드 컨설팅',
    description: '비즈니스에 최적화된 클라우드 인프라 구축 및 운영을 지원합니다.',
    icon: 'Cloud',
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: '김민준',
    role: 'CEO & Founder',
    imageUrl: 'https://i.pravatar.cc/150?u=1',
    bio: '20년 경력의 베테랑 개발자. 기술과 비즈니스의 교차점에서 혁신을 이끌고 있습니다.',
  },
  {
    id: '2',
    name: '이서연',
    role: 'Lead Designer',
    imageUrl: 'https://i.pravatar.cc/150?u=2',
    bio: '사용자 경험에 대한 깊은 이해를 바탕으로 매력적인 디자인을 만듭니다.',
  },
  {
    id: '3',
    name: '박지훈',
    role: 'Lead Engineer',
    imageUrl: 'https://i.pravatar.cc/150?u=3',
    bio: '안정적이고 확장 가능한 시스템 아키텍처 설계의 전문가입니다.',
  },
];