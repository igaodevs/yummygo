import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

interface DeliveryZone {
  id: string;
  name: string;
  fee: number;
}

interface DeliveryCalculatorProps {
  onZoneSelect: (fee: number) => void;
}

const mockZones: DeliveryZone[] = [
  { id: "1", name: "Centro", fee: 5 },
  { id: "2", name: "Zona Sul", fee: 8 },
  { id: "3", name: "Zona Norte", fee: 10 },
];

const DeliveryCalculator = ({ onZoneSelect }: DeliveryCalculatorProps) => {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Região de Entrega
      </Label>
      <Select
        onValueChange={(value) => {
          const zone = mockZones.find((z) => z.id === value);
          if (zone) onZoneSelect(zone.fee);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione sua região" />
        </SelectTrigger>
        <SelectContent>
          {mockZones.map((zone) => (
            <SelectItem key={zone.id} value={zone.id}>
              {zone.name} - R$ {zone.fee.toFixed(2)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DeliveryCalculator;
