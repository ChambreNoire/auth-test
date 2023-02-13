import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 0, // 30 * 1000
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});
