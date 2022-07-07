import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Card({ id, name, image, diets }) {
    return (
        <div>
            <NavLink to={`/details/${id}`}>
                <div key={id}>
                    <img
                        src={image}
                        alt="img not found"
                        width={'250px'}
                        height={'250px'}
                    />
                    <h2>{name}</h2>
                    <div>
                        {diets?.map((e, k) => {
                            return (
                                <div key={k}>
                                    <p>{e.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
