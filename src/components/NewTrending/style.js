import styled from "styled-components";
import { RightOutlined } from "@ant-design/icons";

export const TrendingContainer = styled.div`
  padding-bottom: 80px;
  padding-top: 40px;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #dcdcdc;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 202px;
  }
`;

export const TrendingContain = styled.div`
  width: 1125px;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  align-items: center;
  gap: 55px;
  margin-left: 200px;
  position: relative;
`;

export const TrendingList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const TrendingListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #d4d4d4;
`;

export const TrendingContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Number = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const TrendingContentTxt = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrendingAuth = styled.p`
  font-size: 12px;
  color: #a3a3a3;
  margin-bottom: 0;
  padding-top: 5px;
`;
export const RightOutlinedWrapper = styled(RightOutlined)`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const TrendingHead = styled.h2`
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 0;
  padding-bottom: 10px;
`;

export const ImageLink = styled.a`
  display: block;
`;

export const Image = styled.img`
  width: 75px;
  height: 80px;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  width: 190px;
  right: 200px;
  z-index: 30;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    right: 390px;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  text-align: right;
  position: relative;
  span {
    margin-right: 12px;
  }
`;
export const DropdownToggle = styled.div`
  cursor: pointer;
  display: inline-block;
  user-select: none;
  font-size: 16px;
  color: #333;
  position: absolute;
  right: 200px;
  top: 60px;
  z-index: 20;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    right: 400px;
  }
`;
