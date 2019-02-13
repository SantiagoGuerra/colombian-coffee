import React from 'react'
import styled from 'styled-components'
import {useSpring, useChain, animated} from 'react-spring'
import {Link} from 'gatsby'

const StyledNavigation = styled(animated.nav)`
  background: #FCFBe3;
  height: calc(100vh - 48px);
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  max-width: 200px;
  margin-top: 48px;
  z-index:1500;
  border-right: 3px solid #bea586; 
  @media screen and (min-width: 760px){
    margin-top: 60px;
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 62px;
`

const StyledListItem = styled.li`
  list-style: none;
  height: 40px;
  width: 100%;
  margin-top: 24px;
`

const StyledItemLink = styled(Link)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items:center;
  text-decoration: none;
  color: #bea586;
  font-size: 36px;
  font-family: 'Amatic SC', sans-serif;
  
  &:hover {
  font-weight: 700;
  }
`


const Navigation = ({headerIsActive}) => {

  const [props, set] = useSpring(() => ({marginLeft: '-100%'}))


  set({marginLeft: headerIsActive ? '0' : '-100%'})

  return (
    <StyledNavigation style={props}>
      <StyledList>
       <StyledListItem>
          <StyledItemLink to='/'>Home</StyledItemLink>
       </StyledListItem>
       <StyledListItem>
          <StyledItemLink to='/historia'>Historia</StyledItemLink>         
       </StyledListItem>
       <StyledListItem>
          <StyledItemLink to='/sobre-el-cafe'>Sobre el Café</StyledItemLink>
       </StyledListItem>
      </StyledList>
    </StyledNavigation>
  )}
export default Navigation