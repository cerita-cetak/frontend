"use client";

import React from "react";
import { Formik, Form } from "formik";
import Button from "@/components/atoms/button";
import InputFormik from "@/components/mollecules/form-formik/input-formik";
import { object, string } from "yup";
import { FaWhatsapp } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function FormLogin() {
  return (
    <Formik
      initialValues={{ email: undefined, password: undefined }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
      validationSchema={object({
        email: string()
          .required("required")
          .min(3, "minimal 3 character")
          .email("invalid email format"),
        password: string().required("required").min(6, "min 6 character"),
      })}
    >
      {() => (
        <Form className="space-y-3 transition-all duration-100">
          <InputFormik
            placeholder="Email address"
            type="email"
            wfull
            name="email"
            icon={{ start: <FaWhatsapp /> }}
          />
          <InputFormik
            placeholder="password"
            name="password"
            type="password"
            icon={{ start: <RiLockPasswordFill /> }}
          />
          <Button>Submit</Button>
        </Form>
      )}
    </Formik>
  );
}
