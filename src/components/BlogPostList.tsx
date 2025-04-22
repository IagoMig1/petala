import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { toast } from 'react-hot-toast';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  featured: boolean;
}
interface BlogPostListProps {
  onEdit: (post: BlogPost) => void;
}
const BlogPostList = ({
  onEdit
}: BlogPostListProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('blog_posts').select('*').order('created_at', {
        ascending: false
      });
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Erro ao carregar os posts');
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      try {
        const {
          error
        } = await supabase.from('blog_posts').delete().eq('id', id);
        if (error) throw error;
        setPosts(posts.filter(post => post.id !== id));
        toast.success('Post excluído com sucesso!');
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error('Erro ao excluir o post');
      }
    }
  };
  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }
  return <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Título
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Autor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Destaque
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map(post => <tr key={post.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {post.title}
                </div>
                <div className="text-sm text-gray-500">{post.excerpt}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {post.author}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {post.featured ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Sim
                  </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    Não
                  </span>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => onEdit(post)} className="text-teal-600 hover:text-teal-900 mr-4">
                  Editar
                </button>
                <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">
                  Excluir
                </button>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
};
export default BlogPostList;