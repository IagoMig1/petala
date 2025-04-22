import React, { useCallback, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { supabase } from '../utils/supabase';
import { toast } from 'react-hot-toast';
import { UploadIcon } from 'lucide-react';
export const BLOG_CATEGORIES = ['Educação Inclusiva', 'Desenvolvimento Infantil', 'Gestão Educacional', 'Instituições Assistenciais', 'Família', 'Educação Especial', 'Formação de Educadores', 'Metodologias Pedagógicas'];
interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  featured: boolean;
  categories: string[];
}
interface BlogPostEditorProps {
  post?: BlogPost | null;
  onCancel: () => void;
}
const BlogPostEditor = ({
  post,
  onCancel
}: BlogPostEditorProps) => {
  const [formData, setFormData] = useState<BlogPost>(post || {
    title: '',
    excerpt: '',
    content: '',
    cover_image: '',
    author: 'Pétala Lacerda',
    featured: false,
    categories: []
  });
  const [uploading, setUploading] = useState(false);
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    try {
      setUploading(true);
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const {
        error: uploadError,
        data
      } = await supabase.storage.from('blog-images').upload(filePath, file);
      if (uploadError) throw uploadError;
      const {
        data: {
          publicUrl
        }
      } = supabase.storage.from('blog-images').getPublicUrl(filePath);
      setFormData({
        ...formData,
        cover_image: publicUrl
      });
      toast.success('Imagem enviada com sucesso!');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Erro ao enviar imagem');
    } finally {
      setUploading(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (post?.id) {
        const {
          error
        } = await supabase.from('blog_posts').update({
          ...formData,
          updated_at: new Date()
        }).eq('id', post.id);
        if (error) throw error;
        toast.success('Post atualizado com sucesso!');
      } else {
        const {
          error
        } = await supabase.from('blog_posts').insert([{
          ...formData,
          date: new Date().toISOString(),
          created_at: new Date().toISOString()
        }]);
        if (error) throw error;
        toast.success('Post criado com sucesso!');
      }
      onCancel();
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Erro ao salvar o post');
    }
  };
  return <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input type="text" value={formData.title} onChange={e => setFormData({
          ...formData,
          title: e.target.value
        })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Imagem de Capa
          </label>
          <div className="mt-1 flex items-center space-x-4">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="cover-image" />
            <label htmlFor="cover-image" className={`cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <UploadIcon className="w-5 h-5 mr-2" />
              {uploading ? 'Enviando...' : 'Enviar Imagem'}
            </label>
            {formData.cover_image && <img src={formData.cover_image} alt="Preview" className="h-20 w-20 object-cover rounded" />}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Categorias
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map(category => <label key={category} className={`inline-flex items-center px-3 py-1 rounded-full text-sm cursor-pointer transition-colors
                  ${formData.categories.includes(category) ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <input type="checkbox" className="hidden" checked={formData.categories.includes(category)} onChange={e => {
              if (e.target.checked) {
                setFormData({
                  ...formData,
                  categories: [...formData.categories, category]
                });
              } else {
                setFormData({
                  ...formData,
                  categories: formData.categories.filter(c => c !== category)
                });
              }
            }} />
                {category}
              </label>)}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resumo
          </label>
          <textarea value={formData.excerpt} onChange={e => setFormData({
          ...formData,
          excerpt: e.target.value
        })} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Conteúdo
          </label>
          <div className="mt-1">
            <ReactQuill value={formData.content} onChange={content => setFormData({
            ...formData,
            content: content
          })} className="h-64 mb-12" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Autor
          </label>
          <input type="text" value={formData.author} onChange={e => setFormData({
          ...formData,
          author: e.target.value
        })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" checked={formData.featured} onChange={e => setFormData({
            ...formData,
            featured: e.target.checked
          })} className="rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50" />
            <span className="ml-2 text-sm text-gray-600">Destaque</span>
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Cancelar
          </button>
          <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
            {post ? 'Atualizar' : 'Publicar'}
          </button>
        </div>
      </div>
    </form>;
};
export default BlogPostEditor;