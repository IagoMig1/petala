import React from 'react';
import { Link } from 'react-router-dom';
import { AwardIcon, BookOpenIcon, BriefcaseIcon, HeartIcon } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Pétala Lacerda</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Educadora, ex-prefeita de Caçapava e defensora da transformação social por meio da educação e da gestão pública.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src="./petala.jpg"
                alt="Pétala Lacerda"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Trajetória
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Pétala Gonçalves Lacerda é graduada em Pedagogia, pós-graduada em Psicopedagogia e mestre em Desenvolvimento Humano.
                </p>
                <p>
                  Atuou na formação continuada de professores e na coordenação de equipes multidisciplinares na área educacional.
                </p>
                <p>
                  Em 2020, foi eleita a primeira mulher prefeita de Caçapava, exercendo o mandato de 2021 a 2024.
                </p>
                <p>
                  Durante sua gestão, implementou políticas públicas voltadas à saúde, educação e infraestrutura, destacando-se pela inauguração de unidades de saúde e melhorias na rede municipal de ensino.
                </p>
                <p>
                  Além disso, Pétala foi a idealizadora e coordenadora do projeto "Conviver", que visa promover a integração social de idosos e pessoas com deficiência, proporcionando atividades que favorecem a inclusão e o fortalecimento da cidadania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Linha do Tempo</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>
              <div className="relative z-10">
                {/* Timeline Item */}
                <div className="mb-16">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">Formação Acadêmica</h3>
                      <p className="text-gray-600">Pedagogia, Psicopedagogia e Mestrado em Desenvolvimento Humano</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <BookOpenIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Iniciou sua carreira na educação, dedicando-se à formação de professores e à gestão educacional.</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-16">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">Prefeita de Caçapava</h3>
                      <p className="text-gray-600">Mandato de 2021 a 2024</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <BriefcaseIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Eleita a primeira mulher prefeita de Caçapava, implementou diversas melhorias na cidade.</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-16">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">Projeto Conviver</h3>
                      <p className="text-gray-600">Promoção da inclusão social de idosos e pessoas com deficiência</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <HeartIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Idealizou e coordenou o projeto "Conviver", que visa promover atividades de inclusão social para idosos e pessoas com deficiência.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
