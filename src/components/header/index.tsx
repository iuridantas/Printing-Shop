import { Container } from './style';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export function Header() {
  useEffect(() => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event: MouseEvent) {
      if (nav) {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        (event.currentTarget as HTMLElement).setAttribute(
          'aria-expanded',
          active.toString(),
        );
        if (active) {
          (event.currentTarget as HTMLElement).setAttribute(
            'aria-label',
            'Fechar Menu',
          );
        } else {
          (event.currentTarget as HTMLElement).setAttribute(
            'aria-label',
            'Abrir Menu',
          );
        }
      }
    }

    btnMobile?.addEventListener('click', toggleMenu);

    const navLinks = document.querySelectorAll('#menu a');

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        if (target) {
          const targetElement = document.getElementById(target);
          if (targetElement) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const targetOffset = targetElement.offsetTop - headerHeight;
            window.scrollTo({
              top: targetOffset,
              behavior: 'smooth',
            });
          }
        }
        if (nav) {
          nav.classList.remove('active');
        }
      });
    });

    return () => {
      btnMobile?.removeEventListener('click', toggleMenu);

      navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const target = link.getAttribute('href');
          if (target) {
            const targetElement = document.getElementById(target);
            if (targetElement) {
              const headerHeight = document.querySelector('header')?.offsetHeight || 0;
              const targetOffset = targetElement.offsetTop - headerHeight;
              window.scrollTo({
                top: targetOffset,
                behavior: 'smooth',
              });
            }
          }
          if (nav) {
            nav.classList.remove('active');
          }
        });
      });
    };
  }, []);

  return (
    <header>
      <Container aria-label="Menu de navegação principal">
        <img
          src="/img/logo.jpeg"
          alt="logo"
          aria-label="Logotipo da JPrint Digital"
        />
        <nav id="nav">
          <button
            id="btn-mobile"
            aria-label="Abrir Menu"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
          >
            <AiOutlineMenu />
          </button>
          <ul id="menu" role="menu">
            <li>
              <a href="inicio" className="container-link">
                Início
              </a>
            </li>
            <li>
              <a href="sobre-nos" className="container-link">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="produtos-servicos" className="container-link">
                Produtos e Serviços
              </a>
            </li>
            <li>
              <a href="horarios" className="container-link">
                Horários
              </a>
            </li>
            <li>
              <a href="contato" className="container-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
