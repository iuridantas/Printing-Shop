import styled from 'styled-components';

export const TimesSession = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  div {
    margin-top: 20px;
  }

  button {
    cursor: pointer;
    color: #ef1d2a;
    font-size: 1.5rem;
    margin-top: 10px;
    border-radius: 8px;
    width: auto;
    padding: 5px;
    border: none;
    transition: all 0.3s ease-in-out;
    background: none;
  }

  button:hover {
    box-shadow: 0px 3px 3px#000000;
    transform: translate(0px, -2px);
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    h3 {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      transition: none;
    }

    button:hover {
      box-shadow: none;
      transform: none;
    }
  }
`;
