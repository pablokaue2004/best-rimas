import React, { useState } from "react";
import LoginImafe from "../../images/loginimage.jpg";
import Logo from "../../images/logo.png";
import "../../styles/styleGlobal.css";
import Login from "./components/Login";
import Register from "./components/Register";

function Wellcome() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleFirstAccessClick = () => {
    setShowRegister(true);
  };

  const handleBackFirstAccessClick = () => {
    setShowRegister(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBackClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="tw-h-screen tw-w-full tw-flex tw-items-center tw-justify-center">
      <div className="tw-fixed tw-inset-0">
        <img
          src={LoginImafe}
          className="tw-w-full tw-h-full tw-object-cover"
          alt=""
        />
      </div>
      <div
        className={`tw-px-9 lg:tw-px-0 tw-py-4 tw-fixed tw-inset-0 tw-flex tw-items-start tw-justify-center tw-backdrop-blur-sm tw-bg-black/60 ${
          showLogin|| showRegister ? "slide-out" : ""
        }`}
      >
        <div className="tw-flex tw-flex-col ">
          <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-mb-5">
            <img src={Logo} className="tw-w-80 " alt="" />
          </div>
          <div className="text-container tw-flex tw-flex-col">
            <span
              className={`${
                showLogin || showRegister  ? "tw-hidden" : ""
              } tw-text-yellow-500 tw-font-bold tw-text-7xl`}
            >
              O maior site de palpites
            </span>
            <span
              className={`${
                showLogin || showRegister  ? "tw-hidden" : ""
              } tw-text-yellow-500 tw-font-bold tw-text-7xl`}
            >
              para rimas!
            </span>
            <span
              className={`${
                showLogin || showRegister ? "tw-hidden" : ""
              }tw-text-white tw-text-sm tw-mt-3`}
            >
              Dê seu palpite em seus ídolos na Aldeia, Coliseu e entre outras!
            </span>
          </div>
          {showRegister ? (
            <div className={`${showRegister ? "animated-slide-in" : ""}`}>
              <button className="tw-flex tw-items-center tw-py-2" onClick={handleBackFirstAccessClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z"></path>
                </svg>
                <span className="tw-font-bold tw-text-white tw-text-xl tw-ml-4">
                  Cadastre-se
                </span>
              </button>
              <div className="tw-p-2 tw-rounded-md tw-bg-black">
                <Register />
              </div>
            </div>
          ) : showLogin ? (
            <div className={`${showLogin ? "animated-slide-in" : ""}`}>
              <button className="tw-flex tw-items-center tw-py-2" onClick={handleBackClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z"></path>
                </svg>
                <span className="tw-font-bold tw-text-white tw-text-xl tw-ml-4">
                  Login
                </span>
              </button>
              <div className="tw-p-2 tw-rounded-md tw-bg-black">
                <Login />
              </div>
            </div>
          ) : (
            <div className="tw-mt-5 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3">
              <button
                onClick={handleFirstAccessClick}
                className="duration-300 ease-in-out tw-px-6 tw-py-3 tw-rounded-lg tw-bg-yellow-500 tw-text-gray-800 tw-font-bold tw-duration-300 hover:tw-bg-yellow-600"
              >
                Primeiro acesso
              </button>
              <button
                onClick={handleLoginClick}
                className="ease-in-out tw-px-6 tw-py-3 tw-rounded-lg tw-bg-yellow-500 tw-text-gray-800 tw-font-bold tw-duration-300 hover:tw-bg-yellow-600"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wellcome;
