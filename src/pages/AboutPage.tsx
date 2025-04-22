import React from 'react';
import { Link } from 'react-router-dom';
import { AwardIcon, BookOpenIcon, BriefcaseIcon, HeartIcon } from 'lucide-react';


const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Lorem Ipsum</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                alt="Lorem Ipsum"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Lorem Ipsum Dolor
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>
                <p>In condimentum facilisis porta.</p>
                <p>Sed nec diam eu diam mattis viverra.</p>
                <p>Nulla fringilla, orci ac euismod semper.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Lorem Ipsum</h2>
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
                      <h3 className="text-xl font-bold text-gray-800">Lorem</h3>
                      <p className="text-gray-600">Lorem ipsum dolor</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <HeartIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-16">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">Lorem</h3>
                      <p className="text-gray-600">Lorem ipsum</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <BriefcaseIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="mb-16">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">Lorem</h3>
                      <p className="text-gray-600">Lorem ipsum</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <BookOpenIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800">Lorem</h3>
                      <p className="text-gray-600">Lorem ipsum</p>
                    </div>
                    <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <AwardIcon size={16} className="text-white" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Lorem Ipsum</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
