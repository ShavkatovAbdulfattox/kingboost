import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { COLORS } from "../../constants";
import { Shield, Headphones, DollarSign } from "react-feather";

const information = [
  {
    icon: <DollarSign />,
    title: "Цены",
    text: "лучший Прайс на рынке",
  },
  {
    icon: <Shield />,
    title: "Безопасность",
    text: "Мы всегда вас защищаем",
  },
  {
    icon: <Headphones />,
    title: "Сервис",
    text: "Крутые бустеры и поддержка которая реагирует быстро",
  },
];

function GameInformation() {
  return (
    <Wrapper>
      <Container>
        <Description>
          <LeftContent>
            <h3>BENEFITS</h3>
            <h2>
              Over 194,050 has chosen Kingboost as their go-to service for any
              in-game needs
            </h2>
            <p>
              Overgear is a revolutionary platform that offers various gaming
              services and goods with the best market prices around. Get
              everything you might need to enchance your in-game experience –
              completely safe and hassle-free.
            </p>
            <Button>Choose game</Button>
          </LeftContent>
          <RightContent>
            <>
              {information.map(({ icon, title, text }, i) => {
                return (
                  <Information key={i}>
                    <Icon>{icon}</Icon>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
       
                  </Information>
                );
              })}
            </>
            <img src="image/main/Information-bg.png" alt="tringle-img" />
          </RightContent>
        </Description>
        <Question>
          <h2>Do you have questions?</h2>
          <p>We are ready to hel you:)</p>
          <Button bgColor={true}>Contact us</Button>
          <img src="image/main/Lion-img.png" alt="lion-img" />
          <img src="image/main/circle-light.png" alt="lion-img" />
        </Question>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 6rem;
`;
const Description = styled.div`
  display: flex;
`;
const LeftContent = styled.div`
  flex-basis: 520px;
  & h3 {
    color: ${COLORS.white};
  }
  & h2 {
    font-size: 36px;
    line-height: 44px;
    color: ${COLORS.white};
    margin-top: 10px;
    margin-bottom: 1.2rem;
  }
  & p {
    color: ${COLORS.gray.new};
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;
const RightContent = styled.div`
  & img {
    position: absolute;
    bottom: 10%;
    right: 0;
  }
`;
const Question = styled.div`
  margin-top: 4rem;
  background: linear-gradient(90deg, #6302d8 10.53%, #5030ce 95.39%);
  border-radius: 19px;
  position: relative;
  padding: 37px 47px;
  isolation: isolate;
  & h2 {
    font-size: 2.3rem;
    line-height: 44px;
    color: ${COLORS.white};
    margin-bottom: 5px;
  }
  & p {
    color: ${COLORS.white};
    font-size: 1.3rem;
    margin-bottom: 1.1rem;
  }
  & img {
    position: absolute;
    bottom: -20%;
    right: 0;
  }
  & img:last-of-type {
    position: absolute;
    bottom: 0.45rem;
    right: 0;
    z-index: -1;
  }
`;
const Information = styled.div`
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.49);
  border-radius: 12px;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  /* flex-basis: 306px; */
  & h3 {
    color: ${COLORS.white};
    font-size: 20px;
    line-height: 22px;
  }
  & p {
    color: ${COLORS.gray.new};
    font-size: 1.2rem;
  }
`;
const Icon = styled.span`
  color: ${COLORS.white};
  background-color: ${COLORS.violet};
  padding: 14px;
  border-radius: 11px;
  display: block;
  width: fit-content;
`;

export default GameInformation;
