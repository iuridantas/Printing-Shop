import { useState } from 'react';
import { ButtonIcon, CardSession, FullScreenCard } from './style';

const services = [
  {
    name: 'Recarga de Toner',
    photo: 'img/toner.jpeg',
    description:
      ' Oferecemos serviços de recarga de toner para impressoras laser, permitindo que você economize custos e contribua para a sustentabilidade ambiental.',
    price: 'A partir de R$40,00',
  },
  {
    name: 'Recarga de Cartucho',
    photo: 'img/recarga_de_cartucho.png',
    description:
      'Realizamos a recarga de cartuchos de tinta, garantindo um suprimento confiável para suas impressões e ajudando você a reduzir gastos desnecessários.',
    price: 'A partir de R$15,00',
  },
  {
    name: 'Toner',
    photo: 'img/toner.jpeg',
    description:
      'Disponibilizamos uma variedade de toners originais e compatíveis para diversas marcas de impressoras, garantindo qualidade e desempenho excepcionais.',
    price: 'A partir de R$65,00',
  },
  {
    name: 'Manutenção em Impressora',
    photo: 'img/manutenção_em_impressora.jpg',
    description:
      'Contamos com uma equipe de profissionais experientes que oferece serviços de manutenção e reparo em impressoras, garantindo seu bom funcionamento e prolongando sua vida útil.',
    price: 'A partir de R$100,00',
  },
  {
    name: 'Tintas para Impressora',
    photo: 'img/tintas_para_impressora.png',
    description:
      'Fornecemos tintas de alta qualidade para impressoras a jato de tinta, garantindo resultados nítidos e duradouros em suas impressões.',
    price: 'A partir de R$35,00',
  },
  {
    name: 'Pó para Toner',
    photo: 'img/pó_para_toner.jpeg',
    description:
      'Oferecemos pó para recarga de toner, proporcionando uma alternativa econômica e confiável para suprir suas necessidades de impressão.',
    price: 'A partir de R$85,00',
  },
];

export function CardService() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<any>(null);

  const handleCardClick = (index: any) => {
    setSelectedCardIndex(index);
  };

  const handleFullScreenCardClose = () => {
    setSelectedCardIndex(null);
  };

  return (
    <section aria-label="card dos produtos">
      {services.map((product, index) => (
        <CardSession
          key={index}
          aria-label="card dos produtos"
          onClick={() => handleCardClick(index)}
        >
          <h2>{product.name}</h2>
          <img src={product.photo} alt={product.name} />
          <h3>Preço: {product.price}</h3>
        </CardSession>
      ))}
      {selectedCardIndex !== null && (
        <FullScreenCard>
          <p>{services[selectedCardIndex].description}</p>
          <ButtonIcon onClick={handleFullScreenCardClose}/>
        </FullScreenCard>
      )}
    </section>
  );
}
