import React from "react";

export default function ProfileSummary() {
  return (
    <div>
      <div className="flex m-2 p-2 items-center justify-center bg-transparent">
        <div className="relative w-full max-w-md bg-gray-600 p-8 rounded-md shadow-lg bg-opacity-50 ">
          {/* <svg
            className="absolute top-0 right-0 m-4"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
          >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg> */}

          <h1 className="text-2xl font-bold text-white mb-6">
            Profile Summary
          </h1>
        </div>
      </div>
    </div>
  );
}
