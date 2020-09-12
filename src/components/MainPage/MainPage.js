import React, {useState} from "react";
import Header from "../Header";
import PokemonApiFetch from "./PokemonApiFetch";
import {PageContainer, LeftImage, LeftImageContainer, MainPageContainer} from "../Styled Components/styled-components";
import leftImage from "../../assets/Warstwa 2.png";
import {Details} from "../DetailedPage/Details/Details";


const MainPage = () => {
    const [isDetails, setIsDetails] = useState(false)
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const showDetails = () => setIsDetails(true);
    const showMain = () => setIsDetails(false);

    //Send ID and name to Details
    const sendID = (pokemonId) => setId(pokemonId);
    const sendName = (pokemonName) => setName(pokemonName);

    if (isDetails) return <Details showMain={showMain} id={id} name={name} />
    return (
        <>
            <MainPageContainer>
                <LeftImageContainer>
                    <LeftImage src={leftImage} alt="pokemons"/>
                </LeftImageContainer>
                <PageContainer>
                    <Header />
                    <PokemonApiFetch showDetails={showDetails} sendID={sendID} sendName={sendName}/>
                </PageContainer>
            </MainPageContainer>
        </>
    )
}
export {MainPage}