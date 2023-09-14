import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { FaQuestionCircle } from 'react-icons/fa';

export const CardSession = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 2px #ef1d2a;
  margin: 20px 0;
  transition: all 0.3s ease;
  width: 320px;

  img {
    width: 200px;
    height: 200px;
    margin: 10px auto;
  }

  h2 {
    font-size: 24px !important;
    text-align: center;
  }

  h3 {
    font-size: 21px !important;
    text-align: center;
    line-height: 1.5;
  }

  p {
    text-align: justify;
    font-size: 21px;
    margin: 5px 10px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px auto;
    width: 90%;

    img {
      width: 250px;
      height: 250px;
    }

    h2 {
      font-size: 18px !important;
    }

    h3 {
      font-size: 16px !important;
    }

    p {
      font-size: 16px !important;
    }
  }
`;

export const FullScreenCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  color: white;

  p {
    text-align: justify;
    font-size: 32px;
    line-height: 1.5;
    margin: 0 15%;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 16px;
    }
  }
`;

export const ButtonIcon = styled(AiOutlineClose)`
  color: white;
  cursor: pointer;
  font-size: 32px;
  z-index: 1;
  margin-top: 20px;

  &:hover {
    color: red;
  }

  @media only screen and (max-width: 600px) {
    color: red;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const DescriptionIcon = styled(FaQuestionCircle)`
  position: relative;
  color: #000000;
  cursor: pointer;
  font-size: 20px;
  top: 5px;
  left: 285px;

  @media only screen and (max-width: 600px) {
    left: 90%;
  }
`;
