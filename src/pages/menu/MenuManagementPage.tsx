import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Edit2, Trash2, Tag, Clock, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  preparationTime: number;
  ingredients: string[];
  allergens: string[];
}

const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "X-Burger Especial",
    description: "Hambúrguer artesanal, queijo cheddar, bacon, alface e tomate",
    price: 25.9,
    category: "Hambúrgueres",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    available: true,
    preparationTime: 15,
    ingredients: ["Pão", "Hambúrguer", "Queijo", "Bacon", "Alface", "Tomate"],
    allergens: ["Glúten", "Lactose"],
  },
  // Add more items
];

const MenuManagementPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciamento do Cardápio</h1>
        <Button className="bg-brand-red text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Item
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="burgers">Hambúrgueres</TabsTrigger>
          <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
          <TabsTrigger value="drinks">Bebidas</TabsTrigger>
          <TabsTrigger value="desserts">Sobremesas</TabsTrigger>
        </TabsList>

        <div className="my-4 flex gap-4">
          <div className="flex-1">
            <Label htmlFor="search">Buscar Item</Label>
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Buscar por nome, categoria ou ingredientes..."
                className="pl-8"
              />
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMenuItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <Badge
                        variant={item.available ? "default" : "secondary"}
                        className={
                          item.available ? "bg-green-500" : "bg-red-500"
                        }
                      >
                        {item.available ? "Disponível" : "Indisponível"}
                      </Badge>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Preço:</span>
                        <span className="font-semibold text-brand-red">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Tempo de Preparo:
                        </span>
                        <span className="text-sm">
                          {item.preparationTime} min
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">
                        Ingredientes:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {item.ingredients.map((ingredient, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Alergênicos:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.allergens.map((allergen, index) => (
                          <Badge
                            key={index}
                            variant="destructive"
                            className="text-xs"
                          >
                            {allergen}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remover
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MenuManagementPage;
