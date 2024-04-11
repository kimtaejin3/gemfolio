import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdXJidGhxaW5veGlxdHNjYmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTc3NjcsImV4cCI6MjAyNzk5Mzc2N30.DeXDag6cOw8DZWM2uhhMdX5QBMM0thWx-pSMQm3_K9A";

const httpLink = createHttpLink({
  uri: "https://qaurbthqinoxiqtscbdd.supabase.co/graphql/v1",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      apikey: API_KEY,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
