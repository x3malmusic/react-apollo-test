import {
  gql,
  InMemoryCache,
  makeVar
} from '@apollo/client';

const planLines = [
  {
    name: 'Home Price',
    marks: [
      {
        value: 50000,
        label: '$ 50.000',
      },
      {
        value: 100000,
        label: '$ 100.000',
      },
      {
        value: 500000,
        label: '$ 500.000',
      },
    ],
    label: '$',
  },
  {
    name: 'Down Payment(20%)',
    marks: [
      {
        value: 10000,
        label: '10.000',
      },
      {
        value: 50000,
        label: '50.000',
      },
      {
        value: 100000,
        label: '100.000',
      },
    ],
    label: '$',
  },
  {
    name: 'Duration in Months',
    marks: [
      {
        value: 20,
        label: '20 months',
      },
      {
        value: 120,
        label: '120 months',
      },
      {
        value: 240,
        label: '240 months',
      },
    ],
    label: 'months',
  },
]

export const typeDefs = gql`
  extend type Query {
    offers: [offer]
  }
`;

export const GET_OFFERS = gql`
  query GetOffers {
    offers @client
  }
`;

export const offersVar = makeVar([planLines]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        offers: {
          read() {
            return offersVar();
          }
        },
      }
    }
  }
});