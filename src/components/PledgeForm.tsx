'use client';

import { useState, FormEvent } from 'react';
import WoltButton from './WoltButton';

export type PledgeFormProps = {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  className?: string;
};

export default function PledgeForm({ onSuccess, onError, className = '' }: PledgeFormProps) {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setVerificationUrl(null);
    setSuccess(false);

    try {
      // Submit pledge to API
      const response = await fetch('/api/pledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment }),
      });

      const data = await response.json();

      if (!data.success) {
        // Handle error response
        setError(data.message || 'Failed to submit pledge');
        onError?.(new Error(data.message || 'Failed to submit pledge'));
        return;
      }

      // Handle development mode verification URL
      if (data.dev?.verificationUrl) {
        setVerificationUrl(data.dev.verificationUrl);
      }

      // Clear form on success
      setName('');
      setEmail('');
      setComment('');
      setSuccess(true);

      // Call success callback
      onSuccess?.(data);
    } catch (err) {
      // Handle network or unexpected errors
      console.error('Error submitting pledge:', err);
      setError('An unexpected error occurred. Please try again.');
      onError?.(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`wolt-card p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-[--wolt-gray-800] dark:text-white">Sign the Pledge</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-[--wolt-error] bg-opacity-10 border border-[--wolt-error] border-opacity-20 text-[--wolt-error] rounded">
          <p>{error}</p>
        </div>
      )}

      {verificationUrl && (
        <div className="mb-4 p-3 bg-[--wolt-cyan] bg-opacity-10 border border-[--wolt-cyan] border-opacity-20 text-[--wolt-cyan] rounded">
          <p className="mb-2">Development mode: Use this link to verify your pledge:</p>
          <a 
            href={verificationUrl}
            className="text-[--wolt-cyan] underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {verificationUrl}
          </a>
        </div>
      )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="wolt-label block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="wolt-input w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="wolt-label block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="wolt-input w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Your email address"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="comment" className="wolt-label block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Comment (optional)
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="wolt-input w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Why are you signing this pledge?"
              disabled={isSubmitting}
            />
          </div>

          <div className="pt-2">
            <WoltButton
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
              className="w-full justify-center text-base font-semibold py-3"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Sign Pledge'}
            </WoltButton>
          </div>
        </form>
      </div>
    </motion.div>
  );
} 