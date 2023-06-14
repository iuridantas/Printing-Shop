import styled from 'styled-components';

export const InitialSession = styled.div`
  display: flex;
  justify-content: center;

  .text-container {
    position: absolute;
    top: 15%;
    text-align: center;
    z-index: 2;
  }

  .front-heading {
    color: #000000;
    font-size: 3rem;
  }

  .sub-heading {
    color: #000000;
    font-size: 2rem;
  }

  img {
    width: 1540px;
    height: 500px;
    position: relative;
    z-index: 1;
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    img {
    width: 100%;
    height: 250px;
  }

  .text-container {
    top: 2%;
  }

  .front-heading {
    font-size: 2rem;
  }

  .sub-heading {
    font-size: 1.2rem;
  }
  }
`;
