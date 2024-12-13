"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ILogin from "../types";
import axiosInstance from "@/libs/axios";
import { useRouter } from "next/navigation";
import LoginSchema from "./schema";
import axios from "axios";
import { setCookie } from "cookies-next";
import RegisterOption from "@/views/components/registerOption.component";

export default function LoginForm() {
  const router = useRouter();

  const isEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleLogin = async (params: ILogin) => {
    try {
      const isInputEmail = isEmail(params.identifier);

      const identifiedParams = {
        email: isInputEmail ? params.identifier : "",
        username: isInputEmail ? "" : params.identifier,
        password: params.password,
      };

      console.log(isInputEmail);

      console.log(identifiedParams.email);
      console.log(identifiedParams.username);
      console.log(identifiedParams.password);

      // const response = await axiosInstance.post("/api/register", params);
      const response = await axios.post(
        "https://techtest.youapp.ai/api/login",
        identifiedParams
      );

      console.log(response);

      const access_token = response.data.access_token;

      // Store the access token in a cookie (with options like expiration time)
      if (access_token) {
        setCookie("access_token", access_token); // Session Cookie
        //   setCookie('access_token', access_token, { maxAge: 60 * 60 * 24 * 7 }); // Cookie expires in 7 days
      }

      console.log("Access token stored in cookie:", access_token);
      //   console.log(response.data.access_token);
      //   console.log(response.status);
      //   console.log(response.headers);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md p-8 rounded-md ">
        <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
        <Formik
          initialValues={{
            identifier: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field
                  placeholder="Enter Email/Username"
                  type="text"
                  name="identifier"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="identifier"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <div className="relative">
                  <Field
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                    </svg>
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
        <RegisterOption />
      </div>
    </div>
  );
}
