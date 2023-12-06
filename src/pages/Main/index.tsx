import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideMain from "./components/SlideMain";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import LatestNews from "./components/LatestNews";
const Main = () => {
  const navigate = useNavigate();
  const testData = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <div className="tw-flex tw-flex-col ">
      <SlideMain />
      <div className="tw-px-5 tw-py-3 tw-w-full tw-text-white tw-flex tw-items-start tw-justify-center tw-flex-col">
        <span className="tw-text-2xl tw-font-bold tw-py-2">
          Ultimas batalhas - Resultado
        </span>
        <div className="tw-w-full tw-grid tw-grid-cols-1 xl:tw-grid-cols-3 tw-gap-3">
          {testData.map((item) => (
            <div key={item}>
              <Card />
            </div>
          ))}
        </div>
      </div>
      <div className="tw-px-5 tw-py-3 tw-w-full tw-text-white tw-flex tw-items-start tw-justify-center tw-flex-col">
        <div className="tw-w-full tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <span className="tw-text-2xl tw-font-bold tw-pt-2">
              Proximas Batalhas
            </span>
            <span className="tw-text-xs tw-pb-5">Deixe o seu palpite</span>
          </div>
          <button onClick={() => navigate("/home/allbattles")}>
            <span className="tw-font-bold tw-pt-2">Ver todos {">"}</span>
          </button>
        </div>
        <div className="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3">
          {testData.map((item) => (
            <div key={item}>
              <Card />
            </div>
          ))}
        </div>
      </div>
      <div className="tw-px-5 tw-py-3 tw-w-full tw-text-white tw-flex tw-items-start tw-justify-center tw-flex-col">
        <span className="tw-text-2xl tw-font-bold tw-py-2">
          Ultimas notícias
        </span>
        <div className="tw-w-full tw-items-center tw-justify-center">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default Main;
