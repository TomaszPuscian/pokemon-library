import React from "react";
import Header from "../Header";
import PokemonApiFetch from "./PokemonApiFetch";
import {Container, LeftImage, LeftImageContainer, MainPageContainer} from "../Styled Components/styled-components";
import leftImage from "../../assets/Warstwa 2.png";

const MainPage = () => {
    return (
        <>
            <MainPageContainer>
                <LeftImageContainer>
                    <LeftImage src={leftImage} alt="pokemons"/>
                </LeftImageContainer>
                <Container>
                    <Header />
                    <PokemonApiFetch />
                </Container>
            </MainPageContainer>
        </>
    )
}
export {MainPage}