import styled from "styled-components";
import { HeartFilled, PauseCircleOutlined } from "@ant-design/icons";
export const Week = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const WeekList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 auto;
  width: 820px;
  margin-left: 350px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 540px;
  }
`;

export const WeekItem = styled.li`
  padding: 18px 42px;
  font-size: 16px;
  font-weight: bold;
  list-style: none;
  cursor: pointer;
  background-color: transparent;
  color: inherit;

  &.active {
    background-color: var(--primary-color);
    color: #fff;
  }
`;

export const MainContent = styled.div`
  background-color: #f4f4f4;
  margin-top: 0;
  padding-bottom: 40px;
  border-bottom: 1px solid #dcdcdc;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h7 h8 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;

export const CardList1 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h1 h2 h3 h4"
    "h5 h6 h7 h8 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList2 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h4"
    "h5 h6 h7 h8 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList3 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h6 h7 h8 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList4 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h8 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList6 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h3 h4"
    "h5 h6 h7 h8 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList5 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h9";
  list-style: none;
  margin-left: 205px;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;

export const SectionContent = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  position: absolute;
  width: 210px;
  height: 210px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  padding-left: 20px;
  color: #fff;
  z-index: 10;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* Số dòng tối đa */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const ContentHead = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
    margin: 0;
    padding: 0;
    color: #fff;
  }
  h5 {
    color: #fff;
  }
`;

export const Content = styled.div`
  padding: 12px;
  font-size: 12px;
  position: absolute;
  top: 80px;
  left: 10px;
`;
export const GradeArea = styled.div`
  position: absolute;
  top: 30px;
  left: 5px;

  .scan {
    position: absolute;
    top: 40px;
    left: 15px;
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
`;
export const Subj = styled.h3`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
`;
export const IconArea = styled.p`
  position: absolute;
  bottom: 0;
  left: 16px;
  color: ${(props) => props.Color};
`;
export const Content1 = styled.div`
  position: absolute;
  top: 50px;
  left: 20px;
  color: #fff;
  font-size: 13px;
`;

export const CardItem = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;
export const CardItem1 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;
export const CardItem2 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;
export const CardItem3 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;
export const CardItem4 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }
  &:nth-child(9) {
    grid-area: h9;
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;
export const CardItem5 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;
export const CardItem6 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
    grid-column: span 2;
    &:hover ${SectionContent} {
      opacity: 1;
      visibility: visible;
      width: 435px;
    }
    ${SectionContent} p {
      margin-bottom: 25px;
    }
    ${GradeArea} {
      position: absolute;
      top: 90px;
    }
    ${Subj} {
      color: #fff;
    }

    ${IconArea} {
      position: absolute;
      bottom: 5px;
    }
    ${Content1} {
      position: absolute;
      top: 40px;
    }
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }

  &:hover ${SectionContent} {
    opacity: 1;
    visibility: visible;
  }
`;

export const CardFront = styled.div`
  position: relative;
  color: #00dc64;
  float: left;
  clear: both;
  margin: 0;
  padding: 0;
`;

export const Info = styled.div``;

export const GradeEm = styled.p`
  position: absolute;
  top: 9px;
  left: 35px;
  font-family: verdana !important;
`;

export const StyledHeartOutlined = styled(HeartFilled)`
  font-size: 15px;
  position: absolute;
  z-index: 10;
  top: 12px;
  left: 16px;
`;
export const StylePauseCircleOutlined = styled(PauseCircleOutlined)`
  font-size: 30px;
  position: absolute;
  z-index: 10;
  top: 40px;
  left: 15px;
  background-color: #a9a9a9;
  border-radius: 80px;
  color: #fff;
`;

export const StyledHr = styled.hr`
  width: 0.5cm; /* Chiều dài của đường kẻ */
  border: 1px solid white; /* Độ dày và màu của đường kẻ */
  margin: 10px;
  position: absolute;
  left: 10px;
`;

export const Top = styled.div`
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 195px;
  }
`;
