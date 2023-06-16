import styled from 'styled-components';

export const ContactSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  div {
    display: flex;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }


  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
    margin: 30px 40px 10px;
  }

  h3 {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
  }

  p {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
  }

  span {
    margin-right: 5px;
  }

  @media (max-width: 600px) {
    
    div{
      flex-direction: column;
      margin-top: 10px;
    }

    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    h3{
      font-size: 1rem;
    }

    a {
      font-size: 1rem;
      margin: 5px 0;
    }

    p {
      font-size: 1rem;
    }
  }
`;
