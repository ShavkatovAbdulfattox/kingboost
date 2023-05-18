import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Faq from "../Faq/Faq";
import BenefitSection from "../BenefitSection/BenefitSection";
import Footer from "../Footer/Footer";
import RoleSection from "../RoleSection/RoleSection";
function Work() {
  return (
    <>
      <Wrapper>
        <Header />{" "}
      </Wrapper>
      <main>
        <BenefitSection
          title="Why Kingboost is the best platform to work with"
          text="Kingboost is a revolutionary platform that offers various gaming services and goods with the best market prices around. Get everything you might need to enchance your in-game experience – completely safe and hassle-free."
          width={true}
          information={true}
        />{" "}
        <RoleSection/>
        <Faq />
        <Footer />
      </main>
    </>
  );
}
const Wrapper = styled.header`
  height: 100vh;
  background: url("image/work/work_bg.png");
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: column;
`;

export default Work;
