// Author @ Lomona Gagasi Pasaribu

import LoginOption from "@/views/components/loginOption.component";
import RegisterOption from "@/views/components/registerOption.component";
import TempShowIsLoggedIn from "@/views/components/tempShowIsLoggedIn.component";
import TempShowUsername from "@/views/components/tempShowUsername.component";

export default function HomeView() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <TempShowIsLoggedIn />
      {/* <div>
        <h1>HomeView</h1>
        {/* Below code is temporary 
        <div>
          <TempShowUsername />
        </div>
        <div>
          <RegisterOption />
        </div>
        <div>
          <LoginOption />
        </div>
      </div> */}
    </div>
  );
}
