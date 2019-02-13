import React from "react"
import { Link } from "gatsby"

import '../styles/index.css'

import SEO from "../layouts/seo"
import Header from '../layouts/Header'
import MainLayout from '../container/MainLayout'

import WelSection from '../components/WelSection'
import Card from "../components/Card";
import MainContainer from "../components/MainContainer";


const IndexPage = () => (
    <MainLayout>
      <SEO title="Home" keywords={[`colombia`, `coffee`, `home`]} />
      <WelSection />
      <MainContainer>
        <Card 
          title='Te mantiene alerta!'
          paragraph='Nada más tomar un café, la cafeína actúa en el cerebro, bloqueando un neurotransmisor, la adenosina, que hace que aumenten otras sustancias como la dopamina o la norepinefrina, que aceleran la actividad cerebral.'
          src='https://image.flaticon.com/icons/svg/444/444187.svg'
        />
          <Card 
          title='Mejora tu rendimiento físico'
          paragraph='Muchos atletas toman varias tazas de café antes de competir, ya que la cafeína aumenta los niveles de adrenalina. Esta hormona prepara a nuestro cuerpo para un esfuerzo físico excepcional: hace que las células grasas descompongan la grasa corporal, liberándola como ácidos grasos libres, que usamos como combustible cuando hacemos ejercicio.'
          src='https://image.flaticon.com/icons/svg/478/478729.svg'
        />  <Card 
        title='tiene nutrientes esenciales'
        paragraph='Solemos pensar en el café como una simple mezcla de agua y cafeína, pero la infusión tiene muchos otros nutrientes esenciales para nuestro organismo. Una taza de café contiene riboflavina (vitamina B2), ácido pantoténico (vitamina B5), manganeso, potasio, magnesio y niacina.'
        src='https://image.flaticon.com/icons/svg/478/478748.svg'
      />
      </MainContainer>
    </MainLayout>
)

export default IndexPage
