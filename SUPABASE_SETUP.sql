-- 🎯 LEONLOGIC CMS COMPLETE SUPABASE SETUP
-- Run this entire script in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user role enum
CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');

-- ========================================
-- AUTHENTICATION & USER MANAGEMENT
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

-- ========================================
-- CONTENT MANAGEMENT TABLES
-- ========================================

-- Hero section content
CREATE TABLE IF NOT EXISTS hero_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  subtitle VARCHAR(1000),
  description TEXT,
  cta_text VARCHAR(200),
  cta_link VARCHAR(500),
  background_image TEXT,
  badge_text VARCHAR(100),
  badge_icon VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
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

-- Page sections (flexible content)
CREATE TABLE IF NOT EXISTS page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name VARCHAR(100) NOT NULL,
  section_data JSONB NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ========================================

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admin users can view their own data" ON admin_users;
DROP POLICY IF EXISTS "Only admins can manage users" ON admin_users;
DROP POLICY IF EXISTS "Public can view active hero content" ON hero_content;
DROP POLICY IF EXISTS "Public can view active services" ON services;
DROP POLICY IF EXISTS "Public can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Public can view active testimonials" ON testimonials;
DROP POLICY IF EXISTS "Public can view active FAQs" ON faqs;
DROP POLICY IF EXISTS "Public can view company info" ON company_info;
DROP POLICY IF EXISTS "Public can view active page sections" ON page_sections;
DROP POLICY IF EXISTS "Admins and editors can manage hero content" ON hero_content;
DROP POLICY IF EXISTS "Admins and editors can manage services" ON services;
DROP POLICY IF EXISTS "Admins and editors can manage blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins and editors can manage testimonials" ON testimonials;
DROP POLICY IF EXISTS "Admins and editors can manage FAQs" ON faqs;
DROP POLICY IF EXISTS "Only admins can manage company info" ON company_info;
DROP POLICY IF EXISTS "Admins and editors can manage page sections" ON page_sections;

-- Admin users policies
CREATE POLICY "Admin users can view their own data" ON admin_users
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage users" ON admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Content policies - allow public read access for active content
CREATE POLICY "Public can view active hero content" ON hero_content
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active services" ON services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published' AND is_active = true);

CREATE POLICY "Public can view active testimonials" ON testimonials
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active FAQs" ON faqs
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view company info" ON company_info
  FOR SELECT USING (true);

CREATE POLICY "Public can view active page sections" ON page_sections
  FOR SELECT USING (is_active = true);

-- Admin policies - allow authenticated users with appropriate roles to manage content
CREATE POLICY "Admins and editors can manage hero content" ON hero_content
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
  );

CREATE POLICY "Admins and editors can manage services" ON services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
  );

CREATE POLICY "Admins and editors can manage blog posts" ON blog_posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
  );

CREATE POLICY "Admins and editors can manage testimonials" ON testimonials
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
  );

CREATE POLICY "Admins and editors can manage FAQs" ON faqs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
  );

CREATE POLICY "Only admins can manage company info" ON company_info
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role = 'admin' AND is_active = true
    )
  );

CREATE POLICY "Admins and editors can manage page sections" ON page_sections
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role IN ('admin', 'editor') AND is_active = true
    )
  );

