import React from "react";

export default function UpdateAboutOption() {
  return (
    <div>
      <p className="mt-4 text-gray-400 text-center">
        Change About me?{" "}
        <a href="/about" className="text-yellow-500 hover:underline">
          Modify
        </a>
      </p>
    </div>
  );
}
