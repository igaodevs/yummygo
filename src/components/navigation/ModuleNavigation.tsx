import React from "react";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  UtensilsCrossed,
  PackageSearch,
  Users,
  Settings,
  Bell,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Receipt,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import NavigationButton from "./NavigationButton";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  notification?: number;
}

interface ModuleNavigationProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const ModuleNavigation = ({
  collapsed = false,
  onToggleCollapse,
}: ModuleNavigationProps) => {
  const location = useLocation();

  const navigationItems: { section: string; items: NavigationItem[] }[] = [
    {
      section: "Principal",
      items: [
        {
          name: "Dashboard",
          icon: <LayoutDashboard className="w-5 h-5" />,
          path: "/",
        },
        {
          name: "Analytics",
          icon: <BarChart3 className="w-5 h-5" />,
          path: "/analytics",
        },
      ],
    },
    {
      section: "Operacional",
      items: [
        {
          name: "Pedidos",
          icon: <ClipboardList className="w-5 h-5" />,
          path: "/orders",
          notification: 5,
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
          name: "Agendamentos",
          icon: <Calendar className="w-5 h-5" />,
          path: "/schedule",
        },
      ],
    },
    {
      section: "Gestão",
      items: [
        {
          name: "Funcionários",
          icon: <Users className="w-5 h-5" />,
          path: "/staff",
        },
        {
          name: "Financeiro",
          icon: <Receipt className="w-5 h-5" />,
          path: "/finance",
        },
        {
          name: "Mensagens",
          icon: <MessageSquare className="w-5 h-5" />,
          path: "/messages",
          notification: 3,
        },
      ],
    },
    {
      section: "Sistema",
      items: [
        {
          name: "Notificações",
          icon: <Bell className="w-5 h-5" />,
          path: "/notifications",
          notification: 2,
        },
        {
          name: "Perfil",
          icon: <UserCircle className="w-5 h-5" />,
          path: "/profile",
        },
        {
          name: "Configurações",
          icon: <Settings className="w-5 h-5" />,
          path: "/settings",
        },
      ],
    },
  ];

  return (
    <nav
      className={cn(
        "h-full bg-background border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-[280px]",
      )}
    >
      <div className="flex-1 py-4 space-y-4">
        {navigationItems.map((section) => (
          <div key={section.section} className="space-y-2">
            {!collapsed && (
              <h3 className="px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.section}
              </h3>
            )}
            {section.items.map((item) => (
              <NavigationButton
                key={item.path}
                to={item.path}
                icon={item.icon}
                label={item.name}
                isActive={location.pathname === item.path}
                collapsed={collapsed}
                notification={item.notification}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-center"
          onClick={onToggleCollapse}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default ModuleNavigation;
