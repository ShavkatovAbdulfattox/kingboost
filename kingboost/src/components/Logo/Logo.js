import React from 'react';

import VisuallyHidden from "../VisuallyHidden" 
import {ChevronDown} from "react-feather"
import logo from "../../assets/Header/Logo.png"
import select_logo from "../../assets/Header/SelectLogo.png"
import styled from 'styled-components';
import { COLORS } from '../../constants';


function Logo() {
  return (
    <Wrapper>
      <Link href="#!">
        <img src={logo} alt="nav-logo" />
      </Link>

      <Select>
        <VisuallyHidden>SELECT</VisuallyHidden>
        <img src={select_logo} alt="world of warcraft logo" />
        <p>World of Warcraft</p>
        <span>EU</span>
        <ChevronDown></ChevronDown>
      </Select>
    </Wrapper>
  );
}
const Wrapper = styled.div`
display: flex;
align-items: baseline;
gap: 24px;
 
`

const Link = styled.a`

`

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
    position: absolute  ;
    width: 56px;
    height: 54px;
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


export default Logo;
