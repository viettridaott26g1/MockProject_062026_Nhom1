import * as React from "react";
import { cn } from "@/lib/utils";

export default function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type} 
            data-slot="input" 
            className={cn(
             "flex h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
              className)}
               {...props}
        />
    )

}

