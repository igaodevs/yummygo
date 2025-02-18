import React from "react";
import { Card } from "@/components/ui/card";
import { LayoutDashboard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DashboardMetric {
  label: string;
  value: number;
  color: string;
}

const PerformanceDashboard = () => {
  const [selectedActivity, setSelectedActivity] = React.useState("all");
  const [startDate, setStartDate] = React.useState("2019-01-01");
  const [endDate, setEndDate] = React.useState("2020-03-09");

  const metrics: DashboardMetric[] = [
    { label: "Nota Média", value: 65.44, color: "#3B82F6" },
    { label: "Ativações Totais", value: 10, color: "#10B981" },
    { label: "Comentários", value: 4, color: "#F59E0B" },
    { label: "Total de Fotos", value: 13, color: "#EC4899" },
  ];

  const performanceData = [
    { label: "01-02-19", value1: 45, value2: 15, value3: 10 },
    { label: "08-04-19", value1: 35, value2: 20, value3: 5 },
    { label: "14-06-19", value1: 50, value2: 25, value3: 15 },
    { label: "20-08-19", value1: 45, value2: 15, value3: 10 },
    { label: "26-10-19", value1: 85, value2: 20, value3: 12 },
    { label: "01-01-20", value1: 80, value2: 15, value3: 8 },
    { label: "09-03-20", value1: 65, value2: 25, value3: 15 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard Performance</h1>

        {/* Filters */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <Label>Período</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label>Tipo de Atividade</Label>
            <Select
              value={selectedActivity}
              onValueChange={setSelectedActivity}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Todas Atividades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Atividades</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
                <SelectItem value="completed">Concluídas</SelectItem>
                <SelectItem value="cancelled">Canceladas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-4">
              <h3 className="text-sm text-gray-500 mb-1">{metric.label}</h3>
              <p className="text-2xl font-bold" style={{ color: metric.color }}>
                {metric.value}
              </p>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="p-4">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value1"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#10B981"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="value3"
                  stroke="#F59E0B"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
