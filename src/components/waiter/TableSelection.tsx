import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, Users, Clock } from "lucide-react";

interface TableInfo {
  id: string;
  number: string;
  status: "available" | "occupied" | "reserved";
  capacity: number;
  currentOrder?: {
    items: number;
    time: string;
  };
}

interface TableSelectionProps {
  onTableSelect: (tableId: string) => void;
}

const mockTables: TableInfo[] = [
  {
    id: "1",
    number: "01",
    status: "available",
    capacity: 4,
  },
  {
    id: "2",
    number: "02",
    status: "occupied",
    capacity: 4,
    currentOrder: {
      items: 3,
      time: "25 min",
    },
  },
  // Add more tables
];

const statusColors = {
  available: "bg-green-100 text-green-800",
  occupied: "bg-red-100 text-red-800",
  reserved: "bg-blue-100 text-blue-800",
};

const TableSelection = ({ onTableSelect }: TableSelectionProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockTables.map((table) => (
          <Card
            key={table.id}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onTableSelect(table.id)}
          >
            <div className="flex flex-col items-center text-center">
              <Table className="w-8 h-8 mb-2" />
              <h3 className="text-lg font-semibold">Mesa {table.number}</h3>
              <Badge variant="secondary" className={statusColors[table.status]}>
                {table.status === "available"
                  ? "Livre"
                  : table.status === "occupied"
                    ? "Ocupada"
                    : "Reservada"}
              </Badge>
              <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{table.capacity} lugares</span>
              </div>
              {table.currentOrder && (
                <div className="mt-2 text-sm">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{table.currentOrder.time}</span>
                  </div>
                  <p className="text-sm mt-1">
                    {table.currentOrder.items} itens
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default TableSelection;
