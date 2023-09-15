"use client";
import React from "react";
import Image from "next/image";
import { CorousalImages } from "@/constants";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const Slider = () => {

    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: true,
      };

  return (
    <div className="flex mx-8 my-4">
      <Splide
        aria-label="My Favorite Images"
        className="lg:w-[70%]"
        options={ options }
      >
        {CorousalImages.map((slide, index) => {
          return (
            <SplideSlide key={slide.id}>
              <Image src={slide.image} alt="slider-images" width={30000} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;
