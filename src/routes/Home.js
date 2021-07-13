import React from 'react'
import {gql, useQuery} from '@apollo/client'

const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            medium_cover_image
        }
    }
`

const Home = () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    if(loading) {
        return 'loading'
    }
    else if(data && data.movies) {
        console.log(data)
        return data.movies.map(m => (
            <h1>{m.title}</h1>
        ))
    }
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home