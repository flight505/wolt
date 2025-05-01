import { createPledge } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get request data
    const body = await request.json();
    const { name, email, comment } = body;
    
    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get IP and user agent for tracking (optional)
    const ipAddress = request.headers.get('x-forwarded-for') || request.ip;
    const userAgent = request.headers.get('user-agent');
    
    // Get preferred locale from headers or default to 'en'
    const acceptLanguage = request.headers.get('accept-language') || '';
    const locale = acceptLanguage.split(',')[0]?.split('-')[0] || 'en';
    
    // Create pledge in Supabase
    const result = await createPledge({
      name,
      email,
      comment,
      locale,
      ipAddress: ipAddress as string,
      userAgent: userAgent as string,
    });

    // For development mode, show the verification link
    if (result.success && result.verificationToken && process.env.NEXT_PUBLIC_DEV_MODE === 'true') {
      const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin}/verify?token=${result.verificationToken}`;
      
      console.log('Development mode - Verification URL:', verificationUrl);
      
      return NextResponse.json({
        ...result,
        dev: {
          verificationUrl,
        },
      });
    }

    // Return the result
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing pledge:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'An unknown error occurred' 
      },
      { status: 500 }
    );
  }
} 