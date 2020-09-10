import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {PageElement} from "../PageElement/PageElement";
import {PageHeader} from "../PageHeaderElement/PageHeaderElement";
import {Container} from "../../Styled Components/styled-components";

const Page = ({ pokemons }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonEvolutionData, setPokemonEvolutionData] = useState([])

    useEffect(() => {
        const pokemonsURL = [];
        pokemons.forEach(pokemon => pokemonsURL.push(axios.get(pokemon.url)));

        axios.all(pokemonsURL)
            .then(response => setPokemonData(response))
    }, [pokemons])

    useEffect(() => {
        const pokemonEvoURL = [];
        pokemonData.forEach(pokemon => pokemonEvoURL.push(axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemon.data.id}/`)))

        axios.all(pokemonEvoURL)
            .then(response => setPokemonEvolutionData(response))
    }, [pokemonData])

    return (
        <div>
            <PageHeader />
            <PageElement
                pokemonData={pokemonData}
                pokemonEvolutionData={pokemonEvolutionData} />
        </div>
    )
}

export {Page};