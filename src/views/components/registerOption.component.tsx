import React from "react";

export default function RegisterOption() {
  return (
    <div>
      <p className="mt-4 text-gray-400 text-center">
        No account?{" "}
        <a href="/register" className="text-yellow-500 hover:underline">
          Register here
        </a>
      </p>
    </div>
  );
}
