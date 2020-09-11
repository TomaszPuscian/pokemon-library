import React, {useState} from "react";
import Header from "../Header";
import PokemonApiFetch from "./PokemonApiFetch";
import {PageContainer, LeftImage, LeftImageContainer, MainPageContainer} from "../Styled Components/styled-components";
import leftImage from "../../assets/Warstwa 2.png";
import {Details} from "../DetailedPage/Details/Details";


const MainPage = () => {
    const [isDetails, setIsDetails] = useState(true)

    const showDetails = () => setIsDetails(true);

    console.log(isDetails);

    if (isDetails) return <Details />
    return (
        <>
            <MainPageContainer>
                <LeftImageContainer>
                    <LeftImage src={leftImage} alt="pokemons"/>
                </LeftImageContainer>
                <PageContainer>
                    <Header />
                    <PokemonApiFetch showDetails={showDetails}/>
                </PageContainer>
            </MainPageContainer>
        </>
    )
}
export {MainPage}