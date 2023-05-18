import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import { COLORS } from "../../constants";
import Button from "../Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards } from "swiper";

import { Pagination, Navigation } from "swiper";
const advantages = [
  {
    text: "Automated system for receiving an order in two easy clicks ",
  },
  {
    text: "Transparent competition and pricing model",
  },
  {
    text: "Crediting funds for a completed order to your currency account",
  },
  {
    text: "Semi-automated payouts every day",
  },
  {
    text: "History of orders and payments",
  },
  {
    text: "There are many available withdrawal methods - VISA (cross-borders), WMZ, PayPal, Bank-transfer, QIWI, BTC, USDT",
  },
];

function RoleSection() {
  return (
    <Wrapper>
      <Container>
        <Card>
          {" "}
          <Left>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Pagination, Navigation]}
              className="roleSwiper"
              navigation={true}
            >
              <SwiperSlide>
                {" "}
                <img src="image/role_img.png" alt="role_img" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="image/work/role_img2.png" alt="role_img" />
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <img src="image/role_img.png" alt="role_img" />
              </SwiperSlide>
            </Swiper>
          </Left>
          <Right>
            <h3>Your RoLE</h3>
            <h2>Choose a role that fits you</h2>
            <h3>BOOSTER</h3>
            <p>
              Boosters are one of the key positions in our <br /> business. The
              better your work, the more orders <br /> you will receive.
            </p>
            <h3>Advantages</h3>
            <ul>
              {advantages.map(({ text }, i) => {
                return (
                  <li key={i}>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
            <ButtonDesc>
              <Button>Become a booster</Button>
              <p>
                For more information, please contact us via Discord -
                kingboost122
              </p>
            </ButtonDesc>
          </Right>
        </Card>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: #171717;
  margin-top: 7rem;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Left = styled.div`
  width: 33%;
  max-width: 100%;

  & .swiper .swiper-button-next {
    color: ${COLORS.violet};
    filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.33));
    background: #232324;
    border: 1px solid #7a59ff;
    border-radius: 0.5em;
    height: min-content;
    padding: 0.5rem 1rem; 
    &::after {
      font-size: 1.2rem;
      /* line-height: 32px; */
    }
  }
  & .swiper .swiper-button-prev {
    color: ${COLORS.violet};
    filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.33));
    background: #232324;
    border: 1px solid #7a59ff;
    border-radius: 0.5em;
    height: min-content;
    padding: 0.5rem 1rem;

    &::after {
      font-size: 1.2rem;
      /* line-height: 32px; */
    }
  }
`;
const Right = styled.div`
  max-width: 506px;
  & h2 {
    font-size: 36px;
    line-height: 44px;
    color: ${COLORS.white};
    margin-top: 8px;
    margin-bottom: 2rem;
  }
  & h3 {
    color: ${COLORS.white};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  & h3:nth-child(3) {
    font-size: 1.8rem;
  }
  & > p {
    font-size: 16px;
    line-height: 26px;
    color: ${COLORS.gray.new};
    font-weight: 600;
    margin-bottom: 8px;
  }
  & ul {
    & li {
      display: flex;
      position: relative;
      margin-left: 1.5rem;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 25%;
        left: -0.7rem;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${COLORS.gray.new};
      }
    }
    & li p {
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: ${COLORS.gray.new};
      margin-bottom: 1rem;
    }
  }
`;

const ButtonDesc = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: ${COLORS.gray.new};
    margin-left: 2rem;
  }
`;
export default RoleSection;
