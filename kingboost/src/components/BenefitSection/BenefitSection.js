import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import { COLORS } from "../../constants";

const benefitDesc = [
  {
    img: "image/main/Headphone.png",
    title: "24/7 Customer Service",
  },
  {
    img: "image/main/Money.png",
    title: "Best prices",
    text: "we will beat competitor’s price if you find cheaper",
  },
  {
    img: "image/main/Shield.png",
    title: "100% Trading protection",
  },
];

function BenefitSection({ title, text: textBelow, img, width, information }) {
  return (
    <>
      <Wrapper>
        <Container>
          <Center>
            <h3>BENEFITS</h3>
            <Title>{title ? title : "Why to choose us?"}</Title>
            {textBelow && <p className="text">{textBelow}</p>}
          </Center>

          <BenefitContent>
            {benefitDesc.map(({ img, title, text }, i) => (
              <BenefitItem
                className={width ? "benefitWidth" : ""}
                key={i}
                style={
                  {
                    // height: i === 1 ? "233px" : "",
                  }
                }
              >
                <img src={img} alt={title} />
                <h2>{title}</h2>
                {text && <p style={{ marginBottom: "2rem" }}>{text}</p>}
                {information && text ? (
                  ""
                ) : (
                  <p>we will beat competitor’s price if you find cheaper</p>
                )}
              </BenefitItem>
            ))}
          </BenefitContent>
        </Container>
        {img ? <img src="image/main/diamond.png" alt="" /> : undefined}
      </Wrapper>
      <Line></Line>
    </>
  );
}
const Wrapper = styled.section`
  padding: 50px 0;
  position: relative;

  & h3 {
    color: ${COLORS.white};
    text-align: center;
  }
  & .text {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #a5a9b4;
    max-width: 679px;
  }

  & > img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${36 / 16}rem;
  color: ${COLORS.white};
  letter-spacing: 1px;
`;

const BenefitContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 23px;
  position: relative;
  z-index: 2;
`;
const BenefitItem = styled.div`
  background-color: ${COLORS.gray.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 356px;
  flex: 1;
  padding: 27px 50px;
  border-radius: 12px;
  margin-top: 35px;
  &.benefitWidth {
    flex-basis: 356px;
  }
  & .speacial-style {
    flex: 1;
    height: 233px;
  }
  & img {
    width: max-content;
  }
  & h2 {
    font-size: 20px;
    line-height: 22px;
    color: ${COLORS.white};
    margin-top: 21px;
  }
  & p {
    font-weight: 600;
    font-size: 18px;
    color: ${COLORS.gray.new};
    text-align: center;
    margin-top: 10px;
  }
`;

const Line = styled.hr`
  border: 2px solid #313132;
  /* width: 100%; */
`;

export default BenefitSection;
