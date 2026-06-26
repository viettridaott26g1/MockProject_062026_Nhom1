import type { LabelHTMLAttributes } from "react";

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={`block mb-2 text-sm font-medium text-gray-700 ${props.className ?? ""}`}
    />
  );
}