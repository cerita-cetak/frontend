"use client";

import Input from "@/components/atoms/form/input";
import { tInputFormik } from "@/types/form/input";
import { useField } from "formik";
import React from "react";
import cn from "classnames";

export default function InputFormik({ wfull, name, ...props }: tInputFormik) {
  const [field, meta, helper] = useField(name);

  return (
    <div className={cn("flex flex-col", !wfull && "w-fit")}>
      <Input
        {...field}
        {...props}
        className={cn(
          meta.error &&
            meta.touched &&
            "border border-red-500 placeholder:text-red-500",
        )}
        isError={meta.error && meta.error}
      />
      <small
        className={cn(
          meta.touched && meta.error ? "capitalize text-red-500" : "hidden",
        )}
      >
        {meta.error}
      </small>
    </div>
  );
}
