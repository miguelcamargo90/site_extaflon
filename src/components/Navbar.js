import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import TypingEffect from './TypingEffect';
import { FaWhatsapp, FaImages } from 'react-icons/fa';

export default function Navbar() {
  const { hash } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (hash === '' || hash === '#') return;
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  const buttonStyle = "inline-block mr-5 px-3 py-2 rounded font-bold text-white bg-green-600 hover:bg-green-700 transition duration-300";
  const extraflonButtonStyle = "inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";

  return (
    <header className="bg-white md:sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden">
        <span className="bg-gray-900 w-6 h-1 block mb-1"></span>
        <span className="bg-gray-900 w-6 h-1 block mb-1"></span>
        <span className="bg-gray-900 w-6 h-1 block"></span>
      </button>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-40 h-50" />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center md:flex">
          <Link to="/#about" className={buttonStyle}>Sobre Nós</Link>
          <Link to="/#projects" className={buttonStyle}>Serviços & Soluções</Link>
          <Link to="/#products" className={buttonStyle}>Produtos</Link>
          <a href="/experiences" className={extraflonButtonStyle}>
            <FaImages className="mr-2"/>
            EXTRAFLON EXPERIENCE
          </a>
        </nav>
        <TypingEffect text="Revestimentos & Produtos em PTFE" speed={150} className="text-green-600 font-bold mx-auto" />
        <Link to="/#contact" className="inline-flex flex-col items-center bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0 text-white">
          <FaWhatsapp className="w-10 h-10" />
          <span>Fale Conosco</span>
        </Link>
      </div>
    </header>
  );
}
