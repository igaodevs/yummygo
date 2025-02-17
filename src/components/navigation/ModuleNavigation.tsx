import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  UtensilsCrossed,
  PackageSearch,
  Users,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavigationItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

interface ModuleNavigationProps {
  collapsed?: boolean;
  items?: NavigationItem[];
}

const defaultItems: NavigationItem[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "/",
  },
  {
    name: "Pedidos",
    icon: <ClipboardList className="w-5 h-5" />,
    path: "/orders",
  },
  {
    name: "Cardápio",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    path: "/menu",
  },
  {
    name: "Estoque",
    icon: <PackageSearch className="w-5 h-5" />,
    path: "/inventory",
  },
  {
    name: "Funcionários",
    icon: <Users className="w-5 h-5" />,
    path: "/staff",
  },
  {
    name: "Configurações",
    icon: <Settings className="w-5 h-5" />,
    path: "/settings",
  },
];

const ModuleNavigation = ({
  collapsed = false,
  items = defaultItems,
}: ModuleNavigationProps) => {
  return (
    <nav
      className={cn(
        "h-full bg-background border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-[280px]",
      )}
    >
      <TooltipProvider>
        <div className="flex-1 py-4">
          {items.map((item) => (
            <Tooltip key={item.path}>
              <TooltipTrigger asChild>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-lg mx-2 group",
                    "transition-colors duration-200",
                  )}
                >
                  <span className="inline-flex">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="ml-3 flex-1">{item.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </Link>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">{item.name}</TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </nav>
  );
};

export default ModuleNavigation;
