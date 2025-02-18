import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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

interface OrderOption {
  name: string;
  choices: Array<{
    name: string;
    price?: number;
  }>;
}

interface OrderOptionsDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (options: Record<string, string>, notes: string) => void;
  options: OrderOption[];
  itemName: string;
}

const OrderOptionsDialog = ({
  open,
  onClose,
  onConfirm,
  options,
  itemName,
}: OrderOptionsDialogProps) => {
  const [selectedOptions, setSelectedOptions] = React.useState<
    Record<string, string>
  >({});
  const [notes, setNotes] = React.useState("");

  const handleConfirm = () => {
    onConfirm(selectedOptions, notes);
    setSelectedOptions({});
    setNotes("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Opções - {itemName}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 py-4">
            {options.map((option) => (
              <div key={option.name} className="space-y-2">
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
                        {choice.price
                          ? ` (+R$ ${choice.price.toFixed(2)})`
                          : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}

            <div className="space-y-2">
              <Label>Observações</Label>
              <Textarea
                placeholder="Alguma observação especial?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderOptionsDialog;
