interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

export function SubmitButton({
  text,
  onClick,
  isLoading = false,
  type = "submit",
}: SubmitButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {/* Shine animation overlay */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center justify-center gap-2">
        {isLoading && (
          <svg
            className="size-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {text}
      </span>
    </button>
  );
}
