import { useState } from "react";

export default function Livro2Page() {

  const [selectedVideo, setSelectedVideo] =
  useState("/apresentacao-da-jornada-livro-2.mp4");

  return(

    <div
      style={{
        background:"#F8F5F1",
        minHeight:"100vh",
        padding:"60px 30px",
        fontFamily:"sans-serif",
        color:"#6E4638"
      }}
    >

      {/* TOPO */}

      <div
        style={{
          maxWidth:"1400px",
          margin:"0 auto"
        }}
      >

        <h1
          style={{
            fontSize:"52px",
            marginBottom:"14px"
          }}
        >
          Livro Vivencial 2
        </h1>

        <p
          style={{
            fontSize:"22px",
            color:"#7A655B",
            marginBottom:"50px"
          }}
        >
          Continue aprofundando sua jornada.
        </p>

      </div>

      {/* CONTEÚDO */}

      <div
        style={{
          maxWidth:"1400px",
          margin:"0 auto",
          display:"flex",
          gap:"40px",
          alignItems:"flex-start",
          flexWrap:"wrap"
        }}
      >

        {/* PLAYER */}

        <div
          style={{
            flex:"1.5",
            minWidth:"700px"
          }}
        >

          <video

            controls

            poster="/ebook.png"

            style={{

              width:"100%",

              borderRadius:"28px",

              boxShadow:
              "0 20px 60px rgba(0,0,0,0.18)",

              background:"#000"

            }}

          >

            <source
              src={selectedVideo}
              type="video/mp4"
            />

          </video>

        </div>

        {/* SIDEBAR */}

        <div
          style={{
            flex:"0.9",
            minWidth:"320px",
            background:"white",
            borderRadius:"28px",
            padding:"30px",
            boxShadow:
            "0 10px 40px rgba(0,0,0,0.08)"
          }}
        >

          <h2
            style={{
              fontSize:"30px",
              marginBottom:"30px"
            }}
          >
            Módulos
          </h2>

          {/* MÓDULO */}

          <div
            style={{
              display:"flex",
              flexDirection:"column",
              gap:"18px"
            }}
          >

            <div
              style={{
                paddingBottom:"20px",
                borderBottom:
                "1px solid #eee"
              }}
            >

              <h3
                style={{
                  fontSize:"22px",
                  marginBottom:"16px"
                }}
              >
                Módulo 1
              </h3>

              {/* AULA */}

              <button

                onClick={() =>
                  setSelectedVideo(
                    "/apresentacao-da-jornada-livro-2.mp4"
                  )
                }

                style={{

                  width:"100%",

                  textAlign:"left",

                  padding:"16px",

                  borderRadius:"14px",

                  border:"none",

                  background:"#F8F5F1",

                  color:"#6E4638",

                  fontSize:"18px",

                  cursor:"pointer",

                  marginBottom:"12px"

                }}

              >
                ▶ Introdução da Jornada
              </button>

              {/* PDF */}

              <a

                href="/ebook.pdf"

                target="_blank"

                style={{

                  display:"block",

                  padding:"16px",

                  borderRadius:"14px",

                  background:"#F8F5F1",

                  color:"#6E4638",

                  textDecoration:"none",

                  fontSize:"18px"

                }}

              >
                📄 Material PDF
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}