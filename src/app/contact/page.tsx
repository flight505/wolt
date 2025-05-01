'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import React from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Placeholder for API call
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <>
      <PageHero 
        title="Contact Us"
        subtitle="Have questions or want to get involved? Reach out to us."
        color="secondary"
      />
      
      <main>
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                {submitMessage ? (
                  <div className="text-center">
                    <div className="text-green-600 dark:text-green-400 text-3xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Message Sent</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{submitMessage}</p>
                    <button 
                      onClick={() => setSubmitMessage('')}
                      className="px-6 py-3 bg-[--wolt-cyan] hover:bg-[--wolt-navy] text-white rounded-lg font-medium transition duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Get in Touch</h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Media Request">Media Request</option>
                          <option value="Partnership Opportunity">Partnership Opportunity</option>
                          <option value="Share My Story">Share My Story</option>
                          <option value="Technical Issue">Technical Issue</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>
                      
                      <div className="text-center">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className={`px-6 py-3 bg-[--wolt-cyan] hover:bg-[--wolt-navy] text-white rounded-lg font-medium transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <ContentSection 
          title="For Media Inquiries"
          bgColor="light"
        >
          <div className="mb-6">
            <p className="mb-4">
              We welcome media coverage of the Cancel Wolt movement. Our team can provide:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Statistics and data on Wolt's market practices</li>
              <li>Interviews with restaurant owners affected by high commission rates</li>
              <li>Stories from delivery workers about their working conditions</li>
              <li>Expert commentary on the gig economy and food delivery market</li>
            </ul>
            
            <p>
              For urgent media requests, please email <a href="mailto:media@cancelwolt.dk" className="text-[--wolt-cyan] hover:underline">media@cancelwolt.dk</a> or select "Media Request" in the contact form above.
            </p>
          </div>
        </ContentSection>
        
        <ContentSection 
          title="Partnership Opportunities"
          bgColor="white"
        >
          <div className="mb-6">
            <p className="mb-4">
              We're looking to partner with:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Restaurant Associations</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Join our coalition to advocate for fair commission rates and transparent practices in food delivery.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Labor Unions</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Partner with us to support better working conditions and protections for delivery workers.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Consumer Organizations</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Collaborate on education campaigns about hidden fees and fair alternatives in food delivery.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Local Businesses</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Showcase your restaurant as a "direct ordering" alternative and share your Wolt experience.
                </p>
              </div>
            </div>
            
            <p>
              To discuss partnership opportunities, please select "Partnership Opportunity" in the contact form above.
            </p>
          </div>
        </ContentSection>
        
        <ContentSection 
          title="Frequently Asked Questions"
          bgColor="light"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is this campaign affiliated with any competitors?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                No, we are an independent, grassroots movement of concerned consumers, restaurant owners, and delivery workers. We receive no funding from competitors like Just Eat or others.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How can I contribute beyond signing the pledge?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                You can help by spreading the word, sharing your experiences, volunteering your skills (design, development, writing), or donating to help cover our minimal operating costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How do you use the data collected in the pledge?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We only use your information to count pledge signatures and to send you occasional updates about the movement. We never sell or share your personal data with third parties. See our Privacy Policy for details.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">I'm a restaurant owner who wants to share my story. How can I do that?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We'd love to hear from you! Please select "Share My Story" in the contact form above, and someone from our team will follow up to arrange an interview.
              </p>
            </div>
          </div>
        </ContentSection>
      </main>
    </>
  );
} 