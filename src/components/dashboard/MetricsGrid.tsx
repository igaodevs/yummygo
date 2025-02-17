import React from "react";
import { Card } from "../ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  AlertTriangle,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  change,
  icon,
}: MetricCardProps) => {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
        {change !== undefined && (
          <div
            className={`flex items-center ${change >= 0 ? "text-green-500" : "text-red-500"}`}
          >
            {change >= 0 ? (
              <ArrowUpIcon size={16} />
            ) : (
              <ArrowDownIcon size={16} />
            )}
            <span className="ml-1 text-sm">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
    </Card>
  );
};

interface MetricsGridProps {
  metrics?: {
    dailyRevenue: number;
    activeOrders: number;
    avgPrepTime: number;
    occupiedTables: number;
  };
}

const MetricsGrid = ({
  metrics = {
    dailyRevenue: 2580,
    activeOrders: 12,
    avgPrepTime: 18,
    occupiedTables: 8,
  },
}: MetricsGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Daily Revenue"
          value={`$${metrics.dailyRevenue.toLocaleString()}`}
          change={12.5}
          icon={<DollarSign className="text-blue-500" size={24} />}
        />
        <MetricCard
          title="Active Orders"
          value={metrics.activeOrders.toString()}
          icon={<AlertTriangle className="text-yellow-500" size={24} />}
        />
        <MetricCard
          title="Avg Prep Time"
          value={`${metrics.avgPrepTime} min`}
          change={-5.2}
          icon={<Clock className="text-purple-500" size={24} />}
        />
        <MetricCard
          title="Tables Occupied"
          value={`${metrics.occupiedTables}`}
          change={8.7}
          icon={<Users className="text-green-500" size={24} />}
        />
      </div>
    </div>
  );
};

export default MetricsGrid;
