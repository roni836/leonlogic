'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';
import Image from 'next/image';

interface Testimonial {
  id: string;
  client_name: string;
  client_position?: string;
  client_company?: string;
  content: string;
  rating?: number;
  avatar_url?: string;
  is_featured: boolean;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    client_name: '',
    client_position: '',
    client_company: '',
    content: '',
    rating: 5,
    avatar_url: '',
    is_featured: false,
    sort_order: 0,
    is_active: true,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('Error fetching testimonials:', error);
        setError('Failed to load testimonials');
        return;
      }

      setTestimonials(data || []);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingTestimonial) {
        // Update existing testimonial
        const { error } = await supabase
          .from('testimonials')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingTestimonial.id);

        if (error) {
          console.error('Error updating testimonial:', error);
          setError('Failed to update testimonial');
          return;
        }
      } else {
        // Create new testimonial
        const { error } = await supabase
          .from('testimonials')
          .insert([{
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }]);

        if (error) {
          console.error('Error creating testimonial:', error);
          setError('Failed to create testimonial');
          return;
        }
      }

      // Reset form and refresh data
      resetForm();
      fetchTestimonials();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to save testimonial');
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      client_name: testimonial.client_name,
      client_position: testimonial.client_position || '',
      client_company: testimonial.client_company || '',
      content: testimonial.content,
      rating: testimonial.rating || 5,
      avatar_url: testimonial.avatar_url || '',
      is_featured: testimonial.is_featured,
      sort_order: testimonial.sort_order,
      is_active: testimonial.is_active,
    });
    setShowCreateModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting testimonial:', error);
        setError('Failed to delete testimonial');
        return;
      }

      fetchTestimonials();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to delete testimonial');
    }
  };

  const resetForm = () => {
    setFormData({
      client_name: '',
      client_position: '',
      client_company: '',
      content: '',
      rating: 5,
      avatar_url: '',
      is_featured: false,
      sort_order: 0,
      is_active: true,
    });
    setEditingTestimonial(null);
    setShowCreateModal(false);
  };

  const toggleTestimonialStatus = async (testimonial: Testimonial) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({
          is_active: !testimonial.is_active,
          updated_at: new Date().toISOString(),
        })
        .eq('id', testimonial.id);

      if (error) {
        console.error('Error updating testimonial status:', error);
        setError('Failed to update testimonial status');
        return;
      }

      fetchTestimonials();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update testimonial status');
    }
  };

  const toggleFeaturedStatus = async (testimonial: Testimonial) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({
          is_featured: !testimonial.is_featured,
          updated_at: new Date().toISOString(),
        })
        .eq('id', testimonial.id);

      if (error) {
        console.error('Error updating featured status:', error);
        setError('Failed to update featured status');
        return;
      }

      fetchTestimonials();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update featured status');
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <p className="mt-1 text-sm text-red-700">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testimonials Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage client testimonials and reviews.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <span className="mr-2">+</span>
          Add New Testimonial
        </button>
      </div>

      {/* Testimonials List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <div className="px-4 py-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-12 w-12">
                      {testimonial.avatar_url ? (
                        <Image
                          className="h-12 w-12 rounded-full object-cover"
                          src={testimonial.avatar_url}
                          alt={testimonial.client_name}
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-lg font-medium">
                            {testimonial.client_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {testimonial.client_name}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          testimonial.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {testimonial.is_active ? 'Active' : 'Inactive'}
                        </span>
                        {testimonial.is_featured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {testimonial.client_position}
                        {testimonial.client_company && ` at ${testimonial.client_company}`}
                      </p>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.rating || 5)}
                        <span className="ml-2 text-sm text-gray-500">
                          ({testimonial.rating || 5}/5)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 italic">
                        `{testimonial.content}`
                      </p>
                      <div className="flex items-center text-xs text-gray-400 mt-2 space-x-4">
                        <span>Sort Order: {testimonial.sort_order}</span>
                        <span>Created: {new Date(testimonial.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleFeaturedStatus(testimonial)}
                      className={`inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md ${
                        testimonial.is_featured
                          ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                          : 'text-yellow-700 bg-yellow-100 hover:bg-yellow-200'
                      }`}
                    >
                      {testimonial.is_featured ? 'Unfeature' : 'Feature'}
                    </button>
                    <button
                      onClick={() => toggleTestimonialStatus(testimonial)}
                      className={`inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md ${
                        testimonial.is_active
                          ? 'text-red-700 bg-red-100 hover:bg-red-200'
                          : 'text-green-700 bg-green-100 hover:bg-green-200'
                      }`}
                    >
                      {testimonial.is_active ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter client name..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Client Position
                  </label>
                  <input
                    type="text"
                    value={formData.client_position}
                    onChange={(e) => setFormData({ ...formData, client_position: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="e.g., CEO, Manager, Developer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Client Company
                  </label>
                  <input
                    type="text"
                    value={formData.client_company}
                    onChange={(e) => setFormData({ ...formData, client_company: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter company name..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Testimonial Content *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter the testimonial content..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rating
                  </label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option value={1}>1 Star</option>
                    <option value={2}>2 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={5}>5 Stars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Avatar URL
                  </label>
                  <input
                    type="url"
                    value={formData.avatar_url}
                    onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      Active
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.is_featured}
                      onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                      className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      Featured
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {editingTestimonial ? 'Update Testimonial' : 'Create Testimonial'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 