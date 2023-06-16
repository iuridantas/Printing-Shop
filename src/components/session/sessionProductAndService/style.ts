import styled from 'styled-components';

export const ProductAndServiceSession = styled.div`
  margin-top: 20px;
  
  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  section {
    display: grid;
    grid-template-columns: repeat(4, 346px);
    gap: 20px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.2rem;
      margin: 0 10px;
    }

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;
