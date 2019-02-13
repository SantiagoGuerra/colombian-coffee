import React from 'react'
import styled from 'styled-components'


import Hamburger from '../components/Hamburger'


const StyledHeader = styled.header`
  background: #FCFBE3;
  width: 100vw;
  height: 48px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2000;
  @media screen and (min-width: 760px) {
    height: 60px;
  }
`


const Header = ({
  headerIsActive,
  setActive
}) => {

  return (
    <StyledHeader>
      <Hamburger 
        active={headerIsActive}
        setActive={setActive}  
      />
    </StyledHeader>
  )
}

export default Header