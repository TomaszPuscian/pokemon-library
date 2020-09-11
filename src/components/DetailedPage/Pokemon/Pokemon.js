import React from 'react';
import Image from "../Image";
import PokemonDetailedInfo from "../PokemonDetailedInfo";
import StatsTable from "../StatsTable";
import {Container} from "../../Styled Components/styled-components";

const Pokemon = () => {

    return (
        <Container>
            <StatsTable />
            <Image/>
            <PokemonDetailedInfo />
        </Container>
    )
}

export {Pokemon};