import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
      <Work />
      <Contact />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default App;
