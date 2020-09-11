import React from 'react';
import {DetailedInfoElement} from "../../Styled Components/styled-components";

const StatsTable = ({pokemon}) => {

    return (
        <DetailedInfoElement>
            <table>
                <thead>
                    <tr>
                        <th>Przyrosty</th>
                    </tr>
                </thead>
                <tbody>
                {pokemon.stats.map(pokemon => (
                    <tr>
                        <td key={pokemon.stat.name}>{pokemon.stat.name}</td>
                        <td key={pokemon.base_stat}>{pokemon.base_stat}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </DetailedInfoElement>
    )
}

export {StatsTable};