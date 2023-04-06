import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function SwiperBanner() {
  return (
    <Div>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          11월 22일부터 업비트 로그인만 서비스 이용이 가능합니다.
        </SwiperSlide>
        <SwiperSlide>
          생체인증으로 업비트 로그인을 더욱 빠르게 이용해보세요.
        </SwiperSlide>
        <SwiperSlide>
          생체인증으로 업비트 로그인을 더욱 빠르게 이용해보세요.
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Div>
  );
}

const Div = styled.div`
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;
