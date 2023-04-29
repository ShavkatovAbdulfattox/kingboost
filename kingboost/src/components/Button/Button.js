import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

function Button() {
  return <Wrapper>Authorization</Wrapper>;
}

const Wrapper = styled.button`
  color: ${COLORS.white};
  background-color: ${COLORS.violet};
  font-weight: ${WEIGHTS.medium};
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  border-radius: 999px;
  padding: 10px 16px;
`;

export default Button;
