import project1Image from "./images/antiaderente.png"; 
import project2Image from "./images/antiaderente1.png";
import project3Image from "./images/antiaderente2.png";
import project4Image from "./images/textil2.png";
import project6Image from "./images/antiaderente5.png";
import project7Image from "./images/antiaderente6.png";
import project8Image from "./images/desmoldante2.png";
import project9Image from "./images/desmoldante1.png";
import project12Image from "./images/grafica3.png";
import project13Image from "./images/grafica4.png";
import project14Image from "./images/grafica.png";
import project15Image from "./images/grafica2.png";
import project16Image from "./images/anti-corrosao2.png";
import project17Image from "./images/anti-corrosao3.png";

import correia1 from "./images/correias1.jpg";
import correia2 from "./images/correias2.png";
import correia3 from "./images/correias3.png";
import correia4 from "./images/correias4.jpg";
import esteira1 from "./images/esteira.png";
import esteira2 from "./images/esteira.jpg";
import fitas from "./images/fitas.jpg";
import fitas2 from "./images/fitas1.jpg";
import fitas3 from "./images/fitas2.png";
import fitas4 from "./images/fitas3.png";
import manta from "./images/manta.png";
import manta2 from "./images/manta2.png";
import tecidos from "./images/tecidos.jpg";
import tecidos2 from "./images/tecido3.jpg";
import tecidos3 from "./images/tecido2.jpg";


export const projects = [
  {
    title: "ALIMENTÍCIO",
    subtitle: "ANTIADERENTE",
    description:
      "Transforme sua panificadora com ExTraFlon, o revestimento antiaderente que revoluciona a produção em grande escala. Com a nossa tecnologia inovadora, desmoldar pães e bolos nunca foi tão fácil e limpo, prometendo eficiência máxima e desperdício mínimo. Escolha ExTraFlon para uma cozinha comercial que combina perfeição culinária com higiene e durabilidade.",
      images: [
        project6Image,project1Image, project2Image, project3Image, project4Image, project7Image
      ],
        // Os benefícios que você quer exibir, separados por ponto e vírgula
  benefits: [
    "Antiaderente e desmoldante sem o uso de óleos e gorduras",
    "Certificado pela ANVISA E FDA ( Food and Drug Administration/USA.)",
    "Pode ser aplicado em todos tipos de metais",
    "Isentos de metais pesados.",
    "Pode ser aplicados a diferentes tipos de peças e metais.",
    "Diversas cores",
    "Do forno ao freezer ( resistentes a altas e baixas temperaturas , -200@260°C)",
    "Facilita a limpeza",
  ],
  },
  {
    title: "PLÁSTICOS E BORRACHA",
    subtitle: "DESMOLDANTE",
    description:
      "Maximize a produtividade e reduza custos com o revestimento de PTFE da Extraflon! Nossas soluções antiaderentes e resistentes ao calor aumentam a vida útil dos seus moldes e ferramentas, transformando a manutenção em um processo simples e rápido.",
      images: [
        project9Image, project8Image
      ],
      benefits: [
        "Resistência ao Calor",
        "Redução de Aderência",
        "Facilidade de Limpeza",
        "Economia de Matéria-prima",
        "Durabilidade dos Equipamentos",
      ],
  },
  {
    title: "EMBALAGEM, GRÁFICA e TÊXTIL",
    subtitle: "REDUTOR DE ATRITO",
    description:
      "Obtenha impressões perfeitas e mantenha sua produção fluindo sem interrupções com o PTFE da Extraflon. Nossos revestimentos resistem a tintas e solventes, garantindo qualidade e durabilidade superiores para os seus equipamentos gráficos.",
    images: [project13Image, project14Image, project15Image, project12Image],
    benefits: [
      "Ateflonagem de cilindros dubladores", 
      "Gofradores", 
      "Gravados" , 
      "Lisos",  
      "Prensas e/ou secadores" , 
      "Quando revestidos de manta ou aplicação direta ( teflonamento ), facilita a limpeza", 
      "Evita impregnação e reduz paradas de máquinas;"
    ],
  },
  {
    title: "PETRÓLEO / QUÍMICA & PETROQUÍMICA",
    subtitle: "REDUTOR DE ATRITO",
    description:
      "Assegure operações contínuas e seguras na indústria petrolífera com o revestimento de PTFE da Extraflon. Oferecendo resistência excepcional contra produtos químicos e altas temperaturas, nosso PTFE é a escolha certa para vedação e manutenção eficaz de tubulações.",
    images: [project17Image, project16Image],
    benefits: [
      "Elevada resistência a corrosão",
      "Resistente a altas temperaturas e baixa temperaturas. (-200ºC à 260ºC)",
      "Lubrificante seco permanente",
      "Camada uniforme",
      "Cores variadas",
      "Podem ser aplicadas em diferentes tipos de Metais",
      "Redução de atrito em válvulas e tubulações",
      "Resistência elevada a ataque químico",
      "Reduz o atrito",
    ],
  },
];


export const Products = [
  {
    name: "Fitas de Vedação em PTFE",
    image: [fitas, fitas2, fitas3, fitas4],
    description: "Nossas Fitas de Vedação em PTFE oferecem uma solução de vedação superior para uma ampla gama de aplicações industriais. Fabricadas com material PTFE de alta qualidade, estas fitas são ideais para selar roscas e conexões, garantindo uma vedação estanque e durável.",
  },
  {
    name: "Mantas de PTFE",
    image: [manta, manta2],
    description: "Nossas Mantas de PTFE são uma solução inovadora e versátil para uma variedade de aplicações industriais e comerciais. Com sua incrível flexibilidade e transparência, estas mantas são perfeitas para aplicações que exigem uma barreira resistente a produtos químicos e a altas temperaturas.",
  },
  {
    name: "Correias em PTFE",
    image: [correia3, correia1, correia2, correia4],
    description: "Nossas Correias em PTFE são projetadas para atender às necessidades de uma variedade de sistemas de transporte e máquinas industriais. Elas são duráveis e oferecem um desempenho excepcional em ambientes industriais desafiadores.",
  },
  {
    name: "Esteiras em PTFE",
    image: [esteira1, esteira2],
    description: "Nossas Esteiras em PTFE são projetadas para proporcionar um transporte suave e eficiente de materiais em ambientes industriais. Elas são resistentes a altas temperaturas e produtos químicos, tornando-as ideais para uma ampla variedade de aplicações.",
  },
  {
    name: "Tecidos em PTFE",
    image: [tecidos3, tecidos, tecidos2],
    description: "Nossos Tecidos em PTFE são projetados para oferecer resistência e durabilidade excepcionais em ambientes industriais. Eles são ideais para aplicações que exigem uma superfície antiaderente e resistente a altas temperaturas.",
  },
];