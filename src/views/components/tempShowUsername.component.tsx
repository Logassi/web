"use client";

import useAuthStore from "@/stores/user.stores";

export default function TempShowUsername() {
  const { user } = useAuthStore(); // Set onSuccessLogin

  console.log(user);

  return (
    <div className="mt-4 text-gray-400 text-center">
      <p>Welcome, {user?.username}</p>
      <p>Your email : {user?.email}</p>
      <div>
        <h3 className="mt-4">Your Details:</h3>
        <ul>
          {user &&
            Object.entries(user).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value?.toString() || "N/A"}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
