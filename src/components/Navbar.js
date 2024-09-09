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
  const extraflonButtonStyle = "inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-2 md:py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 md:h-12 lg:h-16" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-base text-gray-700 hover:text-blue-500">Sobre</Link>
          <Link to="/products" className="text-base text-gray-700 hover:text-blue-500">Produtos</Link>
          <Link to="/projects" className="text-base text-gray-700 hover:text-blue-500">Projetos</Link>
          <Link to="/contact" className="text-base text-gray-700 hover:text-blue-500">Contato</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sobre</Link>
          <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Produtos</Link>
          <Link to="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projetos</Link>
          <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contato</Link>
        </div>
      )}
    </nav>
  );
}
