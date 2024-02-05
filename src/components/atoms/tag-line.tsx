import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface tTagline
  extends Pick<
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    "className"
  > {
  tagline: string;
}

export default function Tagline({ tagline, ...props }: tTagline) {
  return <p {...props}>{tagline}</p>;
}
