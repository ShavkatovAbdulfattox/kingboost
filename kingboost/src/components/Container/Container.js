import React from "react";
import styled from "styled-components";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 100rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
`;

export default Container;
