import React from 'react';
import axios from 'axios'
//tutaj axios all - masz tablicę URLów. zobacz co wyjdzie z tego axios alla i działaj dalej
const Page = ({ pokemons }) => {
    if (!pokemons) {
        return <h2>Loading</h2>
    }

    axios.all(pokemons.url)
        .then(axios.spread((...responses) => {
            responses.forEach(res => console.log('Success'))
            console.log('submitted all axios calls');
        }))

    return (
        <ul>
            {pokemons.map(pokemons => (
                <li key={pokemons.name}>{pokemons.url}</li>
            ))}
        </ul>
    )
}

export {Page};