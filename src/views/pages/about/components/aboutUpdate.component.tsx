"use client";
import React, { useState } from "react";
import useAuthStore from "@/stores/user.stores"; // Adjust the path to your zustand store

const AboutUpdate: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, onAuthSuccess } = useAuthStore();

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    // Replace this with your save logic (e.g., API call to update user info)
    console.log("Save & Update clicked");
    setIsEditing(false); // Close the form after saving
  };

  return (
    <div className="flex m-2 p-2 items-center justify-center bg-transparent">
      <div className="relative w-full max-w-md bg-gray-600 p-8 rounded-md shadow-lg bg-opacity-50">
        {/* Edit or Save Icon */}
        <button
          className="absolute top-0 right-0 m-4 text-white hover:text-green-500 font-medium"
          onClick={isEditing ? handleSave : handleToggleEdit}
        >
          {isEditing ? (
            "Save & Update"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed"
            >
              <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
            </svg>
          )}
        </button>

        <h1 className="text-2xl font-bold text-white mb-6">About Update</h1>

        {/* Expandable Form */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isEditing ? "max-h-screen" : "max-h-0"
          }`}
        >
          {isEditing && (
            <form>
              <div className="mb-4">
                <label className="block text-white text-sm mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-black rounded"
                  defaultValue={user?.name || ""}
                  placeholder="Enter your display name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm mb-2">Gender</label>
                <select
                  className="w-full px-3 py-2 text-black rounded"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* Add more fields as needed */}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUpdate;
