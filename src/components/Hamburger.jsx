import React from 'react'
import { Elastic } from 'react-burgers'
import styled from 'styled-components'

const HamburgerContainer = styled.div`
  margin-left: 16px;
`

export default function Hamburger({
  active,
  setActive
}) {


  return (
    <HamburgerContainer onClick = { () => setActive(!active)}>
      <Elastic
        width={24}
        lineHeight={3}
        lineSpacing={5}
        color='#ff7010'
        padding='0px'
        active={active}
      />
    </HamburgerContainer>
  )
}