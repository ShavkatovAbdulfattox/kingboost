import React from "react";
import Container from "../Container/Container";
import {
  ChevronUp,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-feather";
import styled from "styled-components";
import { COLORS } from "../../constants";
import logo from "../../assets/Header/Logo.png";
 
const icon = [<Instagram />, <Twitter />, <Youtube />, <Linkedin />];
const links = [
  {
    title: "TOP Games",
    links: ["World of Warcraft", "Genshin Impact", "Destiny 2", "Apex Legends"],
  },
  {
    title: "SERVICE",
    links: ["About us", "Reviews", "Contacts", "Articles", "Work with us"],
  },
  {
    title: "DOCUMENTS",
    links: [
      "Terms and Conditions",
      "Privacy policy",
      "Refund policy",
      "Cookies policy",
      "Credential on File Agreement",
    ],
  },
];
const images = [
  {
    img: "image/visa.png",
  },
  {
    img: "image/master.png",
  },
  {
    img: "image/paypal.png",
  },
  {
    img: "image/skrill.png",
  },
  {
    img: "image/crypto.png",
  },
  {
    img: "image/paysafe.png",
  },
  {
    img: "image/bank.png",
  },
];
function Footer() {
  const backToTop = (e) => {
    // console.log(e.currentTarget);
    const nav = document.getElementById("nav");
    nav.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper>
      <BackToTop onClick={(e) => backToTop(e)}>
        <ChevronUp />
        <h2>Back to up</h2>
      </BackToTop>
      <hr />
      <Container>
        {" "}
        <FooterNav>
          {images.map(({ img }, i) => {
            return <Image src={img} key={i}></Image>;
          })}
        </FooterNav>
        <hr />
        <FooterContent>
          <Title>
            <img src={logo} alt="logo-img"></img>
            <p>
              With our PROs, it became POSSIBLE. Don't spend your precious time
              and nerves on routine — GET cheap and hassle-free boost NOW!
            </p>
          </Title>{" "}
          <FooterItem>
            {links.map(({ title, links }, i) => {
              return (
                <FooterLinks key={i}>
                  <h2>{title}</h2>
                  {links.map((item, i) => {
                    return (
                      <li key={i}>
                        <a href="#!">{item}</a>
                      </li>
                    );
                  })}
                </FooterLinks>
              );
            })}{" "}
          </FooterItem>
        </FooterContent>
        <hr />
        <FooterBottom>
          <h2>Kingboost 2022 © All right reserved</h2>
          <p>
            All included here mentioned brand names are registered and property
            of the respective companies
          </p>

          <Icons>
            {icon.map((icon, i) => {
              return <Icon key={i}>{icon}</Icon>;
            })}
          </Icons>
        </FooterBottom>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${COLORS.gray.darkLight};
  color: ${COLORS.gray.new};
  padding-bottom: 2rem;
  & hr {
    border: 1px solid #313132;
    margin: 0;
    margin-bottom: 3rem;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    display: flex;
    &::after {
      content: "";
      display: block;
      border: 1px solid #313132;
      margin-left: 2rem;
    }
  }
`;
const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;
const Icon = styled.div`
  cursor: pointer;
  color: ${COLORS.white};
  background-color: #313132;
  border-radius: 0.5em;
  padding: 8px;
  line-height: 0;
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.5rem;
`;
const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 74px;
  & h2 {
    color: ${COLORS.white};
    margin-bottom: 1rem;
  }
`;
const Title = styled.div`
  flex-basis: 20rem;
  & p {
    margin-top: 2rem;
  }
`;
const FooterLinks = styled.ul`
  & li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
  & a {
    color: ${COLORS.gray.new};
  }
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;
const Image = styled.img`
  filter: grayscale(1);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: grayscale(0);
  }
`;
const BackToTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #232324;
  border-radius: 32px 32px 0px 0px;
  color: ${COLORS.gray.new};
  gap: 1rem;
  padding: 1rem 0;
  cursor: pointer;
`;

export default Footer;
