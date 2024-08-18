import React from "react";

import {
  WrapperSliderStyle,
  Wrapper,
  TextWrapper,
  ImageWrapper,
  StyledHeartOutlined,
  Title,
  Title1,
  Content,
  ContentHead,
  SectionContent,
  Image1,
  StyledHr,
} from "./style";
import cate01 from "../../asset/new-01.jpg";
import cate02 from "../../asset/new-02.jpg";
import cate03 from "../../asset/new-03.jpg";
import cate04 from "../../asset/download (25).jpeg";
import cate05 from "../../asset/download (31).jpeg";
import cate06 from "../../asset/download (31).jpeg";
import cate07 from "../../asset/download (31).jpeg";
import cate08 from "../../asset/new-04.jpg";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const PrevArrow = React.forwardRef(
  ({ currentSlide, slideCount, ...props }, ref) => (
    <div {...props} ref={ref} className="custom-arrow custom-prev">
      <LeftOutlined style={{ fontSize: "30px", color: "#A9A9A9" }} />
    </div>
  )
);
const NextArrow = React.forwardRef(
  ({ currentSlide, slideCount, ...props }, ref) => (
    <div {...props} ref={ref} className="custom-arrow custom-next">
      <RightOutlined style={{ fontSize: "30px", color: "#A9A9A9" }} />
    </div>
  )
);

const NextComponent = () => {
  const imagesWithLinks = [
    { src: cate01, link: "https://example.com/read/1" },
    { src: cate02, link: "https://example.com/read/2" },
    { src: cate03, link: "https://example.com/read/3" },
    { src: cate04, link: "https://example.com/read/4" },
    { src: cate05, link: "https://example.com/read/5" },
    { src: cate06, link: "https://example.com/read/6" },
    { src: cate07, link: "https://example.com/read/7" },
    { src: cate08, link: "https://example.com/read/8" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 1000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

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

  const getRandomColor = () => {
    return randomColors[Math.floor(Math.random() * randomColors.length)];
  };
  const getrandomTitles = () => {
    return randomTitles[Math.floor(Math.random() * randomTitles.length)];
  };
  const getrandomTitles1 = () => {
    return randomTitles1[Math.floor(Math.random() * randomTitles1.length)];
  };

  return (
    <Wrapper>
      <TextWrapper>New to WEBTOON</TextWrapper>
      <WrapperSliderStyle {...settings}>
        {imagesWithLinks.map((item, index) => {
          const bgColor = getRandomColor();
          const title = getrandomTitles();
          const title1 = getrandomTitles1();

          const customClass = `carousel-item image-${index + 1}`;
          const isSpecialOverlay =
            index === 0 ||
            index === 1 ||
            index === 2 ||
            index === 3 ||
            index === 4 ||
            index === 5 ||
            index === 6 ||
            index === 7;
          return (
            <ImageWrapper key={index} className={customClass}>
              <Title1>{title1}</Title1>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <p className="heart-icon">
                  <StyledHeartOutlined color="#00dc64" />
                  <span className="heart">12.1M</span>
                </p>
                <p className="scan">Up</p>
                <Title color={bgColor} isFourth={index === 3 || index === 7}>
                  {title}
                </Title>
                <Image1
                  src={item.src}
                  alt={`slider-${index}`}
                  preview={false}
                />
                <SectionContent
                  className={`overlay overlay-${index + 1} ${
                    isSpecialOverlay ? "special-overlay" : ""
                  }`}
                  bgColor={bgColor}
                  width={index === 3 ? "435px" : index === 7 ? "435px" : "75%"}
                  height={
                    index === 3 ? "210px" : index === 7 ? "210px" : "210px"
                  }
                >
                  <ContentHead isFourth={index === 3 || index === 7}>
                    <h3>{title1}</h3>
                    <h5>Nuria sanguino</h5>
                  </ContentHead>
                  <StyledHr />
                  <Content>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Content>
                </SectionContent>
              </a>
            </ImageWrapper>
          );
        })}
      </WrapperSliderStyle>
    </Wrapper>
  );
};

export default NextComponent;
