'use client';

import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Citation from '@/components/Citation';
import Link from 'next/link';

export default function RestaurantsPage() {
  return (
    <>
      <PageHero 
        title="Hurting Local Restaurants"
        subtitle="How Wolt's high commissions and practices squeeze local businesses"
        color="primary"
      />
      
      <main>
        <ContentSection 
          title="The Commission Squeeze"
          bgColor="white"
        >
          <p className="mb-4">
            Local restaurants are caught in a difficult bind with Wolt. The combination of high commissions and forced price-matching hits small businesses particularly hard:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>High Commission Rates:</strong> Wolt charges restaurants 25-30% commission on every order.<Citation id="1" source="Restaurant Association of Denmark Report, 2023" /> For many restaurants, their profit margin is only 3-5% to begin with.
            </li>
            <li>
              <strong>Price Parity Requirements:</strong> Restaurants can't offer lower prices on other platforms or directly to customers, preventing them from recovering the high commission costs through direct sales.<Citation id="2" source="Competition Analysis, Food Delivery Market Denmark, 2023" />
            </li>
            <li>
              <strong>Absorption of Costs:</strong> Many restaurants have to either absorb these high costs (reducing their already thin profit margins) or raise menu prices across all channels.
            </li>
          </ul>
          
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-500 my-6">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Restaurant Boycott</h3>
            <p className="text-red-800 dark:text-red-200">
              Over 30 restaurants in Aalborg collectively boycotted Wolt in 2022<Citation id="3" source="Aalborg Restaurant Boycott, 2022" /> in protest of these high fees, saying they "can't make ends meet" when Wolt takes such a high cut on every sale.
            </p>
          </div>
          
          <p>
            One restaurant owner noted, "it's only a matter of time before takeaway shops go under" if these conditions continue.<Citation id="4" source="Restaurant Owner Interview, Danish Food Industry Magazine, 2023" /> The math simply doesn't work for many small businesses.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="The Dependence Trap"
          bgColor="light"
        >
          <p className="mb-4">
            Wolt's aggressive expansion has created a dependence trap for many restaurants. As consumers increasingly rely on delivery apps for discovering and ordering food, restaurants feel forced to join platforms like Wolt despite the disadvantageous terms.
          </p>
          
          <p className="mb-4">
            This dynamic creates several issues:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Market Dominance:</strong> In Copenhagen, Wolt has near-monopoly power in the delivery market.<Citation id="5" source="Market Share Analysis, Danish Delivery Apps, 2023" />
            </li>
            <li>
              <strong>Customer Capture:</strong> One Aalborg eatery reported that 90% of its orders came via Wolt,<Citation id="6" source="Small Business Impact Survey, Northern Jutland, 2023" /> making it nearly impossible to leave the platform.
            </li>
            <li>
              <strong>Leverage Imbalance:</strong> This dominance gives Wolt enormous leverage to dictate terms, including the harsh price clauses that prevent restaurants from offering better prices directly.
            </li>
          </ul>
          
          <p>
            Many small restaurants feel they "can't live with Wolt, but can't live without it"—a classic abusive monopoly scenario.<Citation id="7" source="Economic Analysis of Food Delivery Market, University of Copenhagen, 2023" />
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Impact on Competition"
          bgColor="white"
        >
          <p className="mb-4">
            Wolt's market power has even helped push out rivals. Foodora (owner of Hungry.dk) tried to challenge Wolt in Denmark by offering lower fees and better service to restaurants, giving restaurants hope for an alternative.<Citation id="8" source="Foodora Denmark Market Entry Analysis, 2022" />
          </p>
          
          <p className="mb-4">
            But after only about 18 months, Foodora pulled out of Denmark in 2024, citing the tough market dominated by Wolt. With one less competitor, Wolt's grip on restaurants—and its ability to charge high fees—only grows stronger.
          </p>
          
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">The Restaurant Math</h3>
            <p className="text-yellow-800 dark:text-yellow-200 mb-2">
              For a typical €15 meal:
            </p>
            <ul className="space-y-1 text-yellow-800 dark:text-yellow-200">
              <li>€4.50 (30%) goes to Wolt</li>
              <li>€6.00-7.50 goes to food costs</li>
              <li>€2.00-3.00 goes to staff and overhead</li>
              <li>€0.00-2.50 left as profit (often negative)</li>
            </ul>
          </div>
        </ContentSection>
        
        <ContentSection 
          title="Supporting Local Alternatives"
          bgColor="light"
        >
          <p className="mb-4">
            There are better ways to support your local restaurants:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>Just Eat:</strong> Remains a viable alternative, as it already works with a huge number of Danish restaurants and often allows "bring-your-own courier" or pickup, which avoids extreme commissions.
            </li>
            <li>
              <strong>Order Direct:</strong> The best alternative is to order directly from the restaurant (by phone or their website) and pick up your food or use their in-house delivery if offered. This way, the restaurant keeps 100% of the payment.
            </li>
            <li>
              <strong>Local Initiatives:</strong> Some Danish municipalities and cooperatives are exploring local delivery platforms to break the stranglehold of apps like Wolt.
            </li>
          </ul>
          
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg my-6">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">The Impact of Direct Ordering</h3>
            <p className="text-green-800 dark:text-green-200">
              "When customers order directly from us, we can afford to offer better prices, pay our staff better wages, and stay in business. Every direct order helps us survive." — Restaurant owner, Copenhagen
            </p>
          </div>
          
          <p>
            Remember: every time you avoid Wolt's fees, you're putting that money back into your local community and workers' pockets, not a tech platform's coffers.
          </p>
        </ContentSection>
        
        <section className="py-16 bg-wolt-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Support Your Local Restaurants</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              By ordering directly or using fairer delivery options, you help local restaurants thrive and keep money in your community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/alternatives"
                className="inline-block px-6 py-3 bg-white text-wolt-blue hover:bg-gray-100 rounded-lg font-medium transition duration-200"
              >
                Find Direct Ordering Options
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