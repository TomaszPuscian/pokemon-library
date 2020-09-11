import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PageElement from "../PageElement";
import PageHeader from "../PageHeader";


const Page = ({ pokemons, showDetails }) => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const pokemonsURL = [];
        pokemons.forEach(pokemon => pokemonsURL.push(axios.get(pokemon.url)));

        axios.all(pokemonsURL)
            .then(response => setPokemonData(response))
    }, [pokemons])



    return (
        <div>
            <PageHeader />
            <PageElement
                pokemonData={pokemonData}
                showDetails={showDetails}/>
        </div>
    )
}

export {Page};