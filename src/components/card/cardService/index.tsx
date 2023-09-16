import { useState } from 'react';
import {
  CardSession,
  FullScreenCard,
  ButtonIcon,
  DescriptionIcon,
} from './style';
import services from '../../json/services.json';

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
        <CardSession key={index}>
          <DescriptionIcon
            onClick={() => handleCardClick(index)}
            aria-label={`Abrir descrição de ${service.name}`}
          />
          <h2>{service.name}</h2>
          <img src={service.photo} alt={`Imagem de ${service.name}`} />
          <h3>Preço: {service.price}</h3>
        </CardSession>
      ))}
      {selectedCardIndex !== null && (
        <FullScreenCard>
          <p>{services[selectedCardIndex].description}</p>
          <ButtonIcon
            onClick={handleFullScreenCardClose}
            aria-label="Fechar descrição"
          />
        </FullScreenCard>
      )}
    </section>
  );
}
