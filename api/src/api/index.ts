import { mockApiCall } from './client';
import { mockServices, mockTeamMembers } from './mockData';
import type { Service, TeamMember } from '../types';

export const getServices = (): Promise<Service[]> => {
  return mockApiCall(mockServices);
};

export const getTeamMembers = (): Promise<TeamMember[]> => {
  return mockApiCall(mockTeamMembers);
};
