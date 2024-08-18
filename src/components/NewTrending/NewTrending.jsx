import React, { useState, useEffect } from "react";
import hot1 from "../../asset/hot-01.jpg";
import hot2 from "../../asset/hot-02.jpg";
import hot3 from "../../asset/hot-03.jpg";
import hot4 from "../../asset/hot-04.jpg";
import hot5 from "../../asset/hot-05.jpg";
import {
  TrendingContainer,
  TrendingContain,
  TrendingList,
  TrendingListItem,
  TrendingContent,
  Number,
  TrendingContentTxt,
  TrendingAuth,
  TrendingHead,
  ImageLink,
  Image,
  DropdownContainer,
  DropdownItem,
  DropdownToggle,
  RightOutlinedWrapper,
} from "./style";
import { CheckOutlined } from "@ant-design/icons";
const genres = ["ALL", "ACTION", "ROMANCE", "FANTASY", "DRAMA"];

const shuffleArray = (array) => {
  let shuffled = array.map((item) => ({ ...item }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const trendingItems = [
  {
    src: hot1,
    number: "1",
    auth: "Read 1",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum",
    link: "https://example.com/read/1",
  },
  {
    src: hot2,
    number: "2",
    auth: "Read 2",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum",
    link: "https://example.com/read/2",
  },
  {
    src: hot3,
    number: "3",
    auth: "Read 3",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum",
    link: "https://example.com/read/3",
  },
  {
    src: hot4,
    number: "4",
    auth: "Read 4",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum",
    link: "https://example.com/read/4",
  },
  {
    src: hot5,
    number: "5",
    auth: "Read 5",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum",
    link: "https://example.com/read/5",
  },
];

const Trending = () => {
  const [currentGenre, setCurrentGenre] = useState("ALL");
  const [shuffledItems, setShuffledItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    setShuffledItems(shuffleArray(trendingItems));
    setDropdownOpen(false);
  };

  useEffect(() => {
    const shuffled = shuffleArray(trendingItems);
    setShuffledItems(shuffled);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <TrendingContainer>
      <DropdownToggle onClick={toggleDropdown}>
        {currentGenre}
        <CheckOutlined style={{ marginLeft: "8px" }} />
      </DropdownToggle>
      {dropdownOpen && (
        <DropdownContainer>
          {genres.map((genre) => (
            <DropdownItem
              key={genre}
              active={genre === currentGenre}
              onClick={() => handleGenreChange(genre)}
            >
              <span>{genre}</span>
              {currentGenre === genre && (
                <CheckOutlined
                  style={{
                    position: "absolute",
                    right: "-12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#A9A9A9",
                  }}
                />
              )}
            </DropdownItem>
          ))}
        </DropdownContainer>
      )}
      <TrendingContain>
        <TrendingList>
          <TrendingHead>
            New & Trending <RightOutlinedWrapper />
          </TrendingHead>
          {trendingItems.map((item, index) => (
            <TrendingListItem key={index}>
              <ImageLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={item.src} alt={`hot-${item.number}`} />
              </ImageLink>
              <TrendingContent>
                <Number>{item.number}</Number>
                <TrendingContentTxt>
                  <TrendingAuth>{item.auth}</TrendingAuth>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TrendingContentTxt>
              </TrendingContent>
            </TrendingListItem>
          ))}
        </TrendingList>
        <TrendingList>
          <TrendingHead>
            ORIGINALS by Genre <RightOutlinedWrapper />
          </TrendingHead>
          {shuffledItems.map((item, index) => (
            <TrendingListItem key={index}>
              <ImageLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={item.src} alt={`hot-${item.number}`} />
              </ImageLink>
              <TrendingContent>
                <Number>{item.number}</Number>
                <TrendingContentTxt>
                  <TrendingAuth>{item.auth}</TrendingAuth>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TrendingContentTxt>
              </TrendingContent>
            </TrendingListItem>
          ))}
        </TrendingList>
      </TrendingContain>
    </TrendingContainer>
  );
};

export default Trending;
