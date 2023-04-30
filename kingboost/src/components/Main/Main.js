import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import BenefitSection from "../BenefitSection";

function Main() {
  return (
    <Wrapper>
      <BenefitSection />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: 40px;
  background-color: ${COLORS.gray.darkLight};
`;

export default Main;
