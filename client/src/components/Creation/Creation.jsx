import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe, getDiets } from '../../redux/actions';
import style from './Creation.module.css';

export default function Creation() {
    const dispatch = useDispatch();
    const dieta = useSelector((state) => state.diets);
    const [errors, setError] = useState({});
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

    function validate() {
        let errors = {};
        if (!input.name || input.name.length < 3) {
            errors.name = 'Name Required';
        }
        if (input.summary.length < 20) {
            errors.summary = 'Summary min. 20 characters';
        }
        if (input.health_score < 0 || input.health_score > 100) {
            errors.health_score = 'Máx is 100';
        }
        if (!input.dishtypes) {
            errors.dishtypes = 'Type of dish is empty';
        }
        if (!input.image.includes('https')) {
            errors.image = 'Please insert an image type URL';
        }
        if (input.step_by_step.length < 60) {
            errors.step_by_step = 'Step by Step min. 60 characters';
        }
        return errors;
    }

    function handleChange(e) {
        // e.preventDeafult()
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
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
        <div className={style.fondo}>
            <div>
                <Link to={'/home'}>
                    <button>Back to Home</button>
                </Link>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Create your recipe</h2>
                <button type="submit">Create</button>
                <div>
                    <label>NAME:</label>
                    <input
                        type="text"
                        value={input.name}
                        placeholder="Name..."
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.name && <p>{errors.name}</p>}
                    <label>Image:</label>
                    <input
                        type="text"
                        name="image"
                        value={input.image}
                        placeholder="Image..."
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.image && <p>{errors.image}</p>}
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
                    {errors.summary && <p>{errors.summary}</p>}
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
                    {errors.health_score && <p>{errors.health_score}</p>}
                    <label>Type of Dish:</label>
                    <input
                        type="text"
                        value={input.dishtypes}
                        name="dishtypes"
                        placeholder="dishTypes..."
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.dishtypes && <p>{errors.dishtypes}</p>}
                    <br />
                    <label>Step By Step:</label>
                    <textarea
                        value={input.step_by_step}
                        placeholder="Step by step..."
                        name="step_by_step"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.step_by_step && <p>{errors.step_by_step}</p>}
                </div>
                <br />
                {/* <div>
                    <label>Diets:</label>
                    <select onChange={(e) => handleSelect(e)}>
                        <option value={input.diets}>Type of diets</option>
                        {dieta?.map((e, k) => {
                            return (
                                <option key={k} value={e.name}>
                                    {e.name}
                                </option>
                            );
                        })}
                    </select>
                </div> */}
            </form>
            {/* {input.diets?.map((e) => {
                return (
                    <div key={e}>
                        <p>{e}</p>
                        <button onClick={(e) => handleDelect(e)}>X</button>
                    </div>
                );
            })} */}
        </div>
    );
}
