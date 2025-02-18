import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavigationButtonProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  collapsed?: boolean;
  notification?: number;
}

const NavigationButton = ({
  to,
  icon,
  label,
  isActive,
  collapsed,
  notification,
}: NavigationButtonProps) => {
  const buttonContent = (
    <Link
      to={to}
      className={cn(
        "flex items-center px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground rounded-lg mx-2 group transition-all duration-200",
        isActive
          ? "bg-brand-red text-white hover:bg-brand-red/90"
          : "text-muted-foreground",
      )}
    >
      <span className="inline-flex relative">
        {icon}
        {notification && (
          <span className="absolute -top-2 -right-2 bg-brand-yellow text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
            {notification}
          </span>
        )}
      </span>
      {!collapsed && <span className="ml-3 flex-1">{label}</span>}
    </Link>
  );

  if (collapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
          <TooltipContent side="right">{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return buttonContent;
};

export default NavigationButton;
