import cn from "classnames";
import { tCheckbox } from "@/types/form/checkbox";

export default function Checkbox({ label, ...props }: tCheckbox) {
  return (
    <div
      className={cn(
        !label ? "flex-none" : "flex",
        "select-none items-center gap-2",
      )}
    >
      <input
        {...props}
        type="checkbox"
        className={cn(
          "rounded-sm checked:text-green-500 focus:ring-0",
          props.className,
        )}
      />
      <label htmlFor={props.id} className={cn(!label && "hidden")}>
        {label}
      </label>
    </div>
  );
}
