import { CardProduct } from '../../card/cardProduct';
import { CardService } from '../../card/cardService';
import { ProductAndServiceSession } from './style';

export function SessionProductAndService() {
  return (
    <section aria-label="Seção dos produtos e serviços">
      <ProductAndServiceSession id="produtos-servicos">
        <h2>Nossos produtos e serviços</h2>
        <h3>Serviços de Impressão Digital</h3>
        <section aria-label="card dos produtos">
          <CardProduct />
        </section>
        <h3>Serviços de Recarga e Venda de Suprimentos</h3>
        <section aria-label="card dos serviços">
          <CardService />
        </section>
      </ProductAndServiceSession>
    </section>
  );
}
