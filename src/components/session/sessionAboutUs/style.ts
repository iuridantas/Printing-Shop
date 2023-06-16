import styled from 'styled-components';

export const AboutUsSession = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    margin: 10px 30px;
    text-align: justify;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    p {
      margin: 10px 20px;
      font-size: 1rem;
    }
  }
`;
