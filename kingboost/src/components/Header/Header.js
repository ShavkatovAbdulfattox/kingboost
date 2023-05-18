import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
// import { COLORS } from "../../constants";
import HeaderContent from "../HeaderContent/HeaderContent";
import HeaderBackground from "../../assets/Header/Header_bg.png";

function Header() {
  return (
    <Wrapper>
      <Navbar />
      <HeaderContent />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: url(${HeaderBackground}) no-repeat;
  background-size: contain;
  background-position: top;
  display: flex;
  flex-direction: column;
`;

export default Header;
