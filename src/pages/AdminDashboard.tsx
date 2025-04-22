import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import { toast } from 'react-hot-toast';
import BlogPostEditor from '../components/BlogPostEditor';
import BlogPostList from '../components/BlogPostList';
import { requireAuth } from '../utils/auth';
const AdminDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!requireAuth(navigate)) return;
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    toast.success('Logout realizado com sucesso!');
    navigate('/admin/login');
  };
  return <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Painel Administrativo
              </h1>
              <Link to="/" className="ml-4 text-sm text-teal-600 hover:text-teal-500">
                Visualizar site
              </Link>
            </div>
            <button onClick={handleLogout} className="px-4 py-2 text-sm text-red-600 hover:text-red-800">
              Sair
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {isEditing ? <BlogPostEditor post={selectedPost} onCancel={() => {
        setIsEditing(false);
        setSelectedPost(null);
      }} /> : <div>
            <div className="mb-6">
              <button onClick={() => setIsEditing(true)} className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                Nova Postagem
              </button>
            </div>
            <BlogPostList onEdit={post => {
          setSelectedPost(post);
          setIsEditing(true);
        }} />
          </div>}
      </div>
    </div>;
};
export default AdminDashboard;