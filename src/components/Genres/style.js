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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding-bottom: 50px;
  margin-left: 430px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 626px;
  }
`;
export const ContainerInfo = styled.div`
  position: absolute;
  left: 205px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    left: 402px;
  }
`;

export const SectionContent = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  position: absolute;
  left: 0;
  top: 0;
  width: 210px;
  height: 210px;
  background-color: ${(props) => props.bgColor};
  padding: 0 15px;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

export const TopItem = styled.div`
  padding: 10px;
  cursor: pointer;
  position: relative;
  width: 210px;
  height: 210px;
  background: ${(props) => `url(${props.bg}) no-repeat center center/cover`};

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 5px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }
  p:nth-child(3) {
    font-size: 14px;
    position: absolute;
    top: 37px;
    left: 25px;
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
  font-size: 15px;
  color: ${(props) => props.color || "#00dc64"};
  cursor: pointer;
  transition: color 0.3s ease;
`;

export const ContentGenres = styled.p`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0;
  background-color: #f4f4f4;
  padding-top: 35px;
  @media (max-width: 960px) {
    min-width: 200vw;
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
  top: 160px;
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
