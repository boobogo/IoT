import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../styles/SwiperCarousel.css";
import CarouselElement from "./CarouselElement";
// import img1 from '../images/profile2.webp'; // Import the image
import img2 from '../images/iot.webp'; // Import the image
import img3 from '../images/algo1.webp'; // Import the image

export default function SwiperCarousel() {

  const data = [
    { img: img2, text: "Smart home IoT system with remote control & monitoring via a React web app. Integrates IoT devices, AWS, and DevOps for end-to-end system design.", title: "IoT Smart Home", link: "/IoT" },
    { img: img3, text: "Intelligent trading bot using machine learning to analyze market data, predict price movements, and execute trades.", title: "Algorithmic Trading", link: "/trade" },
  ];
  return (
    <Swiper
      centeredSlides={true} // Keep active slide in center
      speed={1000} // Slide transition duration
      pagination={{ clickable: true }} // Enables dots
      autoplay={{ delay: 4000, disableOnInteraction: false }} // Auto-play
      loop={true} // Infinite loop
      freeMode={true} // Free mode
      modules={[Navigation, Pagination, Autoplay, FreeMode]} // Use Swiper modules
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <CarouselElement img={item.img} index={index} text={item.text} title={item.title} link={item.link}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}