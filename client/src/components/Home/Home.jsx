import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe, cleanRecipe } from '../../redux/actions';
import Card from '../Card/Card';
import Filters from '../Filters/Filters';
import Loading from '../Loading/Loading';
import NavBar from '../NavBar/NavBar';
import Pagination from '../Pagination/Pagination';
export default function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);

    //paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [recipeForPage, setRecipeForPage] = useState(9);
    const [order, setOrder] = useState('');
    const indexLastR = currentPage * recipeForPage;
    const indexFirtsR = indexLastR - recipeForPage;
    const allrecipes = recipes.slice(indexFirtsR, indexLastR);
    //
    useEffect(() => {
        dispatch(getRecipe());
    }, [dispatch]);

    function paginado(pageNumber) {
        setCurrentPage(pageNumber);
    }

    // function handleResert(e) {
    //     e.preventDefault();
    //     dispatch(cleanRecipe(dispatch));
    //     dispatch(getRecipe());
    // }
    return (
        <div>
            {recipes.length > 0 ? (
                <div>
                    <NavBar />
                    <div>
                        <div>
                            <Filters
                                setCurrentPage={setCurrentPage}
                                setOrder={setOrder}
                            />
                            {/* <button onClick={(e) => handleResert(e)}>
                                Clear Filters
                            </button> */}
                        </div>
                        <div>
                            <div>
                                <Pagination
                                    paginado={paginado}
                                    recipes={recipes.length}
                                    recipeForPage={recipeForPage}
                                />
                            </div>
                            <div>
                                {allrecipes?.map((e) => {
                                    return (
                                        <div key={e.id}>
                                            <Card
                                                key={e.id}
                                                id={e.id}
                                                image={e.image}
                                                name={e.name}
                                                diets={e.diets}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // <h2>Loading</h2>
                <Loading />
            )}
        </div>
    );
}
