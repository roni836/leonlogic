-- 🎯 CREATE LEONLOGIC ADMIN USER
-- Run these commands AFTER running the main CMS_DATABASE_SETUP.sql

-- Step 1: Create the user in Supabase Auth (you'll need to do this manually in the dashboard)
-- Go to Authentication → Users → Add User
-- Email: leonlogic.com@gmail.com
-- Password: BB13c0541c1@@@!

-- Step 2: Get the user_id from the auth.users table
-- After creating the user, run this to get the user_id:
SELECT id FROM auth.users WHERE email = 'leonlogic.com@gmail.com';

-- Step 3: Insert the admin user into admin_users table
-- Replace 'YOUR_USER_ID_HERE' with the actual user_id from step 2
INSERT INTO admin_users (user_id, email, role, full_name, is_active) 
VALUES (
  (SELECT id FROM auth.users WHERE email = 'leonlogic.com@gmail.com'),
  'leonlogic.com@gmail.com',
  'admin',
  'LeonLogic Admin',
  true
);

-- Step 4: Verify the admin user was created
SELECT * FROM admin_users WHERE email = 'leonlogic.com@gmail.com';

-- Step 5: Test the login
-- Now you can login at: http://localhost:3001/leonlogic-login
-- Email: leonlogic.com@gmail.com
-- Password: BB13c0541c1@@@! 