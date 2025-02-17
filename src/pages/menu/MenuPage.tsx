import React from "react";
import DigitalMenu from "@/components/menu/DigitalMenu";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-brand-red text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Cardápio Digital</h1>
          <p className="text-gray-100">
            Escolha seus itens e peça pelo WhatsApp
          </p>
        </div>
      </header>
      <DigitalMenu />
    </div>
  );
};

export default MenuPage;
