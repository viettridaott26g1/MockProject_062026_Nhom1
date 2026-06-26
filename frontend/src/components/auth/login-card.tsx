// components/auth/login-card.tsx

import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function LoginCard({ children }: Props) {
    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-8 shadow-2xl backdrop-blur-2xl">
            {children}
        </div>
    );
}