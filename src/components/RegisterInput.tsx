import type {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";

type RegisterInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  helperText?: string;
  children?: ReactNode;
};

export default function RegisterInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "Digite aqui",
  helperText,
  children,
}: RegisterInputProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
      />

      {helperText && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
      {children}
    </div>
  );
}
