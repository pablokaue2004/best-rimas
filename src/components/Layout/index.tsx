import React from "react";
import MenuHeader from "../MenuHeader";
import './globalStyle.css'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="custom-scrollbar">
      <MenuHeader />
      <div className="tw-bg-gray-900">
        <Outlet />
      </div>
      <div className=" tw-py-1 tw-px-3 tw-bg-yellow-500 tw-w-full tw-flex tw-justify-center tw-items-center">
        <p className="tw-text-center tw-text-gray-500 tw-text-xs">
          &copy; Bets rima {new Date().getFullYear()}. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Layout;
