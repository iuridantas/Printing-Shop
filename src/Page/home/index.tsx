import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionInitial } from '../../components/session/sessionInitial';
import { Container, WhatsAppButton, WhatsApp } from './style';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <WhatsAppButton
        href="https://api.whatsapp.com/send?phone=5577988621654&text=Ol%C3%A1%20JPrint%20Digital,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Número do WhatsApp de JPrint Digital"
        title="Número do WhatsApp de JPrint Digital"
      >
        <WhatsApp
          className="whatsApp"
          alt="Ícone representando o WhatsApp de JPrint Digital"
        />
      </WhatsAppButton>
      <SessionInitial />
      <SessionAboutUs/>
    </Container>
  );
}
