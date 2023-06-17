import { ContactSession } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function SessionContact() {
  return (
    <section aria-label="Contato" id="contato">
      <ContactSession>
        <h2>Entre em contato</h2>
        <div>
          <a
            href="https://instagram.com/jprint_digital?igshid=MzRlODBiNWFlZA=="
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Perfil do Instagram de JPrint Digital"
            title="Perfil do Instagram de JPrint Digital"
          >
            <h3>
              <FaInstagram
                className="instagram"
                alt="Ícone representando o perfil do Instagram de JPrint Digital"
              />
              <span>Instagram</span>
            </h3>
            <p>jprint_digital</p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5577988621654&text=Ol%C3%A1%20JPrint%20Digital,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Número do WhatsApp de JPrint Digital"
            title="Número do WhatsApp de JPrint Digital"
          >
            <h3>
              <FaWhatsapp
                className="whatsApp"
                alt="Ícone representando o WhatsApp de JPrint Digital"
              />
              <span />
              WhatsApp
            </h3>
            <p>(77) 9 8862-1654</p>
          </a>
          <a
            href="mailto:jprintdigital77@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email de JPrint Digital"
            title="Email de JPrint Digital"
          >
            <h3>
              <AiOutlineMail
                className="email"
                alt="Ícone representando o Email de JPrint Digital"
              />
              <span />
              Email
            </h3>
            <p>jprintdigital77@gmail.com</p>
          </a>
        </div>
      </ContactSession>
    </section>
  );
}
