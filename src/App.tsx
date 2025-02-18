import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import PerformanceDashboard from "@/components/dashboard/PerformanceDashboard";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import MenuPage from "@/pages/menu/MenuPage";
import MenuManagementPage from "@/pages/menu/MenuManagementPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-management" element={<MenuManagementPage />} />

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/performance" element={<PerformanceDashboard />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
