import { useDataFetching } from './useDataFetching';
import { getTeamMembers } from '@/api';
import type { TeamMember } from '@/types';

export const useTeamMembers = () => {
  return useDataFetching<TeamMember[]>(getTeamMembers);
};