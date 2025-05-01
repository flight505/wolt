'use client';

import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import Citation from '@/components/Citation';
import ComparisonTable from '@/components/ComparisonTable';
import Link from 'next/link';

export default function WorkersPage() {
  // Worker conditions comparison data
  const workerConditionsData = [
    {
      id: 'employment-status',
      label: 'Employment Status',
      wolt: 'Independent "Partner"',
      justEat: 'Employee (often part-time)',
      direct: 'Employee',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'union-agreement',
      label: 'Union Agreement',
      wolt: 'No',
      justEat: 'Yes (3F)',
      direct: 'Varies by restaurant',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'sick-pay',
      label: 'Sick Pay',
      wolt: 'No',
      justEat: 'Yes',
      direct: 'Yes',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'holiday-pay',
      label: 'Holiday Pay',
      wolt: 'No',
      justEat: 'Yes',
      direct: 'Yes',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'pension',
      label: 'Pension Contributions',
      wolt: 'No',
      justEat: 'Yes',
      direct: 'Yes',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'insurance',
      label: 'Work Injury Insurance',
      wolt: 'No (limited coverage)',
      justEat: 'Yes',
      direct: 'Yes',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'equipment',
      label: 'Equipment Costs',
      wolt: 'Rider pays all',
      justEat: 'Company provides',
      direct: 'Company provides',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    },
    {
      id: 'guaranteed-hours',
      label: 'Guaranteed Hours',
      wolt: 'No',
      justEat: 'Yes',
      direct: 'Yes',
      woltHighlight: true,
      justEatHighlight: false,
      directHighlight: false
    }
  ];

  return (
    <>
      <PageHero 
        title="Exploitation of Delivery Workers"
        subtitle="How Wolt's business model undermines Danish labor standards"
        color="danger"
      />
      
      <main>
        <ContentSection 
          title="'Partners' Without Protections"
          bgColor="white"
        >
          <p className="mb-4">
            Wolt classifies its couriers as independent "partners" rather than employees. This distinction is crucial because it allows Wolt to avoid providing the standard benefits and protections that Danish workers typically receive.
          </p>
          
          <p className="mb-4">
            This means couriers lack:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Hourly wage guarantees</li>
            <li>Sick pay</li>
            <li>Holiday pay</li>
            <li>Insurance coverage</li>
            <li>Pension contributions<Citation id="1" source="Danish Labor Standards Report, 2023" /></li>
          </ul>
          
          <p className="mb-4">
            Instead, couriers shoulder all the risks and costs themselves, including:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Bicycle/vehicle purchase and maintenance</li>
            <li>Smartphone and data plans</li>
            <li>Accident liability</li>
            <li>Taxes and accounting<Citation id="2" source="Courier Costs Analysis, Copenhagen, 2023" /></li>
          </ul>
          
          <p>
            Meanwhile, Wolt avoids the employer responsibilities that are fundamental to the Danish labor model.<Citation id="3" source="Danish Labor Union Report on Gig Economy, 2023" />
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Comparing Worker Conditions"
          bgColor="light"
        >
          <p className="mb-6">
            The table below shows how drastically different worker protections are across different delivery models:
          </p>
          
          <ComparisonTable 
            title="Worker Conditions and Benefits"
            items={workerConditionsData}
            colorScheme="workers"
          />
          
          <p className="mt-6">
            As the comparison shows, Wolt couriers lack virtually every standard employment protection that Danish workers have come to expect. In contrast, Just Eat has taken steps to provide proper employment status to its couriers, including signing a collective agreement with the 3F union in 2021.<Citation id="4" source="Just Eat-3F Collective Agreement, 2021" />
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Low & Unstable Earnings"
          bgColor="white"
        >
          <p className="mb-4">
            Wolt riders are paid per delivery, typically about 45 DKK per drop (before tax). While Wolt advertises the potential to earn "up to" 120 DKK/hour, this is only possible during peak hours if a courier manages to secure one of the limited "shifts" and complete deliveries at maximum efficiency.<Citation id="5" source="Wolt Courier Earnings Survey, 2023" />
          </p>
          
          <p className="mb-4">
            The reality for most couriers includes:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>No guaranteed income (effectively a zero-hour contract)</li>
            <li>Long waits between deliveries during off-peak hours</li>
            <li>Competition between couriers for available shifts</li>
            <li>Payment rates that have reportedly decreased over time, especially after Foodora's exit reduced competition<Citation id="6" source="Courier Interviews, Copenhagen Post, 2024" /></li>
          </ul>
          
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg border-l-4 border-red-500 my-6">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Real-World Impact</h3>
            <p className="text-red-800 dark:text-red-200">
              "Some weeks I work 50 hours and barely make minimum wage after expenses. When it rains or snows, we take all the risk but Wolt takes all the profit." — Anonymous Wolt courier, Copenhagen
            </p>
          </div>
        </ContentSection>
        
        <ContentSection 
          title="Pressure and Safety Risks"
          bgColor="light"
        >
          <p className="mb-4">
            Wolt's algorithm rewards speed, which increases pressure on couriers to deliver as quickly as possible. This creates serious safety risks, especially in busy urban areas like Copenhagen where couriers navigate through traffic while checking their phones for directions.<Citation id="7" source="Traffic Safety Study on Food Delivery Couriers, 2023" />
          </p>
          
          <p className="mb-4">
            The system creates multiple hazards:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Incentives to rush through traffic to maximize deliveries per hour</li>
            <li>Pressure to ride in dangerous weather conditions</li>
            <li>Distracted riding while managing the app interface</li>
            <li>Long hours leading to fatigue and decreased awareness</li>
          </ul>
          
          <p className="mb-4">
            If couriers fail to meet Wolt's strict standards (even trivial ones like how they carry a pizza), Wolt can deactivate ("fire") riders at will with little recourse.<Citation id="8" source="Courier Deactivation Policies Analysis, 2023" /> Yet, when couriers get hurt on the job, Wolt has historically claimed no responsibility as they're not "employees."
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Authorities Push Back"
          bgColor="white"
        >
          <p className="mb-4">
            Danish authorities have started to challenge Wolt's labor model:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>Danish Occupational Injury Authority</strong> ruled that Wolt must compensate injured couriers, effectively recognizing them as employees under the law.<Citation id="9" source="Danish Occupational Injury Authority Ruling, 2023" />
            </li>
            <li>
              <strong>Denmark's Immigration Service (SIRI)</strong> now treats Wolt riders as having an employer, not as true freelancers, for residency permit purposes.<Citation id="10" source="SIRI Immigration Guidelines Update, 2023" />
            </li>
            <li>
              <strong>3F Union</strong> has filed multiple cases challenging the contractor classification of food delivery workers.
            </li>
          </ul>
          
          <p className="mb-4">
            Despite these rulings, Wolt continues to fight against reclassifying couriers as employees,<Citation id="11" source="Wolt Legal Challenges Report, 2023" /> resisting the basic rights and protections that Danish workers typically enjoy.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Competitors Treat Workers Better</h3>
            <p className="mb-2">Unlike Wolt, Just Eat employs many of its couriers on formal contracts (often part-time) and signed a collective bargaining agreement with the 3F union in 2021.<Citation id="12" source="Just Eat-3F Collective Agreement, 2021" /></p>
            <p>Foodora in other Nordic countries has historically hired couriers as employees and reached union agreements (e.g., Norway in 2019 after couriers went on strike).<Citation id="13" source="Foodora Norway Union Agreement, 2019" /></p>
          </div>
        </ContentSection>
        
        <section className="py-16 bg-wolt-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Stand With Workers</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              By choosing alternatives to Wolt, you're supporting better treatment of the people who deliver your food. Every order matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/pledge"
                className="inline-block px-6 py-3 bg-white text-wolt-blue hover:bg-gray-100 rounded-lg font-medium transition duration-200"
              >
                Sign the Pledge
              </Link>
              <Link 
                href="/alternatives"
                className="inline-block px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-medium transition duration-200"
              >
                Find Alternatives
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 