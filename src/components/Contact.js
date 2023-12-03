import React from "react";
import whatsappIcon from "../images/whats.png"; 
import emailIcon from "../images/email.png";


export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8329889557854!2d-47.16504992457151!3d-22.80865153437137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bfa7a9370f71%3A0x8cddd45bbec752c2!2sR.%20Jos%C3%A9%20Ant%C3%B4nio%20Batista%20Rosa%20-%20Res.%20Parque%20Pavan%2C%20Sumar%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1701611968982!5m2!1spt-BR!2sbr"
            />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1">
                Rua José Antônio batista rosa , 156, Parque Pavan <br />
                Sumaré - SP - CEP 13180-210

              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                vendas@extraflon.com.br
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELEFONE
              </h2>
              <p className="leading-relaxed">1199350-1520</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
          <div className="bg-gray-800 rounded flex p-4 h-full flex-col items-center">
            <h1 className="title-font font-medium text-white text-center text-lg mb-4">
              Nossos Contatos:
            </h1>
            <div className="flex items-center mb-5">
              <a
                href="https://contate.me/extraflon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-left leading-center"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-10 h-10 mr-3" // Ajuste o tamanho da imagem
                />
                <p className="text-white text-lg">Faça seu Orçamento!</p>
              </a>
            </div>
            <div className="flex justify-start mb-5">
              <a
                href="mailto:vendas@extraflon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center leading-center"
              >
                <img
                  src={emailIcon}
                  alt="email"
                  className="w-10 h-10 mr-3" // Ajuste o tamanho da imagem
                />
                <p className="text-white text-lg">E-Mail</p>
              </a>
            </div>
            <p className="text-white text-sm mt-4">
            Desenvolvido por Miguel Camargo - Desenvolvedor Web e Sistemas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}