import React from 'react';
import {DetailedInfoElement} from "../../Styled Components/styled-components";

const PokemonDetailedInfo = () => {

    return (
        <DetailedInfoElement>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur delectus earum esse minima odio
                optio perspiciatis, quam quasi quia, quidem voluptas. Beatae cum ducimus, illum itaque provident reprehenderit suscipit!
            </p>
            <ul>
                <li>Typ: </li>
                <li>Płeć:</li>
                <li>Region:</li>
                <li>Występowanie w dziczy:</li>
                <li>Możliwość złapania:</li>
                <li>Trudność złapania:</li>
                <li>Występowanie Shiny:</li>
                <li>Dodawany do kolekcji przez:</li>
            </ul>
        </DetailedInfoElement>
    )
}

export {PokemonDetailedInfo};