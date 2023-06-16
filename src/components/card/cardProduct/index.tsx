import { useState } from 'react';
import { CardSession, FullScreenCard, ButtonIcon } from './style';

const products = [
  {
    name: 'Banner',
    photo: 'img/banner.jpg',
    description:
      'Produzimos banners personalizados em diferentes tamanhos e materiais, garantindo uma comunicação visual impactante para promover seu negócio ou evento.',
    price: 'R$70,00/m²',
  },
  {
    name: 'Placa',
    photo: 'img/placa.jpeg',
    description:
      'Oferecemos serviços de impressão em placas duráveis e profissionais, ideais para sinalização externa, direcionamento de clientes e identificação de estabelecimentos.',
    price: 'R$75,00/m²',
  },
  {
    name: 'Adesivo Vinil',
    photo: 'img/adesivo_vinil.jpeg',
    description:
      'Imprimimos adesivos em vinil de alta qualidade, perfeitos para decoração, identificação de produtos, sinalização interna e externa, entre outros fins personalizados.',
    price: 'R$70,00/m²',
  },
  {
    name: 'Talão',
    photo: 'img/talão.png',
    description:
      'Produzimos talões personalizados para faturas, recibos, orçamentos e outros documentos comerciais, ajudando você a manter seus registros organizados e profissionais.',
    price: 'R$70,00 por unidade',
  },
  {
    name: 'Cartão de Visita',
    photo: 'img/cartão_de_visita.png',
    description:
      'Oferecemos serviços de impressão de cartões de visita personalizados, permitindo que você transmita uma imagem profissional e memorável aos seus contatos comerciais.',
    price: 'R$70,00 por unidade',
  },
  {
    name: 'Perfurado de Carro',
    photo: 'img/perfurado_de_carro.jpg',
    description:
      'Realizamos a impressão de adesivos perfurados para veículos, permitindo que você aproveite o espaço em seu carro para divulgar sua marca ou mensagem promocional.',
    price: 'R$70,00/m²',
  },
  {
    name: 'Impressão de Rótulos',
    photo: 'img/impressão_de_rótulos.jpg',
    description:
      'Oferecemos soluções de impressão de rótulos personalizados para embalagens, produtos e etiquetas de identificação, ajudando a destacar sua marca no mercado.',
    price: 'R$80,00/m²',
  },
  {
    name: 'Papel Foto',
    photo: 'img/papel_foto.jpeg',
    description:
      'Fornecemos papéis fotográficos de alta qualidade, permitindo que você preserve suas memórias de forma duradoura.',
    price: 'R$70,00 por unidade',
  },
];

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
          <p>{products[selectedCardIndex].description}</p>
          <ButtonIcon onClick={handleFullScreenCardClose}/>
        </FullScreenCard>
      )}
    </section>
  );
}
