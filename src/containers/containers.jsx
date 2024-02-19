import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";
import { authRoutes, appRoutes } from "../routes/";
import NotFoundPage from "../pages/error/notFound";
import AuthLayout from "../layout/auth";
import AppLayout from "../layout/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Containers = () => {
  const queryClient = new QueryClient();
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {appRoutes.map(({ path, element }) => (
              <Route key={`lp-${path}`} path={path} element={element} />
            ))}
          </Route>
          <Route path="/" element={<AuthLayout />}>
            {authRoutes.map(({ path, element }) => (
              <Route key={`app-${path}`} path={path} element={element} />
            ))}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default Containers;
