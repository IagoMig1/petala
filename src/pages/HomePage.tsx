import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, BriefcaseIcon, UserIcon } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { getFeaturedPosts } from '../utils/blogData';
import { motion } from 'framer-motion';

const HomePage = () => {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-teal-700 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pétala Lacerda
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Lorem Ipsum Dolor
            </motion.h2>
            <p className="text-lg mb-8 text-teal-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/about" className="bg-white text-teal-700 px-6 py-3 rounded-md font-medium hover:bg-teal-50 transition-colors">
                Lorem Ipsum
              </Link>
              <Link to="/contact" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition-colors">
                Lorem Ipsum
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.img 
              src="./petala.jpg" 
              alt="Lorem" 
              className="rounded-lg shadow-xl w-full max-w-md object-cover" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Lorem Ipsum</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.img 
                src="https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Lorem" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Lorem Ipsum</h3>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <p className="text-gray-700 mb-6">
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              </p>
              <Link to="/about" className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors">
                Lorem Ipsum
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Lorem Ipsum</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <UserIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem Ipsum</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <BriefcaseIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem Ipsum</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                <BookOpenIcon size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Lorem Ipsum</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors">
              Lorem Ipsum
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Blog</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                featured={post.featured}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors">
              See More Posts
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HomePage;
