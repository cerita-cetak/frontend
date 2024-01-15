export interface tButton
  extends Pick<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "children" | "id" | "disabled" | "type" | "hidden" | "style" | "className"
  > {
  variant?: "contained" | "text" | "outlined" | "text-only";
  navigate?: string;
  size?: "S" | "M" | "L" | "XL";
  width?: "full" | "fit";
  color?:
    | "success"
    | "warning"
    | "danger"
    | "disabled"
    | "info"
    | "white"
    | "black";
  roundedfull?: boolean;
}
