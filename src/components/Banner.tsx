import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/context";

import Button from "./Button";
import ImgComponent from "./ImgComponent";
import bg from "../assets/bg-main.jpg";
import bg2 from "../assets/bg-main2.jpg";
import bg3 from "../assets/bg-main3.jpg";
import bg4 from "../assets/bg-main4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

export default function Banner() {
  const location = useLocation();
  const { lang } = useAppContext();

  const swiper: JSX.Element = (
    <Swiper
      pagination={{
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "" + "</span>";
        },
      }}
      navigation={true}
      modules={[Navigation, Pagination, A11y]}
      className="mySwiper"
    >
      {[bg2, bg3, bg4].map((img: string, i: number) => {
        return (
          <SwiperSlide key={`slide-${i}`}>
            <ImgComponent link={img} altText="banner" banner={true} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
  return (
    <aside className="banner">
      {location.pathname === "/shop" ? (
        swiper
      ) : (
        <ImgComponent link={bg} altText="banner" banner={true} />
      )}
      {location.pathname === "/shop" ? null : (
        <Button width="35vw" height={45} component="banner">
          {lang === "ENG" ? "Buy now" : "Kup teraz"}
        </Button>
      )}
    </aside>
  );
}
