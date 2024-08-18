import styled from "styled-components";
import { RightOutlined } from "@ant-design/icons";

// Styled Components
export const FooterContainer = styled.footer`
  background-color: #f4f4f4;

  text-align: center;
  position: relative;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
`;

export const Notice = styled.div`
  margin-bottom: 20px;
  padding-left: 170px;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  line-height: 51px;
  text-align: left;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    padding-left: 350px;
  }

  span:nth-child(1) {
    margin-right: 10px;
    font-size: 17px;
    font-weight: 500;
  }
  span:nth-child(2) {
    font-size: 20px;
    font-weight: 500;
    color: #000;
    position: absolute;
    top: 0px;
  }
  em {
    font-family: "Verdana", sans-serif;
    font-style: normal;
    color: #b1b1b1;
    font-size: 13px;
  }

  a {
    color: #000;
    text-decoration: none;
    margin-right: 16px;
    margin-left: 30px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const DownloadSection = styled.div`
  border-bottom: 1px solid #e5e5e5;

  img {
    width: 150px;
    margin: 0 10px;
    margin-top: 12px;
    margin-bottom: 35px;
  }
  span {
    font-size: 17px;
    font-weight: 500;
    line-height: 31px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  a {
    color: #000;
    margin: 0 15px;
    font-size: 22px;
    border-radius: 50%;
    display: inline-block;
  }
`;

export const Links = styled.div`
  margin-bottom: 20px;

  a:not(:last-child) {
    color: #000;
    margin: 0 15px;
    text-decoration: none;
    font-size: 14px;
    border-right: 0.5px solid #d8bfd8;
    margin: 0;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  color: #888;
`;
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: : #f4f4f4;
  color:#000;
  border: 1px solid lightgrey;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left:10px;
  width:100px;
  white-space:nowrap;


  span {
    margin-left: 28px;
    transform: rotate(0deg);
    transition: transform 0.3s;
    background-color:#f5f5f5;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: -75px;
  left: 10px;
  background-color: #f4f4f4;
  border: 1px solid lightgrey;
  border-radius: 8px;
  width: 120px;
  padding: 3px 0;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
`;

export const DropdownItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#00DC64" : "#838383")};
  position: relative;
`;
export const RightOutlinedWrapper = styled(RightOutlined)`
  font-size: 10px;
  font-weight: bold;
  transform: rotate(90deg) !important;
`;
