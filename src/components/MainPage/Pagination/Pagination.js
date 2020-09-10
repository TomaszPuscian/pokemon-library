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
                    <a href="#" onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))}
        </nav>
    )
}

export {Pagination};