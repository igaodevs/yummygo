import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Table {
  id: number;
  status: "available" | "occupied" | "reserved";
  capacity: number;
  currentOrder?: {
    items: number;
    time: string;
  };
}

interface TableGridProps {
  tables?: Table[];
}

const statusColors = {
  available: "bg-green-100 text-green-800",
  occupied: "bg-red-100 text-red-800",
  reserved: "bg-blue-100 text-blue-800",
};

const TableGrid = ({
  tables = [
    {
      id: 1,
      status: "occupied",
      capacity: 4,
      currentOrder: { items: 3, time: "25 min" },
    },
    { id: 2, status: "available", capacity: 2 },
    { id: 3, status: "reserved", capacity: 6 },
    {
      id: 4,
      status: "occupied",
      capacity: 4,
      currentOrder: { items: 5, time: "15 min" },
    },
    { id: 5, status: "available", capacity: 2 },
    {
      id: 6,
      status: "occupied",
      capacity: 8,
      currentOrder: { items: 8, time: "35 min" },
    },
  ] as Table[],
}) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Status das Mesas</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tables.map((table) => (
          <Card key={table.id} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">Mesa {table.id}</span>
              <Badge className={statusColors[table.status]} variant="secondary">
                {table.status === "available"
                  ? "Livre"
                  : table.status === "occupied"
                    ? "Ocupada"
                    : "Reservada"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Capacidade: {table.capacity} pessoas
            </p>
            {table.currentOrder && (
              <div className="text-sm">
                <p>{table.currentOrder.items} itens</p>
                <p className="text-muted-foreground">
                  {table.currentOrder.time}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default TableGrid;
