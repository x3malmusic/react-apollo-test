import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import { typeDefs, cache } from './database'
import './index.css';

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:3000/graphql',
  typeDefs,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
