import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl9yhlf7k1xli01rt1p3c7v8r/master",
  cache: new InMemoryCache()
})