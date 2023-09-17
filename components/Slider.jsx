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
    <div className="md:mx-8 mx-2 my-4 lg:w-[80%] border-2">
      <Splide
        aria-label="My Favorite Images"
        className="lg:w-full"
        options={ options }
      >
        {CorousalImages.map((slide, index) => {
          return (
            <SplideSlide key={slide.id}>
              <Image src={slide.image} alt="slider-images" width={30000} priority={true} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;
