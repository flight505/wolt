'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';
import WoltButton from '@/components/WoltButton';
import { getVerifiedCount } from '@/lib/supabase';

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verifying your pledge...');
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function verifyPledge() {
      if (!token) {
        setStatus('error');
        setMessage('No verification token provided. Please check your email link.');
        return;
      }

      try {
        // Call the verification API
        const response = await fetch(`/api/verify?token=${token}`);
        const data = await response.json();

        if (data.success) {
          setStatus('success');
          setMessage('Your pledge has been verified successfully!');
          
          // Get the new count after verification
          const countData = await getVerifiedCount();
          setCount(countData.count);
        } else {
          setStatus('error');
          setMessage(data.message || 'Failed to verify your pledge. The link may be invalid or expired.');
        }
      } catch (error) {
        console.error('Error verifying pledge:', error);
        setStatus('error');
        setMessage('An error occurred while verifying your pledge. Please try again later.');
      }
    }

    verifyPledge();
  }, [token]);

  return (
    <>
      <PageHero
        title={
          status === 'loading' ? 'Verifying Pledge' :
          status === 'success' ? 'Thank You!' :
          'Verification Failed'
        }
        subtitle={
          status === 'loading' ? 'Please wait while we verify your pledge...' :
          status === 'success' ? 'Your pledge against Wolt has been verified' :
          'We encountered an issue verifying your pledge'
        }
        color={status === 'success' ? 'primary' : status === 'error' ? 'secondary' : 'primary'}
      />
      
      <main>
        <ContentSection>
          <div className="max-w-3xl mx-auto py-12">
            <div className={`p-8 rounded-lg shadow-md ${
              status === 'loading' ? 'bg-gray-50 dark:bg-gray-800' :
              status === 'success' ? 'bg-green-50 dark:bg-green-900' :
              'bg-red-50 dark:bg-red-900'
            }`}>
              <div className="text-center mb-8">
                {status === 'loading' && (
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-16 w-16 mb-4"></div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{message}</h2>
                  </div>
                )}
                
                {status === 'success' && (
                  <>
                    <div className="flex justify-center mb-4">
                      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{message}</h2>
                    
                    {count !== null && (
                      <div className="mb-6">
                        <p className="text-gray-600 dark:text-gray-300">You've joined</p>
                        <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{count.toLocaleString()}</p>
                        <p className="text-gray-600 dark:text-gray-300">verified pledges against Wolt's unfair practices</p>
                      </div>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for standing with us against Wolt's unfair business practices. 
                      Together, we can make a difference for restaurants, workers, and consumers.
                    </p>
                  </>
                )}
                
                {status === 'error' && (
                  <>
                    <div className="flex justify-center mb-4">
                      <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">{message}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      If you believe this is an error, please try clicking the link in your email again 
                      or contact us for assistance.
                    </p>
                  </>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/" passHref>
                  <WoltButton variant="secondary">
                    Back to Home
                  </WoltButton>
                </Link>
                
                {status === 'success' && (
                  <Link href="/alternatives" passHref>
                    <WoltButton>
                      Explore Alternatives to Wolt
                    </WoltButton>
                  </Link>
                )}
                
                {status === 'error' && (
                  <Link href="/pledge" passHref>
                    <WoltButton>
                      Try Again
                    </WoltButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </ContentSection>
      </main>
    </>
  );
} 