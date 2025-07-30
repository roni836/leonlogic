-- Calculator Results Table Setup
-- This table stores all calculator submissions with their contact information and selections

-- Create calculator_results table
CREATE TABLE IF NOT EXISTS calculator_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Contact Information (from calculator form)
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    message TEXT,
    
    -- Calculator Selections (stored as JSON for flexibility)
    selections JSONB NOT NULL,
    
    -- Calculated Price
    estimated_price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'EUR',
    
    -- Metadata
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Status tracking
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quote_sent', 'converted', 'lost')),
    admin_notes TEXT,
    
    -- Privacy consent
    privacy_consent BOOLEAN DEFAULT false,
    
    -- Source tracking
    source VARCHAR(100) DEFAULT 'calculator',
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_calculator_results_email ON calculator_results(email);
CREATE INDEX IF NOT EXISTS idx_calculator_results_created_at ON calculator_results(created_at);
CREATE INDEX IF NOT EXISTS idx_calculator_results_status ON calculator_results(status);
CREATE INDEX IF NOT EXISTS idx_calculator_results_selections ON calculator_results USING GIN(selections);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_calculator_results_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_calculator_results_updated_at
    BEFORE UPDATE ON calculator_results
    FOR EACH ROW
    EXECUTE FUNCTION update_calculator_results_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE calculator_results ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to insert (submit calculator results)
CREATE POLICY "Allow public insert" ON calculator_results
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view all results
CREATE POLICY "Allow authenticated users to view" ON calculator_results
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update status and notes
CREATE POLICY "Allow authenticated users to update" ON calculator_results
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert sample data for testing (optional)
INSERT INTO calculator_results (name, email, company, phone, message, selections, estimated_price, privacy_consent, status)
VALUES 
(
    'John Doe',
    'john@example.com',
    'Tech Startup Inc.',
    '+1234567890',
    'Interested in e-commerce website with payment integration and inventory management',
    '{"website_type": "E-Commerce", "addons": ["Card Pay", "Stock Manager"], "pages": "0-10 Pages", "features": ["Google Analytics", "Contact Form"], "seo": "Homepage SEO", "legal": ["Privacy Policy"], "delivery": "Delivery in 4-8 weeks"}',
    2800.00,
    true,
    'new'
),
(
    'Jane Smith',
    'jane@creativeagency.com',
    'Creative Agency',
    '+0987654321',
    'Need a portfolio website for our agency with contact forms and SEO optimization',
    '{"website_type": "Portfolio Website", "addons": [], "pages": "0-5 Pages", "features": ["Google Analytics", "Contact Form"], "seo": "Homepage SEO", "legal": ["Privacy Policy", "Cookie Policy"], "delivery": "Delivery in 3-4 weeks"}',
    1900.00,
    true,
    'contacted'
)
ON CONFLICT DO NOTHING;

-- Create view for admin dashboard
CREATE OR REPLACE VIEW calculator_results_summary AS
SELECT 
    COUNT(*) as total_submissions,
    COUNT(CASE WHEN status = 'new' THEN 1 END) as new_submissions,
    COUNT(CASE WHEN status = 'contacted' THEN 1 END) as contacted,
    COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted,
    AVG(estimated_price) as average_price,
    SUM(estimated_price) as total_value
FROM calculator_results;

-- Grant permissions
GRANT ALL ON calculator_results TO authenticated;
GRANT ALL ON calculator_results_summary TO authenticated; 