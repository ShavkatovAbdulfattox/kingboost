import React, { useState } from "react";
import Container from "../Container/Container";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { ChevronDown } from "react-feather";

const question = [
  {
    ques: "Where can I find out additional information?",
    answ: "We do not, but if you are from a community of farmers we would be happy to hear from you.",
    open: false,
  },
  {
    ques: "How much do you pay?",
    answ: "We do not, but if you are from a community of farmers we would be happy to hear from you.",
    open: false,
  },
  {
    ques: "Do you work with resellers from other sites?",
    answ: "We do not, but if you are from a community of farmers we would be happy to hear from you.",
    open: false,
  },
  {
    ques: "How do I become a booster?",
    answ: "We do not, but if you are from a community of farmers we would be happy to hear from you.",
    open: false,
  },
];

function Faq() {
  const [faq, setFaq] = useState(question);

  const changeToTrue = (item) => {
    item.open = !item.open;
    setFaq([...faq]);
  };
  return (
    <Wrapper>
      <Container>
        <Content>
          <h3>FAQ</h3>
          <h2>Frequently asked questions</h2>

          <Questions>
            {faq.map(({ ques, answ, open }, i) => {
              return (
                <Question key={i} onClick={() => changeToTrue(faq[i])}>
                  <Descriprion>
                    <h2>{ques}</h2>
                    <IconWrapper className={open ? "close" : ""}>
                      <ChevronDown />
                    </IconWrapper>
                  </Descriprion>
                  {open && (
                    <>
                      <hr></hr>
                      <p>{answ}</p>
                    </>
                  )}
                </Question>
              );
            })}
          </Questions>
        </Content>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.section`
margin-top: 5rem;
margin-bottom: 7rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h3 {
    color: ${COLORS.white};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 17px;
  }
  & h2 {
    color: ${COLORS.white};
    font-size: 36px;
    line-height: 44px;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const Questions = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 736px;
  min-width: 736px;
  background: #212121;
  box-shadow: 0px 33px 104px rgba(0, 0, 0, 0.05);
  padding: 18px 28px;
  border-radius: 12px;
  cursor: pointer;

  & h2 {
    color: ${COLORS.white};
    font-size: 18px;
    line-height: 28px;
    margin: 0;
  }
  & svg {
    color: ${COLORS.white};
    /* background: #1C1C1C;
border: 1px solid #636872; */
  }
  & p {
    color: ${COLORS.white};
    max-width: 451px;
  }
  & hr {
    border: 2px solid #313132;
    width: 100%;
    margin: 1rem 0;
  }
`;

const Descriprion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.span`
  background: #7a59ff;
  line-height: 0;
  border-radius: 0.5em;
  padding: 0.2em;
  transition: transform 0.3s;
  &.close {
    transform: rotate(180deg);
  }
`;

export default Faq;
