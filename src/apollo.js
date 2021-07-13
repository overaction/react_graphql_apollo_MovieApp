import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
    uri: "https://movieql2.vercel.app/",
    cache: new InMemoryCache(),
});

export default client;