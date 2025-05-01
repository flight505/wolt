'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import PledgeForm from '@/components/PledgeForm';
import Link from 'next/link';
import WoltButton from '@/components/WoltButton';

export default function PledgePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSuccess = () => {
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <PageHero
        title={submitted ? "Thank You!" : "Sign the Pledge"}
        subtitle={submitted ? "We've sent a verification email. Check your inbox!" : "Join the movement against Wolt's unfair practices"}
        color="primary"
      />
      
      <main>
        <ContentSection>
          <div className="max-w-4xl mx-auto py-12">
            {submitted ? (
              <div className="text-center">
                <div className="mb-8 p-6 bg-green-50 dark:bg-green-900 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Your pledge has been submitted!
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Please check your email for a verification link to confirm your pledge.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    If you don't see it, check your spam folder. The verification email is required to count your pledge.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    What's Next?
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      While waiting for the verification email, explore some alternatives to Wolt or learn why this movement matters:
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      <Link href="/alternatives" passHref>
                        <WoltButton variant="secondary">
                          Explore Alternatives
                        </WoltButton>
                      </Link>
                      
                      <Link href="/restaurants" passHref>
                        <WoltButton variant="secondary">
                          How Restaurants Suffer
                        </WoltButton>
                      </Link>
                      
                      <Link href="/workers" passHref>
                        <WoltButton variant="secondary">
                          Worker Exploitation
                        </WoltButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Why Your Pledge Matters
                  </h2>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      By signing this pledge, you're taking a stand against Wolt's business practices that:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Charge restaurants up to 30% commissions, squeezing their already thin margins</li>
                      <li>Add hidden "service fees" to customers while still charging for delivery</li>
                      <li>Treat workers as contractors, denying them employment benefits</li>
                      <li>Create a monopolistic market that hurts local businesses</li>
                    </ul>
                    
                    <p className="mt-4 font-semibold">
                      Your pledge will:
                    </p>
                    
                    <ol className="space-y-2">
                      <li>Be counted in our public tally of Wolt resisters</li>
                      <li>Help demonstrate consumer demand for fairer business practices</li>
                      <li>Add strength to our movement for a more ethical food delivery ecosystem</li>
                    </ol>
                    
                    <p className="mt-4 text-sm text-gray-500">
                      Note: Your email address will only be used to verify your pledge and will not be shared with third parties.
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <PledgeForm onSuccess={handleSuccess} />
                </div>
              </div>
            )}
          </div>
        </ContentSection>
      </main>
    </>
  );
} 