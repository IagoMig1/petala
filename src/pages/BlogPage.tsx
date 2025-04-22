import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../utils/blogData';
const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Extract unique categories
  const allCategories = ['all', ...new Set(blogPosts.flatMap(post => post.categories))];
  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.categories.includes(selectedCategory));
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Compartilhando conhecimentos e experiências sobre educação inclusiva
            e desenvolvimento humano.
          </p>
        </div>
      </section>
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Filtrar por categoria:
            </h2>
            <div className="flex flex-wrap gap-2">
              {allCategories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {category === 'all' ? 'Todas' : category}
                </button>)}
            </div>
          </div>
          {/* Blog Posts */}
          {filteredPosts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => <BlogCard key={post.id} id={post.id} title={post.title} excerpt={post.excerpt} coverImage={post.coverImage} date={post.date} author={post.author} featured={post.featured} />)}
            </div> : <div className="text-center py-12">
              <p className="text-gray-600">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>}
        </div>
      </section>
    </div>;
};
export default BlogPage;