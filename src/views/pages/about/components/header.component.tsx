"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="flex items-center space-x-2 text-white text-sm font-medium hover:opacity-80 transition-opacity bg-transparent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
      <span>Back</span>
    </button>
  );
}
