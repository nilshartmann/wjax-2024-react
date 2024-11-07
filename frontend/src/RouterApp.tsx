import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { enable_QueryDevTools, query_RefetchOnMount } from "./demo-config.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: query_RefetchOnMount,
      refetchOnWindowFocus: false,
      experimental_prefetchInRender: true,
    },
  },
});

// Set up a Router instance
const router = createRouter({
  routeTree,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {enable_QueryDevTools && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
