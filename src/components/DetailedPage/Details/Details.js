import React from 'react';
import Header from "../../Header";
import Pokemon from "../Pokemon";
import Navigation from "../Navigation";
import {DetailsPageContainer} from "../../Styled Components/styled-components";

const Details = () => {

    return (
        <DetailsPageContainer>
            <Header/>
            <Pokemon/>
            <Navigation/>
        </DetailsPageContainer>
    )
}

export {Details};

//1. Ogarnąć routing dynamiczny - tworzyć podstrony na podstawie ID
//2. Wykminić, jak fetchować te dane w ogóle xD pewnie jakiś axios na Mainie
//3. Znajdź te odpowiednie dane i je pogrupuj
//4. Pamiętaj o ewolucji!!!
//5. Napisz logikę obsługi guzików - może offset?
//6. Statystyki będą inne, też je bależy rozkminić