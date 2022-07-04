/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Pagination({ recipeForPage, paginado, recipes }) {
    let page = [];
    for (let i = 1; i <= Math.ceil(recipes / recipeForPage); i++) {
        page.push(i);
    }
    return (
        <nav>
            <ul>
                {page?.map((number) => {
                    return (
                        <li key={number}>
                            <a
                                onClick={() => {
                                    return paginado(number);
                                }}
                            >
                                {number}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
