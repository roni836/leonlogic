# 🎯 LEONLOGIC CMS SETUP GUIDE

## **📋 COMPLETE CMS DASHBOARD SYSTEM FOR LANDING PAGE CONTENT MANAGEMENT**

### **🚀 WHAT YOU GET:**

✅ **Secure Admin Dashboard** with authentication  
✅ **Content Management** for all landing page sections  
✅ **Role-based Access Control** (Admin, Editor, Viewer)  
✅ **Dynamic Content Loading** on the frontend  
✅ **File Upload Management** with Supabase Storage  
✅ **SEO Management** for all content  
✅ **Blog Post Management** with rich text editor  
✅ **Testimonials & FAQ Management**  
✅ **Company Information Management**  
✅ **Real-time Updates** without code changes  

---

## **🔧 SETUP STEPS**

### **1. SUPABASE SETUP**

#### **A. Create Supabase Project:**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and API keys

#### **B. Database Setup:**
1. Go to your Supabase dashboard → SQL Editor
2. Copy and paste the entire content from `CMS_DATABASE_SETUP.sql`
3. Run the script to create all tables and policies

#### **C. Storage Setup:**
1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `cms-uploads`
3. Set it to public (for now)
4. Add these storage policies:

```sql
-- Allow public read access
CREATE POLICY "Public can view cms uploads" ON storage.objects 
FOR SELECT USING (bucket_id = 'cms-uploads');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload to cms" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'cms-uploads' AND auth.role() = 'authenticated');

-- Allow users to update their uploads
CREATE POLICY "Users can update their own uploads" ON storage.objects 
FOR UPDATE USING (bucket_id = 'cms-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to delete their uploads
CREATE POLICY "Users can delete their own uploads" ON storage.objects 
FOR DELETE USING (bucket_id = 'cms-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);
```

### **2. ENVIRONMENT VARIABLES**

Add these to your `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# CMS Configuration
NEXT_PUBLIC_CMS_URL=/admin
CMS_SECRET_KEY=your_random_secret_key

# Storage Configuration
NEXT_PUBLIC_STORAGE_BUCKET=cms-uploads
```

### **3. CREATE FIRST ADMIN USER**

#### **A. Create User in Supabase Auth:**
1. Go to Authentication → Users in your Supabase dashboard
2. Click "Add User"
3. Enter email and password
4. Note down the user ID

#### **B. Add User to Admin Table:**
1. Go to SQL Editor
2. Run this command (replace with your actual values):

```sql
INSERT INTO admin_users (user_id, email, role, full_name, is_active) 
VALUES ('your-user-id-from-auth', 'admin@leonlogic.com', 'admin', 'Admin User', true);
```

### **4. INSTALL DEPENDENCIES**

```bash
npm install @supabase/supabase-js
```

---

## **🎨 FRONTEND INTEGRATION**

### **1. Replace Static Content with CMS Components**

#### **A. Services Section:**
Replace your current services section with the CMS-powered version:

```tsx
// In your HomeClient.tsx or service page
import ServicesSection from '@/components/cms/ServicesSection';

// Replace static services with:
<ServicesSection />
```

#### **B. Other Sections:**
Create similar CMS components for:
- Hero Section
- Blog Posts
- Testimonials
- FAQ Section
- Company Information

### **2. API Routes**

The CMS uses these API routes:
- `/api/cms/services` - Services data
- `/api/cms/hero` - Hero content
- `/api/cms/blog` - Blog posts
- `/api/cms/testimonials` - Testimonials
- `/api/cms/faq` - FAQ data
- `/api/cms/company` - Company info

---

## **🔐 ACCESSING THE CMS**

### **Secure Admin Dashboard URL:**
```
https://yourdomain.com/leonlogic-login
```

### **Login Credentials:**
- Email: The email you used when creating the admin user
- Password: The password you set in Supabase Auth

### **Security Features:**
- **Hidden route**: `/leonlogic-login` instead of obvious `/admin`
- **Secure dashboard**: `/leonlogic-dashboard` for authenticated users
- **Role-based access**: Only authorized users can access
- **Session management**: Automatic logout on inactivity

