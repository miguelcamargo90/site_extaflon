import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }
  }, [index, text.length, speed]);

  // Defina a cor verde petróleo ou a mais próxima disponível
  const textColor = 'text-green-900'; // Exemplo de uma cor verde escura disponível no Tailwind

  return (
    <div className={`text-center mx-auto ${className}`}>
      <h1 className={`inline text-3xl md:text-4xl lg:text-3xl ${textColor} font-bold border-r-2 border-gray-500 px-2`}>
        {text.substring(0, index)}
      </h1>
      <span className="opacity-0">_</span> {/* Isso garante que o espaçamento seja consistente */}
    </div>
  );
};

export default TypingEffect;
