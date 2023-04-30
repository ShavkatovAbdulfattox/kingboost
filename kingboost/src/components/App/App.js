import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default App;
