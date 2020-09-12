import React from 'react';
import {Name, NavButton, NavigationContainer} from "../../Styled Components/styled-components";

const Navigation = ({showMain, id, name, nextPokemon}) => {

    return (
        <NavigationContainer>
            <NavButton width="50" height="50" onClick={showMain}>
                &#8701;
                Powrót
            </NavButton>
            <Name>
                {id < 9 ? `00${id}` : `0${id}`} {name}
            </Name>
            <NavButton onClick={nextPokemon}>
                Następny
                &#8702;
            </NavButton>
        </NavigationContainer>
    )
}

export {Navigation};