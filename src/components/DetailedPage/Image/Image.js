import React from 'react';
import {SmallImage, SmallImageContainer} from "../../Styled Components/styled-components";


const Image = ({pokemon}) => {

    return (
        <SmallImageContainer>
            <SmallImage src={pokemon.sprites.front_default} style={{width: 400, height: 400}} alt="example" />
        </SmallImageContainer>
    )
}

export {Image};