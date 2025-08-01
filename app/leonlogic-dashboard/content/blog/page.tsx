'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  blog_category_id?: string;
  tags?: string[];
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string[];
  view_count: number;
  created_at: string;
  updated_at: string;
}
interface BlogCategory {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function BlogManagement() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogCategory, setBlogCategory] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    blog_category_id: '',
    tags: [] as string[],
    status: 'draft' as 'draft' | 'published' | 'archived',
    seo_title: '',
    seo_description: '',
    seo_keywords: [] as string[],
  });

  const handleFileUpload = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `icons/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('service-icons')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Error uploading file:', uploadError);
      setError('Image upload failed');
      return;
    }

    const { data: publicURLData } = supabase.storage
      .from('service-icons')
      .getPublicUrl(filePath);

    setFormData(prev => ({
      ...prev,
      featured_image: publicURLData.publicUrl
    }));
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
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

  useEffect(() => {
    fetchBlogCategory();
  }, []);

  const fetchBlogCategory = async () => {
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

      setBlogCategory(data || []);
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
        published_at: formData.status === 'published' ? new Date().toISOString() : null,
      };

      if (editingPost) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
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
          .from('blog_posts')
          .insert([{
            ...postData,
            created_at: new Date().toISOString(),
            view_count: 0,
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

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image || '',
      blog_category_id: post.blog_category_id || '',
      tags: post.tags || [],
      status: post.status,
      seo_title: post.seo_title || '',
      seo_description: post.seo_description || '',
      seo_keywords: post.seo_keywords || [],
    });
    setShowCreateModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_posts')
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
      excerpt: '',
      content: '',
      featured_image: '',
      blog_category_id: '',
      tags: [],
      status: 'draft',
      seo_title: '',
      seo_description: '',
      seo_keywords: [],
    });
    setEditingPost(null);
    setShowCreateModal(false);
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags });
  };

  const handleKeywordsChange = (keywordsString: string) => {
    const keywords = keywordsString.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);
    setFormData({ ...formData, seo_keywords: keywords });
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
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create, edit, and manage your blog posts with SEO optimization.
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
                    <div className="flex-shrink-0 h-16 w-16">
                      {post.featured_image ? (
                        <Image
                          height={64}
                          width={64}
                          className="h-16 w-16 rounded-lg object-cover"
                          src={post.featured_image}
                          // src={post.featured_image}
                          alt={post.title}
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-lg bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {post.title}
                        </h3>
                        <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-400 mt-2 space-x-4">
                        <span>Slug: {post.slug}</span>
                        <span>Views: {post.view_count}</span>
                        <span>Category: {post.blog_category_id || 'Uncategorized'}</span>
                        <span>Created: {new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Excerpt *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Brief summary of the blog post..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Content *
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Write your blog post content here..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Featured Image URL
                    </label>
                    {/* <input
                      type="url"
                      value={formData.featured_image}
                      onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="https://example.com/image.jpg"
                    /> */}

                    {formData.featured_image && (
                      <Image
                        src={formData.featured_image}
                        alt={formData.featured_image || 'Uploaded icon'}
                        width={40}
                        height={40}
                        className="mt-2"
                      />
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          await handleFileUpload(file); // <-- Upload new file and update formData
                        }
                      }}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      value={formData.blog_category_id}
                      onChange={(e) =>
                        setFormData({ ...formData, blog_category_id: e.target.value })
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="">Choose Category</option>
                      {blogCategory.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags.join(', ')}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' | 'archived' })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                {/* SEO Section */}
                <div className="border-t pt-4">
                  <h4 className="text-md font-medium text-gray-900 mb-3">SEO Settings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        SEO Title
                      </label>
                      <input
                        type="text"
                        value={formData.seo_title}
                        onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="SEO optimized title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        SEO Keywords (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={formData.seo_keywords.join(', ')}
                        onChange={(e) => handleKeywordsChange(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      SEO Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.seo_description}
                      onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="SEO meta description (150-160 characters recommended)"
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