import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const Banner = () => {
  const [images, setImages] = useState(banner1);
  const sliderImages = [banner1, banner2, banner3, banner4];
  const sliderLength = sliderImages.length;
  let i = 0;
  const slider = () => {
    if (i > sliderLength - 1) {
      i = 0;
    }
    setImages(sliderImages[i]);
    i++;
    setTimeout(slider, 3000);
  };

  useEffect(() => {
    window.addEventListener("load", slider);
    return () => {
      window.addEventListener("load", slider);
    };
  });

  return (
    <div className="banner w-full h-screen overflow-hidden relative">
      <div className="slider w-full h-screen absolute top-0 ">
        <img
          style={{ animation: "xoom 3s linear infinite" }}
          className="w-full h-screen"
          src={images}
          alt=""
          //   onLoad={() => slider()}
        />
      </div>
      <div className="overlay w-full h-screen bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] absolute top-0">
        <div className="flex items-center justify-center text-white h-[80%]">
          <div>
            <p className="text-xl">Pathao Food</p>
            <h1 className="text-3xl">Get Your Food in Less Than an Hour</h1>
            <p className="text-xl">
              With Pathao food, get your food delivered to your doorstep within
              an hour!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
