'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import InfoCardGrid from '@/components/InfoCardGrid';
import merchantCardData from '@/data/merchantCardData';
import WoltButton from '@/components/WoltButton';
import Link from 'next/link';

export default function MerchantExamplePage() {
  return (
    <>
      <PageHero 
        title="Join Wolt as a Partner"
        subtitle="Grow your business, increase orders, and reach more customers with Wolt's platform and delivery network."
        color="primary"
        imageUrl="/images/wolt-merchant.png"
      />
      
      <main>
        <ContentSection bgColor="light">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why partner with Wolt?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Join thousands of businesses growing with Wolt. From restaurants and retail stores to grocery chains, 
              we're helping partners of all sizes reach more customers and grow their business.
            </motion.p>
          </div>
          
          <InfoCardGrid 
            cards={merchantCardData}
            className="mb-12"
          />
          
          <div className="flex justify-center">
            <WoltButton 
              variant="primary" 
              size="large"
              className="mx-2"
            >
              Apply as a partner
            </WoltButton>
            <WoltButton 
              variant="secondary" 
              size="large"
              className="mx-2"
            >
              Contact sales
            </WoltButton>
          </div>
        </ContentSection>
        
        <ContentSection 
          bgColor="dark"
          imageUrl="/images/wolt-merchant-success.png"
          imageAlt="Successful Wolt merchant"
          imagePosition="left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success stories</h2>
          <p className="mb-4">
            "Wolt has been a game-changer for our business. Since partnering with them, 
            we've seen a 40% increase in orders and expanded our customer base significantly."
          </p>
          <p className="mb-4">
            "The platform is easy to use, and their delivery network is reliable and fast. 
            Our customers love the convenience, and we love the growth."
          </p>
          <p className="font-bold mb-2">Marie Jensen</p>
          <p className="text-sm">Owner, Copenhagen Café</p>
        </ContentSection>
        
        <section className="py-16 bg-[--wolt-cyan] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to grow your business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses partnering with Wolt to reach more customers, 
              increase sales, and grow their business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/apply"
                className="inline-block px-6 py-3 bg-white text-[--wolt-cyan] hover:bg-gray-100 rounded-lg font-medium transition duration-200"
              >
                Apply as a partner
              </Link>
              
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-medium transition duration-200"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 