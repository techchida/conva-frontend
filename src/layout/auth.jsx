import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-container bg-gray-100">
      <div className="flex justify-center items-center h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
