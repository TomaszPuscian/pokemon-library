import React, {useEffect, useState} from 'react';
import axios from "axios";
import Page from "../Page";
import Pagination from "../Pagination";

const PokemonApiFetch = ({showDetails}) => {
    const [pokemons, setPokemons] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(6);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=60&offset=0/")
                .then(result => setPokemons(result.data.results))
    }, [])

    //Get current pokemons
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (!pokemons) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <Page pokemons={currentPokemons} showDetails={showDetails}/>
            <Pagination
                pokemonsPerPage={pokemonsPerPage}
                totalPokemons={pokemons}
                paginate={paginate}
            />
        </>
    )

}

export {PokemonApiFetch}
