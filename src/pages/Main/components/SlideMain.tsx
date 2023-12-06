import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const SlideMain = () => {
    const slides = [
        {
          image:
            "https://portaldorapnacional.com/wp-content/uploads/2023/07/IMG_20230717_184754.jpg",
          text: "Texto do Slide 1",
        },
        {
          image:
            "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/07/17160931/credito-Pedro-Fatore-%40pedrofatore_-5-scaled.jpg",
          text: "Texto do Slide 2",
        },
        {
          image:
            "https://academiadebeats.com.br/blog/wp-content/uploads/2020/11/@HIGORHATANO_IMG_8303cam2-750x400.jpg",
          text: "Texto do Slide 3",
        },
        {
          image:
            "https://www.zonasuburbana.com.br/wp-content/uploads/2021/05/Krawk-Kant-Mikezin-e-Mcharles-est%C3%A3o-confirmados-para-a-live-da-batalha-da-aldeia-com-R-10-mil-para-o-vencedor-.jpg",
          text: "Texto do Slide 4",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXf-kSqNTNzwn2bZmIxoJj2NMYJC8pncpa0Q&usqp=CAU&reload=on",
          text: "Texto do Slide 5",
        },
      ];

  return (
    <div className="tw-h-[500px] tw-bg-gray-400 tw-text-white tw-flex tw-items-center tw-justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {slides.map((slide, index) => (
          <SwiperSlide key={index}>
              <img src={slide.image} alt="" className="tw-w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideMain;
