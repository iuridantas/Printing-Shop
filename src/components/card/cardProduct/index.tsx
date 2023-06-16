import { useState } from 'react';
import {
  CardSession,
  FullScreenCard,
  ButtonIcon,
  DescriptionIcon,
} from './style';

const products = [
  {
    name: 'Banner',
    photo: 'img/banner.jpg',
    description:
      'Descubra o poder dos banners personalizados! Nossos banners de impressão digital são a maneira perfeita de promover sua marca, eventos e ofertas especiais. Com cores vibrantes, qualidade excepcional e durabilidade garantida, nossos banners capturam a atenção do seu público-alvo. Deixe sua mensagem ser vista com estilo e impacto. Encomende seu banner personalizado hoje mesmo!',
    price: 'R$70,00/m²',
  },
  {
    name: 'Placa',
    photo: 'img/placa.jpeg',
    description:
      'Destaque-se com uma placa personalizada! Nossas placas de impressão digital são projetadas para transmitir sua mensagem de forma clara e impactante. Com qualidade superior de impressão, durabilidade excepcional e materiais de alta qualidade, nossas placas são perfeitas para sinalização externa, direcionamento de clientes e promoção da sua marca. Aumente sua visibilidade e impressione seus clientes com uma placa personalizada. Faça sua encomenda hoje mesmo!',
    price: 'R$75,00/m²',
  },
  {
    name: 'Adesivo Vinil',
    photo: 'img/adesivo_vinil.jpeg',
    description:
      'Transforme sua criatividade em realidade com adesivos de vinil personalizados! Nossos adesivos de vinil são perfeitos para expressar sua personalidade, promover sua marca ou decorar qualquer superfície lisa. Com qualidade de impressão excepcional, durabilidade resistente e aderência confiável, nossos adesivos de vinil são versáteis e ideais para uso interno ou externo. Adicione um toque único em qualquer lugar com nossos adesivos de vinil personalizados. Faça seu pedido hoje mesmo e dê vida às suas ideias!',
    price: 'R$70,00/m²',
  },
  {
    name: 'Talão',
    photo: 'img/talão.png',
    description:
      'Simplifique suas transações comerciais com talões personalizados! Nossos talões são projetados para atender às suas necessidades comerciais, oferecendo uma solução prática e profissional. Com layout personalizado, numeração sequencial e opções de personalização, nossos talões são perfeitos para faturas, recibos, pedidos e muito mais. Mantenha seus registros organizados e transmita uma imagem profissional com nossos talões personalizados. Faça seu pedido hoje mesmo e simplifique suas operações comerciais!',
    price: 'A partir de R$108,00',
  },
  {
    name: 'Cartão de Visita',
    photo: 'img/cartão_de_visita.png',
    description:
      'Faça uma primeira impressão memorável com nossos cartões de visita personalizados! Nossos cartões de visita são projetados para destacar sua marca e transmitir profissionalismo. Com designs personalizados, qualidade de impressão excepcional e opções de acabamento premium, nossos cartões são perfeitos para deixar uma marca duradoura. Esteja preparado para todas as oportunidades de networking e impressione seus contatos com nossos cartões de visita personalizados. Faça seu pedido hoje mesmo e deixe sua marca onde quer que vá!',
    price: 'A partir de R$110,00',
  },
  {
    name: 'Perfurado de Carro',
    photo: 'img/perfurado_de_carro.png',
    description:
      'Divulgue sua mensagem em grande estilo com nosso adesivo perfurado para carro! Nosso perfurado de carro é uma solução inovadora para promover sua marca ou negócio enquanto você está em movimento. Com a combinação perfeita de visibilidade e privacidade, nosso adesivo perfurado permite que você exiba sua mensagem de forma criativa e impactante. Aderência de qualidade, fácil aplicação e durabilidade garantida fazem do nosso adesivo perfurado a escolha ideal para transformar seu veículo em uma poderosa ferramenta de marketing. Personalize seu carro com nosso adesivo perfurado e chame a atenção por onde passar. Faça seu pedido hoje mesmo e impulsione sua visibilidade!',
    price: 'R$70,00/m²',
  },
  {
    name: 'Impressão de Rótulos',
    photo: 'img/impressão_de_rótulos.jpg',
    description:
      'Destaque seus produtos com rótulos personalizados de alta qualidade! Nossa impressão de rótulos oferece uma maneira profissional e atrativa de apresentar suas mercadorias. Com designs personalizados, materiais duráveis e impressão de alta resolução, nossos rótulos são perfeitos para realçar a identidade da sua marca e transmitir informações importantes aos seus clientes. Seja para embalagens, frascos ou recipientes, nossos rótulos impressos são a solução ideal para garantir que seus produtos se destaquem nas prateleiras. Faça seu pedido de impressão de rótulos hoje mesmo e adicione um toque especial aos seus produtos!',
    price: 'R$80,00/m²',
  },
  {
    name: 'Papel Fotográfico',
    photo: 'img/papel_foto.jpeg',
    description:
      'Proteja suas memórias com nossa embalagem de papel fotográfico! Nossa embalagem de alta qualidade é projetada para armazenar e preservar suas fotos preciosas. Feita com materiais duráveis e resistentes, nossa embalagem protege suas fotos contra danos, poeira e umidade. Com um design elegante e funcional, você pode armazenar e organizar suas fotos de forma conveniente. Mantenha suas memórias vivas e em segurança com nossa embalagem de papel fotográfico. Faça seu pedido hoje mesmo e preserve suas lembranças mais preciosas!',
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
        <CardSession key={index} aria-label="card dos produtos">
          <DescriptionIcon onClick={() => handleCardClick(index)} />
          <h2>{product.name}</h2>
          <img src={product.photo} alt={product.name} />
          <h3>Preço: {product.price}</h3>
        </CardSession>
      ))}
      {selectedCardIndex !== null && (
        <FullScreenCard>
          <p>{products[selectedCardIndex].description}</p>
          <ButtonIcon onClick={handleFullScreenCardClose} />
        </FullScreenCard>
      )}
    </section>
  );
}
