import React from 'react';
//tutaj axios all - masz tablicę URLów. zobacz co wyjdzie z tego axios alla i działaj dalej
const Page = ({ pokemons }) => {
    if (!pokemons) {
        return <h2>Loading</h2>
    }

    return (
        <ul>
            {pokemons.map(pokemons => (
                <li key={pokemons.name}>{pokemons.url}</li>
            ))}
        </ul>
    )
}

export {Page};