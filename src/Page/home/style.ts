import styled from 'styled-components';
import { ImWhatsapp } from 'react-icons/im';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px; 
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  top: 91%;
  left: 93%;
  z-index: 9999;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const WhatsApp = styled(ImWhatsapp)`
  font-size: 50px;
  border-radius: 30px;
  padding: 3px;
  color: white;
  background-color: green;
`;
