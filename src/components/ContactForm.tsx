import React, { useState } from 'react';
import { MailIcon, PhoneIcon, SendIcon } from 'lucide-react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        Entre em Contato
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nome
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 mb-2">
            Assunto
          </label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="">Selecione um assunto</option>
            <option value="Palestras">Palestras</option>
            <option value="Consultoria">Consultoria</option>
            <option value="Parcerias">Parcerias</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Mensagem
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
        </div>
        <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center">
          <SendIcon size={18} className="mr-2" />
          Enviar Mensagem
        </button>
      </form>
      <div className="mt-8 space-y-4">
        <div className="flex items-center">
          <MailIcon size={20} className="text-teal-600 mr-3" />
          <span>contato@petalacerda.com</span>
        </div>
        <div className="flex items-center">
          <PhoneIcon size={20} className="text-teal-600 mr-3" />
          <span>(12) 9XXXX-XXXX</span>
        </div>
      </div>
    </div>;
};
export default ContactForm;