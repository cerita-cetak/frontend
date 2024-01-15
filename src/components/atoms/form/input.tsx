import { tInput } from "@/types/form/input";
import cn from "classnames";

export default function Input({
  wfull,
  variant,
  color,
  size,
  icon,
  isError,
  ...props
}: tInput) {
  return (
    <div className={cn("relative", wfull && "w-full")}>
      <input
        {...props}
        className={cn(
          "peer w-full rounded-lg focus:border-green-500 focus:ring-green-500",
          props.className,
          { "pl-8": icon?.start },
          { "pr-8": icon?.end },
        )}
      />

      {/* start icon */}
      <i
        className={cn(
          !icon?.start && "hidden",
          isError && "text-red-500",
          "absolute left-2 top-1/2 -translate-y-1/2 ",
        )}
      >
        {icon?.start}
      </i>

      {/* end icon */}
      <i
        className={cn(
          !icon?.end && "hidden",
          "absolute right-2 top-1/2 -translate-y-1/2 ",
        )}
      >
        {icon?.end}
      </i>
    </div>
  );
}
