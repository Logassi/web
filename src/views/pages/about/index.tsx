import React from "react";
import Header from "./components/header.component";
import ProfileSummary from "./components/profileSummary.component";
import AboutUpdate from "./components/aboutUpdate.component";
import InterestsUpdate from "./components/interestsUpdate.component";

export default function AboutView() {
  return (
    <div className="min-h-screen">
      {/* <div>Header, backButton, </div> */}
      <Header />
      {/* <div>Photo Profile, username, age, gender, zodiac, and shio</div> */}
      <ProfileSummary />

      {/* <div>About</div> */}
      <AboutUpdate />

      {/* <div>Interest</div> */}
      <InterestsUpdate />
    </div>
  );
}
