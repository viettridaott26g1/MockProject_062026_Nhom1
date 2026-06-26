import * as React from "react";

import { cn } from "@/lib/utils";

type AuthShellProps = {
  children: React.ReactNode;
  className?: string;
};

function AuthShell({ children, className }: AuthShellProps) {
  return (
    <div className={cn("min-h-screen flex flex-col bg-[#f8f9fa] font-[Inter,sans-serif]", className)}>
      {children}
    </div>
  );
}

export { AuthShell };
