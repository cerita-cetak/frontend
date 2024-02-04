"use client";

import Checkbox from "@/components/atoms/form/checkbox";
import { tCheckboxFormik } from "@/types/form/checkbox";
import { useField } from "formik";
import React from "react";
import cn from "classnames";

export default function CheckboxFormik({ name, ...props }: tCheckboxFormik) {
  const [field, meta, helper] = useField(name);

  return (
    <>
      <Checkbox
        // {...field}
        {...props}
        className={cn(
          meta.error && meta.touched && "border-red-500 text-red-500",
        )}
        onChange={(values) => {
          // console.log("needs 1", values.target.value);
        }}
      />
      {meta.error && meta.touched && meta.error}
    </>
  );
}
