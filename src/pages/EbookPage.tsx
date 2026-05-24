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
          padding:"60px 20px 20px",
          textAlign:"center"
        }}
      >

        <h1
          style={{
            fontSize:"40px",
            lineHeight:"1.2",
            color:"#6E4638",
            fontWeight:"700"
          }}
        >
          Primeiros Conceitos:
          <br />
          O Caminho da Intimidade
        </h1>

        <p
          style={{
            marginTop:"10px",
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
            maxWidth:"1350px",
            margin:"0 auto",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"stretch",
            gap:"40px"
          }}
        >

          {/* TEXTO */}

          <div
            style={{
              flex:1,
              padding:"30px 40px 50px"
            }}
          >

            <h2
              style={{
                fontSize:"32px",
                lineHeight:"1.08",
                color:"#6E4638",
                marginBottom:"24px",
                fontWeight:"700"
              }}
            >
              A dor silenciosa
            </h2>

            <p
              style={{
                fontSize:"18px",
                lineHeight:"1.6",
                color:"#6E4638",
                marginBottom:"12px"
              }}
            >
              Você ora. Você lê.
              Você tenta fazer o certo.
            </p>

            <p
              style={{
                fontSize:"18px",
                lineHeight:"1.6",
                color:"#6E4638",
                marginBottom:"12px"
              }}
            >
              E ainda assim, lá por dentro,
              carrega um cansaço silencioso
              que você não consegue explicar.
            </p>

            <p
              style={{
                marginTop:"18px",
                fontSize:"17px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Não é falta de fé.
              Não é falta de esforço.
            </p>

            <p
              style={{
                fontSize:"17px",
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
                fontSize:"17px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Existe um abismo entre
              esses dois mundos.
            </p>

            <div style={{ height:"45px" }} />

            <h2
              style={{
                fontSize:"42px",
                lineHeight:"1.1",
                color:"#6E4638",
                marginBottom:"20px",
                fontWeight:"700"
              }}
            >
              O que é este
              livro vivencial
            </h2>

            <p
              style={{
                fontSize:"17px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Este não é um devocional
              para você folhear e guardar.
            </p>

            <p
              style={{
                fontSize:"17px",
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
                fontSize:"17px",
                lineHeight:"1.7",
                color:"#6E4638"
              }}
            >
              Não é sobre saber.
              É sobre viver.
            </p>

          </div>

          {/* LATERAL MARROM */}

          <div
            style={{
              width:"30%",
              background:"#7A4A3A",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              borderTopLeftRadius:"28px",
              borderBottomLeftRadius:"28px",
              minHeight:"100vh",
              padding:"25px"
            }}
          >

            <div
              style={{
                textAlign:"center",
                maxWidth:"220px"
              }}
            >

              <img
                src="/ebook.png"
                alt="Livro"
                style={{
                  width:"160px",
                  objectFit:"contain",
                  marginBottom:"18px"
                }}
              />

              <h2
                style={{
                  color:"white",
                  fontSize:"18px",
                  marginBottom:"8px",
                  lineHeight:"1.3",
                  fontWeight:"600"
                }}
              >
                Primeiros Conceitos
              </h2>

              <p
                style={{
                  color:"#FFE7D9",
                  fontSize:"13px",
                  marginBottom:"20px",
                  lineHeight:"1.5"
                }}
              >
                Gratuito por tempo limitado
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

                  padding:"12px 18px",

                  background:"#B85A3C",

                  color:"white",

                  border:"none",

                  borderRadius:"10px",

                  cursor:"pointer",

                  fontWeight:"600",

                  fontSize:"13px",

                  width:"100%"

                }}

              >

                Quero acessar gratuitamente

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* O QUE VOCÊ VAI VIVENCIAR */}

      <section
        style={{
          padding:"90px 20px"
        }}
      >

        <div
          style={{
            maxWidth:"800px",
            margin:"0 auto"
          }}
        >

          <h2
            style={{
              textAlign:"center",
              color:"#6E4638",
              fontSize:"36px",
              marginBottom:"35px"
            }}
          >
            O que você vai vivenciar
          </h2>

          <div
            style={{
              display:"grid",
              gap:"16px",
              fontSize:"17px",
              color:"#6E4638",
              lineHeight:"1.7"
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
          padding:"90px 20px",
          background:"#EFE5DE"
        }}
      >

        <div
          style={{
            maxWidth:"800px",
            margin:"0 auto"
          }}
        >

          <h2
            style={{
              textAlign:"center",
              color:"#6E4638",
              fontSize:"36px",
              marginBottom:"35px"
            }}
          >
            Como o material foi construído
          </h2>

          <ul
            style={{
              lineHeight:"2",
              fontSize:"17px",
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