import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Tag, Clock, MapPin } from "lucide-react";
import { getRandomFoodImage } from "@/lib/images";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  promotional: boolean;
  promotionalPrice?: number;
}

interface DeliveryZone {
  id: string;
  name: string;
  fee: number;
}

const MenuManagement = () => {
  const [deliveryZones, setDeliveryZones] = React.useState<DeliveryZone[]>([
    { id: "1", name: "Centro", fee: 5 },
    { id: "2", name: "Zona Sul", fee: 8 },
    { id: "3", name: "Zona Norte", fee: 10 },
  ]);

  return (
    <div className="space-y-6">
      {/* Menu Categories Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-red">
            Gerenciar Cardápio
          </h2>
          <Button className="bg-brand-yellow hover:bg-brand-red text-black hover:text-white">
            <Plus className="w-4 h-4 mr-2" />
            Novo Item
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample Menu Item Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 w-8 p-0 text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <img
                src={getRandomFoodImage("burger")}
                alt="Burger"
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">X-Burger Especial</h3>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    Disponível
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Pão, hambúrguer, queijo, alface, tomate
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-brand-red">
                      R$ 25,90
                    </span>
                    {true && (
                      <Badge className="bg-brand-yellow text-black">
                        <Tag className="w-3 h-3 mr-1" />
                        Promo
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Card>

      {/* Delivery Zones Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-red">
            Zonas de Entrega
          </h2>
          <Button className="bg-brand-yellow hover:bg-brand-red text-black hover:text-white">
            <MapPin className="w-4 h-4 mr-2" />
            Nova Zona
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliveryZones.map((zone) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{zone.name}</h3>
                    <p className="text-sm text-gray-600">
                      Taxa: R$ {zone.fee.toFixed(2)}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Scheduled Orders Section */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-red">
            Pedidos Agendados
          </h2>
          <Button className="bg-brand-yellow hover:bg-brand-red text-black hover:text-white">
            <Clock className="w-4 h-4 mr-2" />
            Ver Todos
          </Button>
        </div>

        <div className="space-y-4">
          {/* Sample Scheduled Order */}
          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">#12345</h3>
                <p className="text-sm text-gray-600">
                  Agendado para: 25/03/2024 19:00
                </p>
                <p className="text-sm text-gray-600">Cliente: João Silva</p>
              </div>
              <Badge className="bg-purple-100 text-purple-800">
                <Clock className="w-3 h-3 mr-1" />
                Agendado
              </Badge>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default MenuManagement;