---

## **📱 CMS FEATURES**

### **1. Dashboard Overview**
- Statistics for all content types
- Quick actions for common tasks
- Recent activity tracking

### **2. Content Management**
- **Services**: Add, edit, reorder, activate/deactivate
- **Blog Posts**: Create, edit, publish, manage SEO
- **Testimonials**: Add client reviews with ratings
- **FAQ**: Manage frequently asked questions
- **Hero Section**: Update main landing page content
- **Company Info**: Manage company details and SEO

### **3. User Management**
- Create admin users
- Assign roles (admin, editor, viewer)
- Manage user permissions

### **4. File Management**
- Upload images and files
- Organize media library
- Optimize images automatically

---

## **🔄 CONTENT WORKFLOW**

### **1. Adding New Content:**
1. Login to `/leonlogic-login`
2. Navigate to the content type you want to manage
3. Click "Add New" button
4. Fill in the form
5. Save and publish

### **2. Editing Existing Content:**
1. Find the content in the admin panel
2. Click "Edit" button
3. Make your changes
4. Save updates

### **3. Publishing Content:**
- Content is automatically live when saved
- Use the "Active/Inactive" toggle to control visibility
- Blog posts have draft/published status

---

## **🔒 SECURITY FEATURES**

### **1. Authentication:**
- Secure login with Supabase Auth
- Session management
- Password protection

### **2. Authorization:**
- Role-based access control
- Admin: Full access to everything
- Editor: Can manage content, not users
- Viewer: Read-only access

### **3. Data Protection:**
- Row Level Security (RLS) policies
- Input sanitization
- XSS protection
- CSRF protection

---

## **📊 ANALYTICS & MONITORING**

### **1. Content Analytics:**
- View counts for blog posts
- Content performance tracking
- User engagement metrics

### **2. System Monitoring:**
- Admin activity tracking
- Error logging
- Performance monitoring

---

## **🚀 DEPLOYMENT**

### **1. Production Setup:**
1. Set up environment variables in your hosting platform
2. Configure Supabase production settings
3. Set up custom domain for admin panel
4. Configure SSL certificates

### **2. Backup Strategy:**
- Regular database backups
- Content versioning
- File storage backups

---

## **🛠️ CUSTOMIZATION**

### **1. Adding New Content Types:**
1. Create new table in Supabase
2. Add RLS policies
3. Create admin interface
4. Add API routes
5. Create frontend components

### **2. Custom Fields:**
- Extend existing tables with new columns
- Add custom validation
- Create custom input components

### **3. Styling:**
- Customize admin panel design
- Match your brand colors
- Add custom CSS

---

## **📞 SUPPORT & MAINTENANCE**

### **1. Regular Maintenance:**
- Update dependencies
- Monitor performance
- Backup data regularly
- Review security settings

### **2. Troubleshooting:**
- Check Supabase logs
- Monitor API responses
- Verify environment variables
- Test authentication flow

---

## **🎯 NEXT STEPS**

1. **Set up the database** using the SQL script
2. **Configure environment variables**
3. **Create your first admin user**
4. **Test the admin panel**
5. **Replace static content** with CMS components
6. **Customize the design** to match your brand
7. **Add more content types** as needed
8. **Set up monitoring** and analytics

---

## **💡 TIPS & BEST PRACTICES**

### **1. Content Management:**
- Use descriptive titles and descriptions
- Optimize images before uploading
- Write SEO-friendly content
- Keep content organized and up-to-date

### **2. Security:**
- Use strong passwords
- Regularly update admin credentials
- Monitor admin activity
- Backup data frequently

### **3. Performance:**
- Optimize images
- Use caching where appropriate
- Monitor API response times
- Minimize database queries

---

**🎉 Congratulations! You now have a fully functional CMS for your LeonLogic website!**

The CMS will allow you to manage all your website content without touching code, making it easy to keep your site fresh and engaging for visitors. 