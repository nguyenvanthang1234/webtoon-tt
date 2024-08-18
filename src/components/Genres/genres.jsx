import React from "react";
import {
  MainContent,
  Top,
  TopItem,
  SectionHead,
  ContentHead,
  SectionContent,
  Content,
  StyledHeartOutlined,
  ContentGenres,
  RightOutlinedWrapper,
  RightOutlinedWrapper1,
  RightOutlinedWrapper2,
  Title,
  ContainerInfo,
  Informate,
  Horror,
  Text,
  TextLorem,
  StyledHr,
} from "./style.js";
import cate01 from "../../asset/cate-01.jpg";
import cate02 from "../../asset/cate-02.jpg";
import cate03 from "../../asset/cate-03.jpg";
import cate04 from "../../asset/cate-04.jpg";
import cate05 from "../../asset/cate-05.jpg";
import cate06 from "../../asset/cate-06.jpg";
import cate07 from "../../asset/cate-07.jpg";
import cate09 from "../../asset/cate-09.jpg";

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
        <TopItem bg={images[i % images.length].src}>
          <SectionHead>
            <h3>{randomTitle1}</h3>
            <p>
              <StyledHeartOutlined color="#00dc64" />
            </p>
            <p>12.1M</p>
            <p className="scan">Up</p>
            <Title color={randomColor}>{randomTitle}</Title>
          </SectionHead>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>{randomTitle1}</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Content>
          </SectionContent>
        </TopItem>
      </LinkTopItem>
    );
  });
  return shuffleArray(items);
};

const contentForDays = generateTopItems(8);

const Genres = () => {
  return (
    <>
      <ContentGenres>
        GENRES
        <RightOutlinedWrapper />
      </ContentGenres>
      <MainContent>
        <ContainerInfo>
          <Informate>
            <Text>
              Informative <RightOutlinedWrapper1 />
            </Text>
            <TextLorem>Tip that may bring you a better life!</TextLorem>
          </Informate>
          <Horror>
            <Text>
              Horror <RightOutlinedWrapper2 />
            </Text>
            <TextLorem>Do you love being scared?</TextLorem>
          </Horror>
        </ContainerInfo>

        <Top>{contentForDays}</Top>
      </MainContent>
    </>
  );
};

export default Genres;
