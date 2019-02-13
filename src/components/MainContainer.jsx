import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.section`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;

  @media screen and (min-width: 760px) {
  padding: 32px;
  }
`

const MainContainer = ({children}) => {
  return (
    <StyledMainContainer>
      {children}
    </StyledMainContainer>
  )
}

export default MainContainer