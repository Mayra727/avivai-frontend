import { useNavigate } from "react-router-dom";

export default function EbookPage() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (

    <div
      style={{
        fontFamily:"sans-serif",
        background:"#F8F5F1"
      }}
    >

      {/* HERO TOPO */}

      <section
        style={{
          padding:"80px 20px 40px",
          textAlign:"center"
        }}
      >

        <h1
          style={{
            fontSize:"42px",
            lineHeight:"1.3",
            color:"#6E4638"
          }}
        >
          Primeiros Conceitos:
          <br />
          O Caminho da Intimidade
        </h1>

        <p
          style={{
            marginTop:"15px",
            fontSize:"20px",
            color:"#7A5A4F"
          }}
        >
          Princípios para uma jornada de descobertas
          rumo à vida plena
        </p>

      </section>

      {/* HERO LIVRO */}

      <section
        style={{
          background:"#F8F5F1"
        }}
      >

        <div
          style={{
            maxWidth:"1400px",
            margin:"0 auto",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"stretch",
            gap:"60px"
          }}
        >

          {/* TEXTO */}

          <div
            style={{
              flex:1,
              padding:"40px 50px 80px"
            }}
          >

            <h2
              style={{
                fontSize:"64px",
                lineHeight:"1",
                color:"#6E4638",
                marginBottom:"30px"
              }}
            >
              A dor silenciosa
            </h2>

            <p
              style={{
                fontSize:"24px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Você ora. Você lê.
              Você tenta fazer o certo.
            </p>

            <p
              style={{
                fontSize:"24px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              E ainda assim, lá por dentro,
              carrega um cansaço silencioso
              que você não consegue explicar.
            </p>

            <p
              style={{
                marginTop:"20px",
                fontSize:"22px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Não é falta de fé.
              Não é falta de esforço.
            </p>

            <p
              style={{
                fontSize:"22px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              É que ninguém te ensinou
              a viver com Deus,
              só a saber sobre Ele.
            </p>

            <p
              style={{
                fontSize:"22px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Existe um abismo entre
              esses dois mundos.
            </p>

            <div style={{ height:"60px" }} />

            <h2
              style={{
                fontSize:"56px",
                lineHeight:"1.1",
                color:"#6E4638",
                marginBottom:"25px"
              }}
            >
              O que é este
              livro vivencial
            </h2>

            <p
              style={{
                fontSize:"22px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Este não é um devocional
              para você folhear e guardar.
            </p>

            <p
              style={{
                fontSize:"22px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              É um livro vivencial,
              criado para tirar a sua espiritualidade
              do campo das ideias
              e plantá-la no solo da sua vida real.
            </p>

            <p
              style={{
                fontSize:"22px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Não é sobre saber.
              É sobre viver.
            </p>

            <button

              onClick={() => {

                if(user){

                  window.open("/ebook.pdf", "_blank");

                } else {

                  navigate("/cadastro");

                }

              }}

              style={{

                marginTop:"40px",

                padding:"20px 36px",

                background:"#B4533A",

                color:"white",

                border:"none",

                borderRadius:"18px",

                cursor:"pointer",

                fontWeight:"700",

                fontSize:"20px"

              }}

            >

              Quero acessar gratuitamente

            </button>

          </div>

          {/* LATERAL MARROM */}

          <div
            style={{
              width:"42%",
              background:"#7A4A3A",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              borderTopLeftRadius:"30px",
              borderBottomLeftRadius:"30px",
              minHeight:"100vh",
              padding:"40px"
            }}
          >

            <div
              style={{
                textAlign:"center"
              }}
            >

              <img
                src="/ebook.png"
                alt="Livro"
                style={{
                  width:"320px",
                  objectFit:"contain"
                }}
              />

              <h2
                style={{
                  color:"white",
                  marginTop:"30px",
                  fontSize:"38px"
                }}
              >
                Primeiros Conceitos
              </h2>

              <p
                style={{
                  color:"#FFE7D9",
                  marginTop:"10px",
                  fontSize:"20px"
                }}
              >
                Gratuito por tempo limitado
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* O QUE VOCÊ VAI VIVENCIAR */}

      <section
        style={{
          padding:"100px 20px"
        }}
      >

        <div
          style={{
            maxWidth:"900px",
            margin:"0 auto"
          }}
        >

          <h2
            style={{
              textAlign:"center",
              color:"#6E4638",
              fontSize:"48px",
              marginBottom:"40px"
            }}
          >
            O que você vai vivenciar
          </h2>

          <div
            style={{
              display:"grid",
              gap:"20px",
              fontSize:"22px",
              color:"#6E4638"
            }}
          >

            <div>✔ Tempo interno x tempo externo</div>

            <div>✔ A confusão que nos rouba</div>

            <div>✔ Legado x herança</div>

            <div>✔ Espelho: Deus e pessoas</div>

            <div>✔ Relacionamento com o Espírito Santo</div>

          </div>

        </div>

      </section>

      {/* COMO FOI CONSTRUÍDO */}

      <section
        style={{
          padding:"100px 20px",
          background:"#EFE5DE"
        }}
      >

        <div
          style={{
            maxWidth:"900px",
            margin:"0 auto"
          }}
        >

          <h2
            style={{
              textAlign:"center",
              color:"#6E4638",
              fontSize:"48px",
              marginBottom:"40px"
            }}
          >
            Como o material foi construído
          </h2>

          <ul
            style={{
              lineHeight:"2",
              fontSize:"22px",
              color:"#6E4638"
            }}
          >

            <li>Textos narrativos profundos</li>

            <li>Frases de pausa e reflexão</li>

            <li>Exercícios práticos aplicáveis</li>

            <li>Orações guiadas</li>

            <li>Plano de 7 dias para iniciar</li>

          </ul>

        </div>

      </section>

    </div>

  );

}