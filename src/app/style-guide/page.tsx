'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import WoltButton from '@/components/WoltButton';
import Link from 'next/link';
import ColorStyleGuide from '@/components/ColorStyleGuide';

export default function StyleGuidePage() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <PageHero
        title="Wolt Design System"
        subtitle="A comprehensive style guide based on Wolt's visual identity"
        color="primary"
      />
      
      <main>
        <ContentSection className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Typography</h2>
            
            <div className="grid gap-6 mb-12">
              <div className="p-4 border rounded-lg">
                <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
                <p className="text-gray-500">Font: Omnes Bold, 3rem (48px)</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
                <p className="text-gray-500">Font: Omnes Bold, 2.25rem (36px)</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
                <p className="text-gray-500">Font: Omnes Bold, 1.875rem (30px)</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="text-2xl font-bold mb-2">Heading 4</h4>
                <p className="text-gray-500">Font: Omnes Bold, 1.5rem (24px)</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <p className="text-xl mb-2">Large Paragraph</p>
                <p className="text-gray-500">Font: Omnes Regular, 1.25rem (20px)</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <p className="text-base mb-2">Regular Paragraph</p>
                <p className="text-gray-500">Font: Omnes Regular, 1rem (16px)</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <p className="text-sm mb-2">Small Text</p>
                <p className="text-gray-500">Font: Omnes Regular, 0.875rem (14px)</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8">Colors</h2>
            
            <ColorStyleGuide />
            
            <h2 className="text-3xl font-bold mb-8">Buttons</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Primary Buttons</h3>
                <WoltButton variant="primary" size="large">Large Button</WoltButton>
                <WoltButton variant="primary" size="medium">Medium Button</WoltButton>
                <WoltButton variant="primary" size="small">Small Button</WoltButton>
                <WoltButton variant="primary" disabled>Disabled Button</WoltButton>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Secondary Buttons</h3>
                <WoltButton variant="secondary" size="large">Large Button</WoltButton>
                <WoltButton variant="secondary" size="medium">Medium Button</WoltButton>
                <WoltButton variant="secondary" size="small">Small Button</WoltButton>
                <WoltButton variant="secondary" disabled>Disabled Button</WoltButton>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Tertiary Buttons</h3>
                <WoltButton variant="tertiary" size="large">Large Button</WoltButton>
                <WoltButton variant="tertiary" size="medium">Medium Button</WoltButton>
                <WoltButton variant="tertiary" size="small">Small Button</WoltButton>
                <WoltButton variant="tertiary" disabled>Disabled Button</WoltButton>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8">Cards</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="wolt-card p-6">
                <h3 className="text-xl font-semibold mb-4">Standard Card</h3>
                <p className="mb-4">This is a standard card with some content inside of it.</p>
                <WoltButton variant="primary">Learn More</WoltButton>
              </div>
              
              <div className="wolt-feature-card">
                <div className="wolt-feature-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3>Feature Card</h3>
                <p>A special card style for highlighting features with an icon.</p>
              </div>
              
              <div className="wolt-card p-6 bg-[--wolt-gray-50]">
                <h3 className="text-xl font-semibold mb-4">Light Card</h3>
                <p className="mb-4">A variant with a lighter background color.</p>
                <WoltButton variant="secondary">See Details</WoltButton>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8">Form Elements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="wolt-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="wolt-input"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="wolt-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="wolt-input"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="wolt-label">Comment</label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="wolt-input"
                    placeholder="Enter your comment"
                  ></textarea>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="wolt-stat">
                  <div className="wolt-stat-value">{count}</div>
                  <div className="wolt-stat-label">Clicks</div>
                </div>
                
                <div className="flex justify-center gap-2">
                  <WoltButton onClick={() => setCount(count - 1)}>-</WoltButton>
                  <WoltButton onClick={() => setCount(0)}>Reset</WoltButton>
                  <WoltButton onClick={() => setCount(count + 1)}>+</WoltButton>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Link href="/" passHref>
                <WoltButton variant="secondary">Back to Home</WoltButton>
              </Link>
            </div>
          </div>
        </ContentSection>
      </main>
    </>
  );
} 