import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: 0,
    },
  },
});
