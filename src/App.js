import * as React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HashRouter } from "react-router-dom";
import { ErrorView } from "./ErrorView";
import { AxiosProvider } from "./AxiosContext";
import { AppRoutes } from "./Routes";
import { queryClient } from "./reactQuery";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter>
        <ErrorBoundary FallbackComponent={ErrorView}>
          <AxiosProvider>
            <QueryClientProvider client={queryClient}>
              {"development" === process.env.NODE_ENV && (
                <ReactQueryDevtools containerElement="div" />
              )}
              <AppRoutes />
            </QueryClientProvider>
          </AxiosProvider>
        </ErrorBoundary>
      </HashRouter>
    </Suspense>
  );
}

export default App;
