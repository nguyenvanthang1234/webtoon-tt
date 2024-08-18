import React from "react";
import {
  MainContent,
  Top,
  SectionHead,
  StyledHeartOutlined,
  ContentGenres,
  Title,
} from "./style.js";
import cate01 from "../../asset/anh2 (1).jpg";
import cate02 from "../../asset/anh2 (2).jpg";
import cate03 from "../../asset/anh2 (3).jpg";
import cate04 from "../../asset/anh2 (4).jpg";
import cate05 from "../../asset/anh2 (5).jpg";
import cate06 from "../../asset/anh2 (6).jpg";
import cate07 from "../../asset/anh2 (7).jpg";
import cate08 from "../../asset/anh2 (8).jpg";
import cate09 from "../../asset/anh2 (9).jpg";
import cate10 from "../../asset/anh2 (10).jpg";

const images = [
  { src: cate01, link: "https://example.com/read/1" },
  { src: cate02, link: "https://example.com/read/2" },
  { src: cate03, link: "https://example.com/read/3" },
  { src: cate04, link: "https://example.com/read/4" },
  { src: cate05, link: "https://example.com/read/5" },
  { src: cate06, link: "https://example.com/read/6" },
  { src: cate07, link: "https://example.com/read/7" },
  { src: cate09, link: "https://example.com/read/8" },
  { src: cate10, link: "https://example.com/read/8" },
  { src: cate08, link: "https://example.com/read/8" },
];
const randomColors = [
  "#f87171",
  "#7da8e3",
  "#78d8d8",
  "#fbbf24",
  "#6ee7b7",
  "#f472b6",
  "#b794f4",
];
const randomTitles = [
  "Fantasy",
  "Romance",
  "Action",
  "Comedy",
  "Drama",
  "Adventure",
  "Horror",
  "Sci-Fi",
  "Mystery",
  "Thriller",
];
const randomTitles1 = [
  "Solo Leveling",
  "Lookism",
  "Noblesse",
  "Sweet Home",
  "True Beauty",
  "Dr.Frost",
  "Tower of God ",
  "Suicide Hunter",
  "Villain to Kill",
  "Charming You",
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

const generateTopItems = (count) => {
  const items = Array.from({ length: count }, (_, i) => {
    const randomTitle =
      randomTitles[Math.floor(Math.random() * randomTitles.length)];
    const randomTitle1 =
      randomTitles1[Math.floor(Math.random() * randomTitles1.length)];
    const randomColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];

    return (
      <LinkTopItem key={i} link={images[i % images.length].link}>
        <SectionHead>
          <h3>{randomTitle1}</h3>
          <p className="view2">Yaongyi</p>
          <StyledHeartOutlined color="#00dc64" />
          <p className="view">12.1M</p>
          <Title color={randomColor}>{randomTitle}</Title>
          <img src={images[i % images.length].src} alt="" />
        </SectionHead>
      </LinkTopItem>
    );
  });
  return shuffleArray(items);
};

const contentForDays = generateTopItems(40);

const Genres3 = ({ id }) => {
  return (
    <div id={id}>
      <ContentGenres>Completed Series</ContentGenres>
      <MainContent>
        <Top>{contentForDays}</Top>
      </MainContent>
    </div>
  );
};

export default Genres3;
