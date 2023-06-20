import styled, { keyframes } from 'styled-components';
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
  left: 96%;
  z-index: 9999;

  @media (max-width: 600px) {
    top: 85%;
    left: 2%;
  }
`;

export const WhatsApp = styled(ImWhatsapp)`
  font-size: 50px;
  border-radius: 30px;
  padding: 3px;
  color: white;
  background-color: green;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const LoaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 15% 0;

  @media (max-width: 600px) {
    margin: 50% 0;
  }
`;

export const animate_2 = keyframes`
  0% {
    transform: translateY(250px);
    filter: hue-rotate(0deg);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(250px);
    filter: hue-rotate(180deg);
  }
`;

export const Slider = styled.div<{ i: number }>`
  overflow: hidden;
  background-color: white;
  margin: 0 15px;
  height: 80px;
  width: 20px;
  border-radius: 30px;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 30px #fff,
    inset -5px -5px 10px rgba(0, 0, 255, 0.1),
    inset 5px 5px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 420px 0 400px #2697f3,
      inset 0px 0px 0px rgba(0, 0, 0, 0.1);
    animation: ${animate_2} 2.5s ease-in-out infinite;
    animation-delay: calc(-0.5s * ${(props) => props.i});
  }
`;
