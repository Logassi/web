"use client";
import React from "react";
import TempShowUsername from "./tempShowUsername.component";
import RegisterOption from "./registerOption.component";
import LoginOption from "./loginOption.component";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function TempShowIsLoggedIn() {
  let user: boolean = false;
  const access_token = getCookie("access_token") as string;
  access_token ? (user = true) : (user = false);
  const router = useRouter();

  return (
    <div>
      <h1>HomeView</h1>
      {/* Below code is temporary */}

      {user ? (
        <div>
          <TempShowUsername />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              deleteCookie("access_token");
              router.push("/");
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <RegisterOption />
          <LoginOption />
        </div>
      )}
    </div>
  );
}
