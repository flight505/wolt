-- Schema for the pledges table in Supabase
-- Run this SQL in your Supabase SQL editor

-- Create the pledges table
CREATE TABLE IF NOT EXISTS public.pledges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  verification_token UUID NOT NULL DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  verified_at TIMESTAMP WITH TIME ZONE,
  ip_address TEXT,
  user_agent TEXT,
  locale TEXT
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS pledges_email_idx ON public.pledges (email);

-- Create an index on verification token for faster lookups
CREATE INDEX IF NOT EXISTS pledges_verification_token_idx ON public.pledges (verification_token);

-- Add RLS (Row Level Security) policies
ALTER TABLE public.pledges ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous users to insert but not read all records
CREATE POLICY "Allow inserts for anonymous users" 
  ON public.pledges FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create policy for allowing read access only to verified pledges for display purposes
CREATE POLICY "Allow reading verified pledges" 
  ON public.pledges FOR SELECT 
  TO anon
  USING (verified = true);

-- Create policy for service role to read/update all records (for admin)
CREATE POLICY "Service role can do everything" 
  ON public.pledges
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create function to get count of verified pledges
CREATE OR REPLACE FUNCTION get_verified_pledge_count()
RETURNS INTEGER AS
$$
  SELECT COUNT(*) FROM public.pledges WHERE verified = true;
$$
LANGUAGE SQL;

-- Create function to verify a pledge by token
CREATE OR REPLACE FUNCTION verify_pledge(token UUID)
RETURNS BOOLEAN AS
$$
DECLARE
  updated_rows INTEGER;
BEGIN
  UPDATE public.pledges
  SET verified = true, verified_at = now()
  WHERE verification_token = token AND verified = false;
  
  GET DIAGNOSTICS updated_rows = ROW_COUNT;
  RETURN updated_rows > 0;
END;
$$
LANGUAGE plpgsql; 