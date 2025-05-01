'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Citation from '@/components/Citation';
import InfoCardGrid from '@/components/InfoCardGrid';
import infoCardData from '@/data/infoCardData';

export default function Home() {
  return (
    <>
      <PageHero 
        title="Cancel Wolt"
        subtitle="Join the movement against high commissions, exploitative practices, and unfair fees that hurt restaurants, workers, and consumers."
        color="primary"
      />
      
      <main>
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Why Cancel Wolt?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8"
              >
                Wolt may seem convenient, but behind the slick app it's hurting consumers, 
                workers, and local businesses. This protest calls on Danes to cancel Wolt 
                and support fairer alternatives.
              </motion.p>
              
              <InfoCardGrid 
                cards={infoCardData.slice(0, 3)} 
                columns={3}
                className="mt-12"
              />
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center font-omnes">
              The Real Wolt Experience
            </h2>
            
            <InfoCardGrid 
              cards={infoCardData}
              columns={3}
            />
          </div>
        </section>
        
        <ContentSection 
          title="The Hidden Costs of Convenience"
          bgColor="light"
        >
          <p className="mb-4">
            When you order through Wolt, you're not just paying for your food. There's a "service fee" of around 5% on every order (even if you pay for Wolt Plus)<Citation id="1" source="Wolt Fee Structure, 2024" /> and restaurants have to increase their menu prices by 20-30% just to survive the high 25-30% commissions Wolt charges them.<Citation id="2" source="Restaurant Association of Denmark Survey, 2023" />
          </p>
          
          <p className="mb-4">
            This means you end up paying significantly more for the same meal than if you ordered directly from the restaurant. And with Wolt's massive market dominance in Denmark (so strong that rival Foodora quit the country in 2024<Citation id="3" source="Foodora Denmark Exit Press Release, 2024" />), they can continue these practices unchallenged.
          </p>
          
          <div className="mt-8">
            <Link 
              href="/pledge"
              className="inline-block px-6 py-3 bg-wolt-blue hover:bg-wolt-blue-dark text-white rounded-lg font-medium transition duration-200"
            >
              Sign the Pledge
            </Link>
          </div>
        </ContentSection>
        
        <ContentSection 
          title="Alternative Services"
          bgColor="white"
        >
          <p className="mb-4">
            There are better options available:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Just Eat</strong> takes a more reasonable commission (around 10-15% for orders where restaurants handle delivery)<Citation id="4" source="Just Eat Partner Program, 2024" /> and has signed a collective agreement with the 3F union for their couriers.
            </li>
            <li>
              <strong>Order Directly</strong> from restaurants through their own websites or by phone. This ensures 100% of your payment goes to the restaurant.
            </li>
            <li>
              <strong>Local Pickup</strong> options cut out delivery fees altogether and help support your local community businesses.
            </li>
          </ul>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/alternatives"
              className="inline-block px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition duration-200"
            >
              Find Alternatives
            </Link>
            
            <Link 
              href="/merchant-example"
              className="inline-block px-6 py-3 bg-[--wolt-cyan] hover:bg-[--wolt-cyan-dark] text-white rounded-lg font-medium transition duration-200"
            >
              View Merchant Example
            </Link>
          </div>
        </ContentSection>
        
        <section className="py-16 bg-wolt-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-omnes">Join the Movement Today</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              By canceling your Wolt subscription and choosing fair alternatives, you send a message: Danish consumers value fair prices, worker rights, and thriving local restaurants over corporate greed.
            </p>
            <Link 
              href="/pledge"
              className="inline-block px-8 py-4 bg-white text-wolt-blue hover:bg-gray-100 rounded-lg font-bold text-lg transition duration-200"
            >
              Sign the Pledge Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 