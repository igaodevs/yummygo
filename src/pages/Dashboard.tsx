import React from "react";
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import OrdersOverview from "@/components/dashboard/OrdersOverview";
import TableGrid from "@/components/dashboard/TableGrid";
import WhatsAppOrderList from "@/components/whatsapp/WhatsAppOrderList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <MetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersOverview />
        </div>
        <div className="lg:col-span-1">
          <WhatsAppOrderList />
        </div>
        <div className="lg:col-span-3">
          <TableGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
