import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipebyName, cleanRecipe } from '../../redux/actions';
export default function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.name);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(cleanRecipe(dispatch));
        dispatch(getRecipebyName(name));
        setName('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={name}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
