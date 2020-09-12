import React from 'react';
import {Bold, DetailedInfoElement, InfoList, InfoListElements} from "../../Styled Components/styled-components";

const PokemonDetailedInfo = ({pokemon, pokemonLocation, pokemonCharacteristic, pokemonSpecies}) => {

    const getName = () => {
        const names = [];
        if (!pokemonSpecies) return <h2> Wait, please, your data is loading. Eventually, try load your pokemon again! </h2>
        pokemonSpecies.names.forEach(name => {
            if (name.language.name === "en" || name.language.name === "ja") {
                names.push(name.name)
            }
        })
        return names.join(" (jap. ");
    }

    const getDescription = () => {
        const description = [];
        if (!pokemonCharacteristic) return <h2> Wait, please, your data is loading. Eventually, try load your pokemon again! </h2>
        pokemonCharacteristic.descriptions.forEach(desc => {
            if (desc.language.name === "en") {
                description.push(desc.description)
            }
        })
        return [...description];
    }

    const getType = () => {
        const types = [];
        if (!pokemon) return <h2> Wait, please, your data is loading. Eventually, try load your pokemon again! </h2>
        pokemon.types.forEach(type => types.push(type.type.name))
        return types.join(" ")
    }

    const countGender = () => {
        if (!pokemonSpecies) return <h2> Wait, please, your data is loading. Eventually, try load your pokemon again! </h2>
        const gender = 100 / (pokemonSpecies.gender_rate * 8);
        return `${gender}% female, ${100 - gender}% male`
    }

    const getArea = () => {
        const areas = [];
        if (!pokemonLocation) return <h2> Wait, please, your data is loading. Eventually, try load your pokemon again! </h2>
        pokemonLocation.names.forEach(area => areas.push(area.name))
        return areas.join(", ");
    }

    const countDifficultyToCatch = () => {
        if (!pokemonSpecies) return "No info"
        if (pokemonSpecies.capture_rate > 85) return "Medium"
        if (pokemonSpecies.capture_rate > 170) return "Difficult"

        return "Easy"
    }

    const possibilityOfCatching = pokemonSpecies.capture_rate !== undefined ? "Tak" : "Nie";

    return (
        // Niestety nie mogłem znaleźć niektórych informacji w API. Pola te są oznaczone znakiem "?"
        <DetailedInfoElement>
            <p>
                <Bold>{`${getName()})`}</Bold> - {getDescription()}
            </p>
            <InfoList>
                <InfoListElements><Bold>Typ:</Bold> {getType()}</InfoListElements>
                <InfoListElements><Bold>Płeć:</Bold> {countGender()}</InfoListElements>
                <InfoListElements><Bold>Region:</Bold> {getArea()}</InfoListElements>
                <InfoListElements><Bold>Występowanie w dziczy:</Bold> {pokemonSpecies.habitat.name} </InfoListElements>
                <InfoListElements><Bold>Możliwość złapania: </Bold>{possibilityOfCatching} </InfoListElements>
                <InfoListElements><Bold>Trudność złapania:</Bold> {countDifficultyToCatch()}</InfoListElements>
                <InfoListElements><Bold>Występowanie Shiny:</Bold> ? </InfoListElements>
                <InfoListElements><Bold>Dodawany do kolekcji przez:</Bold> ? </InfoListElements>
            </InfoList>
        </DetailedInfoElement>
    )
}

export {PokemonDetailedInfo};