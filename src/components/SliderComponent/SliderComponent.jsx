import React from "react";
import { Image } from "antd";
import bannersec1 from "../../asset/banner-sec-1.png";
import bannersec2 from "../../asset/banner-sec-2.png";
import bg from "../../asset/bg.jpg";
import {
  BackgroundContainer,
  BannerContainer,
  SliderContainer,
  WrapperSliderStyle,
  Image1,
  Image2,
} from "./style";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <BackgroundContainer bg={bg}>
      <BannerContainer>
        <SliderContainer>
          <WrapperSliderStyle {...settings}>
            {arrImages.map((image) => {
              return (
                <Image
                  key={image}
                  src={image}
                  alt="slider"
                  preview={false}
                  // width={940}
                  // height={490}
                />
              );
            })}
          </WrapperSliderStyle>
        </SliderContainer>
        <Image1 src={bannersec1} alt="banner-sec-1" />
        <Image2 src={bannersec2} alt="banner-sec-2" />
      </BannerContainer>
    </BackgroundContainer>
  );
};

export default SliderComponent;
