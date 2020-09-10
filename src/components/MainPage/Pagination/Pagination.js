import React from 'react';
import {Button, PaginationNav} from "../../Styled Components/styled-components";

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPokemons.length / pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <PaginationNav>
            {pageNumbers.map(number =>(

                    <Button onClick={() => paginate(number)}>
                        {number}
                    </Button>

            ))}
        </PaginationNav>
    )
}

export {Pagination};