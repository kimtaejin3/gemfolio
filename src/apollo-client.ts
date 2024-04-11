import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbXlicHpsZXBpaWF2bXNzZWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDQwNjksImV4cCI6MjAyODQyMDA2OX0.bBJCI29Z4edg0zM0BHBB6zwcUZAVdgaR0KQxU8OLzhU";

const httpLink = createHttpLink({
  uri: "https://bsmybpzlepiiavmsseak.supabase.co/graphql/v1",
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
