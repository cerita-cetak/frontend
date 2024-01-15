import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface tCheckbox
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type"
  > {
  label?: string;
}

export interface tCheckboxFormik
  extends Omit<
    tCheckbox,
    "checked" | "onBlur" | "onChange" | "multiple" | "name" | "value"
  > {
  name: string;
}
