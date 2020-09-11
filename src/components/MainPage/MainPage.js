import React from "react";
import Header from "../Header";
import PokemonApiFetch from "./PokemonApiFetch";
import {PageContainer, LeftImage, LeftImageContainer, MainPageContainer} from "../Styled Components/styled-components";
import leftImage from "../../assets/Warstwa 2.png";
import {Details} from "../DetailedPage/Details/Details";

const MainPage = () => {
    return (
        <>
            <Details />
            {/*<MainPageContainer>*/}
            {/*    <LeftImageContainer>*/}
            {/*        <LeftImage src={leftImage} alt="pokemons"/>*/}
            {/*    </LeftImageContainer>*/}
            {/*    <PageContainer>*/}
            {/*        <Header />*/}
            {/*        <PokemonApiFetch />*/}
            {/*    </Container>*/}
            {/*</MainPageContainer>*/}
        </>
    )
}
export {MainPage}