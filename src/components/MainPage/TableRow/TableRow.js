import React, {useEffect, useState} from 'react';

const TableRow = ({id}) => {
    const [pokemonData, setPokemonData] = useState('');
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => setPokemonData(data))
    }, [id])

    return (
    <div> {console.log(pokemonData)}
        <div>{pokemonData.id}</div>
        <div><img src={pokemonData.front_default} alt="pokemon icon" /></div>
        <div>{pokemonData.name}</div>
        <div>min lvl ewolucji?</div>
        <div></div>
        <div></div>
    </div>
    )
}

export default TableRow;