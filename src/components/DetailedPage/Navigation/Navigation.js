import React from 'react';
import {Button, NavigationContainer} from "../../Styled Components/styled-components";

const Navigation = () => {

    return (
        <NavigationContainer>
            <Button>
                Powrót
            </Button>
            <span>
                Imię
            </span>
            <Button>
                Następny
            </Button>
        </NavigationContainer>
    )
}

export {Navigation};