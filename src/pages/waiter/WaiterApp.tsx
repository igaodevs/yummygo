import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  Minus,
  ShoppingCart,
  Send,
  Clock,
  Table as TableIcon,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  options?: {
    name: string;
    choices: { name: string; price: number }[];
  }[];
}

interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  options?: { [key: string]: string };
  notes?: string;
}

const mockMenu: MenuItem[] = [
  {
    id: "1",
    name: "X-Burger Especial",
    description: "Hambúrguer artesanal, queijo, bacon, alface e tomate",
    price: 25.9,
    category: "Hambúrgueres",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    available: true,
    options: [
      {
        name: "Ponto da Carne",
        choices: [
          { name: "Mal Passado", price: 0 },
          { name: "Ao Ponto", price: 0 },
          { name: "Bem Passado", price: 0 },
        ],
      },
      {
        name: "Extras",
        choices: [
          { name: "Ovo", price: 2 },
          { name: "Queijo Extra", price: 3 },
          { name: "Bacon Extra", price: 4 },
        ],
      },
    ],
  },
  // Add more menu items
];

const WaiterApp = () => {
  const [cart, setCart] = React.useState<OrderItem[]>([]);
  const [selectedTable, setSelectedTable] = React.useState<string>("");

  const addToCart = (menuItem: MenuItem) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.menuItem.id === menuItem.id,
      );
      if (existingItem) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const removeFromCart = (menuItem: MenuItem) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.menuItem.id === menuItem.id,
      );
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return prev.filter((item) => item.menuItem.id !== menuItem.id);
    });
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.menuItem.price * item.quantity,
      0,
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu Section */}
      <div className="flex-1 p-4 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Novo Pedido</h1>
          <div className="flex items-center gap-2">
            <TableIcon className="w-5 h-5" />
            <span className="font-medium">Mesa {selectedTable || "--"}</span>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar no cardápio..." className="pl-9" />
        </div>

        <Tabs defaultValue="all" className="flex-1 flex flex-col">
          <TabsList className="mb-4">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="burgers">Hambúrgueres</TabsTrigger>
            <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
            <TabsTrigger value="drinks">Bebidas</TabsTrigger>
            <TabsTrigger value="desserts">Sobremesas</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1">
            <TabsContent value="all" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockMenu.map((item) => (
                  <Card key={item.id} className="flex p-4 gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
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
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-semibold text-brand-red">
                          R$ {item.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item)}
                            disabled={
                              !cart.find((i) => i.menuItem.id === item.id)
                            }
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {cart.find((i) => i.menuItem.id === item.id)
                              ?.quantity || 0}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(item)}
                            disabled={!item.available}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>

      {/* Cart Section */}
      <div className="w-[400px] bg-white border-l flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Pedido Atual
          </h2>
        </div>

        <ScrollArea className="flex-1 p-4">
          {cart.map((item) => (
            <Card key={item.menuItem.id} className="p-4 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.menuItem.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.quantity}x R$ {item.menuItem.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeFromCart(item.menuItem)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addToCart(item.menuItem)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total</span>
            <span className="text-xl font-bold text-brand-red">
              R$ {getTotal().toFixed(2)}
            </span>
          </div>
          <Button className="w-full bg-brand-red text-white" size="lg">
            <Send className="w-4 h-4 mr-2" />
            Enviar Pedido
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WaiterApp;
