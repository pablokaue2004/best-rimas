import React from "react";

const Card = () => {
  return (
    <div className=" tw-w-full tw-bg-gray-700 tw-rounded-md">
      <div className="tw-w-full tw-py-1 tw-flex tw-items-center tw-rounded-t-md tw-justify-center tw-bg-slate-600 tw-text-gray-200 tw-font-bold">
        Aldeia - 12/12/2023 - Finalizada
      </div>
      <div className="tw-px-1 tw-grid tw-grid-cols-2 tw-divide-x-2">
        <div className="tw-w-full tw-flex tw-items-center tw-py-1 tw-px-2">
          <div className="tw-w-14 tw-h-14 tw-bg-gray-800"></div>
          <span className="tw-font-bold tw-text-white tw-w-9 tw-ml-2">
            Xamuel Develzinha Shueler
          </span>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-justify-end tw-py-1 tw-px-2">
          <span className="tw-font-bold tw-text-white tw-w-20 tw-mr-2 tw-text-end">
            Kayck Kauê Gardel
          </span>
          <div className="tw-w-14 tw-h-14 tw-bg-gray-800"></div>
        </div>
      </div>
      <div className="tw-w-full tw-divide-x-2 tw-flex">
        <div className="tw-w-[30%] tw-bg-gray-500 tw-text-white tw-flex tw-items-center tw-justify-center tw-text-xs">
          30%
        </div>
        <div className="tw-w-[70%] tw-bg-yellow-600 tw-text-white tw-flex tw-items-center tw-justify-center  tw-text-xs">
          70%
        </div>
      </div>
      <div className=" tw-px-1 tw-w-full tw-grid tw-gap-2 tw-grid-cols-2 tw-p-2">
        <div className="tw-group tw-w-full">
          <button className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-border tw-border-yellow-500 tw-rounded-md group-hover:tw-duration-300 group-hover:tw-bg-yellow-500">
            <span className="group-hover:tw-text-gray-800 tw-font-bold tw-text-white">
              Equipe 1
            </span>
            <span className="group-hover:tw-text-gray-800 tw-text-white tw-text-xs">
              (Clique para votar)
            </span>
          </button>
        </div>
        <div className="tw-group tw-w-full">
          <button className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-border tw-border-yellow-500 tw-rounded-md group-hover:tw-duration-300 group-hover:tw-bg-yellow-500 ">
            <span className="group-hover:tw-text-gray-800 tw-font-bold tw-text-white">
              Equipe 2
            </span>
            <span className="group-hover:tw-text-gray-800 tw-text-white tw-text-xs">
              (Clique para votar)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
