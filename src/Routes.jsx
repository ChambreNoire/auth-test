import { Navigate, Routes, Route, Outlet } from "react-router-dom";

import { useUser } from "./useUser";
import { Login } from "./Login";

const ProtectedRoute = () => {
  const { data: user } = useUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home/*" element={<div>HOME</div>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};
