import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  type: HTMLInputTypeAttribute;
  autoComplete?: string;
  register: UseFormRegister<T>;
  registerName: FieldPath<T>;
  error?: FieldError;
};

const Input = <T extends FieldValues>({
  label,
  type,
  autoComplete,
  register,
  registerName,
  error,
}: InputProps<T>) => (
  <>
    <label>{label}</label>
    <input
      type={type}
      autoComplete={autoComplete}
      {...register(registerName, {
        required: `${label} is verplicht`,
      })}
      aria-invalid={!!error}
    />
    <p className='h-5 text-sm text-gray-400 empty:invisible'>
      {error?.message}
    </p>
  </>
);

export default Input;
