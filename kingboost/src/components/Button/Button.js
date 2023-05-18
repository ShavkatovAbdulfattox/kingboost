import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

function Button({ children, bgColor }) {
  return (
    <Wrapper
      style={{
        "--background": bgColor ? COLORS.white : COLORS.violet,
        "--color": bgColor ? COLORS.violet : COLORS.white,
      }}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  color: var(--color);
  background-color:var(--background) ;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  border-radius: 999px;
  padding: 10px 16px;
  flex-shrink: 0;
`;

export default Button;
