import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if we have the required environment variables
// In development, provide helpful error messages
if (!supabaseUrl) {
  console.error('⚠️ NEXT_PUBLIC_SUPABASE_URL is not defined! Please check your .env.local file.');
}

if (!supabaseAnonKey) {
  console.error('⚠️ NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined! Please check your .env.local file.');
}

// Check if Supabase is configured with required environment variables
export const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

// Create a Supabase client if environment variables are available
export const supabase = isSupabaseConfigured()
  ? createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  : createDummyClient();

// Create a type for the pledges table
export type Pledge = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  comment?: string;
  verified: boolean;
  verification_token: string;
};

// Helper functions for pledge management
export async function createPledge({
  name,
  email,
  comment,
  locale,
  ipAddress,
  userAgent,
}: {
  name: string;
  email: string;
  comment?: string;
  locale?: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, pledge creation skipped');
    if (process.env.NEXT_PUBLIC_DEV_MODE === 'true') {
      // Auto-generate a verification token for development mode
      return {
        success: true,
        verificationToken: crypto.randomUUID(),
        message: 'Dev mode - no actual pledge created',
      };
    }
    return { success: false, message: 'Supabase not configured' };
  }

  // Check if this email has already pledged
  const { data: existingPledge } = await supabase
    .from('pledges')
    .select('verified')
    .eq('email', email)
    .maybeSingle();

  if (existingPledge) {
    if (existingPledge.verified) {
      return {
        success: false,
        message: 'This email has already verified a pledge',
      };
    }
    // If pledge exists but not verified, we'll allow recreating it
  }

  // Insert new pledge
  const { data, error } = await supabase
    .from('pledges')
    .upsert(
      {
        name,
        email,
        comment,
        verified: false,
        verification_token: crypto.randomUUID(),
        ip_address: ipAddress,
        user_agent: userAgent,
        locale,
      },
      { onConflict: 'email' }
    )
    .select('verification_token')
    .single();

  if (error) {
    console.error('Error creating pledge:', error);
    return { success: false, message: 'Failed to create pledge' };
  }

  // Special case for auto-verification (for development/testing)
  // The site owner can auto-verify their pledges
  if (email === process.env.ADMIN_EMAIL) {
    await supabase
      .from('pledges')
      .update({ verified: true, verified_at: new Date().toISOString() })
      .eq('email', email);
    
    return {
      success: true,
      message: 'Pledge auto-verified for admin email',
      autoVerified: true,
    };
  }

  // Return verification token to be used in email
  return {
    success: true,
    verificationToken: data.verification_token,
    message: 'Pledge created successfully',
  };
}

export async function verifyPledge(token: string) {
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, verification skipped');
    return { 
      success: process.env.NEXT_PUBLIC_DEV_MODE === 'true',
      message: process.env.NEXT_PUBLIC_DEV_MODE === 'true' 
        ? 'Dev mode - verification simulated'
        : 'Supabase not configured'
    };
  }

  // Call the verify_pledge function
  const { data, error } = await supabase
    .rpc('verify_pledge', { token })
    .single();

  if (error) {
    console.error('Error verifying pledge:', error);
    return { success: false, message: 'Failed to verify pledge' };
  }

  return {
    success: data as boolean,
    message: data ? 'Pledge verified successfully' : 'Invalid or expired verification token',
  };
}

export async function getVerifiedCount() {
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning dummy count');
    return { count: 0 };
  }

  // Call the get_verified_pledge_count function
  const { data, error } = await supabase
    .rpc('get_verified_pledge_count')
    .single();

  if (error) {
    console.error('Error getting verified count:', error);
    return { count: 0 };
  }

  return { count: data as number };
}

// Create a dummy client for when Supabase isn't configured
// This prevents errors in development/testing environments
function createDummyClient() {
  console.warn(
    'Supabase environment variables missing, using dummy client'
  );
  
  // Return a mock client that logs operations but doesn't actually connect
  return {
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: async () => ({ data: null, error: null }),
          single: async () => ({ data: null, error: null }),
          limit: async () => ({ data: null, error: null }),
        }),
        single: async () => ({ data: null, error: null }),
        limit: async () => ({ data: null, error: null }),
      }),
      insert: () => ({
        select: () => ({
          single: async () => ({ data: null, error: null }),
        }),
      }),
      upsert: () => ({
        select: () => ({
          single: async () => ({ 
            data: { verification_token: 'dummy-token' }, 
            error: null 
          }),
        }),
      }),
      update: () => ({
        eq: async () => ({ data: null, error: null }),
      }),
    }),
    rpc: () => ({
      single: async () => ({ data: 0, error: null }),
    }),
  } as any;
}

// Types for pledge functions
export type PledgeResult = {
  success: boolean;
  message: string;
  verificationToken?: string;
  autoVerified?: boolean;
};

export type VerificationResult = {
  success: boolean;
  message: string;
};

export type CountResult = {
  count: number;
}; 