import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ModuleNavigation from "@/components/navigation/ModuleNavigation";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex h-[calc(100vh-72px)]">
        <ModuleNavigation
          collapsed={collapsed}
          onToggleCollapse={toggleCollapse}
        />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
