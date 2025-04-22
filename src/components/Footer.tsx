import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon, BookOpenIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre</h3>
            <p className="text-teal-100 mb-4">
              Educadora e gestora dedicada à educação inclusiva e ao
              desenvolvimento de pessoas com necessidades especiais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-200 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-teal-200 hover:text-white transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-teal-200 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-teal-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-teal-200 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-teal-200">Educação Inclusiva</li>
              <li className="text-teal-200">Gestão Educacional</li>
              <li className="text-teal-200">Consultoria</li>
              <li className="text-teal-200">Palestras e Workshops</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPinIcon size={20} className="text-teal-300 mr-2" />
                <span className="text-teal-200">CONVIVER, Taubaté - SP</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={20} className="text-teal-300 mr-2" />
                <span className="text-teal-200">(12) 9XXXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <MailIcon size={20} className="text-teal-300 mr-2" />
                <span className="text-teal-200">contato@petalacerda.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-teal-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-teal-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Pétala Lacerda. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/admin/login" className="text-teal-300 text-sm hover:text-white transition-colors flex items-center">
                <BookOpenIcon size={16} className="mr-1" />
                Área Administrativa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;