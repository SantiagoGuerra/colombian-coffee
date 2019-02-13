import React from 'react'
import MainContainer from '../components/MainContainer';
import SEO from '../layouts/seo';
import Card from '../components/Card';
import MainLayout from '../container/MainLayout';

const AboutCoffee = () => (
  <MainLayout>
    <MainContainer>
    <SEO title="Sobre El Café" keywords={[`colombia`, `coffee`, `Sobre el Café`]} />
    <Card 
      title='Sobre El Café'
      paragraph='Pocas bebidas en el mundo han llegado a ser tan populares y altamente apreciadas como una taza de café de alta calidad bien preparada.  Los conocedores coinciden en que esta bebida está en capacidad de ofrecer un sabor y experiencias complejas que van más allá de ser una simple bebida estimulante o que satisface la sed. Su exquisito aroma y sabor ofrecen una variada gama de sensaciones que reconfortan el estado físico y espiritual de quienes lo consumen.
      Detrás de una taza de café, de un espresso, de un Capuchino, hay siempre una compleja historia y un arduo trabajo. El café es un producto especial, con una historia particular, que requiere de condiciones de cultivo complejas, y un manejo del cultivo y procesamiento del grano que requieren una gran dedicación.

Pero no sólo la historia y sus condiciones de producción hacen al café especial. El café es mucho más que una simple bebida. De él dependen decenas de millones de productores en el mundo en vías de desarrollo, y sobre él confluyen centenares de millones de personas, alrededor del mundo, que han creado en diferentes sociedades, ritos y costumbres, que a su vez han contribuido a crear diferentes preparaciones que explotan los diversos y complejos atributos de esta bebida.'
      src='https://image.flaticon.com/icons/svg/444/444174.svg'
    />
  </MainContainer>
  </MainLayout>
)

export default AboutCoffee