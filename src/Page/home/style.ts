import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding-bottom: 10px;
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
