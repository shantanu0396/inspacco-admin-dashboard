import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { CurrentUser } from "./models/Auth";

const httpLink = createHttpLink({
  uri: "http://api-dev.inspacco.com/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const currentUser = localStorage.getItem("currentUser");
  const user: CurrentUser = currentUser ? JSON.parse(currentUser) : null;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "X-Parse-Application-Id": "inspacco-parse-server",
      "X-Parse-Session-Token": user ? user.sessionToken : "",
    },
  };
});

const onErrorLink = onError(({ networkError, graphQLErrors, response }) => {
  console.error("Error processing your request. Please try after sometime.");
});

const client = new ApolloClient({
  //link: authLink.concat(graphqlError).concat(uploadLink),
  link: from([authLink, onErrorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
