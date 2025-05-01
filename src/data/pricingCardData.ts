// Pricing card data with both English and Danish translations
const pricingCardData = [
  {
    id: 'hidden-fees',
    imageSrc: '/images/hidden_cost.png',
    translations: {
      en: {
        title: 'Hidden Fees You Pay',
        description: 'Wolt adds multiple fees on every order including service fees, inflated menu prices, and delivery charges.'
      },
      da: {
        title: 'Skjulte Gebyrer Du Betaler',
        description: 'Wolt tilføjer flere gebyrer på hver ordre, herunder servicegebyrer, oppustede menupriser og leveringsgebyrer.'
      }
    }
  },
  {
    id: 'restaurant-commission',
    imageSrc: '/images/hurting_restaurants.png',
    translations: {
      en: {
        title: 'Commission Squeeze',
        description: 'Restaurants pay 25-30% commission to Wolt, forcing them to raise menu prices by 15-25% just to survive.'
      },
      da: {
        title: 'Kommissionspres',
        description: 'Restauranter betaler 25-30% i provision til Wolt, hvilket tvinger dem til at forhøje menupriserne med 15-25% bare for at overleve.'
      }
    }
  },
  {
    id: 'price-parity',
    imageSrc: '/images/unfair_pricing.png',
    translations: {
      en: {
        title: 'Anti-Competitive Practices',
        description: 'Wolt\'s price parity clauses prevent restaurants from offering better prices through other channels.'
      },
      da: {
        title: 'Konkurrencehæmmende Praksis',
        description: 'Wolts prisparitetsklausuler forhindrer restauranter i at tilbyde bedre priser gennem andre kanaler.'
      }
    }
  }
];

export default pricingCardData; 