import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import BenefitSection from "../BenefitSection";
import TutorialSection from "../TutorialSection/TutorialSection";
import GameInformation from "../GameInformation/GameInformation";
import Reviews from "../Reviews/Reviews";

function Main() {
  return (
    <Wrapper>
      <BenefitSection />
      <TutorialSection />
      <GameInformation />
      <Reviews />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: 40px;
  background-color: ${COLORS.gray.darkLight};
`;

export default Main;
