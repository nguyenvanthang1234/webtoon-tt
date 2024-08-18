import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

import banner1 from "../../asset/1 (1).png";
import banner2 from "../../asset/1 (2).png";
import banner3 from "../../asset/1 (3).png";
import banner4 from "../../asset/1 (4).png";
import banner5 from "../../asset/1 (5).png";
import banner6 from "../../asset/1 (6).png";
import banner7 from "../../asset/1 (7).png";
import banner8 from "../../asset/1 (8).png";
import banner9 from "../../asset/1 (9).png";
import banner10 from "../../asset/1 (10).png";
import banner11 from "../../asset/1 (11).png";
import banner12 from "../../asset/1 (12).png";

import DropdownList from "../../components/DropdownList/DropdownList";
import NextComponent from "../../components/NextComponent/NextComponent";
import GenreSection from "../../components/Genres/genres";
import GenreSection2 from "../../components/Genres2/genres";
import Trending from "../../components/NewTrending/NewTrending";
import Footer from "../../components/footer/footer";
const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <SliderComponent
        arrImages={[
          banner1,
          banner2,
          banner3,
          banner4,
          banner5,
          banner6,
          banner7,
          banner8,
          banner9,
          banner10,
          banner11,
          banner12,
        ]}
      />
      <DropdownList />
      <NextComponent />
      <GenreSection />
      <Trending />
      <GenreSection2 />
      <Footer />
    </div>
  );
};

export default HomePage;
