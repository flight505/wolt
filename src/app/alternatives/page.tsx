'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export default function AlternativesPage() {
  const [city, setCity] = useState('');
  
  return (
    <>
      <PageHero 
        title="Find Better Alternatives"
        subtitle="Support restaurants and workers by choosing fairer delivery options"
        color="secondary"
      />
      
      <main>
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Restaurant Finder</h2>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Enter your city to find restaurants that offer direct ordering or use more fair delivery services.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your city..."
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wolt-blue md:w-64"
                />
                <button 
                  className="px-6 py-3 bg-wolt-blue hover:bg-wolt-dark text-white rounded-lg font-medium transition duration-200"
                >
                  Search
                </button>
              </div>
              
              <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                Coming soon: Integration with Just Eat API to show actual restaurant options
              </p>
            </div>
          </div>
        </section>
        
        <ContentSection 
          title="Why Choose Alternatives?"
          bgColor="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Restaurants</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Keep more of your money with lower commission rates</li>
                <li>Direct ordering means 100% of revenue stays with the restaurant</li>
                <li>More flexible pricing options without price parity clauses</li>
                <li>Better control over customer relationship and experience</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">For Workers</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Just Eat has signed a union agreement with 3F</li>
                <li>Better working conditions and protections</li>
                <li>Restaurant employees often have more stable employment</li>
                <li>Support the Danish model of fair labor practices</li>
              </ul>
            </div>
          </div>
        </ContentSection>
        
        <ContentSection 
          title="Ways to Order Directly"
          bgColor="white"
        >
          <p className="mb-6">
            Here are several ways you can order directly from restaurants and support your local businesses:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Restaurant Websites</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Many restaurants have their own online ordering systems. Check the restaurant's website first to see if you can order directly.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Phone Orders</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A simple phone call to place your order helps restaurants avoid commission fees completely and provides a personal touch.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Pickup Options</h3>
              <p className="text-gray-700 dark:text-gray-300">
                If you're able to pick up your order, this is the most cost-effective option for both you and the restaurant.
              </p>
            </div>
          </div>
        </ContentSection>
        
        <section className="py-16 bg-wolt-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Movement</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every order placed through fairer alternatives sends a message that Danish consumers value ethical business practices.
            </p>
            <Link 
              href="/pledge"
              className="inline-block px-8 py-4 bg-white text-wolt-blue hover:bg-gray-100 rounded-lg font-bold text-lg transition duration-200"
            >
              Sign the Pledge
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 