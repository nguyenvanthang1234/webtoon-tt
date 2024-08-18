import styled from "styled-components";
import Slider from "react-slick";

// Styled component cho hình nền
export const BackgroundContainer = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    min-width: 200vw;
  }
`;

// Styled component cho slider và hai ảnh bên cạnh
export const BannerContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
  height: 490px;
`;

// Hoặc, nếu bạn cần thêm các styled components cho các ảnh khác nhau
export const Image1 = styled.img`
  position: relative;
  width: 322px;
  top: 22px;
  right: -992px;
  height: 200px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    right: -1190px;
  }
`;

export const Image2 = styled.img`
  position: relative;
  width: 286px;
  top: 222px;
  right: -706px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    right: -903px;
  }
`;
export const SliderContainer = styled.div`
  width: 940px;
  left: 105px;
  position: absolute;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    left: 300px;
  }
`;

export const WrapperSliderStyle = styled(Slider)`
  position: relative;
  .slick-dots {
    z-index: 50;
    bottom: 50px;
    left: -220px;

    li {
      margin: 0;
    }

    button {
      &::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
`;
