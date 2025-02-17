import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Order {
  id: string;
  table: string;
  status: "pending" | "preparing" | "ready" | "delivered";
  items: string[];
  total: number;
  time: string;
}

interface OrdersOverviewProps {
  orders?: Order[];
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  preparing: "bg-blue-100 text-blue-800",
  ready: "bg-green-100 text-green-800",
  delivered: "bg-gray-100 text-gray-800",
};

const OrdersOverview = ({
  orders = [
    {
      id: "#1234",
      table: "Mesa 1",
      status: "preparing",
      items: ["1x Hambúrguer", "2x Refrigerante"],
      total: 45.9,
      time: "5 min",
    },
    {
      id: "#1235",
      table: "Mesa 3",
      status: "ready",
      items: ["2x Pizza", "1x Salada"],
      total: 89.9,
      time: "12 min",
    },
    {
      id: "#1236",
      table: "Mesa 5",
      status: "pending",
      items: ["1x Prato do Dia", "1x Suco"],
      total: 32.9,
      time: "2 min",
    },
  ] as Order[],
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Pedidos Ativos</h2>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-medium">{order.id}</span>
                  <p className="text-sm text-muted-foreground">{order.table}</p>
                </div>
                <Badge
                  className={statusColors[order.status]}
                  variant="secondary"
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
              <div className="space-y-1">
                {order.items.map((item, index) => (
                  <p key={index} className="text-sm">
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="font-medium">R$ {order.total.toFixed(2)}</span>
                <span className="text-muted-foreground">{order.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default OrdersOverview;
