import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionContact } from '../../components/session/sessionContact';
import { SessionInitial } from '../../components/session/sessionInitial';
import { SessionProductAndService } from '../../components/session/sessionProductAndService';
import { SessionTimes } from '../../components/session/sessionTimes';
import { Container, Buttons } from './style';
import { FaWhatsappSquare, FaPhoneAlt } from 'react-icons/fa';

export function Home() {
  const phoneNumber = '077988621654';

  const handlePhoneButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Container aria-label="Página inicial">
      <Buttons>
        <a
          href="https://api.whatsapp.com/send?phone=5577988621654&text=Ol%C3%A1%20JPrint%20Digital,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Número do WhatsApp de JPrint Digital"
          title="WhatsApp de JPrint Digital"
        >
          <FaWhatsappSquare
            className="whatsApp"
            alt="Ícone representando o WhatsApp de JPrint Digital"
          />
        </a>
        <a className="phoneButton" onClick={handlePhoneButtonClick}>
          <FaPhoneAlt
            className="phone"
            alt="Ícone representando o telefone de JPrint Digital"
          />
        </a>
      </Buttons>
      <SessionInitial />
      <SessionAboutUs />
      <SessionProductAndService />
      <SessionTimes />
      <SessionContact />
    </Container>
  );
}
