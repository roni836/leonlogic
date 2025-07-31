-- 🎯 LEONLOGIC CMS DATABASE SETUP
-- Run this script in your Supabase SQL editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user role enum
CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');

-- ========================================
-- AUTHENTICATION & USER MANAGEMENT
-- ========================================

-- Admin users table
CREATE TABLE admin_users (
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
CREATE TABLE hero_content (
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
CREATE TABLE services (
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

CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Blog posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  category VARCHAR(100),
  tags TEXT[],
  author_id UUID REFERENCES admin_users(id),
  status VARCHAR(50) DEFAULT 'draft', -- draft, published, archived
  published_at TIMESTAMP,
  seo_title VARCHAR(500),
  seo_description TEXT,
  seo_keywords TEXT[],
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Testimonials/Reviews
CREATE TABLE testimonials (
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
CREATE TABLE faqs (
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
CREATE TABLE company_info (
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
  social_links JSONB, -- {facebook, twitter, linkedin, instagram}
  seo_title VARCHAR(500),
  seo_description TEXT,
  seo_keywords TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Page sections (flexible content)
CREATE TABLE page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name VARCHAR(100) NOT NULL, -- hero, services, about, testimonials, etc.
  section_data JSONB NOT NULL, -- flexible content structure
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
CREATE INDEX idx_services_active_sort ON services(is_active, sort_order);
CREATE INDEX idx_blog_posts_status_published ON blog_posts(status, published_at);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_testimonials_active_sort ON testimonials(is_active, sort_order);
CREATE INDEX idx_faqs_active_sort ON faqs(is_active, sort_order);
CREATE INDEX idx_admin_users_email ON admin_users(email);
CREATE INDEX idx_admin_users_user_id ON admin_users(user_id);

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
);

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
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_hero_content_updated_at BEFORE UPDATE ON hero_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_faqs_updated_at BEFORE UPDATE ON faqs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_company_info_updated_at BEFORE UPDATE ON company_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_page_sections_updated_at BEFORE UPDATE ON page_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- STORAGE BUCKETS FOR FILE UPLOADS
-- ========================================

-- Note: You'll need to create these buckets in the Supabase dashboard
-- 1. Go to Storage in your Supabase dashboard
-- 2. Create a new bucket called 'cms-uploads'
-- 3. Set it to public or private based on your needs
-- 4. Configure RLS policies for the bucket

-- Example storage policies (run these after creating the bucket):
-- CREATE POLICY "Public can view cms uploads" ON storage.objects FOR SELECT USING (bucket_id = 'cms-uploads');
-- CREATE POLICY "Authenticated users can upload to cms" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'cms-uploads' AND auth.role() = 'authenticated');
-- CREATE POLICY "Users can update their own uploads" ON storage.objects FOR UPDATE USING (bucket_id = 'cms-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);
-- CREATE POLICY "Users can delete their own uploads" ON storage.objects FOR DELETE USING (bucket_id = 'cms-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

-- ========================================
-- COMPLETION MESSAGE
-- ========================================

-- The database setup is now complete!
-- Next steps:
-- 1. Create your first admin user in the Supabase Auth dashboard
-- 2. Insert the admin user into the admin_users table
-- 3. Configure your environment variables
-- 4. Test the CMS functionality

-- Example: Insert your first admin user (replace with your actual user_id from auth.users)
-- INSERT INTO admin_users (user_id, email, role, full_name, is_active) 
-- VALUES ('your-user-id-here', 'admin@leonlogic.com', 'admin', 'Admin User', true); 