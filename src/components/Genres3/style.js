import styled from "styled-components";
import { HeartFilled, RightOutlined } from "@ant-design/icons";

export const MainContent = styled.div`
  background-color: #f4f4f4;
  display: flex;
  padding-top: 20px;
  position: relative;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding-bottom: 50px;
  margin-left: 170px;
  width: 210px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 360px;
  }
`;
export const ContainerInfo = styled.div`
  position: absolute;
  left: 205px;
`;

export const TopItem = styled.div`
  padding: 10px;
  cursor: pointer;
  position: relative;
  width: 156px;
  height: 156px;
  background: ${(props) => `url(${props.bg}) no-repeat center center/cover`};
`;

export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  background-color: rgb(255, 255, 255);
  position: relative;
  padding-left: 5px;
  width: 228px;
  height: 145px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    white-space: nowrap;
    position: absolute;
    top: 22px;
    left: 10px;
  }
  .view2 {
    position: relative;
    top: 44px;
    left: 8px;
    color: #000;
  }
  .view {
    position: relative;
    top: 100px;
    left: -20px;
    color: #00dc64;
  }
  .scan {
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
    position: absolute;
    top: 62px;
  }
  img {
    width: 138px;
    height: 145px;
  }
`;

// Header for content within each item
export const ContentHead = styled.div`
  position: absolute;
  top: 10px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 18px;
    color: #fff;
  }
  h5 {
    position: absolute;
    top: 30px;
    font-size: 12px;
    padding-bottom: 13px;
    white-space: nowrap;
    color: #fff;
  }
`;

export const StyledHr = styled.hr`
  width: 0.5cm; /* Chiều dài của đường kẻ */
  border: 1px solid white; /* Độ dày và màu của đường kẻ */
  margin: 10px;
  position: absolute;
  top: 60px;
  left: 5px;
`;

// Content text for each item
export const Content = styled.p`
  padding-right: 12px;
  font-size: 12px;
  position: absolute;
  top: 80px;
`;

// Styled heart icon
export const StyledHeartOutlined = styled(HeartFilled)`
  color: ${(props) => props.color || "#00dc64"};
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 14px;
  position: absolute;
  top: 105px;
  left: 15px;
  color: #00dc64;
`;

export const ContentGenres = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 0;
  padding-left: 170px;
  background-color: #f4f4f4;
  padding-top: 35px;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    padding-left: 360px;
  }
`;
export const RightOutlinedWrapper = styled(RightOutlined)`
  margin-left: 10px;
  font-size: 16px;
  position: relative;
  top: -2px;
`;
export const RightOutlinedWrapper1 = styled(RightOutlined)`
  margin-left: 40px;
  font-size: 16px;
  font-weight: bold;
`;
export const RightOutlinedWrapper2 = styled(RightOutlined)`
  margin-left: 90px;
  font-size: 16px;
  font-weight: bold;
`;

export const Title = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  color: blue;
  color: ${(props) => props.color};
`;

export const Informate = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  background-color: #ff76cd;
  color: #fff;
`;

export const Horror = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  background-color: #be0000;
  top: 225px;
`;
export const Text = styled.div`
  color: #fff;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 22px;
  font-weight: 500;
`;
export const TextLorem = styled.p`
  text-transform: uppercase;
  color: #fff;
  padding-top: 90px;
  padding-left: 20px;
  font-size: 13px;
  font-weight: 500;
`;
