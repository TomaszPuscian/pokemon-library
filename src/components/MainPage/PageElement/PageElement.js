import React from "react";
import {
    PageListContainer,
    PageList,
    PageListElement,
    PageListElementID, PokemonImage
} from "../../Styled Components/styled-components";


const PageElement = ({pokemonData, showDetails}) => {
    return (
        <div>
            {pokemonData.map(pokemon => (
                <PageList onClick={showDetails}>
                    <PageListElementID>
                        {pokemon.data.id}
                    </PageListElementID>
                    <PageListElement>
                        <PokemonImage src={pokemon.data.sprites.front_default} alt="pokemon sprite" />
                    </PageListElement>
                    <PageListElement>
                        {pokemon.data.name}
                    </PageListElement>
                    <PageListElement>
                        001
                    </PageListElement>
                    <PageListElement>
                        {pokemon.data.types[0].type.name}
                    </PageListElement>
                    <PageListElement>
                        Ivosaur
                    </PageListElement>
                </PageList>
            ))}
        </div>
    )
}

export {PageElement}