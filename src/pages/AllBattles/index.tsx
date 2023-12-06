import React from "react";
import Card from "../../components/Card";
import SlideMain from "../Main/components/SlideMain";
import { useNavigate } from "react-router-dom";

const AllBatles = () => {
  const testData = Array.from({ length: 16 }, (_, index) => index + 1);
  const navigate = useNavigate()
  return (
    <>
      <SlideMain />
      <div className="tw-p-5">
        <div className="tw-flex tw-items-center">
          <button onClick={() => navigate('/home')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z"></path>
            </svg>
          </button>
          <span className="tw-text-2xl tw-ml-2 tw-font-bold tw-text-white ">
            Todas as batalhas
          </span>
        </div>
        <div className="tw-py-3 tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3">
          {testData.map((item) => (
            <div key={item}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBatles;