-- ========================================
-- INDEXES FOR PERFORMANCE
-- ========================================

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_services_active_sort ON services(is_active, sort_order);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published ON blog_posts(status, published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_testimonials_active_sort ON testimonials(is_active, sort_order);
CREATE INDEX IF NOT EXISTS idx_faqs_active_sort ON faqs(is_active, sort_order);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_user_id ON admin_users(user_id);

-- ========================================
-- SAMPLE DATA
-- ========================================

-- Insert sample company info
INSERT INTO company_info (company_name, tagline, description, contact_email, contact_phone) 
VALUES (
  'LeonLogic',
  'Digital Marketing. Creative Design.',
  'Digital Agency offering unique solutions to create digital presence and increase your sales.',
  'info@leonlogic.com',
  '+1 (555) 123-4567'
) ON CONFLICT DO NOTHING;

-- Insert sample hero content
INSERT INTO hero_content (title, subtitle, description, cta_text, cta_link, badge_text, badge_icon) 
VALUES (
  'DIGITAL MARKETING. CREATIVE DESIGN.',
  'Welcome to Leonlogic',
  'Digital Agency offering unique solutions to create digital presence and increase your sales.',
  'Get Started',
  '/contact-us',
  'Welcome to Leonlogic',
  '⚡'
) ON CONFLICT DO NOTHING;

-- Insert sample services
INSERT INTO services (title, description, icon_path, icon_alt, link_url, sort_order, is_active) VALUES
('Email Marketing', 'Our design services starts and ends best in class experience.', '/assets/images/icon-mail.svg', 'Email Marketing', '/services-detail', 1, true),
('Social Media', 'Our design services starts and ends best in class experience.', '/assets/images/icon-instagram.svg', 'Social Media', '/services-detail', 2, true),
('Google/FB Ads', 'Our design services starts and ends best in class experience.', '/assets/images/icon-fb-ads.svg', 'Google/FB Ads', '/services-detail', 3, true),
('Content Strategy', 'Our design services starts and ends best in class experience.', '/assets/images/icon-content.svg', 'Content Strategy', '/services-detail', 4, true)
ON CONFLICT DO NOTHING;

-- Insert sample FAQs
INSERT INTO faqs (question, answer, category, sort_order, is_active) VALUES
('What services do you offer?', 'We offer a wide range of digital services including web design, SEO, social media marketing, and content creation.', 'General', 1, true),
('How long does a project take?', 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex projects can take 8-12 weeks.', 'Timeline', 2, true),
('Do you provide ongoing support?', 'Yes, we offer ongoing support and maintenance packages to ensure your website continues to perform optimally.', 'Support', 3, true)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_position, client_company, rating, content, is_featured, sort_order, is_active) VALUES
('John Smith', 'CEO', 'TechCorp', 5, 'LeonLogic transformed our online presence completely. Our website traffic increased by 300% within 3 months!', true, 1, true),
('Sarah Johnson', 'Marketing Director', 'StartupXYZ', 5, 'Professional, responsive, and results-driven. Highly recommend their services for any business looking to grow online.', true, 2, true),
('Mike Wilson', 'Founder', 'InnovateLab', 5, 'The team at LeonLogic exceeded our expectations. They delivered our project on time and within budget.', false, 3, true)
ON CONFLICT DO NOTHING;

-- ========================================
-- FUNCTIONS AND TRIGGERS
-- ========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_admin_users_updated_at ON admin_users;
DROP TRIGGER IF EXISTS update_hero_content_updated_at ON hero_content;
DROP TRIGGER IF EXISTS update_services_updated_at ON services;
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
DROP TRIGGER IF EXISTS update_testimonials_updated_at ON testimonials;
DROP TRIGGER IF EXISTS update_faqs_updated_at ON faqs;
DROP TRIGGER IF EXISTS update_company_info_updated_at ON company_info;
DROP TRIGGER IF EXISTS update_page_sections_updated_at ON page_sections;

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_hero_content_updated_at BEFORE UPDATE ON hero_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON faqs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_company_info_updated_at BEFORE UPDATE ON company_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_page_sections_updated_at BEFORE UPDATE ON page_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- CREATE ADMIN USER
-- ========================================

-- Create the admin user directly
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'leonlogic.com@gmail.com',
  crypt('BB13c0541c1@@@!', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Get the user_id and insert into admin_users
INSERT INTO admin_users (user_id, email, role, full_name, is_active) 
VALUES (
  (SELECT id FROM auth.users WHERE email = 'leonlogic.com@gmail.com'),
  'leonlogic.com@gmail.com',
  'admin',
  'LeonLogic Admin',
  true
);

-- ========================================
-- VERIFICATION
-- ========================================

-- Check that everything was created successfully
SELECT 'Tables created successfully' as status;

-- Verify admin user was created
SELECT email, role, is_active FROM admin_users WHERE email = 'leonlogic.com@gmail.com';

-- Verify sample data was inserted
SELECT COUNT(*) as services_count FROM services;
SELECT COUNT(*) as testimonials_count FROM testimonials;
SELECT COUNT(*) as faqs_count FROM faqs;

-- ========================================
-- COMPLETION MESSAGE
-- ========================================

-- Setup complete! You can now login at:
-- URL: http://localhost:3001/leonlogic-login
-- Email: leonlogic.com@gmail.com
-- Password: BB13c0541c1@@@! 