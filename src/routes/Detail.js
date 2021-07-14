import React from "react";
import { useParams } from "react-router";

import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            medium_cover_image
            description_intro
            language
            rating
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`;

const Poster = styled.div`
    width: 25%;
    height: 60%;
`;

const Detail = () => {
    const { id } = useParams();
    console.log(id);
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) },
    });
    console.log(loading, data);
    if (loading) {
        return "loading...";
    }
    if (data && data.movie)
        return (
            <Container>
                <Column>
                    <Title>123</Title>
                    <Subtitle>123123</Subtitle>
                    <Description>asdasdasd asdasd</Description>
                </Column>
                <Poster></Poster>
            </Container>
        );
};

export default Detail;
