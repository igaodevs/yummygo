import React from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

const salesData = [
  { month: "Jan", sales: 4000, profit: 2400 },
  { month: "Feb", sales: 3000, profit: 1398 },
  { month: "Mar", sales: 2000, profit: 9800 },
  { month: "Apr", sales: 2780, profit: 3908 },
  { month: "May", sales: 1890, profit: 4800 },
  { month: "Jun", sales: 2390, profit: 3800 },
];

const customerData = [
  { name: "Novos", value: 400 },
  { name: "Recorrentes", value: 300 },
  { name: "Inativos", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Vendas Totais</p>
              <h3 className="text-2xl font-bold mt-2">R$ 24,780</h3>
              <p className="text-sm text-green-500 flex items-center mt-2">
                <ArrowUp className="w-4 h-4 mr-1" /> +12.5%
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Novos Clientes</p>
              <h3 className="text-2xl font-bold mt-2">321</h3>
              <p className="text-sm text-red-500 flex items-center mt-2">
                <ArrowDown className="w-4 h-4 mr-1" /> -2.4%
              </p>
            </div>
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Pedidos</p>
              <h3 className="text-2xl font-bold mt-2">1,245</h3>
              <p className="text-sm text-green-500 flex items-center mt-2">
                <ArrowUp className="w-4 h-4 mr-1" /> +8.1%
              </p>
            </div>
            <ShoppingCart className="w-8 h-8 text-muted-foreground" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Crescimento</p>
              <h3 className="text-2xl font-bold mt-2">15.2%</h3>
              <p className="text-sm text-green-500 flex items-center mt-2">
                <ArrowUp className="w-4 h-4 mr-1" /> +4.75%
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-muted-foreground" />
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Vendas vs Lucro</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Distribuição de Clientes
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {customerData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            {customerData.map((entry, index) => (
              <div key={entry.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
