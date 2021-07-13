import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
    uri: "https://movieql.now.sh/",
    cache: new InMemoryCache(),
});

export default client;