import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon } from 'lucide-react';
interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  featured?: boolean;
}
const BlogCard = ({
  id,
  title,
  excerpt,
  coverImage,
  date,
  author,
  featured = false
}: BlogCardProps) => {
  return <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/blog/${id}`}>
        <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
          <div className="flex items-center">
            <CalendarIcon size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <UserIcon size={16} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-teal-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link to={`/blog/${id}`} className="text-teal-600 font-medium hover:text-teal-800 transition-colors">
          Continuar lendo
        </Link>
      </div>
    </div>;
};
export default BlogCard;