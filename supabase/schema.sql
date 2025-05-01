-- Create pledges table for storing user signatures
CREATE TABLE pledges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT,
  verified BOOLEAN DEFAULT FALSE,
  verification_token UUID NOT NULL,
  
  -- Add constraints
  CONSTRAINT email_unique UNIQUE (email)
);

-- Enable Row Level Security
ALTER TABLE pledges ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for new pledges)
CREATE POLICY "Allow inserts to pledges" 
  ON pledges FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reads of verified pledges by anyone
CREATE POLICY "Allow anyone to read verified pledges" 
  ON pledges FOR SELECT 
  USING (verified = true);

-- Create policy to allow updates only with verification token
CREATE POLICY "Allow updates with verification token" 
  ON pledges FOR UPDATE 
  USING (true)
  WITH CHECK (verification_token::text = current_setting('request.jwt.claims', true)::json->>'verification_token');

-- Create function to get total verified pledge count
CREATE OR REPLACE FUNCTION get_verified_pledge_count()
RETURNS INT 
LANGUAGE SQL SECURITY DEFINER
AS $$
  SELECT COUNT(*) FROM pledges WHERE verified = true;
$$; 