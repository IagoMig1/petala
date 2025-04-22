import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon } from 'lucide-react';
import { getPostById, getRecentPosts, BlogPost } from '../utils/blogData';
const BlogPostPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const post = getPostById(id || '');
  const recentPosts = getRecentPosts(3).filter(recentPost => recentPost.id !== id);
  if (!post) {
    return <div className="w-full bg-white min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Artigo não encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link to="/blog" className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors">
            Voltar para o Blog
          </Link>
        </div>
      </div>;
  }
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="relative bg-cover bg-center h-96" style={{
      backgroundImage: `url(${post.coverImage})`
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-3xl">
            <button onClick={() => navigate(-1)} className="flex items-center text-white mb-6 hover:text-teal-300 transition-colors">
              <ArrowLeftIcon size={20} className="mr-2" />
              Voltar
            </button>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-teal-100 space-x-6">
              <div className="flex items-center mb-2">
                <CalendarIcon size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <UserIcon size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center flex-wrap mb-2">
                <TagIcon size={16} className="mr-2" />
                {post.categories.map((category, index) => <span key={category}>
                    {category}
                    {index < post.categories.length - 1 ? ', ' : ''}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 lg:pr-12">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{
              __html: post.content
            }}></div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Compartilhar:
                </h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </button>
                  <button className="bg-blue-400 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="bg-green-500 text-white p-2 rounded-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  Artigos Recentes
                </h3>
                <div className="space-y-6">
                  {recentPosts.map(recentPost => <div key={recentPost.id} className="flex space-x-4">
                      <img src={recentPost.coverImage} alt={recentPost.title} className="w-20 h-20 object-cover rounded" />
                      <div>
                        <Link to={`/blog/${recentPost.id}`} className="font-medium text-gray-800 hover:text-teal-600 transition-colors">
                          {recentPost.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                          {recentPost.date}
                        </p>
                      </div>
                    </div>)}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Categorias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map(category => <Link key={category} to={`/blog?category=${category}`} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-teal-100 hover:text-teal-700 transition-colors">
                        {category}
                      </Link>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default BlogPostPage;