import React, {useEffect, useState} from 'react';
import Image from "../Image";
import PokemonDetailedInfo from "../PokemonDetailedInfo";
import StatsTable from "../StatsTable";
import axios from 'axios';
import {Container} from "../../Styled Components/styled-components";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonSpecies, setPokemonSpecies] = useState('');
    const [pokemonLocation, setPokemonLocation] = useState('');
    const [pokemonCharacteristic, setPokemonCharacteristic] = useState('');
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/1/")
            .then(result => setPokemon(result.data))

        axios.get("https://pokeapi.co/api/v2/pokemon-species/1/")
            .then(result => setPokemonSpecies(result.data))

        axios.get("https://pokeapi.co/api/v2/characteristic/1/")
            .then(result => setPokemonCharacteristic(result.data))

        axios.get("https://pokeapi.co/api/v2/location/1/")
            .then(result => setPokemonLocation(result.data))

    }, [])
    if (!pokemon || !pokemonSpecies || !pokemonLocation ) return <h2>Loading...</h2>
    return (
        <Container>
            <StatsTable pokemon={pokemon} />
            <Image pokemon={pokemon} />
            <PokemonDetailedInfo pokemon={pokemon}
                                 pokemonSpecies={pokemonSpecies}
                                 pokemonCharacteristic={pokemonCharacteristic}
                                 pokemonLocation={pokemonLocation}/>
        </Container>
    )
}

export {Pokemon};