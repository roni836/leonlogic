const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Read .env.local file manually
const envContent = fs.readFileSync('.env.local', 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

console.log('Checking database tables...');

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkDatabase() {
  try {
    console.log('\n1. Checking hero_section table...');
    
    const { data: heroData, error: heroError } = await supabase
      .from('hero_section')
      .select('*')
      .limit(1);
    
    if (heroError) {
      console.error('❌ Hero section table error:', heroError);
      console.log('This might mean the table does not exist');
    } else {
      console.log('✅ Hero section table exists');
      console.log('Sample data:', heroData);
    }
    
    console.log('\n2. Checking other tables...');
    
    const tables = ['services', 'blog_posts', 'testimonials', 'faqs', 'audit_leads', 'company_info'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('count', { count: 'exact', head: true });
        
        if (error) {
          console.log(`❌ ${table}: ${error.message}`);
        } else {
          console.log(`✅ ${table}: ${data} records`);
        }
      } catch (err) {
        console.log(`❌ ${table}: ${err.message}`);
      }
    }
    
  } catch (err) {
    console.error('❌ Database check failed:', err);
  }
}

checkDatabase(); 