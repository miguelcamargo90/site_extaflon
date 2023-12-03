import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThumbUpIcon, PrinterIcon } from "@heroicons/react/solid";
import videoFile from "../images/video.mp4"; // Importa o vídeo a partir do sistema de módulos

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '' || hash === '#') return;
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);


  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        
        {/* Vídeo à esquerda com moldura e tamanho ajustado */}
        <div className="md:w-2/5 w-full mb-10 md:mb-0">
          <div className="overflow-hidden">
            <video
              src={videoFile}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto" // Ajuste a classe aqui para tornar o vídeo responsivo em largura
            />
          </div>
        </div>

        {/* Conteúdo de texto à direita alinhado e justificado à direita */}
        <div className="lg:flex-grow md:w-3/5 lg:pl-24 md:pl-16 flex flex-col md:items-end text-right">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white">
            Tecnologias & Soluções
          </h1>
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50 rounded-lg"></div>
            <p className="relative leading-relaxed text-white text-lg z-10">
              Foi com nosso profundo conhecimento em PTFE ( Politetrafluoretileno ) com avançados inibidores de corrosão,  redutores de atrito e protetores UV & IR que desenvolvemos soluções seguras e duradouras revestimentos antiaderente,  anticorrosao,desmoldante, lubrificante seco permanente e redutor de atrito.
              Focaremos em tecnologia e sustentabilidade. No segmento revestimento: isento de metais pesados, reduzido impacto ambiental, comprometimento com a sustentabilidade: pessoa + ambiente.
            </p>
          </div>
          <div className="flex justify-end"> {/* Os botões também são alinhados à direita */}
          <Link to="/#projects" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <ThumbUpIcon className="w-6 h-6 mr-2" />
              Serviços & Soluções
            </Link>
            <Link to="/#products" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <PrinterIcon className="w-6 h-6 mr-2" />
              Produtos
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
