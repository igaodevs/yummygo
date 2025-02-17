import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsApp, Plus, Minus } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  promotional?: boolean;
  promotionalPrice?: number;
  preparationTime?: number;
  allergens?: string[];
  ingredients?: string[];
  customizations?: Array<{
    name: string;
    options: Array<{
      name: string;
      price: number;
    }>;
  }>;
}

interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

import { getRandomFoodImage } from "@/lib/images";

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Promoções",
    items: [
      {
        id: "promo1",
        name: "Combo Família",
        description: "2 Hambúrgueres + Batata + 2 Refrigerantes",
        price: 89.9,
        promotionalPrice: 69.9,
        image: getRandomFoodImage("burger"),
        category: "Promoções",
        available: true,
        promotional: true,
        preparationTime: 25,
        customizations: [
          {
            name: "Ponto da Carne",
            options: [
              { name: "Mal Passado", price: 0 },
              { name: "Ao Ponto", price: 0 },
              { name: "Bem Passado", price: 0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Hambúrgueres",
    items: [
      {
        id: "1",
        name: "X-Burger Especial",
        description: "Pão, hambúrguer, queijo, alface, tomate e molho especial",
        price: 25.9,
        image: getRandomFoodImage("burger"),
        category: "Hambúrgueres",
        available: true,
      },
      // Add more items
    ],
  },
  // Add more categories
];

const DigitalMenu = () => {
  const [cart, setCart] = React.useState<{ [key: string]: number }>({});

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = mockCategories
        .flatMap((cat) => cat.items)
        .find((item) => item.id === itemId);
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const sendToWhatsApp = () => {
    const items = Object.entries(cart).map(([itemId, quantity]) => {
      const item = mockCategories
        .flatMap((cat) => cat.items)
        .find((item) => item.id === itemId);
      return `${quantity}x ${item?.name}`;
    });

    const message = `*Novo Pedido*\n\n${items.join("\n")}\n\n*Total: R$ ${getCartTotal().toFixed(2)}*`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <div key={category.id}>
            <h2 className="text-xl font-bold mb-4 text-brand-red">
              {category.name}
            </h2>
            {category.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <Badge
                        variant={item.available ? "default" : "secondary"}
                        className={
                          item.available ? "bg-green-500" : "bg-red-500"
                        }
                      >
                        {item.available ? "Disponível" : "Indisponível"}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-red font-bold">
                        R$ {item.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(item.id)}
                          disabled={!cart[item.id]}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">
                          {cart[item.id] || 0}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(item.id)}
                          disabled={!item.available}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {Object.keys(cart).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t-2 border-brand-red"
        >
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <span className="text-gray-600">Total do Pedido:</span>
              <span className="text-xl font-bold text-brand-red ml-2">
                R$ {getCartTotal().toFixed(2)}
              </span>
            </div>
            <Button
              onClick={sendToWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <WhatsApp className="w-4 h-4 mr-2" />
              Pedir no WhatsApp
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DigitalMenu;
