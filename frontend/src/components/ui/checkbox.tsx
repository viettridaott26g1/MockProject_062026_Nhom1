import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label: ReactNode;
};

const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
    return (
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
            <input
                type="checkbox"
                className={cn(
                    "h-4 w-4 rounded border-slate-300 accent-indigo-600",
                    className
                )}
                {...props}
            />
            {label}
        </label>
    );
};

export { Checkbox };