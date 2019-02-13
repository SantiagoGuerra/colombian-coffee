import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 64px;
  background-color: #636363;
  padding: 32px;
  color: #FFF;
  font-family: 'Voltaire';
  display: flex;
  justify-content: flex-end;

  & a {
    color: #FFF;
  }
`

const Footer = ({children}) => (
  <StyledFooter>
    {children}
  </StyledFooter>
)

export default Footer