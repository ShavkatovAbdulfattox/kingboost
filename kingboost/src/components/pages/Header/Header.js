import React from "react";
import { COLORS } from "../../../constants";
import Container from "../../Container/Container";
import { ChevronRight } from "react-feather";
import styled from "styled-components";

const information = [
  {
    num: "194,050+",
    title: "CLIENTS",
  },
  {
    num: "230",
    title: "GAMES",
  },
  {
    num: "194,050+",
    title: "CLIENTS",
  },
  {
    num: "194,050+",
    title: "CLIENTS",
  },
];
function Header() {
  return (
    <>
      <>
        <Container>
          {" "}
          <Nav>
            <ol>
              <li>
                <a href="#!">Home</a>
              </li>
              <ChevronRight />
              <li className="active-li">
                <a href="#!">Work with us</a>
              </li>
            </ol>
          </Nav>{" "}
          <HeaderContent>
            {" "}
            <Description>
              <h3>THE BEST OFFER</h3>
              <h1>Work with us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </Description>
          </HeaderContent>
          <Information>
            {information.map(({ num, title }, i) => {
              return (
                <div key={i}>
                  <h2>{num}</h2>
                  <h3>{title}</h3>
                </div>
              );
            })}
          </Information>
        </Container>{" "}
      </>
    </>
  );
}
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
const HeaderContent = styled.div`
  color: ${COLORS.white};
  margin-top: 6rem;
  & h1 {
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  & h3 {
    line-height: 17px;
    letter-spacing: 0.1em;
  }
  & p {
    color: ${COLORS.gray.new};
  }
`;
const Description = styled.div`
  max-width: 463px;
`;
const Information = styled.div`
  margin-top: 7rem;
  background: #212121;
  box-shadow: 0px 33px 104px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  max-width: 926px;
  display: flex;
  justify-content: space-between;
  padding: 28px 37px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${COLORS.white};
    & h2 {
      font-size: 36px;
      line-height: 44px;
    }
    & h3 {
      line-height: 17px;
      /* identical to box height */

      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
`;
export default Header;
