'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Citation from '@/components/Citation';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero 
        title="Success Stories"
        subtitle="Restaurants thriving after leaving Wolt behind"
        color="primary"
      />
      
      <main>
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-xl text-center text-gray-700 dark:text-gray-300 mb-12"
              >
                These restaurants took control of their business by reducing or eliminating their dependence on Wolt. 
                Read their stories and see how they're thriving with more sustainable alternatives.
              </motion.p>
            </div>
          </div>
        </section>
        
        <ContentSection 
          title="Café Nord: 40% Profit Increase After Going Direct"
          bgColor="light"
          imageUrl="/images/success-1.jpg"
          imageAlt="Café Nord in Copenhagen"
        >
          <p className="mb-4">
            When Erik Jensen opened Café Nord in Nørrebro in 2019, he initially signed up with Wolt to boost visibility. 
            But after calculating the true cost of their 28% commission, he realized he was losing money on most Wolt orders.
          </p>
          
          <p className="mb-4">
            "After paying food costs, staff, and Wolt's commission, I was making less than 1% profit on Wolt orders. 
            Sometimes we were actually losing money," says Erik.<Citation id="1" source="Interview with Erik Jensen, Café Nord, 2023" />
          </p>
          
          <p className="mb-4">
            In January 2023, Erik launched his own online ordering system through his website and began offering a 
            15% discount for direct pickup orders. He invested in local marketing and an email list.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Results:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>40% increase in profit margin on takeaway orders</li>
              <li>Built a loyal customer base who order directly</li>
              <li>Complete control over customer data and marketing</li>
              <li>Reduced menu prices while increasing profits</li>
            </ul>
          </div>
          
          <p>
            "Our customers are happier knowing their money goes to us, not a middleman. Many have told us they 
            appreciate the lower prices and prefer supporting us directly," Erik adds.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Aalborg Restaurant Collective: Strength in Numbers"
          bgColor="white"
          imageUrl="/images/success-2.jpg"
          imageAlt="Aalborg restaurant owners meeting"
        >
          <p className="mb-4">
            In 2022, over 30 restaurants in Aalborg made headlines when they collectively decided to leave 
            Wolt in protest of high commission rates.<Citation id="2" source="Aalborg Restaurant Boycott Report, 2022" />
          </p>
          
          <p className="mb-4">
            Led by Maria Nielsen of Pizza Pronto, the group formed the "Aalborg Direct" initiative, pooling 
            resources to create a shared marketing campaign encouraging customers to order directly from restaurants.
          </p>
          
          <p className="mb-4">
            "Initially we were worried about losing customers," says Maria. "But we found that with a united front, 
            we could educate customers about why direct ordering is better for everyone. The response was incredible."
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Collective Results:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Developed a shared local marketing strategy</li>
              <li>Created a simple website listing all participating restaurants</li>
              <li>Shared costs for promotional materials and local advertising</li>
              <li>Several restaurants reported 20-30% higher revenue after the transition</li>
            </ul>
          </div>
          
          <p>
            The initiative gained so much local support that even restaurants that initially stayed with Wolt 
            eventually joined the collective. Today, "Aalborg Direct" has become a model for other cities.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Spice of India: Building Their Own Delivery Team"
          bgColor="light"
          imageUrl="/images/success-3.jpg"
          imageAlt="Spice of India restaurant delivery staff"
        >
          <p className="mb-4">
            For Raj Patel, owner of Spice of India in Copenhagen, the pandemic initially drove him to rely heavily 
            on Wolt. But as delivery became a permanent part of his business model, the economics became unsustainable.
          </p>
          
          <p className="mb-4">
            "At one point, nearly 70% of our orders were coming through Wolt, and we were paying them over 250,000 DKK 
            in commissions annually," Raj explains.<Citation id="3" source="Copenhagen Restaurant Economic Impact Study, 2023" />
          </p>
          
          <p className="mb-4">
            In mid-2023, Raj made a bold move: he hired two full-time delivery drivers, launched his own website with online 
            ordering, and gradually reduced his reliance on Wolt.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Results:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Created two full-time jobs with proper benefits and protections</li>
              <li>Reduced delivery times from 45-60 minutes (Wolt) to 25-35 minutes (in-house)</li>
              <li>Maintained control over food quality and presentation</li>
              <li>Saved approximately 180,000 DKK in annual commission fees</li>
            </ul>
          </div>
          
          <p>
            "Our drivers know our customers by name now. They're part of our team and care about the service they provide. 
            It's a completely different experience than having random couriers who have no connection to our restaurant," says Raj.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Café Vesterbro: Partnering with Just Eat"
          bgColor="white"
          imageUrl="/images/success-4.jpg"
          imageAlt="Café Vesterbro storefront"
        >
          <p className="mb-4">
            Not every restaurant has the resources to go completely independent. For Luna Hansen at Café Vesterbro, 
            switching from Wolt to Just Eat offered a middle ground with substantial benefits.
          </p>
          
          <p className="mb-4">
            "We were paying Wolt nearly 30% commission. Just Eat offered us their self-delivery option with only 
            12% commission for orders where we handle delivery ourselves," Luna explains.<Citation id="4" source="Just Eat Partnership Case Study, 2023" />
          </p>
          
          <p className="mb-4">
            Luna negotiated with Just Eat to maintain control over pricing and worked to drive customers to order pickup 
            directly whenever possible.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg my-6">
            <h3 className="font-semibold mb-2">Results:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Over 60% reduction in commission fees</li>
              <li>Maintained visibility on a major platform</li>
              <li>Greater flexibility in menu pricing and special offers</li>
              <li>Just Eat's collective agreement with 3F means better conditions for delivery workers</li>
            </ul>
          </div>
          
          <p>
            "I still encourage customers to order direct when possible, but for those who prefer using an app, Just Eat 
            has been a much more sustainable partner for our business," says Luna.
          </p>
        </ContentSection>
        
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Share Your Success Story</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Are you a restaurant owner who has successfully reduced dependence on Wolt? We'd love to feature your 
                story on this page to inspire others. Please get in touch with us to share your experience.
              </p>
              <Link 
                href="/contact"
                className="inline-block px-6 py-3 bg-wolt-blue hover:bg-wolt-dark text-white rounded-lg font-medium transition duration-200"
              >
                Contact Us to Share Your Story
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-wolt-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Make the Change?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Joining these success stories is easier than you think. Find resources and alternatives to help your 
              restaurant thrive without exploitative delivery fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/alternatives"
                className="inline-block px-6 py-3 bg-white text-wolt-blue hover:bg-gray-100 rounded-lg font-medium transition duration-200"
              >
                Explore Alternatives
              </Link>
              <Link 
                href="/pledge"
                className="inline-block px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-medium transition duration-200"
              >
                Sign the Pledge
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 