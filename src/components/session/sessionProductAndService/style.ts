import styled from 'styled-components';

export const ProductAndServiceSession = styled.div`
  margin: 10px auto;
  max-width: 1440px;

  h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    text-align: center;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 19px;
      margin: 0 10px;
    }
  }
`;
