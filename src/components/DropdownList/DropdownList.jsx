import React, { useState } from "react";
import cate01 from "../../asset/cate-01.jpg";
import cate02 from "../../asset/cate-02.jpg";
import cate03 from "../../asset/cate-03.jpg";
import cate04 from "../../asset/cate-04.jpg";
import cate05 from "../../asset/cate-05.jpg";
import cate06 from "../../asset/cate-06.jpg";
import cate08 from "../../asset/anh50.jpg";
import cate09 from "../../asset/download (25).jpeg";
import cate10 from "../../asset/cate-09.jpg";
import cate11 from "../../asset/anh3 (1).jpg";
import cate12 from "../../asset/anh3 (2).jpg";
import cate13 from "../../asset/anh3 (3).jpg";
import cate14 from "../../asset/anh3 (4).jpg";
import {
  Week,
  WeekItem,
  WeekList,
  CardFront,
  CardItem,
  CardList,
  Info,
  GradeArea,
  GradeEm,
  Subj,
  IconArea,
  MainContent,
  Top,
  StyledHeartOutlined,
  StylePauseCircleOutlined,
  SectionContent,
  Content,
  ContentHead,
  StyledHr,
  Content1,
  CardList1,
  CardItem1,
  CardList2,
  CardItem2,
  CardItem3,
  CardList3,
  CardItem4,
  CardList4,
  CardItem5,
  CardList5,
  CardItem6,
  CardList6,
} from "./style";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const randomColors = [
  "#f87171",
  "#7da8e3",
  "#78d8d8",
  "#fbbf24",
  "#6ee7b7",
  "#f472b6",
  "#b794f4",
];

const randomColor =
  randomColors[Math.floor(Math.random() * randomColors.length)];

const contentForDays = {
  MON: [
    <CardList key="1">
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate08} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem>
    </CardList>,
  ],
  TUE: [
    <CardList1 key="2">
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate09} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem1>
    </CardList1>,
  ],
  WED: [
    <CardList2 key="3">
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate10} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem2>
    </CardList2>,
  ],
  THU: [
    <CardList3 key="4">
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate11} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem3>
    </CardList3>,
  ],
  FRI: [
    <CardList4 key="5">
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate12} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem4>
    </CardList4>,
  ],
  SAT: [
    <CardList5 key="6">
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate13} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem5>
    </CardList5>,
  ],
  SUN: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
              <IconArea style={{ color: "#f87171" }}>Fantasy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f87171" }}>
            <ContentHead>
              <h3>Solo Leveling</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#7da8e3" }}>Romance</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#7da8e3" }}>
            <ContentHead>
              <h3>Noblesse</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <Content1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Content1>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#78d8d8" }}> Action</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#78d8d8" }}>
            <ContentHead>
              <h3>Sweet Home</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#fbbf24" }}>Comedy</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#fbbf24" }}>
            <ContentHead>
              <h3>True Beauty</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#6ee7b7" }}>Drama</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#6ee7b7" }}>
            <ContentHead>
              <h3>Dr.Frost</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#f472b6" }}>Adventure</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#f472b6" }}>
            <ContentHead>
              <h3>Tower of God </h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea Color={randomColor}>Horror</IconArea>
            </Info>
          </CardFront>
          <SectionContent bgColor={randomColor}>
            <ContentHead>
              <h3>Suicide Hunter</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#b794f4" }}>Charming You</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#b794f4" }}>
            <ContentHead>
              <h3>Charming You</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
              <IconArea style={{ color: "#9932CC" }}>Mystery</IconArea>
            </Info>
          </CardFront>
          <SectionContent style={{ backgroundColor: "#9932CC" }}>
            <ContentHead>
              <h3>Villain to Kill</h3>
              <h5>Nuria sanguino</h5>
            </ContentHead>
            <StyledHr />
            <Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </Content>
          </SectionContent>
        </a>
      </CardItem6>
    </CardList6>,
  ],
};
const WeekSlider = () => {
  const [activeDay, setActiveDay] = useState("SUN");

  return (
    <div>
      <Week>
        <WeekList>
          {daysOfWeek.map((day) => (
            <WeekItem
              key={day}
              className={day === activeDay ? "active" : ""}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </WeekItem>
          ))}
        </WeekList>
      </Week>
      <MainContent>
        <Top>
          {contentForDays[activeDay].map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </Top>
      </MainContent>
    </div>
  );
};

export default WeekSlider;
