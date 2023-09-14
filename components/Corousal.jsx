"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import profilePic from "@/assets/profilePic.jpg";
import { TechnologiesDeveloped } from "@/constants";
const Corousal = () => {
  return (
    <div className="bg-slate-600">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {TechnologiesDeveloped.map((tech, index) => {
            return(
                <SwiperSlide key={tech.id}>
                    <Image src={profilePic} alt="Hero" width={300} />
                </SwiperSlide>
            )
        })
        }
      </Swiper>
    </div>
  );
};

export default Corousal;
