-- 🎯 CMS POLICIES SETUP
-- Run this AFTER the BASIC_CMS_SETUP.sql script

-- ========================================
-- ENABLE RLS
-- ========================================

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;

-- ========================================
-- CREATE POLICIES
-- ========================================

-- Public read access for active content
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

-- Admin access policies (simple - allow all for now)
CREATE POLICY "Admins can manage all content" ON services
  FOR ALL USING (true);

CREATE POLICY "Admins can manage all content" ON blog_posts
  FOR ALL USING (true);

CREATE POLICY "Admins can manage all content" ON testimonials
  FOR ALL USING (true);

CREATE POLICY "Admins can manage all content" ON faqs
  FOR ALL USING (true);

CREATE POLICY "Admins can manage all content" ON company_info
  FOR ALL USING (true);

CREATE POLICY "Admins can manage all content" ON admin_users
  FOR ALL USING (true);

-- ========================================
-- VERIFICATION
-- ========================================

SELECT 'CMS Policies created successfully' as status; 