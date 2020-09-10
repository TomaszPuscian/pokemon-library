import React from 'react';

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPokemons.length / pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            {pageNumbers.map(number =>(
                <li key={number}>
                    <button onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </nav>
    )
}

export {Pagination};