-- Add product_types column as JSONB to store array of selected product types
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS product_types JSONB DEFAULT '[]'::jsonb;
