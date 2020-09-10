import React from "react";
import {Header} from "./Header/Header";
import {PokemonApiFetch} from "./PokemonApiFetch/PokemonApiFetch";

const MainPage = () => {
    return (
        <>
            <div style={{display: "flex"}}>
                <div>left sided img</div>
                <div>
                    <Header />
                    <PokemonApiFetch />
                </div>
            </div>
        </>
    )
}
export {MainPage}