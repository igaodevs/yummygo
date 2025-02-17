import React from "react";
import MenuManagement from "@/components/menu/MenuManagement";
import QRCodeMenu from "@/components/menu/QRCodeMenu";

const MenuManagementPage = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MenuManagement />
        </div>
        <div className="lg:col-span-1">
          <QRCodeMenu />
        </div>
      </div>
    </div>
  );
};

export default MenuManagementPage;
