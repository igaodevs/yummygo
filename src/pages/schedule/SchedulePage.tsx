import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Calendar as CalendarIcon, Clock, User, MapPin } from "lucide-react";

interface Appointment {
  id: string;
  title: string;
  date: Date;
  time: string;
  customer: string;
  type: "reservation" | "event" | "delivery";
  status: "confirmed" | "pending" | "cancelled";
  details: string;
  guests?: number;
  table?: string;
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    title: "Reserva - Aniversário",
    date: new Date(),
    time: "19:00",
    customer: "João Silva",
    type: "reservation",
    status: "confirmed",
    details: "Aniversário de 30 anos",
    guests: 8,
    table: "Mesa 12"
  },
  // Add more appointments
];

const statusColors = {
  confirmed: