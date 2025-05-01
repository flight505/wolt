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
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setVerificationUrl(null);

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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="wolt-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="wolt-input"
            placeholder="Your name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="wolt-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="wolt-input"
            placeholder="Your email address"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="comment" className="wolt-label">
            Comment (optional)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="wolt-input"
            placeholder="Why are you signing this pledge?"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <WoltButton
            type="submit"
            disabled={isSubmitting}
            className="w-full justify-center"
          >
            {isSubmitting ? 'Submitting...' : 'Sign Pledge'}
          </WoltButton>
        </div>
      </form>
    </div>
  );
} 