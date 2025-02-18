import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Plus,
  Search,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Package,
} from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  minQuantity: number;
  unit: string;
  price: number;
  supplier: string;
  lastUpdated: string;
}

const mockInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Pão de Hambúrguer",
    sku: "BUN001",
    category: "Pães",
    quantity: 150,
    minQuantity: 50,
    unit: "unidades",
    price: 0.5,
    supplier: "Padaria Central",
    lastUpdated: "2024-03-20",
  },
  {
    id: "2",
    name: "Carne Moída",
    sku: "MEAT001",
    category: "Carnes",
    quantity: 25,
    minQuantity: 30,
    unit: "kg",
    price: 28.9,
    supplier: "Frigorífico Silva",
    lastUpdated: "2024-03-19",
  },
  // Add more items
];

const InventoryPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Controle de Estoque</h1>
        <Button className="bg-brand-red text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Item
        </Button>
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Itens Baixo Estoque
              </p>
              <h3 className="text-2xl font-bold mt-1">5</h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
        </Card>

        <Card className="p-4 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Entradas Hoje</p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
            <ArrowDown className="w-8 h-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-4 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Saídas Hoje</p>
              <h3 className="text-2xl font-bold mt-1">28</h3>
            </div>
            <ArrowUp className="w-8 h-8 text-red-500" />
          </div>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="search">Buscar Item</Label>
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Buscar por nome, SKU ou categoria..."
              className="pl-8"
            />
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <Card>
        <ScrollArea className="h-[600px]">
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-muted-foreground">
                  <th className="text-left p-2">Item</th>
                  <th className="text-left p-2">SKU</th>
                  <th className="text-left p-2">Quantidade</th>
                  <th className="text-left p-2">Preço Unit.</th>
                  <th className="text-left p-2">Fornecedor</th>
                  <th className="text-left p-2">Última Atualização</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-right p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {mockInventory.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.category}
                        </p>
                      </div>
                    </td>
                    <td className="p-2">{item.sku}</td>
                    <td className="p-2">
                      <div>
                        <p className="font-medium">
                          {item.quantity} {item.unit}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Min: {item.minQuantity}
                        </p>
                      </div>
                    </td>
                    <td className="p-2">R$ {item.price.toFixed(2)}</td>
                    <td className="p-2">{item.supplier}</td>
                    <td className="p-2">{item.lastUpdated}</td>
                    <td className="p-2">
                      <Badge
                        variant={
                          item.quantity > item.minQuantity
                            ? "default"
                            : "destructive"
                        }
                      >
                        {item.quantity > item.minQuantity
                          ? "OK"
                          : "Baixo Estoque"}
                      </Badge>
                    </td>
                    <td className="p-2 text-right">
                      <Button variant="ghost" size="sm">
                        Ajustar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default InventoryPage;
