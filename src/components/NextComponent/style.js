import styled from "styled-components";
import Slider from "react-slick";
import { Image } from "antd";
import { HeartFilled } from "@ant-design/icons";

export const WrapperSliderStyle = styled(Slider)`
  width: 1120px;
  @media (max-width: 960px) {
    margin-left: 200px;
  }
  margin: 0 auto;
  box-sizing: border-box;
  & .custom-arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    cursor: pointer;
    &.custom-prev {
      font-size: 10px;
      left: -5%;
    }

    &.custom-next {
      right: -5%;
    }
  }
  .slick-dots {
    z-index: 50;
    bottom: -5px !important;

    li {
      margin: 0;
      button {
        &::before {
          content: "";
          display: block;
          margin-top: 20px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: black;
        }
      }
    }
  }
  .carousel-item.image-1 {
  }

  .carousel-item.image-2 {
    position: relative;
    right: 55px;
  }

  .carousel-item.image-3 {
    position: relative;
    right: 110px;
  }

  .carousel-item.image-4 {
    position: relative;
    right: 165px;
    min-width: 455px;
    height: 210px;
    h1 {
      color: #fff;
    }
  }

  .carousel-item.image-5 {
  }

  .carousel-item.image-6 {
    position: relative;
    right: 55px;
  }

  .carousel-item.image-7 {
    position: relative;
    right: 110px;
  }

  .carousel-item.image-8 {
    position: relative;
    right: 165px;
    min-width: 455px;
    height: 210px;
    h1 {
      color: #fff;
    }
  }
`;

export const Wrapper = styled.div`
  background-color: #f4f4f4;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 50px;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
`;

export const TextWrapper = styled.h1`
  font-size: 20px;
  margin-left: 660px;
  padding-top: 40px;
  white-space: nowrap;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 850px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 10px;
  &:hover .overlay {
    display: flex;
    visibility: visible;
    opacity: 1;
  }
  .scan {
    position: absolute;
    top: 80px;
    left: 30px;
    z-index: 10;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00dc64;
    color: #f0ffff;
  }
  .heart-icon {
    position: absolute;
    z-index: 10;
    top: 60px;
    left: 10px;
    .heart {
      font-family: verdana !important;
      color: #00dc64;
      position: absolute;
      left: 40px;
      top: -14px;
    }
  }
`;

export const SectionContent = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  position: absolute;
  left: 10;
  top: 10px;
  width: ${(props) => props.width || "75%"};
  height: ${(props) => props.height || "210px"};
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  z-index: 11;
`;

export const ContentHead = styled.div`
  position: relative;
  white-space: nowrap;

  ${(props) =>
    props.isFourth &&
    `
    h3{
    margin-bottom:46px
    
    }
    `}

  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    padding-bottom: 50px;
    position: relative;
    top: 4px;
    left: 20px;
    color: #fff;
  }
  h5 {
    position: absolute;
    top: 35px;
    left: 20px;
    color: #fff;
  }
`;

export const Content = styled.p`
  margin-top: 12px;
  padding: 16px;
  font-size: 12px;
`;

export const StyledHr = styled.hr`
  width: 0.5cm;
  border: 1px solid white;
  margin-left: 19px;
  position: absolute;
  top: 80px;
`;

export const StyledHeartOutlined = styled(HeartFilled)`
  font-size: 15px;
  color: ${(props) => props.color || "#00dc64"};
  cursor: pointer;
  transition: color 0.3s ease;
  position: absolute;
  z-index: 10;
  top: -10px;
  left: 20px;
`;

export const Title = styled.p`
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: ${(props) => props.color};
  z-index: 11;
  ${(props) =>
    props.isFourth &&
    `
    bottom:0px
    `}
`;
export const Title1 = styled.h1`
  position: absolute;
  top: 19px;
  left: 30px;
  z-index: 11;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Image1 = styled(Image)`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;
