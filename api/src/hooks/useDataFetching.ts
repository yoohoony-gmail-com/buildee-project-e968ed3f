import { useState, useEffect } from 'react';

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useDataFetching<T>(fetcher: () => Promise<T>): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetcher();
        setData(result);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetcher]);

  return { data, isLoading, error };
}