import {
  InputHTMLAttributes, // Importando os atributos padroes do Input
  useEffect,
  useRef,
} from "react";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input defaultValue={defaultValue} ref={inputRef} {...rest} />;
}

export default Input;
