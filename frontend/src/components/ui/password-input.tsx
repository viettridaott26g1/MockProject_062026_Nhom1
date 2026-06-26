import * as React from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "./input";

type PasswordInputProps = Omit<React.ComponentProps<typeof Input>, "type"> & {
  containerClassName?: string;
  inputClassName?: string;
};

function PasswordInput({
  className,
  containerClassName,
  inputClassName,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={cn("relative", containerClassName)}>
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        <Lock className="h-5 w-5" />
      </span>
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={cn(
          "h-12 rounded-lg border-slate-200 pl-11 pr-12 bg-white shadow-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20",
          inputClassName,
          className,
        )}
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  );
}

export { PasswordInput };
