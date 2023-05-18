import React, { useState } from "react";

import VisuallyHidden from "../VisuallyHidden";
import { ChevronDown, ChevronRight } from "react-feather";
import logo from "../../assets/Header/Logo.png";
import select_logo from "../../assets/Header/SelectLogo.png";
import styled from "styled-components";
import { COLORS } from "../../constants";

const game = [
  {
    title: "World of Warcraft",
  },
  {
    title: "Destiny 2",
  },
  {
    title: "Apex Legends 2",
  },
  {
    title: "Genshin Impact",
  },
  {
    title: "Apex Legends",
  },
  {
    title: "Genshin Impact",
  },
  {
    title: "Apex Legends",
  },
  {
    title: "Genshin Impact",
  },
];
const services = [
  {
    title: "Boosting",
    text: "Boosting arena 2v2",
  },
  {
    title: "PvP",
  },
  {
    title: "Torghast Tower Boost",
  },
  {
    title: "Gmaei",
  },
  {
    title: "Oweod",
  },
  {
    title: "Mounts",
  },
  {
    title: "Torghast Tower Boost",
  },
  {
    title: "PvP",
  },
];

function Service(params) {
  return (
    <Services>
      {services.map(({ title, text }, i) => (
        <li key={i}>
          <h3>{title}</h3>
          <p>{text}</p>
          {text && <p>Boosting arena 3v3</p>}
        </li>
      ))}
    </Services>
  );
}

function Logo() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Link href="#!">
        <img src={logo} alt="nav-logo" />
      </Link>

      <Select
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        <VisuallyHidden>SELECT</VisuallyHidden>
        <img src={select_logo} alt="world of warcraft logo" />
        <p>World of Warcraft</p>
        <span>EU</span>
        <ChevronDown></ChevronDown>
      </Select>

      {open && (
        <Game>
          <GameWrapper>
            <GameLeftContent>
              <h2>Game</h2>
              <GameTitle>
                {game.map(({ title }, i) => {
                  return (
                    <h2 key={i}>
                      {title} <ChevronRight />
                    </h2>
                  );
                })}
              </GameTitle>
            </GameLeftContent>
            <GameRightContent>
              <h2>GAME SERVICES</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Service />
                <Service />
              </div>
            </GameRightContent>
          </GameWrapper>
        </Game>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
`;

const Link = styled.a``;

const Select = styled.div`
  display: flex;
  background-color: ${COLORS.gray.light};
  width: max-content;
  gap: 4px;
  border-radius: 8px;
  padding: 8px 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0;
    display: block;
    background: linear-gradient(90deg, #6302d8 10.53%, #5030ce 95.39%);
    transform: rotate(90deg);
    z-index: -1;
    border-top-left-radius: 3rem;
  }
  & p {
    color: ${COLORS.white};
    font-weight: 500;
  }
  & span {
    color: ${COLORS.gray[100]};
  }
  & svg {
    color: ${COLORS.white};
  }
`;

const Game = styled.div`
  position: absolute;
  isolation: isolate;
  z-index: 99;
  max-width: 591px;
  width: 100%;
  box-shadow: 0px 21px 73px rgba(0, 0, 0, 0.79);
  left: 0;
  top: 3.8rem;
`;
const GameWrapper = styled.div`
  display: flex;
  border-radius: 10px;

  & h2 {
    font-size: 1.1rem;
    color: ${COLORS.white};
  }
`;
const GameLeftContent = styled.div`
  max-width: 190px;
  width: 100%;
  background: #232324;
  padding: 14px 15px;
`;

const GameTitle = styled.div`
  margin-top: 1rem;
  & h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s;
    padding: 7px 8px 7px 16px;
    margin-bottom: 0.2em;

    &:hover {
      background: #2f2f2f;
      color: #7a59ff;
    }
    &:active {
      background: #2f2f2f;
      color: #7a59ff;
    }

    & svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const GameRightContent = styled.div`
  flex-grow: 1;
  background: #212121;
  padding: 14px 15px;
`;

const Services = styled.ul`
  margin-top: 1rem;
  & li {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${COLORS.white};
    margin-bottom: 14px;
    & p {
      font-weight: 400;
      margin-top: 0.2em;
    }
  }
`;

export default Logo;
