// Author @ Lomona Gagasi Pasaribu

export default function HomeView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div>
        <h1>HomeView</h1>
        {/* Below code is temporary */}
        <div>
          <p className="mt-4 text-gray-400 text-center">
            Do not have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
        <div>
          <p className="mt-4 text-gray-400 text-center">
            Have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
