# Cancel-Wolt Protest Website

A website to raise awareness about Wolt's unfair business practices, high commissions, and gig-worker model, while promoting fairer alternatives.

## Features

- Informational pages on pricing, worker conditions, and impact on restaurants
- Comparison tables showing differences between Wolt, Just Eat, and direct ordering
- Language switching between English and Danish
- Pledge system to gather support for the movement

## Setup

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm or yarn
- A Supabase account (free tier works for development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file:
   ```bash
   cp env.local.example .env.local
   ```
4. Update `.env.local` with your own values

### Supabase Setup for Pledge System

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Once your project is created, go to the SQL Editor
3. Create a new query and paste the following SQL to set up the pledges table:

```sql
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
```

4. Find your Supabase URL and anon key in the API settings
5. Add them to your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### Development

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### Testing the Pledge System

For development, the verification process is simplified:

1. Fill out and submit the pledge form
2. The verification link will be:
   - Printed to the console
   - Shown on screen after submission in development mode
   - Auto-verified for the site owner (if using email jesper_vang@me.com)

For production, you should set up proper email verification.

## Deployment

The site is ready to be deployed to Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Set up the environment variables in Vercel's settings
4. Deploy! 