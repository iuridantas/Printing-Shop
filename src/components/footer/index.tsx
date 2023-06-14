import { Container } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer>
      <Container aria-label="Links de mídia social">
        <section>
          <div>
            <a
              href="https://instagram.com/j.p_impressaodigital?igshid=MzRlODBiNWFlZA=="
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Perfil do Instagram de JPrint Digital"
              title="Perfil do Instagram de JPrint Digital"
            >
              <FaInstagram
                className="instagram"
                alt="Ícone do Instagram de JPrint Digital"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5577988621654&text=Ol%C3%A1%20JPrint%20Digital,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Número do WhatsApp de JPrint Digital"
              title="Número do WhatsApp de JPrint Digital"
            >
              <FaWhatsapp
                className="whatsApp"
                alt="Ícone do WhatsApp de JPrint Digital"
              />
            </a>
          </div>
        </section>
        <section>
          <div>
            <p>JPrint Digital - Todos os direitos reservados.</p>
          </div>
        </section>
      </Container>
    </footer>
  );
}
