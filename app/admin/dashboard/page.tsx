'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface DashboardStats {
  totalServices: number;
  totalBlogPosts: number;
  totalTestimonials: number;
  totalFAQs: number;
  recentAuditLeads: number;
  totalUsers: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalServices: 0,
    totalBlogPosts: 0,
    totalTestimonials: 0,
    totalFAQs: 0,
    recentAuditLeads: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          { count: servicesCount },
          { count: blogCount },
          { count: testimonialsCount },
          { count: faqCount },
          { count: auditLeadsCount },
          { count: usersCount },
        ] = await Promise.all([
          supabase.from('services').select('*', { count: 'exact', head: true }),
          supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
          supabase.from('testimonials').select('*', { count: 'exact', head: true }),
          supabase.from('faqs').select('*', { count: 'exact', head: true }),
          supabase.from('audit_leads').select('*', { count: 'exact', head: true }),
          supabase.from('admin_users').select('*', { count: 'exact', head: true }),
        ]);

        setStats({
          totalServices: servicesCount || 0,
          totalBlogPosts: blogCount || 0,
          totalTestimonials: testimonialsCount || 0,
          totalFAQs: faqCount || 0,
          recentAuditLeads: auditLeadsCount || 0,
          totalUsers: usersCount || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const quickActions = [
    {
      name: 'Add New Service',
      href: '/admin/content/services',
      icon: '⚙️',
      description: 'Create a new service offering',
    },
    {
      name: 'Write Blog Post',
      href: '/admin/content/blog',
      icon: '📝',
      description: 'Create a new blog post',
    },
    {
      name: 'Add Testimonial',
      href: '/admin/content/testimonials',
      icon: '💬',
      description: 'Add a new client testimonial',
    },
    {
      name: 'Edit Hero Section',
      href: '/admin/content/hero',
      icon: '🏠',
      description: 'Update the main hero content',
    },
    {
      name: 'Manage FAQ',
      href: '/admin/content/faq',
      icon: '❓',
      description: 'Add or edit frequently asked questions',
    },
    {
      name: 'Company Settings',
      href: '/admin/settings',
      icon: '🏢',
      description: 'Update company information',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome to your LeonLogic CMS dashboard. Manage your website content and track performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Services</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalServices}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/admin/content/services" className="font-medium text-green-700 hover:text-green-900">
                View all services
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">📝</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Blog Posts</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalBlogPosts}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/admin/content/blog" className="font-medium text-green-700 hover:text-green-900">
                View all posts
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">💬</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Testimonials</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalTestimonials}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/admin/content/testimonials" className="font-medium text-green-700 hover:text-green-900">
                View all testimonials
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">❓</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">FAQ Items</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalFAQs}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/admin/content/faq" className="font-medium text-green-700 hover:text-green-900">
                View all FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Audit Leads</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.recentAuditLeads}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span className="font-medium text-gray-700">Website audit tool leads</span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Admin Users</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalUsers}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/admin/users" className="font-medium text-green-700 hover:text-green-900">
                Manage users
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-2xl mb-4 block">{action.icon}</span>
                <span className="rounded-lg inline-flex p-2 bg-green-50 text-green-700 ring-4 ring-white">
                  <span className="sr-only">{action.name}</span>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 