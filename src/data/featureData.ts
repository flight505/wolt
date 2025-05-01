// Feature card data with both English and Danish translations
const featureData = [
  {
    id: 'hidden-costs',
    imageSrc: 'hidden_cost.png',
    bgColor: 'dark-blue' as const,
    linkHref: '/pricing',
    translations: {
      en: {
        title: 'Hidden Costs',
        description: 'Wolt adds extra fees and forces restaurants to increase prices, making you pay up to 40% more.',
        linkText: 'See the real pricing'
      },
      da: {
        title: 'Skjulte Omkostninger',
        description: 'Wolt tilføjer ekstra gebyrer og tvinger restauranter til at hæve priserne, så du betaler op til 40% mere.',
        linkText: 'Se de reelle priser'
      }
    }
  },
  {
    id: 'unfair-pricing',
    imageSrc: 'unfair_pricing.png',
    bgColor: 'dark-purple' as const,
    linkHref: '/pricing',
    translations: {
      en: {
        title: 'Unfair Pricing',
        description: 'High commissions (25-30%) and extra service fees squeeze both restaurants and customers.',
        linkText: 'Learn more'
      },
      da: {
        title: 'Uretfærdige Priser',
        description: 'Høje provisioner (25-30%) og ekstra servicegebyrer presser både restauranter og kunder.',
        linkText: 'Læs mere'
      }
    }
  },
  {
    id: 'hurting-restaurants',
    imageSrc: 'hurting_restaurants.png',
    bgColor: 'black' as const,
    linkHref: '/restaurants',
    translations: {
      en: {
        title: 'Hurting Restaurants',
        description: 'Local businesses lose profit margins and control over their brand when using Wolt.',
        linkText: 'How restaurants suffer'
      },
      da: {
        title: 'Skader Restauranter',
        description: 'Lokale virksomheder mister fortjeneste og kontrol over deres brand ved brug af Wolt.',
        linkText: 'Hvordan restauranter lider'
      }
    }
  },
  {
    id: 'worker-exploitation',
    imageSrc: 'fair_pay_for_workers.png',
    bgColor: 'dark-blue' as const,
    linkHref: '/workers',
    translations: {
      en: {
        title: 'Worker Exploitation',
        description: 'Couriers lack basic worker protections like sick pay, holiday pay, and guaranteed hours.',
        linkText: 'Support fair conditions'
      },
      da: {
        title: 'Udnyttelse af Arbejdere',
        description: 'Kurerer mangler grundlæggende arbejderbeskyttelse som sygedagpenge, feriepenge og garanterede timer.',
        linkText: 'Støt retfærdige forhold'
      }
    }
  },
  {
    id: 'cancel-wolt',
    imageSrc: 'cancel_wolt.png',
    bgColor: 'dark-purple' as const,
    linkHref: '/pledge',
    translations: {
      en: {
        title: 'Cancel Wolt',
        description: 'Join the movement to create a fairer food delivery ecosystem in Denmark.',
        linkText: 'Sign the pledge'
      },
      da: {
        title: 'Afbestil Wolt',
        description: 'Deltag i bevægelsen for at skabe et mere retfærdigt madleveringsøkosystem i Danmark.',
        linkText: 'Skriv under på løftet'
      }
    }
  },
  {
    id: 'join-movement',
    imageSrc: 'join_the_movement.png',
    bgColor: 'black' as const,
    linkHref: '/alternatives',
    translations: {
      en: {
        title: 'Better Alternatives',
        description: 'Switch to platforms that treat workers fairly and charge restaurants reasonable fees.',
        linkText: 'Find alternatives'
      },
      da: {
        title: 'Bedre Alternativer',
        description: 'Skift til platforme, der behandler arbejdere fair og opkræver restauranter rimelige gebyrer.',
        linkText: 'Find alternativer'
      }
    }
  }
];

export default featureData; 