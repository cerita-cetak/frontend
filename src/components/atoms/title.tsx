import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";

interface tTitle
  extends Pick<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    "className"
  > {
  title: string;
  resetStyle?: boolean;
}

export default function Title({ title, className, resetStyle }: tTitle) {
  return (
    <h2
      className={cn(
        !resetStyle && "text-2xl font-bold md:text-3xl lg:text-4xl",
        className,
      )}
    >
      {title}
    </h2>
  );
}
