import React from "react";
import whatsappIcon from "../images/whats2.png";

export default function FloatingLogo() {
  const floatingLogoStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    cursor: "pointer",
  };

  const logoStyle = {
    width: "70px", // Ajuste conforme necessário
    height: "70px", // Ajuste conforme necessário
  };

  const speechBubbleStyle = {
    backgroundColor: "#333", // Cor de fundo do balão de fala
    padding: "10px", // Espaçamento interno do balão de fala
    borderRadius: "10px", // Borda arredondada
    maxWidth: "150px", // Largura máxima do balão de fala
  };

  const textStyle = {
    color: "white",
    margin: "0", // Remova a margem padrão do parágrafo
  };

  return (
    <div style={floatingLogoStyle}>
      <img
        src={whatsappIcon}
        alt="Logo"
        style={logoStyle}
        onClick={() => {
          window.open("https://contate.me/extraflon", "_blank");
        }}
      />
      <div style={speechBubbleStyle}>
        <p style={textStyle}>Como posso te ajudar?</p>
      </div>
    </div>
  );
}
