import React from 'react';
import {
    DetailedInfoElement,
    Table,
    TableD,
    TableHead,
    TableHeader,
    TableRow,
    TableH, TableNumber
} from "../../Styled Components/styled-components";

const StatsTable = ({pokemon}) => {

    return (
        <DetailedInfoElement>
            <Table>
                <TableHead>
                    <TableHeader>
                        <TableH>Przyrosty</TableH>
                        <TableH/>
                    </TableHeader>
                </TableHead>
                <tbody>
                {pokemon.stats.map(pokemon => (
                    <TableRow>
                        <TableD key={pokemon.stat.name}>{pokemon.stat.name}</TableD>
                        <TableNumber key={pokemon.base_stat}>{pokemon.base_stat}</TableNumber>
                    </TableRow>
                ))}
                </tbody>
            </Table>
        </DetailedInfoElement>
    )
}

export {StatsTable};