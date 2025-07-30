# 🎯 LEONLOGIC CMS DASHBOARD SETUP

## **📋 COMPLETE CMS SYSTEM FOR LANDING PAGE CONTENT MANAGEMENT**

### **🔐 AUTHENTICATION & SECURITY**

#### **1. Supabase Auth Setup:**
```sql
-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create admin role
CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');

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

-- RLS Policies for admin_users
CREATE POLICY "Admin users can view their own data" ON admin_users
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage users" ON admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

### **📝 CONTENT MANAGEMENT TABLES**

#### **2. Hero Section Content:**
```sql
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
```

#### **3. Services Content:**
```sql
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
```

#### **4. Blog Posts:**
```sql
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
```

#### **5. Testimonials/Reviews:**
```sql
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
```

#### **6. FAQ Content:**
```sql
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
```

#### **7. Company Information:**
```sql
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
```

#### **8. Page Sections:**
```sql
CREATE TABLE page_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name VARCHAR(100) NOT NULL, -- hero, services, about, testimonials, etc.
  section_data JSONB NOT NULL, -- flexible content structure
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### **🔧 ENVIRONMENT VARIABLES**

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# CMS Configuration
NEXT_PUBLIC_CMS_URL=/admin
CMS_SECRET_KEY=your_cms_secret_key

# File Upload (Supabase Storage)
NEXT_PUBLIC_STORAGE_BUCKET=cms-uploads
```

### **📁 FILE STRUCTURE**

```
app/
├── admin/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── content/
│   │   ├── hero/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── testimonials/
│   │   │   └── page.tsx
│   │   └── faq/
│   │       └── page.tsx
│   ├── settings/
│   │   └── page.tsx
│   └── users/
│       └── page.tsx
├── api/
│   ├── admin/
│   │   ├── auth/
│   │   │   └── route.ts
│   │   ├── content/
│   │   │   ├── hero/
│   │   │   │   └── route.ts
│   │   │   ├── services/
│   │   │   │   └── route.ts
│   │   │   ├── blog/
│   │   │   │   └── route.ts
│   │   │   ├── testimonials/
│   │   │   │   └── route.ts
│   │   │   └── faq/
│   │   │       └── route.ts
│   │   └── upload/
│   │       └── route.ts
│   └── cms/
│       ├── hero/
│       │   └── route.ts
│       ├── services/
│       │   └── route.ts
│       ├── blog/
│       │   └── route.ts
│       ├── testimonials/
│       │   └── route.ts
│       └── faq/
│           └── route.ts
components/
├── admin/
│   ├── AdminLayout.tsx
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── AuthGuard.tsx
│   ├── ContentEditor.tsx
│   ├── ImageUpload.tsx
│   ├── RichTextEditor.tsx
│   └── Dashboard/
│       ├── StatsCard.tsx
│       ├── RecentActivity.tsx
│       └── QuickActions.tsx
└── cms/
    ├── HeroSection.tsx
    ├── ServicesSection.tsx
    ├── BlogSection.tsx
    ├── TestimonialsSection.tsx
    └── FAQSection.tsx
```

### **🚀 FEATURES**

#### **1. Authentication & Authorization:**
- Secure login/logout
- Role-based access (admin, editor, viewer)
- Session management
- Password reset functionality

#### **2. Content Management:**
- Hero section editor
- Services management
- Blog post creation/editing
- Testimonials management
- FAQ management
- Company information editor

#### **3. Media Management:**
- Image upload to Supabase Storage
- Image optimization
- File organization
- CDN integration

#### **4. SEO Management:**
- Meta title/description editor
- Keyword management
- Open Graph tags
- Schema markup

#### **5. Analytics & Insights:**
- Content performance tracking
- User engagement metrics
- SEO performance
- Lead generation tracking

#### **6. Backup & Versioning:**
- Content versioning
- Automatic backups
- Rollback functionality

### **🎨 UI/UX FEATURES**

#### **1. Modern Dashboard:**
- Clean, professional design
- Responsive layout
- Dark/light mode
- Real-time updates

#### **2. Rich Text Editor:**
- WYSIWYG editor
- Image embedding
- Link management
- Code highlighting

#### **3. Drag & Drop:**
- Content reordering
- Image upload
- File management

#### **4. Preview Mode:**
- Live preview of changes
- Mobile/desktop preview
- SEO preview

### **🔒 SECURITY FEATURES**

#### **1. Authentication:**
- JWT tokens
- Refresh token rotation
- Session timeout
- Multi-factor authentication (optional)

#### **2. Authorization:**
- Role-based access control
- Resource-level permissions
- API rate limiting

#### **3. Data Protection:**
- Input sanitization
- XSS protection
- CSRF protection
- SQL injection prevention

### **📊 ANALYTICS & REPORTING**

#### **1. Content Analytics:**
- Page views
- Engagement metrics
- Conversion tracking
- A/B testing

#### **2. SEO Analytics:**
- Search rankings
- Organic traffic
- Keyword performance
- Technical SEO scores

#### **3. User Analytics:**
- Admin activity
- Content creation metrics
- System usage statistics

### **🔄 INTEGRATION**

#### **1. Website Integration:**
- Dynamic content loading
- Real-time updates
- Cache management
- CDN integration

#### **2. Third-party Services:**
- Google Analytics
- Search Console
- Social media platforms
- Email marketing tools

### **🚀 DEPLOYMENT**

#### **1. Production Setup:**
- Environment configuration
- Database migration
- File storage setup
- SSL certificate

#### **2. Monitoring:**
- Error tracking
- Performance monitoring
- Uptime monitoring
- Security monitoring

This CMS system will give you complete control over your landing page content while maintaining security and providing a professional user experience! 