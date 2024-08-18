import React, { useState, useRef, useEffect } from "react";
import { SearchOutlined, ReadOutlined } from "@ant-design/icons";
import {
  HeaderMenu,
  HeaderLeft,
  HeaderLogo,
  HeaderList,
  HeaderLinkSearch,
  HeaderListItem,
  HeaderLink,
  HeaderRight,
  HeaderShop,
  CloseText,
  HeaderBook,
  SearchInput,
  SearchInputContainer,
  SearchOutlinedInput,
} from "./style";
import logo from "../../asset/logo.svg";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const handleClickNavigate = () => {
    navigate("/original");
  };
  const handleClickNavigateHome = () => {
    navigate("/");
  };

  const toggleSearch = (e) => {
    e.preventDefault();
    setSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  return (
    <HeaderMenu>
      <HeaderLeft>
        <HeaderLogo
          src={logo}
          alt="logo"
          onClick={() => handleClickNavigateHome("/")}
        />
        <HeaderList>
          <HeaderListItem onClick={handleClickNavigate}>
            ORIGINAL
          </HeaderListItem>
          <HeaderListItem>GENRES</HeaderListItem>
          <HeaderListItem>POPULAR</HeaderListItem>
          <HeaderListItem>CANVAS</HeaderListItem>
        </HeaderList>
      </HeaderLeft>
      <HeaderRight>
        <HeaderShop>WEBToon Shop</HeaderShop>
        <HeaderBook>
          <ReadOutlined style={{ paddingRight: "5px", fontSize: "20px" }} />
          Creators 101
        </HeaderBook>
        <HeaderLink href="#/" className="publish">
          Publish
        </HeaderLink>
        <HeaderLink href="#/" className="login">
          Log In
        </HeaderLink>

        <SearchInputContainer visible={searchOpen}>
          <SearchInput
            type="text"
            ref={searchInputRef}
            // placeholder="Search by Series Title or Creator..."
            visible={searchOpen}
          />
          <SearchOutlinedInput visible={searchOpen ? true : undefined} />
          <div className="bar">|</div>
          <CloseText onClick={toggleSearch}>Close</CloseText>
        </SearchInputContainer>
        {!searchOpen && (
          <HeaderLinkSearch href="#/" onClick={toggleSearch}>
            <SearchOutlined />
          </HeaderLinkSearch>
        )}
      </HeaderRight>
    </HeaderMenu>
  );
};

export default HeaderComponent;
