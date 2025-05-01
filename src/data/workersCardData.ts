// Workers card data with both English and Danish translations
const workersCardData = [
  {
    id: 'gig-exploitation',
    imageSrc: '/images/fair_pay_for_workers.png',
    translations: {
      en: {
        title: 'Partners Without Protections',
        description: 'Wolt couriers are classified as "partners" rather than employees, denying them basic worker rights and benefits.'
      },
      da: {
        title: 'Partnere Uden Beskyttelse',
        description: 'Wolt-kurerer er klassificeret som "partnere" i stedet for medarbejdere, hvilket nægter dem grundlæggende arbejdstagerrettigheder og fordele.'
      }
    }
  },
  {
    id: 'low-earnings',
    imageSrc: '/images/worker_exploitation.png',
    translations: {
      en: {
        title: 'Low Earnings Reality',
        description: 'Many couriers earn below minimum wage after expenses, despite Wolt\'s marketing about flexible earnings.'
      },
      da: {
        title: 'Virkeligheden Med Lav Indtjening',
        description: 'Mange kurerer tjener under mindstelønnen efter udgifter, på trods af Wolts markedsføring om fleksibel indtjening.'
      }
    }
  },
  {
    id: 'algorithm-pressure',
    imageSrc: '/images/wolt_algorithm.png',
    translations: {
      en: {
        title: 'Algorithmic Management',
        description: 'Workers are managed by opaque algorithms that control pay rates, order allocation, and performance evaluations.'
      },
      da: {
        title: 'Algoritmisk Styring',
        description: 'Arbejdere styres af ugennemsigtige algoritmer, der kontrollerer lønsatser, ordrefordeling og præstationsevalueringer.'
      }
    }
  }
];

export default workersCardData; 