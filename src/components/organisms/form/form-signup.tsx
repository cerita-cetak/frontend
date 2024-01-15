"use client";

import Button from "@/components/atoms/button";
import InputFormik from "@/components/mollecules/form-formik/input-formik";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { object, string } from "yup";

export default function FormSignup() {
  return (
    <Formik
      initialValues={{
        fullname: undefined,
        email: undefined,
        password: undefined,
      }}
      validationSchema={object({
        fullname: string().required("required").min(3, "minimal 3 character"),
        email: string().email("invalid email").required("required"),
        password: string().required("required").min(6, "minimal 6 character"),
      })}
      onSubmit={() => {}}
    >
      {() => (
        <Form className="space-y-8 transition-all duration-100">
          <div>
            <p className="text-2xl font-medium"> Signup</p>
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
              rerum.
            </small>
          </div>
          <div className="space-y-3 ">
            <InputFormik
              name="fullname"
              wfull
              placeholder="enter your fullname"
              icon={{ start: <FaUserCircle /> }}
            />
            <InputFormik
              name="email"
              wfull
              placeholder="email address"
              icon={{ start: <MdAlternateEmail /> }}
            />
            <InputFormik
              name="password"
              type="password"
              wfull
              placeholder="create a password"
              icon={{ start: <RiLockPasswordFill /> }}
            />
          </div>

          <div className="space-y-3">
            <Button width="full">Get started</Button>
            <Button
              type="button"
              width="full"
              variant="text"
              className="flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <i className="text-xl">
                <FcGoogle />
              </i>
              <p>Sinup with google</p>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="font-semibold text-neutral-500">Have an account ?</p>
            <Link href={"/login"} className="font-bold">
              Login
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}
