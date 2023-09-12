import { useState, useEffect } from 'react';
import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionContact } from '../../components/session/sessionContact';
import { SessionInitial } from '../../components/session/sessionInitial';
import { SessionProductAndService } from '../../components/session/sessionProductAndService';
import { SessionTimes } from '../../components/session/sessionTimes';
import {
  Container,
  WhatsAppButton,
  WhatsApp,
  LoaderSection,
  Slider,
} from './style';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isContentLoaded = sessionStorage.getItem('isContentLoaded');

    if (isContentLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('isContentLoaded', 'true');
      }, 2000);
    }
  }, []);

  return (
    <Container aria-label="Página inicial">
      {isLoading ? (
        <LoaderSection>
          <Slider i={0} />
          <Slider i={1} />
          <Slider i={2} />
          <Slider i={3} />
          <Slider i={4} />
        </LoaderSection>
      ) : (
        <>
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
          <SessionAboutUs />
          <SessionProductAndService />
          <SessionTimes />
          <SessionContact />
        </>
      )}
    </Container>
  );
}
