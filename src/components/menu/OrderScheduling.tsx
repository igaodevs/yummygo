import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Calendar as CalendarIcon } from "lucide-react";

interface OrderSchedulingProps {
  onSchedule: (date: Date, time: string, notes: string) => void;
}

const OrderScheduling = ({ onSchedule }: OrderSchedulingProps) => {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const handleSchedule = () => {
    if (date && time) {
      onSchedule(date, time, notes);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brand-yellow hover:bg-brand-red text-black hover:text-white">
          <Clock className="w-4 h-4 mr-2" />
          Agendar Pedido
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agendar Pedido</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Data</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          <div className="grid gap-2">
            <Label>Horário</Label>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Observações</Label>
            <Input
              placeholder="Alguma observação especial?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <Button
          onClick={handleSchedule}
          className="w-full bg-brand-red text-white"
        >
          Confirmar Agendamento
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OrderScheduling;
