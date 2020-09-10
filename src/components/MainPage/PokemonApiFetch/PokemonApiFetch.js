import React, {useEffect, useState} from 'react';
import axios from "axios";
import Page from "../Page";
import Pagination from "../Pagination";

const PokemonApiFetch = () => {
    const [pokemons, setPokemons] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = () => {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0/")
                .then(result => setPokemons(result.data.results))
        }
        fetchData();
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
            <Page pokemons={currentPokemons}/>
            <Pagination
                pokemonsPerPage={pokemonsPerPage}
                totalPokemons={pokemons}
                paginate={paginate}/>
        </>
    )

}

export {PokemonApiFetch}
