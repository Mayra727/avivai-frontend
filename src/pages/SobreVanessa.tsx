import "./SobreVanessa.css";

export default function SobreVanessa() {

  return (

    <div className="sobre-page">

      <section className="sobre-hero">

        <div className="sobre-content">

          <span className="sobre-badge">
            Conheça Vanessa Nonato
          </span>

          <h1>
            Uma jornada de intimidade,
            cura emocional e transformação
            através de Deus.
          </h1>

          <p>
            Pastora, mentora, palestrante
            e escritora cristã apaixonada
            por conduzir pessoas
            ao relacionamento real
            com o Espírito Santo.
          </p>

        </div>

        <div className="sobre-image-wrapper">

          <img
            src="/vanessa.jpg"
            alt="Vanessa Nonato"
            className="sobre-image"
          />

        </div>

      </section>

      <section className="video-section">

        <div className="video-content">

          <h2>
            Conheça minha história
          </h2>

          <p>
            Assista ao vídeo de apresentação
            e descubra a missão por trás da AVIVAI.
          </p>

          <div className="video-wrapper">

            <video
              controls
              className="video-player"
            >

              <source
                src="/video-vanessa.mp4"
                type="video/mp4"
              />

            </video>

          </div>

        </div>

      </section>

      <section className="missao-section">

        <div className="missao-content">

          <h2>
            Minha missão
          </h2>

          <p>
            Conduzir cristãos que se sentem
            travados emocionalmente
            e espiritualmente
            ao resgate da intimidade com Deus,
            através de uma metodologia
            que une Neurociência
            e Fundamentos Bíblicos.
          </p>

        </div>

      </section>

      <section className="sobre-cta">

        <h2>
          Sua transformação começa aqui
        </h2>

        <a
          href="/cadastro"
          className="sobre-btn"
        >
          Começar minha jornada
        </a>

      </section>

    </div>

  );

}