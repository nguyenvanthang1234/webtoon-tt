import React from "react";
import {
  MainContent,
  Top,
  TopItem,
  ContentGenres,
  ButtonFind,
  SectionContent,
  RightOutlinedWrapper,
} from "./style";
import cate01 from "../../asset/anh1.jpg";
import cate02 from "../../asset/anh2.jpg";
import cate03 from "../../asset/anh3.jpg";
import cate04 from "../../asset/anh4.jpg";
import cate05 from "../../asset/anh5.jpg";
import cate06 from "../../asset/anh6.jpg";
import cate07 from "../../asset/anh8.jpg";
import cate09 from "../../asset/anh9.jpg";

const images = [
  { src: cate01, link: "https://example.com/read/1" },
  { src: cate02, link: "https://example.com/read/2" },
  { src: cate03, link: "https://example.com/read/3" },
  { src: cate04, link: "https://example.com/read/4" },
  { src: cate05, link: "https://example.com/read/5" },
  { src: cate06, link: "https://example.com/read/6" },
  { src: cate07, link: "https://example.com/read/7" },
  { src: cate09, link: "https://example.com/read/8" },
];

// Helper function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Thành phần LinkTopItem
const LinkTopItem = ({ link, children }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const generateTopItems2 = (count) => {
  const items = Array.from({ length: count }, (_, i) => (
    <LinkTopItem key={i} link={images[i % images.length].link}>
      <TopItem bg={images[i % images.length].src}>
        <SectionContent>
          <p>Wintapo for item {i + 1}</p>
          <span>Arnichii</span>
        </SectionContent>
      </TopItem>
    </LinkTopItem>
  ));
  return shuffleArray(items);
};

const contentForDays = generateTopItems2(10);

const Genres2 = () => {
  return (
    <MainContent>
      <ContentGenres>
        <h2>WEBTOON</h2>
        <h2>CANVAS</h2>
        <div className="span">
          <p>Have a story to tell?</p>
          <p>Share it on WEBTOON CANVAS.</p>
          <p>Find everything you need to get it published.</p>
        </div>

        <ButtonFind>
          Find out more <RightOutlinedWrapper />
        </ButtonFind>
      </ContentGenres>
      <Top>{contentForDays}</Top>
    </MainContent>
  );
};

export default Genres2;
