import React from 'react';
import {DetailedInfoElement} from "../../Styled Components/styled-components";


const Image = ({pokemon}) => {

    return (
        <DetailedInfoElement>
            <img src={pokemon.sprites.front_default} style={{width: 400, height: 400}} alt="example" />
        </DetailedInfoElement>
    )
}

export {Image};