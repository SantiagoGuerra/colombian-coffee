import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`


const ContainerItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PacificoText = styled.h2`
  color: #ff7010;
  font-size: 48px;
  text-align: center;
  font-family: 'Pacifico', serif;
  line-height: 60px;
`

const Title = styled.h2`
  color: #A2825C;
  font-family: 'Amatic SC';
  font-size: 32px;
  text-align: center;
`
const ImageContainer = styled(animated.div)`
  margin-top: 24px;
  height: 200px;
  width: 100px;
  display: flex;
  justify-content: center;
`

export default function WelSection() {

  const props = useSpring({
    transform: 'scale(1, 1)', 
    from: {transform: 'scale(0, 0)'}})

  return (
    <Container>
      <ContainerItem>
        <PacificoText>
          El Café Colombiano
        </PacificoText>
        <Title>
          Una delicia que se comparte
        </Title>
      <ImageContainer
        style={props}
      >
      <img src="https://image.flaticon.com/icons/svg/381/381163.svg" alt=""/>

      </ImageContainer>

      </ContainerItem>
    </Container>
  )
}