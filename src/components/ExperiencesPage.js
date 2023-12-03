import React from 'react';
import exp1Image from "../images/alimentos_exp.jpg";

export default function ExperiencesPage() {
  return (
    <div className="bg-teal-700 text-white p-5">
      <h1 className="text-5xl font-bold text-center mb-10">Customer Experience</h1>

      {/* Seção Alimentício */}
      <section id="alimenticio" className="mb-10">
        <h2 className="text-4xl font-semibold text-center mb-6">ALIMENTÍCIO</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src={exp1Image} alt="Experiência Alimentícia" className="w-full md:w-1/2 rounded-lg shadow-lg"/>

          {/* Container para a descrição com fundo semitransparente */}
          <div className="bg-green-700 bg-opacity-75 p-4 rounded-lg shadow-lg">
            <p className="text-lg text-white">
              <span className="font-bold">A Extraflon, especialista em soluções inovadoras de revestimentos:</span><br/>
              Desempenha um papel crucial em diversas etapas da cadeia produtiva do trigo, garantindo eficiência e qualidade desde o cultivo até a embalagem.<br/><br/>
              <span className="font-bold">- Preparação da Terra:</span><br/>
              Tratores com peças protegidas por revestimentos organometálicos contra corrosão e ataque químico.<br/><br/>
              <span className="font-bold">- Processo de Colheita:</span><br/>
              Colheitadeiras com peças revestidas para reduzir desgaste e atrito, usando lubrificantes secos duradouros.<br/><br/>
              <span className="font-bold">- Moagem do Grão:</span><br/>
              Revestimento antiaderente nas máquinas de moagem, resistente à abrasão, garantindo eficiência e higiene.<br/><br/>
              <span className="font-bold">- Panificação:</span><br/>
              Equipamentos como misturadores, boleadores, formas e assadeiras com revestimentos que previnem aderência e facilitam a limpeza.<br/><br/>
              <span className="font-bold">- Processo de Embalagem:</span><br/>
              Tecido especial da Extraflon aplicado nas mordaças de solda, assegurando selagens precisas e duráveis.<br/><br/>
              Estes tópicos destacam como o revestimento da Extraflon é essencial em diferentes etapas do processo produtivo, desde a preparação da terra até a embalagem final do produto.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Plásticos e Borracha
      <section id="plasticos-borracha" className="mb-10">
        <h2 className="text-4xl font-semibold text-center mb-6">PLÁSTICOS E BORRACHA</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src="path/to/plasticos-borracha.jpg" alt="Experiência Plásticos e Borracha" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
          <p className="text-lg">Descrição sobre a experiência no segmento de plásticos e borracha...</p>
        </div>
      </section> */}

      {/* Seção Têxtil */}
      {/* <section id="textil" className="mb-10">
        <h2 className="text-4xl font-semibold text-center mb-6">EMBALAGEM, GRÁFICA e TÊXTIL</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src="path/to/textil.jpg" alt="Experiência Têxtil" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
          <p className="text-lg">Descrição sobre a experiência no segmento...</p>
        </div>
      </section> */}

            {/* Seção PETRÓLEO / QUÍMICA & PETROQUÍMICA */}
         {/* <section id="petroleo" className="mb-10">
        <h2 className="text-4xl font-semibold text-center mb-6">PETRÓLEO / QUÍMICA & PETROQUÍMICA</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img src="path/to/automotivo.jpg" alt="Experiência Automotiva" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
          <p className="text-lg">Descrição sobre a experiência no segmento...</p>
        </div>
      </section> */}

      {/* Chamada para ação ou contato */}
      {/* <section id="contact-call-to-action" className="mt-10">
        <div className="text-center">
          <p>Interessado em melhorar a eficiência com ExtraFlon?</p>
          <button className="bg-green-700 text-teal-700 p-3 rounded">Entre em Contato</button>
        </div>
      </section> */}
    </div>
  );
}
