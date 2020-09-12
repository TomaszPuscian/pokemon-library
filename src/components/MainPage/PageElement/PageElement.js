import React from "react";
import {
    PageList,
    PageListElement,
    PageListElementID, PokemonImage
} from "../../Styled Components/styled-components";


const PageElement = ({pokemonData, showDetails, sendID, sendName}) => {

    return (
        <div>
            {pokemonData.map(pokemon => (
                <PageList onClick={() => {
                    sendID(pokemon.data.id);
                    sendName(pokemon.data.name);
                    showDetails()
                }}>
                    <PageListElementID key={pokemon.data.id}>
                        {pokemon.data.id}
                    </PageListElementID>
                    <PageListElement key={pokemon.data.sprites.front_default}>
                        <PokemonImage src={pokemon.data.sprites.front_default} alt="pokemon sprite" />
                    </PageListElement>
                    <PageListElement key={pokemon.data.name}>
                        {pokemon.data.name}
                    </PageListElement>
                    <PageListElement key={pokemon.data.stats[0].base_stat}>
                        001
                    </PageListElement>
                    <PageListElement key={pokemon.data.types[0].type.name}>
                        {pokemon.data.types[0].type.name}
                    </PageListElement>
                    <PageListElement key={pokemon.data.weight}>
                        Ivosaur
                    </PageListElement>
                </PageList>
            ))}
        </div>
    )
}

export {PageElement}

//Niestety, nie udało mi się podłączyć danych o ewolucji pokemonów (min. lvl i następna forma