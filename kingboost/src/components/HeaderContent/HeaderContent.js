import React from "react";
import { Search } from "react-feather";
import styled from "styled-components";
import { COLORS } from "../../constants";
import HedaerLogo from "../../assets/Header/HeaderLogo.png";
import Button from "../Button";
import Container from "../Container/Container";

const gameImages = [
  {
    img: "image/warcraft-img.png",
  },
  {
    img: "image/warcraft-img2.png",
  },
  {
    img: "image/warcraft-img3.png",
  },
  {
    img: "image/warcraft-img4.png",
  },
  {
    img: "image/warcraft-img4.png",
  },
];
const Warcraft = () => {
  return (
    <WarcraftGrid>
      {gameImages.map((obj, i) => {
        return (
          <WarcraftCard key={i}>
            <img src={obj.img} alt="warcraft-img" />
            <div>
              <h3>World of Warcraft</h3>
              <span>10 items</span>
            </div>
          </WarcraftCard>
        );
      })}
    </WarcraftGrid>
  );
};

function HeaderContent() {
  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <HeaderLogo>
            <img src={HedaerLogo} alt="trustpilot-logo" />
            <button>5.0</button>
          </HeaderLogo>
          <Title>
            Get to <span>enjoy</span> the game today
          </Title>
          <Text>
            With our PROs, it became POSSIBLE. Don't spend your precious time
            and nerves on routine — GET cheap and hassle-free boost NOW!
          </Text>
          <SearchWrapper>
            <TextInput type="text" placeholder="Enter name of game" />
            <IconWrapper>
              <Search />
            </IconWrapper>
          </SearchWrapper>
          <Warcraft />
          <Warcraft />
          <Button>Show more</Button>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-top: 90px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderLogo = styled.h3`
  display: flex;
  align-items: baseline;
  gap: 13px;

  & button {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: ${COLORS.gray.darkLight};
    color: ${COLORS.white};
    border: 1px solid ${COLORS.gray.darkLight};
    border-radius: 8px;
    padding: 8px;
  }
`;
const Title = styled.h1`
  font-weight: 900;
  font-size: ${62 / 16}rem;
  color: ${COLORS.white};
  & span {
    color: ${COLORS.violet};
  }
`;
const Text = styled.h2`
  color: ${COLORS.gray[100]};
  font-size: 1.3rem;
  max-width: 800px;
  text-align: center;
  margin-bottom: 23px;
`;

const SearchWrapper = styled.label`
  position: relative;
  margin-bottom: 40px;
`;
const TextInput = styled.input`
  cursor: pointer;
  max-width: 482px;
  min-width: 482px;
  height: 64px;
  width: 100%;
  background-color: ${COLORS.gray.darkLight};
  color: ${COLORS.gray[100]};
  font-size: 1.2rem;
  border: 1px solid ${COLORS.gray[700]};
  padding: 20px 0 20px 62px;
  border-radius: 12px;
`;
const IconWrapper = styled.div`
  color: ${COLORS.gray[700]};
  width: 30px;
  height: 30px;
  position: absolute;
  top: 17px;
  left: 18px;
  pointer-events: none;
  display: flex;
  align-items: center;
`;

const WarcraftGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
`;
const WarcraftCard = styled.div`
  flex-basis: 261px;
  /* flex: 1; */
  & div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  & img {
    width: 100%;
    object-fit: none;
  }
  & h3 {
    color: ${COLORS.white};
  }
  & span {
    background-color: ${COLORS.gray.darkLight};
    color: ${COLORS.gray.new};
    padding: 4px 8px;
    cursor: pointer;
  }
`;
export default HeaderContent;
