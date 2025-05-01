# Supabase Setup for the Cancel-Wolt Project

This directory contains the database schema and setup instructions for the Supabase backend of the Cancel-Wolt project.

## Getting Started

1. Create a Supabase account at https://supabase.com if you don't have one already
2. Create a new project in Supabase
3. After the project is created, note your project URL and anon key from the API settings

## Setting Up the Database

1. Navigate to the SQL Editor in your Supabase dashboard
2. Create a new query and paste in the contents of `schema.sql` from this directory
3. Execute the query to create the necessary tables and functions

## Environment Variables

Add the following environment variables to your Vercel project or local `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Replace `your-project-id` and `your-anon-key` with your actual Supabase project details.

## Email Service Setup

For email verification to work properly, you will need to set up an email service. The project is currently configured to use a simple console log for development, but for production, you should configure an email provider.

### Option 1: SMTP Configuration

Set up the following environment variables:

```
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-username
EMAIL_SERVER_PASSWORD=your-password
EMAIL_FROM=noreply@example.com
```

### Option 2: Email Service Integration

Alternatively, you can use a transactional email service like SendGrid, Mailgun, or AWS SES.

## Security Considerations

- For production, make sure to implement proper email verification
- Consider implementing rate limiting for pledge submissions
- Regularly backup your database
- Use environment variables for sensitive information and do not commit them to version control

## Tables & Structure

### Pledges Table

- `id`: UUID, primary key
- `created_at`: Timestamp of creation
- `name`: User's name
- `email`: User's email (unique)
- `comment`: Optional comment from the user
- `verified`: Boolean to track email verification status
- `verification_token`: UUID used for email verification

## Row Level Security (RLS)

The database uses RLS policies to ensure:

1. Anyone can submit a new pledge
2. Only verified pledges are visible publicly
3. Updates to a pledge require the correct verification token

## Functions

- `get_verified_pledge_count()`: Returns the count of verified pledges 