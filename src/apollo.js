import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
    uri: "https://movieql2.vercel.app/",
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            likeMovie: (_,{id},{cache}) => {
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        isLiked: (isLiked) => {
                            return !isLiked
                        },
                        medium_cover_image: (m) => 'console.log(m)'
                    }
                })
            }
        }
    }
});

export default client;