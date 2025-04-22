import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-teal-700 font-bold">
            Pétala Lacerda
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Início
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
              Sobre
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors">
              Trabalho
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contato
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMenu}>
              Início
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMenu}>
              Trabalho
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={toggleMenu}>
              Contato
            </Link>
          </nav>}
      </div>
    </header>;
};
export default Header;