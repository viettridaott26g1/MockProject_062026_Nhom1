import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = ({ className, ...props }: CardProps) => {
    return (
        <div
            className={cn("rounded-3xl bg-white p-8 shadow-2xl", className)}
            {...props}
        />
    );
};

export { Card };