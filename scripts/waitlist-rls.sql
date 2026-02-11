-- Waitlist table with RLS
-- Run this in Supabase SQL Editor

-- Create table if not exists
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  handle TEXT NOT NULL UNIQUE,
  product_types TEXT[] DEFAULT '{}',
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Deny all client access" ON public.waitlist;

-- Create restrictive policy - NO client access at all
-- All inserts go through server action with service_role key
-- This means anon/authenticated users cannot read, insert, update, or delete
CREATE POLICY "Deny all client access" ON public.waitlist
  FOR ALL
  USING (false)
  WITH CHECK (false);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_handle ON public.waitlist(handle);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Grant necessary permissions to service_role (already has by default, but explicit)
GRANT ALL ON public.waitlist TO service_role;
