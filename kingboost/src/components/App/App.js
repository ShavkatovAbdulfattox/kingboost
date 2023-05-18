import React from "react";
import styled from "styled-components";

import Navbar from "../Navbar";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Work />
      <Contact /> */}
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default App;
