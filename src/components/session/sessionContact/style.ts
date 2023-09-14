import styled from 'styled-components';

export const ContactSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  max-width: 1440px;

  div {
    display: flex;
    text-align: center;
  }

  h2 {
    font-size: 32px;
  }


  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 22px;
    margin: 30px 40px 10px;
  }

  h3 {
    display: flex;
    font-size: 22px;
    align-items: center;
  }

  p {
    display: flex;
    font-size: 22px;
    align-items: center;
  }

  span {
    margin-right: 5px;
  }

  @media only screen and (max-width: 600px) {
    
    div{
      flex-direction: column;
      margin-top: 10px;
    }

    h2 {
      font-size: 22px;
      margin: auto;
    }

    h3{
      font-size: 16px;
    }

    a {
      font-size: 16px;
      margin: 5px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
