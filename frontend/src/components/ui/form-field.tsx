import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type FormFieldProps = {
  label: React.ReactNode;
  htmlFor?: string;
  children: React.ReactNode;
  error?: React.ReactNode;
  className?: string;
  labelClassName?: string;
};

function FormField({
  label,
  htmlFor,
  children,
  error,
  className,
  labelClassName,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className={cn("block text-xs font-semibold uppercase tracking-[0.2em] text-slate-700", labelClassName)} htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}

export { FormField };
