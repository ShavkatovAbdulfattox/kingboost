import React from 'react';
import styled from 'styled-components';
import Navbar from "../Navbar"
import { COLORS } from '../../constants';

function Header() {
  return (
    <Wrapper>
        <Navbar />
    </Wrapper>
  );
}

const Wrapper = styled.header`
`




export default Header;
