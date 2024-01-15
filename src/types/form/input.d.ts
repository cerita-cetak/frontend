import { FieldInputProps, FieldMetaProps } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface tInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  wfull?: boolean;
  variant?: string;
  size?: string;
  color?: string;
  icon?: { start?: ReactNode; end?: ReactNode };
  isError?: boolean | string;
}

export interface tInputFormik
  extends Omit<
    tInput,
    "checked" | "onBlur" | "onChange" | "multiple" | "name" | "value"
  > {
  name: string;
}
