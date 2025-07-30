'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/libs/supabase';
import Image from 'next/image';

interface HeroSection {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  background_image?: string;
  cta_primary_text?: string;
  cta_primary_url?: string;
  cta_secondary_text?: string;
  cta_secondary_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function HeroSectionManagement() {
  const [heroSection, setHeroSection] = useState<HeroSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    background_image: '',
    cta_primary_text: '',
    cta_primary_url: '',
    cta_secondary_text: '',
    cta_secondary_url: '',
    is_active: true,
  });

  useEffect(() => {
    fetchHeroSection();
  }, []);

  const fetchHeroSection = async () => {
    try {
      console.log('[HeroSection] Fetching hero section...');
      const { data, error } = await supabase
        .from('hero_section')
        .select('*')
        .single();

      if (error) {
        console.error('[HeroSection] Supabase error:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        
        if (error.code === 'PGRST116') {
          // No hero section found - this is normal for new installations
          console.log('[HeroSection] No hero section found - this is normal');
          setHeroSection(null);
        } else {
          setError(`Failed to load hero section: ${error.message}`);
        }
        return;
      }

      console.log('[HeroSection] Hero section loaded:', data);
      setHeroSection(data);
    } catch (err) {
      console.error('[HeroSection] Unexpected error:', err);
      setError(`Failed to load hero section: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (heroSection) {
        // Update existing hero section
        const { error } = await supabase
          .from('hero_section')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', heroSection.id);

        if (error) {
          console.error('Error updating hero section:', error);
          setError('Failed to update hero section');
          return;
        }
      } else {
        // Create new hero section
        const { error } = await supabase
          .from('hero_section')
          .insert([{
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }]);

        if (error) {
          console.error('Error creating hero section:', error);
          setError('Failed to create hero section');
          return;
        }
      }

      // Reset form and refresh data
      setShowEditModal(false);
      fetchHeroSection();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to save hero section');
    }
  };

  const handleEdit = () => {
    if (heroSection) {
      setFormData({
        title: heroSection.title,
        subtitle: heroSection.subtitle,
        description: heroSection.description || '',
        background_image: heroSection.background_image || '',
        cta_primary_text: heroSection.cta_primary_text || '',
        cta_primary_url: heroSection.cta_primary_url || '',
        cta_secondary_text: heroSection.cta_secondary_text || '',
        cta_secondary_url: heroSection.cta_secondary_url || '',
        is_active: heroSection.is_active,
      });
    }
    setShowEditModal(true);
  };

  const toggleHeroStatus = async () => {
    if (!heroSection) return;

    try {
      const { error } = await supabase
        .from('hero_section')
        .update({
          is_active: !heroSection.is_active,
          updated_at: new Date().toISOString(),
        })
        .eq('id', heroSection.id);

      if (error) {
        console.error('Error updating hero section status:', error);
        setError('Failed to update hero section status');
        return;
      }

      fetchHeroSection();
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update hero section status');
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
          <h1 className="text-2xl font-bold text-gray-900">Hero Section Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your homepage hero section content and call-to-action buttons.
          </p>
        </div>
        <button
          onClick={handleEdit}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {heroSection ? 'Edit Hero Section' : 'Create Hero Section'}
        </button>
      </div>

      {/* Hero Section Preview */}
      {heroSection && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Current Hero Section
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Preview of your current hero section content.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    heroSection.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {heroSection.is_active ? 'Active' : 'Inactive'}
                  </span>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Title</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {heroSection.title}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Subtitle</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {heroSection.subtitle}
                </dd>
              </div>
              {heroSection.description && (
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {heroSection.description}
                  </dd>
                </div>
              )}
              {heroSection.background_image && (
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Background Image</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <Image
                      height={80}
                      width={80}
                      src={heroSection.background_image}
                      alt="Hero background"
                      className="h-20 w-auto rounded object-cover"
                    />
                  </dd>
                </div>
              )}
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Primary CTA</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {heroSection.cta_primary_text ? (
                    <a href={heroSection.cta_primary_url} className="text-green-600 hover:text-green-500">
                      {heroSection.cta_primary_text}
                    </a>
                  ) : (
                    <span className="text-gray-400">Not set</span>
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Secondary CTA</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {heroSection.cta_secondary_text ? (
                    <a href={heroSection.cta_secondary_url} className="text-green-600 hover:text-green-500">
                      {heroSection.cta_secondary_text}
                    </a>
                  ) : (
                    <span className="text-gray-400">Not set</span>
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date(heroSection.updated_at).toLocaleDateString()} at {new Date(heroSection.updated_at).toLocaleTimeString()}
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={toggleHeroStatus}
              className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md ${
                heroSection.is_active
                  ? 'text-red-700 bg-red-100 hover:bg-red-200'
                  : 'text-green-700 bg-green-100 hover:bg-green-200'
              }`}
            >
              {heroSection.is_active ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {heroSection ? 'Edit Hero Section' : 'Create Hero Section'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter hero title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subtitle *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter hero subtitle..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter hero description..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Background Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.background_image}
                    onChange={(e) => setFormData({ ...formData, background_image: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="https://example.com/hero-bg.jpg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Primary CTA Text
                    </label>
                    <input
                      type="text"
                      value={formData.cta_primary_text}
                      onChange={(e) => setFormData({ ...formData, cta_primary_text: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="e.g., Get Started"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Primary CTA URL
                    </label>
                    <input
                      type="url"
                      value={formData.cta_primary_url}
                      onChange={(e) => setFormData({ ...formData, cta_primary_url: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="https://example.com/contact"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Secondary CTA Text
                    </label>
                    <input
                      type="text"
                      value={formData.cta_secondary_text}
                      onChange={(e) => setFormData({ ...formData, cta_secondary_text: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="e.g., Learn More"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Secondary CTA URL
                    </label>
                    <input
                      type="url"
                      value={formData.cta_secondary_url}
                      onChange={(e) => setFormData({ ...formData, cta_secondary_url: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="https://example.com/about"
                    />
                  </div>
                </div>

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

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {heroSection ? 'Update Hero Section' : 'Create Hero Section'}
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