import styled from "styled-components";
import { RightOutlined } from "@ant-design/icons";

// Main content area
export const MainContent = styled.div`
  padding-bottom: 25px;
  padding-top: 25px;
  display: flex;
  flex-direction: row;
`;

// Grid layout for displaying image items
export const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 40px;
  margin-right: 120px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 50px;
  }
`;

export const SectionContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 163px;
  height: 161px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.5;
  visibility: visible;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  p {
    margin: 0;
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 60px;
    font-size: 20px;
    font-weight: 500;
    font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
  }
  span {
    font-size: 16px;
  }
`;

// Individual item with background image
export const TopItem = styled.div`
  cursor: pointer;
  position: relative;
  width: 163px;
  height: 161px;
  background: ${(props) => `url(${props.bg}) no-repeat center center/cover`};
  margin-bottom: 20px;
  margin-right: 20px;
  transition: opacity 0.3s ease, filter 0.3s ease;

  &:hover ${SectionContent} {
    opacity: 0;
    visibility: hidden;
  }
  span {
    position: absolute;
    top: 120px;
    left: 20px;
    color: #fff;
    font-size: 16px;
  }
`;

export const ContentGenres = styled.div`
  padding-left: 158px;
  padding-top: 30px;
  margin: 0;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    padding-left: 350px;
  }

  h2 {
    color: #00dc64;
    font-family: "hind", "simhei", verdana, Helvetica, sans-serif !important;
    font-weight: bold;
    font-size: 40px;
    height: auto;
    white-space: wrap;
    margin-bottom: 0;
  }
  h2:nth-child(2) {
    position: relative;
    top: -20px;
    margin-bottom: 0;
  }

  .span p {
    margin: 0;
  }
`;

export const ButtonFind = styled.div`
  font-weight: 500;
  padding: 10px;
  width: 170px;
  background-color: #00dc64;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  margin-top: 20px;
`;
export const RightOutlinedWrapper = styled(RightOutlined)`
  font-size: 12px;
  font-weight: bold;
`;
