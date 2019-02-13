import React from 'react'
import MainContainer from '../components/MainContainer';
import SEO from '../layouts/seo';
import Card from '../components/Card';
import MainLayout from '../container/MainLayout';

const History = () => (
  <MainLayout>
    <MainContainer>
    <SEO title="Historia" keywords={[`historia`, `coffee`, `colombia`]} />
    <Card 
      title='Historia'
      paragraph='No existe plena certeza sobre las condiciones en que llegó el café a Colombia. Los indicios históricos señalan que los jesuitas trajeron semillas del grano a la Nueva Granada hacia 1730, pero existen distintas versiones al respecto. La tradición dice que las semillas de café llegaron por el oriente del país, portadas por algún viajero desde las Guyanas y a través de Venezuela. El testimonio escrito más antiguo de la presencia del cafeto en Colombia se le atribuye al sacerdote jesuita José Gumilla. En su libro El Orinoco Ilustrado (1730) registró su presencia en la misión de Santa Teresa de Tabajé, próxima a la desembocadura del río Meta en el Orinoco. El segundo testimonio escrito pertenece al arzobispo-virrey Caballero y Góngora (1787) quien en un informe a las autoridades españolas registró su cultivo en regiones cercanas a Girón (Santander) y a  Muzo (Boyacá).

      Los primeros cultivos de café crecieron en la zona oriental del país. En 1835 tuvo lugar la primera producción comercial y los registros muestran que los primeros 2.560 sacos se exportaron desde la aduana de Cúcuta, en la frontera con Venezuela. De acuerdo con testimonios de la época se le atribuye a Francisco Romero, un sacerdote que imponía durante la confesión a los feligreses de la población de Salazar de las Palmas la penitencia de sembrar café,  un gran impulso en la propagación del cultivo del grano en esta zona del país.  Estas semillas habrían permitido la presencia de café en los departamentos de Santander y Norte de Santander, en el nororiente del país, con su consecuente propagación, a partir de 1850, hacia el centro y el occidente a través de Cundinamarca, Antioquia y la zona del antiguo Caldas (ver mapa Arribo y expansión del café en Colombia).'
      src='https://image.flaticon.com/icons/svg/1519/1519733.svg'
    />
  </MainContainer>
  </MainLayout>
)

export default History