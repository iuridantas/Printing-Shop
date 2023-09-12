import { useState } from 'react';
import {
  CardSession,
  FullScreenCard,
  ButtonIcon,
  DescriptionIcon,
} from './style';

const services = [
  {
    name: 'Recarga de Toner',
    photo: 'img/toner.jpeg',
    description:
      '"Economize dinheiro e reduza o desperdício com nosso serviço de recarga de toner! Nossa recarga de toner oferece uma alternativa acessível e sustentável para manter suas impressoras funcionando com desempenho máximo. Com especialistas em recarga de toner e equipamentos de qualidade, garantimos que seu toner seja recarregado com precisão, proporcionando resultados consistentes e de alta qualidade. Dê um novo fôlego à sua impressora e contribua para o meio ambiente com nossa recarga de toner. Agende sua recarga hoje mesmo e desfrute de impressões perfeitas a um preço justo!',
    price: 'A partir de R$40,00',
  },
  {
    name: 'Recarga de Cartucho',
    photo: 'img/recarga_de_cartucho.png',
    description:
      'Economize e imprima com qualidade com nosso serviço de recarga de cartucho! Nossa recarga de cartucho oferece uma solução econômica e sustentável para suas necessidades de impressão. Utilizando técnicas avançadas e materiais de alta qualidade, nossos especialistas recarregam seus cartuchos de tinta de forma precisa, garantindo resultados nítidos e duradouros. Dê um novo ciclo de vida aos seus cartuchos e faça sua parte pelo meio ambiente com nossa recarga de cartucho. Agende sua recarga hoje mesmo e desfrute de impressões excelentes por um preço acessível!',
    price: 'A partir de R$15,00',
  },
  {
    name: 'Toner',
    photo: 'img/toner.jpeg',
    description:
      'Obtenha impressões impecáveis com nosso toner de alta qualidade! Nossos toners são projetados para oferecer desempenho confiável e resultados excepcionais em todas as suas impressões. Compatíveis com uma ampla gama de impressoras, nossos toners garantem cores vivas, texto nítido e imagens de alta definição. Conte conosco para fornecer toners duráveis e de longa duração, permitindo que você imprima sem preocupações. Eleve a qualidade das suas impressões com nossos toners premium. Faça seu pedido hoje mesmo e experimente o melhor em desempenho de impressão!',
    price: 'A partir de R$65,00',
  },
  {
    name: 'Manutenção em Impressora',
    photo: 'img/manutenção_em_impressora.jpg',
    description:
      'Mantenha sua impressora em perfeito funcionamento com nossos serviços de manutenção especializados! Nossa equipe de profissionais qualificados está pronta para realizar reparos e manutenção preventiva em sua impressora, garantindo que ela opere com eficiência e qualidade. Seja para solucionar problemas técnicos, substituir peças desgastadas ou realizar limpeza e ajustes, nossa equipe está comprometida em restaurar o desempenho ideal da sua impressora. Confie em nós para cuidar da saúde da sua impressora. Agende hoje mesmo nossa manutenção em impressora e volte a imprimir sem preocupações!',
    price: 'A partir de R$100,00',
  },
  {
    name: 'Tintas para Impressora',
    photo: 'img/tintas_para_impressora.png',
    description:
      'Obtenha resultados brilhantes e duradouros com nossas tintas de impressora de alta qualidade! Nossas tintas foram formuladas especialmente para fornecer cores vivas, detalhes nítidos e impressões de alta definição. Compatíveis com uma ampla gama de impressoras, nossas tintas oferecem um desempenho confiável e consistente. Mantenha a qualidade das suas impressões e maximize a vida útil da sua impressora com nossas tintas premium. Escolha a excelência em tintas para impressora. Faça seu pedido hoje mesmo e experimente o melhor em qualidade de impressão!',
    price: 'A partir de R$35,00',
  },
  {
    name: 'Pó para Toner',
    photo: 'img/pó_para_toner.jpeg',
    description:
      'Aumente o desempenho da sua impressora com nosso pó para toner de alta qualidade! Nosso pó para toner é formulado com precisão para oferecer impressões nítidas, cores vibrantes e qualidade excepcional. Compatível com uma variedade de marcas e modelos de impressoras, nosso pó para toner garante resultados consistentes e profissionais. Renove o seu toner e desfrute de impressões de alta resolução com o nosso pó de toner premium. Faça seu pedido hoje mesmo e eleve a qualidade das suas impressões para o próximo nível!',
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
    <section aria-label="card dos serviços">
      {services.map((service, index) => (
        <CardSession
          key={index}
          aria-label="card dos serviços"
          onClick={() => handleCardClick(index)}
        >
          <DescriptionIcon onClick={() => handleCardClick(index)} />
          <h2>{service.name}</h2>
          <img src={service.photo} alt={service.name} />
          <h3>Preço: {service.price}</h3>
        </CardSession>
      ))}
      {selectedCardIndex !== null && (
        <FullScreenCard>
          <p>{services[selectedCardIndex].description}</p>
          <ButtonIcon onClick={handleFullScreenCardClose} />
        </FullScreenCard>
      )}
    </section>
  );
}
