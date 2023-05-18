import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import ContactHeader from "./ContactHeader/ContactHeader";

function Contact() {
  return (
    <>
      <Header>
        <Navbar />
        <ContactHeader />
      </Header>
      <Main></Main>
      <Footer />
    </>
  );
}
const Header = styled.header`
  background-image: url("image/contact_bg.png");
`;
const Main = styled.main``;
export default Contact;
