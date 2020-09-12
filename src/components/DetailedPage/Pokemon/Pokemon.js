import React, {useEffect, useState} from 'react';
import Image from "../Image";
import PokemonDetailedInfo from "../PokemonDetailedInfo";
import StatsTable from "../StatsTable";
import axios from 'axios';
import {Container} from "../../Styled Components/styled-components";

const Pokemon = ({id, newId}) => {

    const [pokemon, setPokemon] = useState('');
    const [pokemonSpecies, setPokemonSpecies] = useState('');
    const [pokemonLocation, setPokemonLocation] = useState('');
    const [pokemonCharacteristic, setPokemonCharacteristic] = useState('');

    // let properId = 0;
    //
    // const checkId = newId && newId !== id ? properId = newId : properId = id;
    //
    // console.log(id, newId);

    useEffect(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then(result => setPokemon(result.data))

            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
                .then(result => setPokemonSpecies(result.data))

            axios.get(`https://pokeapi.co/api/v2/characteristic/${id}/`)
                .then(result => setPokemonCharacteristic(result.data))

            axios.get(`https://pokeapi.co/api/v2/location/${id}/`)
                .then(result => setPokemonLocation(result.data))

        //
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        //     .then(result => setPokemon(result.data))
        //
        // axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        //     .then(result => setPokemonSpecies(result.data))
        //
        // axios.get(`https://pokeapi.co/api/v2/characteristic/${id}/`)
        //     .then(result => setPokemonCharacteristic(result.data))
        //
        // axios.get(`https://pokeapi.co/api/v2/location/${id}/`)
        //     .then(result => setPokemonLocation(result.data))

    }, [id])

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