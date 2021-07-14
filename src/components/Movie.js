import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 380px;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    border-radius: 7px;
    top: 0px;
    transition: top 0.2s ease 0s;
    &:hover {
        top:-50px
    }
`;

const Poster = styled.div`
    background-image: url(${(props => props.bg)});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
`;

const Movie = ({id, bg}) => {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster bg={bg} />
            </Link>
        </Container>
    );
}

export default Movie
