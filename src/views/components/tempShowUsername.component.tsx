"use client";

import { IUserDataFromAPI } from "@/stores/user.stores";
import ErrorHandler from "@/utils/errorHandler.utils";
import axios from "axios";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

type Token = {
  id: string;
  username: string;
  email: string;
  iat: number;
  exp: number;
};

interface IUserData {
  username: string;
  email: string;
}

// interface IUserdataFromAPI {
//   email: string;
//   username: string;
//   name: string;
//   birthday: string;
//   horoscope: string;
//   zodiac: string;
//   height: number;
//   weight: number;
//   interest: string[];
// }

const fetchingData = async (token: string) => {
  try {
    const response = await axios.get(
      "https://techtest.youapp.ai/api/getProfile",
      { headers: { "x-access-token": token } }
    );

    return response.data;
  } catch (error) {
    ErrorHandler(error);
    return null;
  }
};

export default function TempShowUsername() {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [fetchedData, setFetchedData] = useState<IUserDataFromAPI | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get the token from cookies
        const access_token = getCookie("access_token") as string;
        if (access_token) {
          // Decode the token
          const token: Token = jwtDecode(access_token);
          setUserData({ username: token.username, email: token.email });

          // Fetch additional data from the API
          const apiData = await fetchingData(access_token);
          if (apiData?.data) {
            setFetchedData(apiData);
          }
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error("Error decoding token or fetching profile:", error);
        setUserData(null);
      }
    };

    fetchProfile();
  }, []);

  // const [userData, setUserData] = useState<IUserData | null>(null);
  // //const [fetchedData, setFetchedData] = useState<IUserData | null>(null);

  // useEffect(() => {
  //   try {
  //     const access_token = getCookie("access_token") as string;

  //     if (access_token) {
  //       const token: Token = jwtDecode(access_token);
  //       setUserData(token);
  //     } else {
  //       setUserData(null);
  //     }
  //   } catch (error) {
  //     console.error("Error decoding token:", error);
  //     setUserData(null);
  //   }
  // }, []);

  // if (userData?.username === null) {
  //   return (
  //     <div className="mt-4 text-gray-400 text-center">
  //       <p>Welcome</p>
  //     </div>
  //   );
  // }

  // console.log(userData);
  // console.log(`Here is the fetched data : ${fetchedData}`);
  console.log(fetchedData);

  return (
    <div className="mt-4 text-gray-400 text-center">
      <p>Welcome, {userData?.username}</p>
      <p>Is your email this one : {userData?.email}</p>
    </div>
  );
}
