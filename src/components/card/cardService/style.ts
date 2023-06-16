import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { FaQuestionCircle } from 'react-icons/fa';

export const CardSession = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 2px #ef1d2a;
  margin: 30px 0;
  transition: all 0.3s ease;

  img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.5rem !important;
    text-align: center;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3rem !important;
    text-align: center;
    margin: 10px 0;
    line-height: 1.5;
  }

  p {
    text-align: justify;
    font-size: 1.3rem;
    margin: 5px 10px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    margin: 20px auto;
    width: 90%;

    img {
      width: 250px;
      height: 250px;
      margin: 0 auto;
    }

    h2 {
      font-size: 1.1rem !important;
    }

    h3 {
      font-size: 1rem !important;
    }

    p {
      font-size: 1rem !important;
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
    font-size: 2rem;
    line-height: 1.5;
    margin: 0 15%;
  }

  @media (max-width: 600px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const ButtonIcon = styled(AiOutlineClose)`
  color: white;
  cursor: pointer;
  font-size: 50px;
  z-index: 1;
  margin-top: 20px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    color: red;
  }
`;

export const DescriptionIcon = styled(FaQuestionCircle)`
  position: relative;
  color: #000000;
  cursor: pointer;
  font-size: 20px;
  left: 310px;

  @media (max-width: 600px) {
    left: 90%;
  }
`;
