import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Swipper = ({ images, tipo }) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ width: "100%" }}
      >
        {images.map((imagen, ind) => (
          <SwiperSlide key={ind}>
            <img
              src={imagen}
              alt="portugal"
              className={
                tipo === "Desarrollo" ? "altura imagenSwiper" : "imagenSwiper"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { Swipper };
