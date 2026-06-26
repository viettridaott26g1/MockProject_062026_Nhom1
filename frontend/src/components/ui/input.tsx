import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    icon?: ReactNode;
};

const Input = ({ label, icon, className, ...props }: InputProps) => {
    return (
        <div>
            {label && (
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </span>
                )}

                <input
                    className={cn(
                        "h-13 w-full rounded-2xl bg-slate-100 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500",
                        icon && "pl-12",
                        className
                    )}
                    {...props}
                />
            </div>
        </div>
    );
};

export { Input };