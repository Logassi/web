// Author @ Lomona Gagasi Pasaribu

import LoginOption from "@/views/components/loginOption.component";
import RegisterOption from "@/views/components/registerOption.component";

export default function HomeView() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div>
        <h1>HomeView</h1>
        {/* Below code is temporary */}
        <div>
          <RegisterOption />
        </div>
        <div>
          <LoginOption />
        </div>
      </div>
    </div>
  );
}
