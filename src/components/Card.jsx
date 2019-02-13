import React from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll';


const StyledCardContainer = styled.article`
  margin-top: 64px;
  background: #fcfbe3;
  width: 90%;
  max-width: 1200px;
  border-radius: 24px;`

const Title = styled.h2`
  font-size: 48px;
  font-family: 'Amatic SC';
  margin-top: 24px;
  text-align: center;
  color: #A2825C;
`

const Paragraph = styled.p`
  font-size: 16px;
  font-family: 'Voltaire';
  color: #BEA586;
  padding: 24px;
`

const IconContainer = styled.div`
  padding: 16px;
  display: flex;
`


const Icon = styled(animated.div)`
  display: flex;
  height: 100px;
  width: 100px;
`

const Card = ({title, paragraph, src}) => {

  const [props, set] = useSpring(() => ({ marginLeft: '60%'}))

  return (
    <StyledCardContainer>
    <ScrollAnimation animateIn="bounceInUp" animateOut='bounceOutUp'>
      <Title onClick={e => {
        set({marginLeft: '80%'})
      }}>
        {title}
      </Title>
      <Paragraph>
        {paragraph}
      </Paragraph>
      <IconContainer>
        <ScrollAnimation animateIn='bounceInLeft' delay={1}>
        <Icon 
          style={props}>
          <img src={src} alt="icon"/>  
        </Icon>
        </ScrollAnimation>
      </IconContainer>
    </ScrollAnimation>
    </StyledCardContainer>

  )
}

export default Card