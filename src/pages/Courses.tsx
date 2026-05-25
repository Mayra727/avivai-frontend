import { useNavigate } from "react-router-dom";

export default function Livro2Page() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        fontFamily:"sans-serif",
        background:"#F8F5F1",
        color:"#6E4638"
      }}
    >

      {/* HERO */}

      <section
        style={{
          padding:"80px 20px 40px",
          textAlign:"center"
        }}
      >

        <div
          style={{
            maxWidth:"1000px",
            margin:"0 auto"
          }}
        >

          <h1
            style={{
              fontSize:"42px",
              lineHeight:"1.3",
              fontWeight:"600"
            }}
          >
            Apresentação da Coleção do Caminho da Intimidade
          </h1>

          <p
            style={{
              margin:"18px auto 0",
              fontSize:"20px",
              lineHeight:"1.6",
              color:"#7A655B",
              maxWidth:"800px"
            }}
          >
            Para quem já começou…
            mas percebeu que ainda há mais profundidade.
          </p>

        </div>

      </section>

      {/* HERO CONTENT */}

      <section
        style={{
          padding:"40px 20px 100px"
        }}
      >

        <div
          style={{
            maxWidth:"1300px",
            margin:"0 auto",
            display:"flex",
            gap:"80px",
            alignItems:"flex-start",
            flexWrap:"wrap"
          }}
        >

          {/* VIDEO */}

          <div
            style={{
              flex:"1",
              minWidth:"320px",
              position:"sticky",
              top:"120px"
            }}
          >

            <video

              controls

             preload="metadata"

              poster="/images/livro2-capa.jpg"

              style={{

  width:"100%",

  maxWidth:"500px",

  height:"auto",

  borderRadius:"32px",

  background:"transparent",

  objectFit:"cover",

  boxShadow:
  "0 20px 50px rgba(0,0,0,0.18)"

}}
            >

              <source
                src="/colecao-caminho-da-intimidade.mp4"
                type="video/mp4"
              />

            </video>

          </div>

          {/* TEXT */}

          <div
            style={{
              flex:"1.3",
              minWidth:"320px",
              display:"flex",
              flexDirection:"column",
              gap:"80px"
            }}
          >

            {/* CONTINUAÇÃO */}

            <div>

              <h2
                style={{
                  fontSize:"34px",
                  fontWeight:"600",
                  lineHeight:"1.3",
                  marginBottom:"24px"
                }}
              >
                A continuação da jornada
              </h2>

              <div
                style={{
                  display:"flex",
                  flexDirection:"column",
                  gap:"18px",
                  fontSize:"20px",
                  lineHeight:"1.8",
                  color:"#6E4638"
                }}
              >

                <p>
                  Você já deu os primeiros passos.
                </p>

                <p>
                  Já começou a perceber mudanças.
                </p>

                <p>
                  Mas também percebeu que existe
                  um nível mais profundo.
                </p>

                <p>
                  Um lugar onde a fé deixa de ser esforço…
                  e se torna natureza.
                </p>

              </div>

            </div>

            {/* O QUE É */}

            <div>

              <h2
                style={{
                  fontSize:"34px",
                  fontWeight:"600",
                  lineHeight:"1.3",
                  marginBottom:"24px"
                }}
              >
                O que é o Volume 2
              </h2>

              <div
                style={{
                  display:"flex",
                  flexDirection:"column",
                  gap:"18px",
                  fontSize:"20px",
                  lineHeight:"1.8",
                  color:"#6E4638"
                }}
              >

                <p>
                  O Volume 2 é a continuidade do caminho.
                </p>

                <p>
                  Aqui, você não está mais começando.
                </p>

                <p>
                  Você está aprofundando.
                </p>

                <p>
                  É onde a prática se torna constância,
                  e a constância se transforma em estilo de vida.
                </p>

              </div>

            </div>

            {/* APROFUNDAMENTO */}

            <div>

              <h2
                style={{
                  fontSize:"34px",
                  fontWeight:"600",
                  lineHeight:"1.3",
                  marginBottom:"24px"
                }}
              >
                O que você vai aprofundar
              </h2>

              <div
                style={{
                  display:"grid",
                  gap:"18px",
                  fontSize:"20px",
                  lineHeight:"1.8"
                }}
              >

                <div>
                  ✔ Consistência espiritual no dia a dia
                </div>

                <div>
                  ✔ Maturidade emocional aplicada à fé
                </div>

                <div>
                  ✔ Discernimento espiritual
                </div>

                <div>
                  ✔ Vida guiada e não apenas reativa
                </div>

                <div>
                  ✔ Intimidade contínua com Deus
                </div>

              </div>

            </div>

            {/* DIFERENCIAL */}

            <div>

              <h2
                style={{
                  fontSize:"34px",
                  fontWeight:"600",
                  lineHeight:"1.3",
                  marginBottom:"24px"
                }}
              >
                Por que continuar a jornada
              </h2>

              <div
                style={{
                  display:"flex",
                  flexDirection:"column",
                  gap:"18px",
                  fontSize:"20px",
                  lineHeight:"1.8"
                }}
              >

                <p>
                  Porque começar é importante.
                </p>

                <p>
                  Mas permanecer é o que transforma.
                </p>

                <p>
                  O Volume 2 foi criado para evitar
                  que você volte ao automático,
                  ajudando você a consolidar uma vida
                  espiritual firme e constante.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA FINAL */}

      <section
        style={{
          padding:"100px 20px",
          textAlign:"center",
          background:"#EFE7E1"
        }}
      >

        <h2
          style={{
            fontSize:"42px",
            fontWeight:"600",
            color:"#6E4638"
          }}
        >
          A profundidade não está no começo
        </h2>

        <p
          style={{
            marginTop:"16px",
            fontSize:"22px",
            color:"#7A655B"
          }}
        >
          Está na continuidade.
        </p>

        <button

          onClick={() =>
            navigate("/mentoria")
          }

          style={{

            marginTop:"35px",

            padding:"20px 50px",

            background:"#8B4533",

            color:"white",

            borderRadius:"16px",

            border:"none",

            fontSize:"20px",

            cursor:"pointer",

            boxShadow:
            "0 15px 40px rgba(0,0,0,0.18)"

          }}

        >
          Quero ir mais fundo
        </button>

      </section>

    </div>

  );

}