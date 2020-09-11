import React from 'react';
import {DetailedInfoElement} from "../../Styled Components/styled-components";

const PokemonDetailedInfo = ({pokemon, pokemonLocation, pokemonCharacteristic, pokemonSpecies}) => {

    const getType = () => {
        const types = [];
        for (let i = 0; i < pokemon.types.length; i++) {
            types.push(pokemon.types[i].type.name)
        }
        return types.join(" ")
    }



    const countGender = () => {
        const gender = 100 / (pokemonSpecies.gender_rate * 8);
        return `${gender}% samica, ${100 - gender}% samiec`
    }

    const getArea = () => {
       return console.log()

    }

    const countDifficultyToCatch = () => {
        if (pokemonSpecies.capture_rate > 85) return "Średni"
        if (pokemonSpecies.capture_rate > 170) return "Trudny"

        return "Łatwy"
    }

    return (
        // Niestety nie mogłem znaleźć niektórych informacji w API. Pola te są oznaczone znakiem "?"
        <DetailedInfoElement>
            <p>

            </p>
            <ul>
                <li>Typ: {getType()}</li>
                <li>Płeć: {countGender()}</li>
                <li>Region: {getArea()}</li>
                <li>Występowanie w dziczy: ? </li>
                <li>Możliwość złapania: ? </li>
                <li>Trudność złapania: {countDifficultyToCatch()}</li>
                <li>Występowanie Shiny: ? </li>
                <li>Dodawany do kolekcji przez: ? </li>
            </ul>
        </DetailedInfoElement>
    )
}

export {PokemonDetailedInfo};