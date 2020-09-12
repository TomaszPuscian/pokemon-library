import React from 'react';
import Header from "../../Header";
import Pokemon from "../Pokemon";
import Navigation from "../Navigation";
import {DetailsPageContainer} from "../../Styled Components/styled-components";

const Details = ({showMain, id, name}) => {

    //Change id after clicking "next" button
    const nextPokemon = id => {
        const newId = id++;
        if (newId.isNumber) return newId;
    }

    return (
        <DetailsPageContainer>
            <Header/>
            <Pokemon id={id} newId={nextPokemon}/>
            <Navigation showMain={showMain} id={id} name={name} nextPokemon={nextPokemon}/>
        </DetailsPageContainer>
    )
}

export {Details};
