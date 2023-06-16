import { InitialSession } from './style';

export function SessionInitial() {
  return (
      <section aria-label="Seção Inicial do Site" id="inicio">
        <InitialSession>
          <img
            src="/img/fundo.jpg"
            alt="Foto de fundo"
            aria-label="Foto de fundo"
          />
          <div className="text-container">
            <h1 className="front-heading">JPrint Digital</h1>
            <h2 className="sub-heading">
              Transformando suas ideias em realidade.
            </h2>
          </div>
        </InitialSession>
      </section>
  );
}
