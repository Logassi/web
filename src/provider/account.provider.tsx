"use client";
import useAuthStore from "@/stores/user.stores";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { fetchingData } from "@/views/pages/login/components/loginForm.component";

// Guna nya mempertahankan data setelah di refresh (lebih ke, kembali fetching data dari API setelah refresh)
// Practice disini mengunakan fetching lagi ke API, adalah tidak optimal
// Upgrade di backend side, dimana access_token, bisa menyimpan data user sementara lebih optimal

type Token = {
  id: number;
  email: string;
  name: string;
  iat: number;
  exp: number;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { onAuthSuccess, clearAuth } = useAuthStore();
  const access_token = (getCookie("access_token") as string) || "";

  const checkLogin = async () => {
    const token: Token = jwtDecode(access_token);

    if (Date.now() >= token.exp * 1000) {
      Swal.fire({
        icon: "warning",
        title: "Session expired please relogin",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => clearAuth());
    } else {
      const apiData = await fetchingData(access_token);

      onAuthSuccess(apiData.data);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (access_token) {
        checkLogin();
      }
    }
  }, []);
  return <>{children}</>;
}
