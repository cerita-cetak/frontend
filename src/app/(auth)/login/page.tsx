"use client";

import React from "react";
import { Formik, Form } from "formik";
import Button from "@/components/atoms/button/button";
import InputFormik from "@/components/mollecules/form-formik/input-formik";
import { object, string } from "yup";
import { FaWhatsapp } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Checkbox from "@/components/atoms/form/checkbox";

export default function Page() {
  return (
    <Formik
      initialValues={{
        email: undefined,
        password: undefined,
        remember: false,
      }}
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
      {({ values, setFieldValue }) => (
        <Form className="space-y-8 transition-all duration-100">
          <div>
            <p className="text-2xl font-bold "> Login</p>
            <small className="">Wellcome to Cerita Cetak</small>
          </div>
          <div className="space-y-3">
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
              wfull
            />
            <Checkbox
              disabled={!values.email || !values.password}
              label="Remember me"
              id="remember"
              onChange={() => setFieldValue("remember", !values.remember)}
            />
          </div>
          <div className="space-y-3">
            <Button width="full">Let&apos;s Explore</Button>
            <Button
              type="button"
              width="full"
              variant="text"
              className="flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <i className="text-xl">
                <FcGoogle />
              </i>
              <p>Login with google</p>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="font-semibold text-neutral-500">
              Don&apos;t have an account ?
            </p>
            <Link href={"/signup"} className="font-bold text-secondary-500">
              Signup
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
