'use client';

import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Citation from '@/components/Citation';
import ComparisonTable from '@/components/ComparisonTable';
import InfoCardGrid from '@/components/InfoCardGrid';
import pricingCardData from '@/data/pricingCardData';
import Link from 'next/link';

export default function PricingPage() {
  // Comparison table data
  const feeComparisonData = [
    {
      id: 'commission',
      label: 'Restaurant Commission',
      wolt: '25-30%',
      justEat: '10-15%',
      direct: '0%',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'service-fee',
      label: 'Service Fee (Customer)',
      wolt: '5%',
      justEat: '0%',
      direct: '0%',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'delivery-fee',
      label: 'Delivery Fee',
      wolt: '29-59 kr',
      justEat: '29-49 kr',
      direct: 'Varies',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'small-order',
      label: 'Small Order Fee',
      wolt: '10-25 kr',
      justEat: '0-15 kr',
      direct: '0 kr',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'price-parity',
      label: 'Price Parity Clause',
      wolt: 'Yes',
      justEat: 'No',
      direct: 'N/A',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'menu-price',
      label: 'Menu Price Increase',
      wolt: '15-25%',
      justEat: '0-10%',
      direct: '0%',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    }
  ];

  // Example cost breakdown for a 200 DKK order
  const orderComparisonData = [
    {
      id: 'base-price',
      label: 'Base Food Price',
      wolt: 155,
      justEat: 170,
      direct: 155,
      unit: ' kr'
    },
    {
      id: 'menu-markup',
      label: 'Menu Price Markup',
      wolt: 45,
      justEat: 20,
      direct: 0,
      unit: ' kr',
      woltHighlight: true
    },
    {
      id: 'delivery-fee',
      label: 'Delivery Fee',
      wolt: 39,
      justEat: 29,
      direct: 0,
      unit: ' kr',
      woltHighlight: true
    },
    {
      id: 'service-fee',
      label: 'Service Fee',
      wolt: 10,
      justEat: 0,
      direct: 0,
      unit: ' kr',
      woltHighlight: true
    },
    {
      id: 'total',
      label: 'Total You Pay',
      wolt: 249,
      justEat: 219,
      direct: 155,
      unit: ' kr',
      woltHighlight: true,
      directHighlight: false
    }
  ];
  
  return (
    <>
      <PageHero 
        title="Overpriced & Unfair Pricing"
        subtitle="How Wolt's fee structure hurts consumers and restaurants"
        color="primary"
      />
      
      <main>
        {/* Key Pricing Issues Cards */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              The Price You Really Pay
            </h2>
            <InfoCardGrid 
              cards={pricingCardData}
              columns={3}
              className="mb-8"
            />
          </div>
        </section>
        
        <ContentSection 
          title="Hidden Fees You're Paying"
          bgColor="light"
        >
          <p className="mb-4">
            When you order through Wolt, the price you pay is significantly higher than ordering directly from the restaurant due to multiple layers of fees:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>Service Fee:</strong> Wolt adds an additional ~5% "service fee" on every order, even if you already pay for Wolt Plus.<Citation id="1" source="Wolt Fee Structure Analysis, 2023" /> This is on top of the delivery fee you're already paying.
            </li>
            <li>
              <strong>Inflated Menu Prices:</strong> Restaurants must increase their menu prices on Wolt by ~20–30% just to survive the high commissions.<Citation id="2" source="Restaurant Pricing Study, Copenhagen, 2023" /> This means you're paying more for the exact same meal than if you ordered directly.
            </li>
            <li>
              <strong>Delivery Fee:</strong> The standard fee for delivery, which varies by distance but typically starts at 29-39 DKK.
            </li>
            <li>
              <strong>Small Order Fee:</strong> An additional fee for orders below a certain amount, typically 120-150 DKK.
            </li>
          </ul>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Example: 200 DKK Order</h3>
            <p className="mb-2">Here's how a typical 200 DKK order breaks down:</p>
            <ul className="space-y-1">
              <li>Original restaurant price: ~155 DKK</li>
              <li>Wolt markup: ~45 DKK (29% increase)</li>
              <li>Delivery fee: 39 DKK</li>
              <li>Service fee: ~10 DKK (5% of order)</li>
              <li><strong>Total you pay: 249 DKK</strong></li>
              <li>Total if ordered directly: 155 DKK (60% cheaper)</li>
            </ul>
          </div>
          
          <p>
            Even with a Wolt+ subscription (which costs 49 DKK/month), you're still paying the service fee and inflated menu prices.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Fee Comparison: Wolt vs Alternatives"
          bgColor="white"
        >
          <p className="mb-6">
            This table compares the fees and policies across different food ordering options, showing how much more expensive Wolt is compared to alternatives:
          </p>
          
          <ComparisonTable 
            title="Fee Structure Comparison"
            items={feeComparisonData}
            colorScheme="fees"
          />
          
          <ComparisonTable 
            title="Real Cost Example: 200 kr Order"
            description="How the same meal would cost across different platforms"
            items={orderComparisonData}
            colorScheme="fees"
          />
          
          <p className="mt-6">
            The price differences are substantial. For a typical order, you could save 30-40% by ordering directly from the restaurant instead of using Wolt.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Anti-Competitive Price Parity Clauses"
          bgColor="light"
        >
          <p className="mb-4">
            Wolt has enforced a rule that restaurants can't offer lower prices in-store or on other platforms than on Wolt.<Citation id="3" source="Danish Competition Authority Investigation, 2023" /> This anti-competitive clause (now under legal challenge in Denmark) forces prices up across the board and prevents you from getting a better deal by ordering directly.
          </p>
          
          <p className="mb-4">
            In Finland, regulators already forced Wolt to drop this clause<Citation id="4" source="Finnish Competition Authority Ruling, 2022" /> after determining it was harmful to market competition.
          </p>
          
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border-l-4 border-yellow-500 my-6">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">What This Means For You</h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Because of these price parity clauses, even restaurants that want to offer you better prices when you order directly can't do so explicitly. This artificially keeps prices high across all channels.
            </p>
          </div>
          
          <p>
            Competitors like Just Eat take a smaller commission from restaurants—around 10–15% for orders where restaurants handle delivery themselves<Citation id="5" source="Just Eat Partner Program, Denmark, 2023" />—significantly less than Wolt's ~30%.
          </p>
        </ContentSection>
        
        <section className="py-16 bg-wolt-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Stop Paying Hidden Fees</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              By choosing alternatives to Wolt, you not only save money but also support fair practices in the food delivery ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/alternatives"
                className="inline-block px-6 py-3 bg-white text-wolt-blue hover:bg-gray-100 rounded-lg font-medium transition duration-200"
              >
                Find Better Alternatives
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