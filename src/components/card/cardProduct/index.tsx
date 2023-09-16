import { useState } from 'react';
import {
  CardSession,
  FullScreenCard,
  ButtonIcon,
  DescriptionIcon,
} from './style';
import products from '../../json/products.json';

export function CardProduct() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<any>(null);

  const handleCardClick = (index: any) => {
    setSelectedCardIndex(index);
  };

  const handleFullScreenCardClose = () => {
    setSelectedCardIndex(null);
  };

  return (
    <section aria-label="card dos produtos">
      {products.map((product, index) => (
        <CardSession key={index}>
          <DescriptionIcon
            onClick={() => handleCardClick(index)}
            aria-label={`Abrir descrição de ${product.name}`}
          />
          <h2>{product.name}</h2>
          <img src={product.photo} alt={`Imagem de ${product.name}`} />
          <h3>Preço: {product.price}</h3>
        </CardSession>
      ))}
      {selectedCardIndex !== null && (
        <FullScreenCard>
          <p>{products[selectedCardIndex].description}</p>
          <ButtonIcon
            onClick={handleFullScreenCardClose}
            aria-label="Fechar descrição"
          />
        </FullScreenCard>
      )}
    </section>
  );
}
