import React from "react";

const LatestNews = () => {
  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-2 tw-w-full tw-items-center tw-justify-center tw-flex-col">
      <div className="tw-flex tw-items-center tw-flex-col md:tw-flex-row">
        <div>
          <img
            className="tw-w-[800px] tw-h-[200px] tw-bg-cover tw-rounded-2xl"
            src="https://portaldorapnacional.com/wp-content/uploads/2023/07/IMG_20230717_184754.jpg"
            alt=""
          />
        </div>
        <div className="tw-flex tw-flex-col tw-ml-5">
          <span className="tw-font-bold tw-text-2xl tw-text-white tw-w-full">
            Batalha da aldeia lança nova data da BDA 8 anos!
          </span>
          <span className="tw-py-3 tw-text-xl tw-text-white tw-w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, commodi earum iure culpa illum porro saepe sit
            distinctio magnam iusto tenetur inventore sunt voluptatibus soluta,
            a reiciendis totam, perspiciatis perferendis.
          </span>
          <span className="tw-text-white">19/07/2023 - 14:00</span>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-flex-col md:tw-flex-row">
        <div>
          <img
            className="tw-w-[800px] tw-h-[200px] tw-bg-cover tw-rounded-2xl"
            src="https://portaldorapnacional.com/wp-content/uploads/2023/07/IMG_20230717_184754.jpg"
            alt=""
          />
        </div>
        <div className="tw-flex tw-flex-col tw-ml-5">
          <span className="tw-font-bold tw-text-2xl tw-text-white tw-w-full">
            Batalha da aldeia lança nova data da BDA 8 anos!
          </span>
          <span className="tw-py-3 tw-text-xl tw-text-white tw-w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, commodi earum iure culpa illum porro saepe sit
            distinctio magnam iusto tenetur inventore sunt voluptatibus soluta,
            a reiciendis totam, perspiciatis perferendis.
          </span>
          <span className="tw-text-white">19/07/2023 - 14:00</span>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
