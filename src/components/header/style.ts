import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  border-bottom: dotted;
  background-color: #fff !important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  img {
    width: 130px;
    height: 130px;
  }

  ul {
    padding: 0px;
    display: flex;
    list-style: none;
    gap: 16px;
  }

  .container-link {
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: #000000;
    font-size: 1.5rem;
    border-radius: 8px;
    width: auto;
    padding: 10px;
    border: none;
    box-shadow: 0px 2px 2px #ef1d2a;
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
  }

  .container-link:last-of-type {
    margin-right: 0;
  }

  .container-link:hover {
    color: #ef1d2a;
    box-shadow: 0px 3px 3px#000000;
    transform: translate(0px, -2px);
  }

  button {
    display: none;
  }

  @media (max-width: 600px) {
    padding: 16px 8px;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 168px;
      right: -100%;
      height: 100vh;
      width: 60%;
      background-color: #ffffff;
      transition: 0.6s;
      z-index: 1000;
      margin-right: 8px;
    }

    nav.active ul {
      right: 0;
    }

    a {
      font-size: 1.4rem;
      padding: 16px 0;
    }

    button {
      display: flex;
      font-size: 2rem;
      background: none;
      color: #000000;
      border: none;
      cursor: pointer;
    }
  }
`;
