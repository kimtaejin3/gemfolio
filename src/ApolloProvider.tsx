"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "./apollo-client";

export default function Provider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
