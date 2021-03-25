import { ApolloClient, InMemoryCache } from "@apollo/client";
import { REACT_APP_API } from "./config";
const client = new ApolloClient({
  uri: REACT_APP_API,
  cache: new InMemoryCache(),
});
export default client;
