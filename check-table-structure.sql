-- Check calculator_results table structure
-- Run this in your Supabase SQL editor to see what columns exist

-- Check all columns in calculator_results table
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default,
    ordinal_position
FROM information_schema.columns 
WHERE table_name = 'calculator_results' 
ORDER BY ordinal_position;

-- Check if the table exists and has data
SELECT COUNT(*) as total_records FROM calculator_results;

-- Check sample data (first 3 records)
SELECT 
    id,
    name,
    email,
    company,
    phone,
    message,
    estimated_price,
    status,
    created_at
FROM calculator_results 
ORDER BY created_at DESC 
LIMIT 3; 