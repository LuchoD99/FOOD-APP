import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe, getDiets } from '../../redux/actions';
export default function Creation() {
    const dispatch = useDispatch();
    const dieta = useSelector((state) => state.diets);
    const [error, setError] = useState({});
    const [input, setInput] = useState({
        name: '',
        image: '',
        summary: '',
        health_score: '',
        dishtypes: '',
        step_by_step: '',
        diets: [],
    });
    const history = useHistory();
    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);

    function handleChange(e) {
        // e.preventDeafult()
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }
    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value],
        });
    }

    function handleDelect(e) {
        setInput({
            ...input,
            diets: input.diets.filter((dieta) => dieta !== e),
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecipe(input));
        setInput({
            name: '',
            image: '',
            summary: '',
            health_score: '',
            dishtypes: '',
            step_by_step: '',
            diets: [],
        });
        history.push('/home');
    }
    return (
        <div>
            <div>
                <Link to={'/home'}>
                    <button>Back to Home</button>
                </Link>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Create your recipe</h2>
                <div>
                    <label>NAME:</label>
                    <input
                        type="text"
                        value={input.name}
                        placeholder="Name..."
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Image:</label>
                    <input
                        type="text"
                        name="image"
                        value={input.image}
                        placeholder="Image..."
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <label>Summary:</label>
                    {/* <input
                        type="text"
                        value={input.summary}
                        width="250px"
                        height={'250px'}
                    /> */}
                    <textarea
                        value={input.summary}
                        onChange={(e) => handleChange(e)}
                        placeholder="Summary..."
                        name="summary"
                    />
                </div>
                <div>
                    <label>Health Score:</label>
                    <input
                        type="number"
                        name="health_score"
                        value={input.health_score}
                        min="0"
                        max={'100'}
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Type of Dish:</label>
                    <input
                        type="text"
                        value={input.dishtypes}
                        name="dishtypes"
                        placeholder="dishTypes..."
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <label>Step By Step:</label>
                    <textarea
                        value={input.step_by_step}
                        placeholder="Step by step..."
                        name="step_by_step"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <br />
                <div>
                    <label>Diets:</label>
                    <select onChange={(e) => handleSelect(e)}>
                        <option>Type of diets</option>
                        {dieta?.map((e, k) => {
                            return (
                                <option key={k} value={e.name}>
                                    {e.name}
                                </option>
                            );
                        })}
                    </select>
                    {input.diets?.map((e) => {
                        return (
                            <div key={e}>
                                <p>{e}</p>
                                <button onChange={(e) => handleDelect(e)}>
                                    X
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
