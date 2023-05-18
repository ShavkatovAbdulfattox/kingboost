import React from "react";
import Container from "../../Container/Container";
import styled from "styled-components";
import { ChevronRight, Paperclip } from "react-feather";
import { COLORS } from "../../../constants";
import Button from "../../Button/Button";

const work = [
  {
    img: "image/contact/mail.png",
    title: "Customer Service",
    desc: "support@kingboost.net",
  },
  {
    img: "image/contact/mail.png",
    title: "Data Protection Officer",
    desc: "privacy@kingboost.net",
  },
  {
    img: "image/contact/mail.png",
    title: "Work with us",
    desc: "job@kingboost.net",
  },
  {
    img: "image/contact/mail.png",
    title: "Write to our CEO",
    desc: "officer@kingboost.net",
  },
  {
    img: "image/contact/messenger.png",
    title: "FACEBOOK MESSENGER",
    desc: "Click on that to chat us on Facebook",
  },
  {
    img: "image/contact/discord.png",
    title: "DISCORD",
    desc: "kingboost#2583",
  },
  {
    img: "image/contact/whatsapp.png",
    title: "WHATSAPP",
    desc: "+971 52 539 9756",
  },
  {
    img: "image/contact/chat.png",
    title: "LiVECHAT",
    desc: "Click to chat with us",
  },
  {
    img: "image/contact/telegram.png",
    title: "TELEGRAM",
    desc: "+971 52 539 9756",
  },
];
function ContactHeader() {
  return (
    <Container>
      <Nav>
        <ol>
          <li>
            <a href="#!">Home</a>
          </li>
          <ChevronRight />
          <li className="active-li">
            <a href="#!">Contact us</a>
          </li>
        </ol>
      </Nav>{" "}
      <Wrapper>
        <Content>
          <h1>Contact us</h1>
          <Left>
            <h3>CONTACT</h3>
            <h2>Leave us message</h2>
            <Form>
              {new Array(2).fill(2).map((_, i) => {
                return (
                  <label htmlFor={i === 0 ? "name" : "email"} key={i}>
                    {i === 0 ? "Your name" : "E-mail"}
                    <TextInput
                      id={i === 0 ? "name" : "email"}
                      placeholder={i === 0 ? "Your name" : "E-mail"}
                    ></TextInput>
                  </label>
                );
              })}
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  placeholder="Message"
                />
              </label>
              <FileSelect>
                <input type="file"></input>

                <h3>
                  {" "}
                  <Paperclip />
                  Attach file
                </h3>
              </FileSelect>
              <Button>Send message</Button>
            </Form>
          </Left>
        </Content>

        <Right>
          <h2>We work 24/7</h2>
          <Work>
            {work.map(({ img, title, desc }, i) => {
              return (
                <WorkContent key={i}>
                  <img src={img} alt={title} />
                  <Description>
                    <h2>{title}</h2>
                    <h3>{desc}</h3>
                  </Description>
                </WorkContent>
              );
            })}
          </Work>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 5rem;
  

  & h1 {
    font-size: 52px;
    line-height: 63px;
    color: ${COLORS.white};
    display: block;
    margin: 1rem 0;
  }
`;
const Left = styled.div`
  background: #212121;
  box-shadow: 0px 33px 104px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  max-width: 641px;
  width: 100%;
  padding: 33px 36px;

  & h2 {
    font-size: 26px;
    line-height: 32px;
    color: ${COLORS.white};
    margin-bottom: 2rem;
  }
  & h3 {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLORS.white};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 410px;

  & label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #a5a9b4;
    margin-top: 1rem;
    cursor: pointer;
  }

  & .textarea {
    resize: none;
    width: 100%;
    height: 203px;
    background: #2f2f2f;
    border: 1px solid #313132;
    border-radius: 8px;
    margin-top: 1rem;

    &::placeholder {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #636872;
      padding: 15px 24px;
    }
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: 56px;
  background: #2f2f2f;
  border: 1px solid #313132;
  border-radius: 8px;
  margin-top: 1rem;
  &::placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #636872;
    padding: 15px 24px;
  }
`;

const FileSelect = styled.div`
  position: relative;
  display: flex;
  color: ${COLORS.white};
  width: fit-content;
  isolation: isolate;
  margin: 1rem 0;
  & input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
  & h3 {
    display: flex;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;
const Nav = styled.nav`
  color: ${COLORS.gray.new};
  margin-top: 2rem;
  & ol {
    display: flex;
    align-items: center;
    & svg {
      width: 1.2rem;
      height: 1.2rem;
    }
    & li {
      list-style: none;
      &.active-li {
        background: #212121;
        backdrop-filter: blur(4.5px);
        padding: 2px 9px;
        border-radius: 8px;
      }
      & a {
        color: currentColor;
      }
    }
  }
`;

const Right = styled.div`
  flex: 1.5;
  & > h2 {
    color: ${COLORS.white};
    font-size: 36px;
    line-height: 44px;
    margin: 1rem 0;
  }
`;

const Work = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Description = styled.div``;
const WorkContent = styled.div`
  display: flex;
  background: #212121;
  box-shadow: 0px 33px 104px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 12px 30px;
  color: ${COLORS.white};
  gap: 24px;
  & img {
    flex-shrink: 0;
    object-fit: contain;
  }
`;
export default ContactHeader;
