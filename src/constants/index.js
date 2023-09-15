import {
  arrowSync,
  checkmark,
  mdiCards,
  phTruck,
  completeStep,
  currentStep,
  nextStep,
  customer,
  verifiedCustomer,
  stars,
} from '../assets';

const claims = [
  {
    id: 1,
    claim: '30-DAY SATISFACTION GUARANTEE',
    logo: checkmark,
  },
  {
    id: 2,
    claim: 'FREE DELIVERY ON ORDERS OVER $40.00',
    logo: phTruck,
  },
  {
    id: 3,
    claim: '50.000 HAPPY CUSTOMERS',
    logo: mdiCards,
  },
  {
    id: 4,
    claim: '100% MONEY BACK GUARANTEE',
    logo: arrowSync,
  },
];

const orderProgress = [
  {
    id: 1,
    name: 'Cart Review',
    image: completeStep,
  },
  {
    id: 2,
    name: 'Checkout',
    image: completeStep,
  },
  {
    id: 3,
    name: 'Special Offer',
    image: currentStep,
  },
  {
    id: 4,
    name: 'Confirmation',
    image: nextStep,
  },
];

const customerData = {
  name: 'Ken T.',
  comment:
    '“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”',
  image: customer,
  verifiedImage: verifiedCustomer,
  verifiedText: 'Verified Customer',
  stars,
};

export { claims, orderProgress, customerData };
