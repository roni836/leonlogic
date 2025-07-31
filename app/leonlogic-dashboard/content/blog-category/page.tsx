'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCategory {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export default function BlogManagement() {
  const [blogPosts, setBlogPosts] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogCategory | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
  });

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts');
        return;
      }

      setBlogPosts(data || []);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const postData = {
        ...formData,
        updated_at: new Date().toISOString(),
      };

      if (editingPost) {
        // Update existing post
        const { error } = await supabase
          .from('blog_categories')
          .update(postData)
          .eq('id', editingPost.id);

        if (error) {
          console.error('Error updating blog post:', error);
          setError('Failed to update blog post');
          return;
        }
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_categories')
          .insert([{
            ...postData,
            created_at: new Date().toISOString(),
          }]);

        if (error) {
          console.log('Error creating blog post:', error);
          setError('Failed to create blog post');
          return;
        }
      }

      // Reset form and refresh data
      resetForm();
      fetchBlogPosts();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to save blog post');
    }
  };

  const handleEdit = (post: BlogCategory) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
    });
    setShowCreateModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_categories')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting blog post:', error);
        setError('Failed to delete blog post');
        return;
      }

      fetchBlogPosts();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to delete blog post');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
    });
    setEditingPost(null);
    setShowCreateModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
          <h1 className="text-2xl font-bold text-gray-900">Blog Category Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create, edit, and manage your blog categories with SEO optimization.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <span className="mr-2 bg-black">+</span>
          Add New Post
        </button>
      </div>

      {/* Blog Posts List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {post.title}
                        </h3>
                         <div className="flex items-center text-xs text-gray-400 mt-2 space-x-4">
                        <span>Slug: {post.slug}</span>
                        <span>Created: {new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="inline-flex items-center px-3 py-1 border border-gray-700 text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
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
          <div className="relative top-10 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
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
                    className="inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md  text-gray-700 bg-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {editingPost ? 'Update Post' : 'Create Post'}
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