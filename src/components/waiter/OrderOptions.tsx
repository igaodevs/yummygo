import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Option {
  name: string;
  choices: {
    name: string;
    price: number;
  }[];
}

interface OrderOptionsProps {
  options: Option[];
  onSave: (options: { [key: string]: string }, notes: string) => void;
  onClose: () => void;
}

const OrderOptions = ({ options, onSave, onClose }: OrderOptionsProps) => {
  const [selectedOptions, setSelectedOptions] = React.useState<{
    [key: string]: string;
  }>({});
  const [notes, setNotes] = React.useState("");

  const handleSave = () => {
    onSave(selectedOptions, notes);
    onClose();
  };

  return (
    <Card className="p-6 max-w-md w-full mx-auto">
      <h3 className="text-lg font-semibold mb-4">Opções do Pedido</h3>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.name}>
              <Label>{option.name}</Label>
              <Select
                value={selectedOptions[option.name]}
                onValueChange={(value) =>
                  setSelectedOptions((prev) => ({
                    ...prev,
                    [option.name]: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={`Selecione ${option.name}`} />
                </SelectTrigger>
                <SelectContent>
                  {option.choices.map((choice) => (
                    <SelectItem key={choice.name} value={choice.name}>
                      {choice.name}
                      {choice.price > 0 && ` (+R$ ${choice.price.toFixed(2)})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
          <div>
            <Label>Observações</Label>
            <Textarea
              placeholder="Alguma observação especial?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="h-24"
            />
          </div>
        </div>
      </ScrollArea>
      <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleSave}>Adicionar ao Pedido</Button>
      </div>
    </Card>
  );
};

export default OrderOptions;
