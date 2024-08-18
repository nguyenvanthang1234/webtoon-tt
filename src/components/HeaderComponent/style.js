import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
export const HeaderMenu = styled.div`
  padding: 10px 48px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: -20px;
  @media screen and (min-width: 1537px) and (max-width: 1960px) {
    margin-left: 110px;
  }
`;

export const HeaderLogo = styled.img`
  width: 80px;
  cursor: pointer;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const HeaderListItem = styled.li`
  cursor: pointer;
  display: block;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;

  &:hover {
    color: #16e717;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 9px;
  position: static;
  @media (max-width: 960px) {
    margin-left: 450px;
  }
`;

export const HeaderShop = styled.h2`
  font-size: 18px;
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: bold;
  text-wrap: nowrap;
`;

export const HeaderBook = styled.h3`
  font-size: 18px;
  font-weight: 500;
  text-wrap: nowrap;

  &:hover {
    color: #16e717;
    cursor: pointer;
  }
`;

export const HeaderLink = styled.a`
  padding: 5px 24px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 500;
  width: 104px;
  margin-bottom: 15px;
  text-align: center;

  &.publish {
    background-color: #27272a;
    color: #fff;
  }

  &.login {
    border: 1px solid #ccdede;
    color: #838383;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  display: ${(props) => (props.visible ? "block" : "none")};
  .bar {
    position: absolute;
    top: -18px;
    right: 80px;
    display: ${(props) => (props.visible ? "block" : "none")};
    color: #d8bfd8;
  }
`;
export const SearchOutlinedInput = styled(SearchOutlined)`
  position: absolute;
  top: -12px;
  right: 100px;
  display: ${(props) => (props.visible ? "block" : "none")};
  color: #d8bfd8;
`;

export const SearchInput = styled.input`
  width: 310px;
  text-indent: 15px;
  padding: 5px;
  border-radius: 20px;
  outline: none;
  border: 1px solid gray;
  position: absolute;
  top: -7px;
  left: -325px;
  transform: translateY(-50%);
  transition: left 0.3s ease, visibility 0.3s ease, opacity 0.3s ease;
  background-color: rgb(255, 255, 255);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
`;

export const HeaderLinkSearch = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 15px;
  position: relative;
  color: #ccc;

  &:hover {
    background-color: #f0f0f0;
    color: #ccc;
  }
`;

export const CloseText = styled.span`
  color: #ccc;
  font-size: 12px;
  font-weight: 500;
  padding-right: 30px;
  display: inline;
  position: absolute;
  top: -15px;
  right: 5px;
  cursor: pointer;
`;
