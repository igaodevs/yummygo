import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Filter,
  Printer,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

interface Order {
  id: string;
  customer: string;
  items: string[];
  total: number;
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled";
  time: string;
  table?: string;
}

const mockOrders: Order[] = [
  {
    id: "#1234",
    customer: "João Silva",
    items: ["1x X-Burger", "1x Coca-Cola", "1x Batata Frita"],
    total: 45.9,
    status: "pending",
    time: "5 min",
    table: "Mesa 3",
  },
  {
    id: "#1235",
    customer: "Maria Santos",
    items: ["2x Pizza Margherita", "2x Cerveja"],
    total: 89.9,
    status: "preparing",
    time: "15 min",
    table: "Mesa 7",
  },
  // Add more mock orders as needed
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  preparing: "bg-blue-100 text-blue-800",
  ready: "bg-green-100 text-green-800",
  delivered: "bg-gray-100 text-gray-800",
  cancelled: "bg-red-100 text-red-800",
};

const statusIcons = {
  pending: <Clock className="w-4 h-4" />,
  preparing: <AlertCircle className="w-4 h-4" />,
  ready: <CheckCircle className="w-4 h-4" />,
  delivered: <CheckCircle className="w-4 h-4" />,
  cancelled: <XCircle className="w-4 h-4" />,
};

const OrdersPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pedidos</h1>
        <Button>
          <Printer className="w-4 h-4 mr-2" />
          Imprimir Relatório
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="pending">Pendentes</TabsTrigger>
          <TabsTrigger value="preparing">Em Preparo</TabsTrigger>
          <TabsTrigger value="ready">Prontos</TabsTrigger>
          <TabsTrigger value="delivered">Entregues</TabsTrigger>
        </TabsList>

        <div className="my-4 flex gap-4">
          <div className="flex-1">
            <Label htmlFor="search">Buscar Pedido</Label>
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Buscar por número do pedido, cliente ou mesa..."
                className="pl-8"
              />
            </div>
          </div>
          <div className="w-[150px]">
            <Label>Filtrar por</Label>
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <Card>
            <ScrollArea className="h-[600px]">
              <div className="p-4 space-y-4">
                {mockOrders.map((order) => (
                  <Card key={order.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.id}</h3>
                          <Badge
                            variant="secondary"
                            className={statusColors[order.status]}
                          >
                            <span className="flex items-center gap-1">
                              {statusIcons[order.status]}
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {order.customer} • {order.table}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          R$ {order.total.toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.time}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">
                        Itens do Pedido
                      </h4>
                      <ul className="text-sm text-muted-foreground">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" variant="default">
                        Atualizar Status
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
