'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WoltButton from './WoltButton';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TranslationType = {
  [key: string]: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    commentLabel: string;
    commentPlaceholder: string;
    submitButton: string;
    cancelButton: string;
    successTitle: string;
    successMessage: string;
    verifyNow: string;
    closeButton: string;
  }
};

export default function PledgeModal({ isOpen, onClose }: PledgeModalProps) {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);

  const translations: TranslationType = {
    en: {
      title: 'Sign the Pledge',
      subtitle: 'Join the movement against unfair business practices',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email',
      commentLabel: 'Why are you signing? (Optional)',
      commentPlaceholder: "Share why you're joining the movement...",
      submitButton: 'Sign the Pledge',
      cancelButton: 'Cancel',
      successTitle: 'Thank you for signing!',
      successMessage: 'Please check your email to verify your pledge. Together we can make a difference!',
      verifyNow: 'Verify Now (Development Only)',
      closeButton: 'Close'
    },
    da: {
      title: 'Skriv under på løftet',
      subtitle: 'Deltag i bevægelsen mod uretfærdige forretningspraksisser',
      nameLabel: 'Dit navn',
      namePlaceholder: 'Indtast dit navn',
      emailLabel: 'Email adresse',
      emailPlaceholder: 'Indtast din email',
      commentLabel: 'Hvorfor skriver du under? (Valgfrit)',
      commentPlaceholder: 'Del hvorfor du deltager i bevægelsen...',
      submitButton: 'Skriv under på løftet',
      cancelButton: 'Annuller',
      successTitle: 'Tak for din underskrift!',
      successMessage: 'Tjek venligst din email for at bekræfte din underskrift. Sammen kan vi gøre en forskel!',
      verifyNow: 'Bekræft nu (Kun udvikling)',
      closeButton: 'Luk'
    }
  };

  const text = translations[language as keyof TranslationType];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Valid email is required');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      // Submit the form to the API
      const response = await fetch('/api/pledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          comment: comment.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit pledge');
      }

      // Check if we have a verification URL for development testing
      if (data.verificationUrl) {
        setVerificationUrl(data.verificationUrl);
      }

      // Show success message
      setSuccess(true);
      
      // Reset form
      setName('');
      setEmail('');
      setComment('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <AnimatePresence>
        <motion.div
          className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {success ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[--wolt-cyan] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{text.successTitle}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{text.successMessage}</p>
              
              {/* Show verification link in development mode */}
              {verificationUrl && process.env.NODE_ENV !== 'production' && (
                <div className="mb-6">
                  <Link 
                    href={verificationUrl}
                    className="text-[--wolt-cyan] hover:text-[--wolt-cyan-dark] dark:text-[--wolt-cyan-light] dark:hover:text-[--wolt-cyan] underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text.verifyNow}
                  </Link>
                </div>
              )}
              
              <WoltButton onClick={onClose} variant="primary">
                {text.closeButton}
              </WoltButton>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{text.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{text.subtitle}</p>

              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {text.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[--wolt-cyan] focus:border-[--wolt-cyan] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder={text.namePlaceholder}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {text.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[--wolt-cyan] focus:border-[--wolt-cyan] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder={text.emailPlaceholder}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {text.commentLabel}
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[--wolt-cyan] focus:border-[--wolt-cyan] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder={text.commentPlaceholder}
                    rows={3}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-3">
                  <WoltButton 
                    type="button" 
                    variant="secondary" 
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    {text.cancelButton}
                  </WoltButton>
                  <WoltButton 
                    type="submit" 
                    variant="primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : text.submitButton}
                  </WoltButton>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 