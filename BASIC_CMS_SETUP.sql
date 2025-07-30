-- 🎯 BASIC LEONLOGIC CMS SETUP
-- Run this script in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user role enum
CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');

-- ========================================
-- CREATE TABLES ONLY
-- ========================================

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  role user_role DEFAULT 'editor',
  full_name VARCHAR(255),
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Services content
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  icon_path VARCHAR(500),
  icon_alt VARCHAR(200),
  link_url VARCHAR(500),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  category VARCHAR(100),
  tags TEXT[],
  author_id UUID REFERENCES admin_users(id),
  status VARCHAR(50) DEFAULT 'draft',
  published_at TIMESTAMP,
  seo_title VARCHAR(500),
  seo_description TEXT,
  seo_keywords TEXT[],
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Testimonials/Reviews
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name VARCHAR(200) NOT NULL,
  client_position VARCHAR(200),
  client_company VARCHAR(200),
  client_avatar TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- FAQ content
CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Company information
CREATE TABLE IF NOT EXISTS company_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(200) NOT NULL,
  tagline VARCHAR(500),
  description TEXT,
  logo_light TEXT,
  logo_dark TEXT,
  favicon TEXT,
  contact_email VARCHAR(200),
  contact_phone VARCHAR(50),
  address TEXT,
  social_links JSONB,
  seo_title VARCHAR(500),
  seo_description TEXT,
  seo_keywords TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ========================================
-- INSERT SAMPLE DATA
-- ========================================

-- Insert sample company info
INSERT INTO company_info (company_name, tagline, description, contact_email, contact_phone) 
VALUES (
  'LeonLogic',
  'Digital Marketing. Creative Design.',
  'Digital Agency offering unique solutions to create digital presence and increase your sales.',
  'info@leonlogic.com',
  '+1 (555) 123-4567'
);

-- Insert sample services
INSERT INTO services (title, description, icon_path, icon_alt, link_url, sort_order, is_active) VALUES
('Email Marketing', 'Our design services starts and ends best in class experience.', '/assets/images/icon-mail.svg', 'Email Marketing', '/services-detail', 1, true),
('Social Media', 'Our design services starts and ends best in class experience.', '/assets/images/icon-instagram.svg', 'Social Media', '/services-detail', 2, true),
('Google/FB Ads', 'Our design services starts and ends best in class experience.', '/assets/images/icon-fb-ads.svg', 'Google/FB Ads', '/services-detail', 3, true),
('Content Strategy', 'Our design services starts and ends best in class experience.', '/assets/images/icon-content.svg', 'Content Strategy', '/services-detail', 4, true);

-- Insert sample FAQs
INSERT INTO faqs (question, answer, category, sort_order, is_active) VALUES
('What services do you offer?', 'We offer a wide range of digital services including web design, SEO, social media marketing, and content creation.', 'General', 1, true),
('How long does a project take?', 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex projects can take 8-12 weeks.', 'Timeline', 2, true),
('Do you provide ongoing support?', 'Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally.', 'Support', 3, true);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_position, client_company, rating, content, is_featured, sort_order, is_active) VALUES
('John Smith', 'CEO', 'TechCorp', 5, 'LeonLogic transformed our online presence completely. Our website traffic increased by 300% within 3 months!', true, 1, true),
('Sarah Johnson', 'Marketing Director', 'StartupXYZ', 5, 'Professional, responsive, and results-driven. Highly recommend their services for any business looking to grow online.', true, 2, true),
('Mike Wilson', 'Founder', 'InnovateLab', 5, 'The team at LeonLogic exceeded our expectations. They delivered our project on time and within budget.', false, 3, true);

-- ========================================
-- VERIFICATION
-- ========================================

SELECT 'CMS Tables created successfully' as status;
SELECT COUNT(*) as services_count FROM services;
SELECT COUNT(*) as testimonials_count FROM testimonials;
SELECT COUNT(*) as faqs_count FROM faqs;

-- ========================================
-- NEXT STEPS
-- ========================================

-- After this script runs successfully, run the policies script separately 