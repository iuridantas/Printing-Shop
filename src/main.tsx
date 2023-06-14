import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import GlobalStyle from './styles/global';
import { Footer } from './components/footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
);
