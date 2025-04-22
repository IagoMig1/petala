import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, BriefcaseIcon, GraduationCapIcon, ClipboardIcon } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Lorem Ipsum</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                  {i === 0 && <BookOpenIcon size={32} className="text-teal-600" />}
                  {i === 1 && <BriefcaseIcon size={32} className="text-teal-600" />}
                  {i === 2 && <ClipboardIcon size={32} className="text-teal-600" />}
                  {i === 3 && <ClipboardIcon size={32} className="text-teal-600" />}
                  {i === 4 && <GraduationCapIcon size={32} className="text-teal-600" />}
                  {i === 5 && <ClipboardIcon size={32} className="text-teal-600" />}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem Ipsum</h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Lorem ipsum dolor
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sit amet consectetur
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Adipiscing elit
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Lorem Ipsum</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-bold text-xl mr-4">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Lorem Ipsum</h4>
                    <p className="text-gray-500 text-sm">Lorem Ipsum</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lorem Ipsum</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
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
