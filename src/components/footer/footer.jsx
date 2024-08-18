import gg from "../../asset/appstore.png";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import {
  FooterContainer,
  Notice,
  DownloadSection,
  SocialIcons,
  Links,
  Copyright,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  RightOutlinedWrapper,
} from "./style";
import { useState } from "react";
const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <FooterContainer>
      <Notice>
        <span>Notice</span>
        <span>&gt;</span>
        <a href="#/">Introducing Creator Feed</a>
        <em>Jul 18, 2024</em>
      </Notice>
      <DownloadSection>
        <span>Download WEBTOON now!</span>
        <div>
          <a href="#/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </a>
          <a href="#/">
            <img src={gg} alt="App Store" />
          </a>
        </div>
      </DownloadSection>
      <SocialIcons>
        <a href="#/">
          <FacebookFilled />
        </a>
        <a href="#/">
          <InstagramOutlined />
        </a>
        <a href="#/">
          <TwitterOutlined />
        </a>
        <a href="#/">
          <YoutubeOutlined />
        </a>
      </SocialIcons>
      <Links>
        <a href="#/">About</a>
        <a href="#/">Feedback</a>
        <a href="#/">Help</a>
        <a href="#/">Terms</a>
        <a href="#/">Privacy</a>
        <a href="#/">Advertise</a>
        <a href="#/">Contact</a>
        <a href="#/">
          <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
              {selectedLanguage}
              <RightOutlinedWrapper />
            </DropdownButton>
            {isOpen && (
              <DropdownMenu>
                {[
                  "English",
                  "ภาษาไทย",
                  "Indonesia",
                  "Español",
                  "Français",
                  "Deutsch",
                ].map((lang) => (
                  <DropdownItem
                    key={lang}
                    onClick={() => selectLanguage(lang)}
                    isSelected={selectedLanguage === lang}
                  >
                    <span>{lang}</span>
                    {selectedLanguage === lang && (
                      <CheckOutlined
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#00DC64",
                        }}
                      />
                    )}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </a>
      </Links>
      <Copyright>© NAVER WEBTOON Ltd.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
