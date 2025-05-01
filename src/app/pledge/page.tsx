'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import PledgeForm from '@/components/PledgeForm';
import Link from 'next/link';
import WoltButton from '@/components/WoltButton';

export default function PledgePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSuccess = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageHero
        title={submitted ? "Thank You!" : "Sign the Pledge"}
        subtitle={submitted ? "We've sent a verification email. Check your inbox!" : "Join the movement against Wolt's unfair practices"}
        color="primary"
      />
      
      <ContentSection>
        <div className="max-w-5xl mx-auto py-12 px-4">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key="submitted"
              >
                <motion.div 
                  className="mb-10 p-8 bg-green-50 dark:bg-green-900/20 rounded-xl shadow-md border border-green-100 dark:border-green-800"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 mx-auto mb-6 text-green-500 dark:text-green-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <motion.path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </svg>
                  
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 font-omnes">
                    Your pledge has been submitted!
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Please check your email for a verification link to confirm your pledge.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    If you don't see it, check your spam folder. The verification email is required to count your pledge.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 font-omnes">
                    What's Next?
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      While waiting for the verification email, explore some alternatives to Wolt or learn why this movement matters:
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                      <Link href="/alternatives">
                        <WoltButton variant="secondary" size="large" className="font-medium px-6">
                          Explore Alternatives
                        </WoltButton>
                      </Link>
                      
                      <Link href="/restaurants">
                        <WoltButton variant="secondary" size="large" className="font-medium px-6">
                          How Restaurants Suffer
                        </WoltButton>
                      </Link>
                      
                      <Link href="/workers">
                        <WoltButton variant="secondary" size="large" className="font-medium px-6">
                          Worker Exploitation
                        </WoltButton>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                className="grid md:grid-cols-5 gap-8 lg:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                key="form"
              >
                <div className="md:col-span-3">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 font-omnes"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Why Your Pledge Matters
                  </motion.h2>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <motion.p 
                      className="text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      By signing this pledge, you're taking a stand against Wolt's business practices that:
                    </motion.p>
                    
                    <motion.ul 
                      className="space-y-4 my-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Charge restaurants up to 30% commissions, squeezing their already thin margins</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Add hidden "service fees" to customers while still charging for delivery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Treat workers as contractors, denying them employment benefits</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>Create a monopolistic market that hurts local businesses</span>
                      </li>
                    </motion.ul>
                    
                    <motion.div 
                      className="mt-8 bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border border-cyan-100 dark:border-cyan-800"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-100">
                        Your pledge will:
                      </p>
                      
                      <ol className="space-y-3 ml-0 list-none">
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-200 dark:bg-cyan-700 text-cyan-700 dark:text-cyan-200 text-sm font-bold">1</span>
                          <span>Be counted in our public tally of Wolt resisters</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-200 dark:bg-cyan-700 text-cyan-700 dark:text-cyan-200 text-sm font-bold">2</span>
                          <span>Help demonstrate consumer demand for fairer business practices</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-200 dark:bg-cyan-700 text-cyan-700 dark:text-cyan-200 text-sm font-bold">3</span>
                          <span>Add strength to our movement for a more ethical food delivery ecosystem</span>
                        </li>
                      </ol>
                    </motion.div>
                    
                    <motion.p 
                      className="mt-6 text-sm text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <strong>Privacy note:</strong> Your email address will only be used to verify your pledge and will not be shared with third parties.
                    </motion.p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <PledgeForm onSuccess={handleSuccess} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ContentSection>
    </>
  );
} 