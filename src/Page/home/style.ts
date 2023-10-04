import styled, { keyframes } from 'styled-components';
import { ImWhatsapp } from 'react-icons/im';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding-bottom: 8px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 60px;
  }
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  top: 91%;
  left: 96%;
  z-index: 9999;

  @media only screen and (max-width: 600px) {
    top: 85%;
    left: 2%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    top: 40%;
    left: 93%;
  }
`;

export const WhatsApp = styled(ImWhatsapp)`
  font-size: 50px;
  border-radius: 30px;
  padding: 3px;
  color: white;
  background-color: green;

  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const LoaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 15% 0;

  @media only screen and (max-width: 600px) {
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
    content: '';
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
  color: green;
  border-radius: 8px;
  margin: 5px;
  top: 80%;
  right: 5%;

  a + a {
    border-left: 1px solid #000;
    padding-left: 10px;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 0 5px;
    padding: 5px;
  }

  .phoneButton {
    display: none;
  }

  .whatsApp {
    font-size: 80px;
    color: green;
  }

  .phone {
    font-size: 80px;
    color: green;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 30px;
    border: 1px solid black;
    top: 90%;
    right: 33%;

    .phoneButton {
      display: flex;
    }

    .whatsApp,
    .phone {
      font-size: 35px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 30px;
    border: 1px solid black;
    top: 88%;
    right: 35%;

    .phoneButton {
      display: flex;
    }

    .whatsApp,
    .phone {
      font-size: 80px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 30px;
    border: 1px solid black;
    top: 91%;
    right: 38%;

    .phoneButton {
      display: flex;
    }

    .whatsApp,
    .phone {
      font-size: 80px;
    }
  }
`;
