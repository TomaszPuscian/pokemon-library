import React, {useEffect, useState} from "react";

const ListElement = ({pokemonUrl}) => {
    const [state, setState] = useState([]);

    //axios all
    useEffect(() => {
    })

    if (!state) {
        return <div>LOADING</div>
    } else {
        return (
        <div>
            {console.log(state)}
        </div>
        )
    }
}

export {ListElement}