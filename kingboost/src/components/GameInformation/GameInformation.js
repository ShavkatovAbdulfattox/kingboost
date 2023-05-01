import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { COLORS } from "../../constants";

const information = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0003 1.16602C6.88366 1.16602 1.16699 6.88268 1.16699 13.9993C1.16699 21.116 6.88366 26.8327 14.0003 26.8327C21.117 26.8327 26.8337 21.116 26.8337 13.9993C26.8337 6.88268 21.117 1.16602 14.0003 1.16602ZM12.8337 12.8327H15.167C17.1503 12.8327 18.667 14.3493 18.667 16.3327C18.667 18.316 17.1503 19.8327 15.167 19.8327V20.9993C15.167 21.6993 14.7003 22.166 14.0003 22.166C13.3003 22.166 12.8337 21.6993 12.8337 20.9993V19.8327H10.5003C9.80033 19.8327 9.33366 19.366 9.33366 18.666C9.33366 17.966 9.80033 17.4993 10.5003 17.4993H15.167C15.867 17.4993 16.3337 17.0327 16.3337 16.3327C16.3337 15.6327 15.867 15.166 15.167 15.166H12.8337C10.8503 15.166 9.33366 13.6493 9.33366 11.666C9.33366 9.68268 10.8503 8.16602 12.8337 8.16602V6.99935C12.8337 6.29935 13.3003 5.83268 14.0003 5.83268C14.7003 5.83268 15.167 6.29935 15.167 6.99935V8.16602H17.5003C18.2003 8.16602 18.667 8.63268 18.667 9.33268C18.667 10.0327 18.2003 10.4993 17.5003 10.4993H12.8337C12.1337 10.4993 11.667 10.966 11.667 11.666C11.667 12.366 12.1337 12.8327 12.8337 12.8327Z"
          fill="#F6F8FA"
        />
      </svg>
    ),
    title: "Цены",
    text: "лучший Прайс на рынке",
    xSize: "flex-end",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.312 4.31203C17.934 4.31203 14.812 1.07803 14.756 1.02203C14.364 0.602031 13.636 0.602031 13.244 1.02203C13.216 1.05003 10.164 4.31203 2.68802 4.31203C2.12802 4.31203 1.66602 4.77403 1.66602 5.33403V12.054C1.66602 17.864 4.85802 23.086 9.98202 25.69C11.116 26.264 12.348 26.782 13.664 27.244C13.776 27.286 13.888 27.3 14 27.3C14.112 27.3 14.224 27.286 14.336 27.244C15.652 26.782 16.884 26.264 18.018 25.69C23.156 23.086 26.334 17.864 26.334 12.054V5.33403C26.334 4.76003 25.886 4.31203 25.312 4.31203ZM19.18 11.83L13.118 17.892C12.908 18.102 12.628 18.2 12.362 18.2C12.096 18.2 11.83 18.102 11.62 17.892L8.54002 14.812C8.13402 14.406 8.13402 13.734 8.54002 13.328C8.94602 12.922 9.61802 12.922 10.024 13.328L12.362 15.666L17.682 10.346C18.088 9.94003 18.76 9.94003 19.166 10.346C19.572 10.752 19.586 11.424 19.18 11.83Z"
          fill="#F6F8FA"
        />
      </svg>
    ),
    title: "Безопасность",
    text: "Мы всегда вас защищаем",
    xSize: "center",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.6575 14.8568V14.6555C24.6575 11.8118 23.5462 9.13429 21.5337 7.1218C19.5212 5.10926 16.8438 3.99805 14 3.99805C8.12003 3.99805 3.34251 8.78427 3.34251 14.6555V14.8568C1.63625 15.583 0.4375 17.2718 0.4375 19.2405C0.4375 21.8655 2.5725 24.0005 5.1975 24.0005H7.56001C8.28622 24.0005 8.87251 23.4143 8.87251 22.688V15.793C8.87251 15.0755 8.28622 14.4805 7.56001 14.4805H5.97626C6.0725 10.1318 9.63376 6.62305 14 6.62305C16.1438 6.62305 18.1562 7.46301 19.6787 8.9768C21.1575 10.4555 21.98 12.4068 22.0237 14.4805H20.44C19.7138 14.4805 19.1275 15.0755 19.1275 15.793V22.688C19.1275 23.4143 19.7138 24.0005 20.44 24.0005H22.8025C25.4275 24.0005 27.5625 21.8655 27.5625 19.2405C27.5625 17.2718 26.3638 15.583 24.6575 14.8568Z"
          fill="#F6F8FA"
        />
      </svg>
    ),
    title: "Сервис",
    text: "Крутые бустеры и поддержка которая реагирует быстро",
    xSize: "flex-start",
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
              {information.map(({ icon, title, text, xSize }, i) => {
                return (
                  <Information
                    key={i}
                    style={{
                      "--xSize": xSize,
                    }}
                  >
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
justify-content: space-between;
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
  flex-basis: 40rem;
  display: flex;
  flex-direction: column;
  & img {
    position: absolute;
    bottom: 10%;
    right: 0;
    width: 50%;
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
  align-self: var(--xSize);
  background: ${COLORS.gray.darkLight};
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.49);
  border-radius: 12px;
  padding: 22px 18px;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  z-index: 3;
  position: relative;
  max-width: 30rem;
  margin-bottom: 3rem;

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
  background-color: ${COLORS.violet};
  padding: 14px;
  border-radius: 11px;
`;

export default GameInformation;
