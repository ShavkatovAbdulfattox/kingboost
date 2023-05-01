import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import { COLORS } from "../../constants";
import Button from "../Button/Button";

const payementMethod = [
  {
    title: "Choose service",
    text: "Choose a required game at our website",
  },
  {
    title: "Add information",
    text: "Fill in all necessary contact information ",
  },
  {
    title: "Place an order",
    text: "Confirm all information, you have entered",
  },
  {
    title: "Expect an answer",
    text: "Our specialists will contact you",
  },
];

function TutorialSection() {
  return (
    <Wrapper>
      {" "}
      <h3>TUTORIAL</h3>
      <Container>
        <Title>How to place an order</Title>
        <Text>Convenient payment method</Text>
        <Content>
          {payementMethod.map(({ text, title }, i) => {
            return (
              <Information key={i}>
                <span>{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                {i === 0 ? (
                  <div>
                    <Button>Choose service</Button>
                  </div>
                ) : undefined}
              </Information>
            );
          })}
        </Content>
      </Container>
      <img src="image/main/tutorial.png" alt="robot-img" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  isolation: isolate;
  padding-top: 5rem;
  padding-bottom: 145px;
  & > h3 {
    color: ${COLORS.white};
    text-align: center;
  }
  & > img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -3;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: ${36 / 16}rem;
  color: ${COLORS.white};
  letter-spacing: 1px;
  margin-bottom: 5px;
`;
const Text = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: ${COLORS.gray.new};
  line-height: 28px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 5rem;
`;
const Information = styled.div`
  flex-basis: 360px;
  background-color: ${COLORS.gray.light};
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.49);
  padding: 40px 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;

  & span {
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translate(-50%);
    background-color: ${COLORS.violet};
    color: ${COLORS.white};
    font-weight: 900;
    font-size: 2rem;
    padding: 10px 25px;
    border-radius: 50%;
    outline: 5px solid rgba(158, 123, 255, 0.2);
    outline-offset: 5px;
  }
  & h3 {
    color: ${COLORS.white};
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 10px;
    margin-top: 2.2rem;
  }
  & p {
    color: ${COLORS.gray.new};
    text-align: center;
    font-size: 1.1rem;
  }
  & div{
    position: absolute;
    bottom: -10%;
  }
`;
export default TutorialSection;
