'use client';

import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Citation from '@/components/Citation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About the Movement"
        subtitle="A grassroots initiative to promote fair food delivery in Denmark"
        color="secondary"
      />
      
      <main>
        <ContentSection 
          title="Our Mission"
          bgColor="white"
        >
          <p className="mb-4">
            The Cancel Wolt initiative is a grassroots movement created by concerned Danish consumers, restaurant owners, and delivery workers who believe in fair business practices within the food delivery ecosystem.
          </p>
          
          <p className="mb-4">
            We aim to raise awareness about the hidden costs of convenience and work toward a more equitable food delivery market that respects:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Fair pricing for consumers</li>
            <li>Reasonable commissions for restaurants</li>
            <li>Proper worker protections for couriers</li>
            <li>Transparent business practices</li>
          </ul>
          
          <p>
            This is not about destroying food delivery services—it's about making them better for everyone involved. We believe that consumers, when informed, will make choices that align with their values.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Why This Matters"
          bgColor="light"
        >
          <p className="mb-4">
            <strong>For Consumers:</strong> You deserve to know the true cost of your food delivery and how your choices impact your community. When you order through Wolt, you're paying significantly more than you would ordering directly from restaurants—not just through delivery fees, but through inflated menu prices needed to cover Wolt's high commissions.
          </p>
          
          <p className="mb-4">
            <strong>For Restaurants:</strong> Small local establishments are struggling with razor-thin margins that get squeezed even further by massive commissions. In Aalborg, over 30 restaurants boycotted Wolt in 2022<Citation id="1" source="Aalborg Restaurant Boycott Report, 2022" /> because they "couldn't make ends meet" with Wolt's 25-30% cut of every sale.
          </p>
          
          <p>
            <strong>For Workers:</strong> Delivery couriers deserve basic protections that are standard in Danish employment—sick pay, holiday pay, pension contributions, and insurance. Wolt's "partner" model sidesteps these responsibilities while pushing couriers to deliver faster for competitive pay rates.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="How You Can Help"
          bgColor="white"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Sign the Pledge</h3>
              <p>
                Commit to avoiding Wolt and choosing fairer alternatives. Each pledge sends a message that Danish consumers care about fair business practices.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Spread the Word</h3>
              <p>
                Share this website with friends, family, and on social media. The more people know about these issues, the more impact we can have.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Order Directly</h3>
              <p>
                When possible, order directly from restaurants through their websites or by phone. This ensures they receive 100% of your payment.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Support Our Alternatives</h3>
              <p>
                Use our alternatives finder to discover delivery options that treat workers and restaurants more fairly.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/pledge"
              className="inline-block px-6 py-3 bg-wolt-blue hover:bg-wolt-dark text-white rounded-lg font-medium transition duration-200"
            >
              Sign the Pledge
            </Link>
            
            <Link 
              href="/alternatives"
              className="inline-block px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition duration-200"
            >
              Find Alternatives
            </Link>
          </div>
        </ContentSection>
      </main>
    </>
  );
} 