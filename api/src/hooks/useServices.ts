import { getServices } from '@/api';
import type { Service } from '@/types';
import { useFetch } from './useFetch';

export function useServices() {
  return useFetch<Service[]>(getServices);
}
