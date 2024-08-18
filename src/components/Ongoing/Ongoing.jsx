import React, { useState } from "react";

import {
  Container,
  DayColumn,
  DayTitle,
  SeriesItem,
  Title,
  Title1,
  Wrapper,
  Text,
  Text1,
  DropdownContainer,
  DropdownItem,
  DropdownToggle,
  Wrapper2,
  StyledHeartOutlined,
  Text3,
} from "./style";
import { CheckOutlined } from "@ant-design/icons";
import Genres3 from "../Genres3/genres";

import myGiantNerdBoyfriend from "../../asset/anh1.jpg";
import towerOfGod from "../../asset/anh2.jpg";
import subZero from "../../asset/anh3.jpg";
import series4 from "../../asset/anh4.jpg";
import series5 from "../../asset/anh5.jpg";
import anh10 from "../../asset/anh10 (1).jpg";
import anh11 from "../../asset/anh10 (2).jpg";
import anh12 from "../../asset/anh10 (3).jpg";
import anh13 from "../../asset/anh10 (4).jpg";
import anh14 from "../../asset/anh10 (5).jpg";
import anh15 from "../../asset/anh10 (6).jpg";
import anh16 from "../../asset/anh10 (7).jpg";
import anh17 from "../../asset/anh10 (8).jpg";
import anh18 from "../../asset/anh10 (9).jpg";
import anh19 from "../../asset/anh10 (10).jpg";
import anh20 from "../../asset/anh10 (11).jpg";
import anh21 from "../../asset/anh10 (12).jpg";
import anh22 from "../../asset/anh10 (13).jpg";
import anh23 from "../../asset/anh10 (14).jpg";
import anh24 from "../../asset/anh10 (15).jpg";
import anh25 from "../../asset/anh10 (16).jpg";
import anh26 from "../../asset/anh10 (17).jpg";
import anh27 from "../../asset/anh10 (18).jpg";
import anh28 from "../../asset/anh10 (19).jpg";
import anh29 from "../../asset/anh10 (20).jpg";
import anh30 from "../../asset/anh10 (21).jpg";
import anh31 from "../../asset/anh10 (22).jpg";
import anh32 from "../../asset/anh10 (23).jpg";
import anh33 from "../../asset/anh10 (24).jpg";
import anh35 from "../../asset/anh10 (25).jpg";

const initialTitles = [
  "Solo Leveling",
  "Lookism",
  "Noblesse",
  "Sweet Home",
  "True Beauty",
  "Dr.Frost",
  "Tower of God ",
  "SSS-Class Suicide Hunter",
  "Villain to Kill",
  "Charming You",
];

const initialTitles1 = [
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

const genres = ["by Popularity", "by Likes", "by Date"];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const WeekSeries = () => {
  const [selectedDay, setSelectedDay] = useState(3);
  const [currentGenre, setCurrentGenre] = useState("by Popularity");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ongoing");
  const [seriesColors, setSeriesColors] = useState({});

  const getSeriesColor = (index) => {
    if (seriesColors[index]) {
      return seriesColors[index];
    }

    const newColor = getRandomColor();
    setSeriesColors((prev) => ({
      ...prev,
      [index]: newColor,
    }));
    return newColor;
  };

  const [shuffledDays] = useState(() => {
    return [
      {
        name: "MON",
        series: [myGiantNerdBoyfriend, towerOfGod, subZero, series4, series5],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
      {
        name: "TUE",
        series: [anh10, anh12, anh11, anh13, anh14],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
      {
        name: "WED",
        series: [anh15, anh16, anh17, anh18, anh19, anh20],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
      {
        name: "THU",
        series: [anh21, anh22, anh23, anh24, anh25, anh26, anh27, anh28],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
      {
        name: "FRI",
        series: [anh29, anh30, anh31, anh32, anh33],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
      {
        name: "SAT",
        series: [series4, anh35, series4, series5, series4],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
      {
        name: "SUN",
        series: [series4, series5, series4, series5, series4],
        titles: shuffleArray([...initialTitles]),
        titles1: shuffleArray([...initialTitles1]),
      },
    ];
  });

  const handleScroll = (tab) => {
    setActiveTab(tab);

    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Wrapper>
        <Text
          href="#ongoing"
          className={activeTab === "ongoing" ? "active" : "inactive"}
          onClick={() => handleScroll("ongoing")}
        >
          ONGOING
        </Text>
        <Text1
          href="#completed"
          className={activeTab === "completed" ? "active" : "inactive"}
          onClick={() => handleScroll("completed")}
        >
          COMPLETED
        </Text1>
      </Wrapper>
      <Wrapper2>
        <Text3>Ongoing Series</Text3>
      </Wrapper2>

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
                    right: "10px",
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

      <Container id="ongoing">
        {shuffledDays.map((day, index) => (
          <DayColumn
            key={day.name}
            isSelected={selectedDay === index}
            onClick={() => setSelectedDay(index)}
          >
            <DayTitle isSelected={selectedDay === index}>{day.name}</DayTitle>
            {day.series.map((seriesImage, idx) => (
              <SeriesItem
                key={idx}
                isSelected={selectedDay === index}
                bg={seriesImage}
              >
                <Title>{day.titles[idx % day.titles.length]}</Title>
                <Title1 color={getSeriesColor(idx)}>
                  {day.titles1[idx % day.titles1.length]}
                </Title1>
                <p className="hello">EUNHI</p>
                <p className="scan">UP</p>
                <p>
                  <StyledHeartOutlined color="#00dc64" />
                </p>
                <p className="view">12.1M</p>
              </SeriesItem>
            ))}
          </DayColumn>
        ))}
      </Container>

      <Genres3 id="completed" />
    </>
  );
};

export default WeekSeries;
