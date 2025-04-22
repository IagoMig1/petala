import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  ClipboardIcon,
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Serviços e Conquistas</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Conheça as principais ações da gestão Pétala Lacerda em Caçapava.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <ClipboardIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Regularização Fundiária</h3>
              <p className="text-gray-600 mb-6">
                Mais de 1.500 famílias receberam a escritura definitiva de suas casas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <BriefcaseIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Geração de Empregos</h3>
              <p className="text-gray-600 mb-6">
                Incentivo à instalação de empresas como o McDonald’s em Caçapava.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <ClipboardIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Saúde</h3>
              <p className="text-gray-600 mb-6">
                Inauguração de novas unidades de saúde e melhorias no atendimento básico.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <GraduationCapIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Educação</h3>
              <p className="text-gray-600 mb-6">
                Valorização da rede municipal com reformas e apoio aos professores.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <BookOpenIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Inclusão Social</h3>
              <p className="text-gray-600 mb-6">
                Apoio a pessoas com deficiência através da Associação CONVIVER.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <ClipboardIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Desenvolvimento Urbano</h3>
              <p className="text-gray-600 mb-6">
                Obras de infraestrutura e melhorias na mobilidade urbana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Depoimentos</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja o que moradores de Caçapava dizem sobre a gestão da prefeita.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Maria", "Carlos", "Juliana"].map((name, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-xl mr-4">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{name}</h4>
                    <p className="text-gray-500 text-sm">Morador de Caçapava</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  “A cidade melhorou muito! A regularização das casas foi um sonho realizado.”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos construir um futuro ainda melhor</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Entre em contato e saiba como podemos seguir transformando Caçapava juntos.
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-teal-50 transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
