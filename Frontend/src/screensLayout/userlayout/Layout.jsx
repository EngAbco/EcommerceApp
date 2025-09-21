import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side welcome message */}
      <div className="hidden lg:flex items-center justify-center bg-slate-800 p-5 py-4">
        <div className="max-w-md space-y-6 text-center text-slate-100">
          <h1 className="text-2xl font-bold">Welcome to Somzuuq Market</h1>
        </div>
      </div>

      {/* Right side where child routes will render */}
      <div className="flex flex-1 items-center justify-center bg-slate-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
