import "./Contact.css";

export default function Contact(){

  return(

    <div className="contact-page">

      <div className="contact-box">

        <h1>
          Fale Conosco
        </h1>

        <p>
          Entre em contato através
          dos canais abaixo.
        </p>

        <div className="contact-links">

          <a
            href="https://wa.me/5541995799956"
            target="_blank"
          >
            WhatsApp
          </a>

          <a
            href="mailto:Vanessa.nmentoria@gmail.com"
          >
            Vanessa.nmentoria@gmail.com
          </a>

          <a
            href="https://instagram.com/vanessa.nmentoria"
            target="_blank"
          >
            Instagram
          </a>

        </div>

      </div>

    </div>

  );

}