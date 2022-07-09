import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetail, cleanDiets, cleanRecipe } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';

export default function Detail() {
    const dispatch = useDispatch();
    const detalles = useSelector((state) => state.details);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(cleanDiets(dispatch), cleanRecipe(dispatch));
        };
    }, [dispatch, id]);

    return (
        <div>
            {detalles.length > 0 ? (
                <div>
                    <div>
                        <h2>{detalles[0].name.toUpperCase()}</h2>
                        <img
                            src={detalles[0].image}
                            alt="img not found"
                            width={'250px'}
                            height={'250px'}
                        />
                        <h3>
                            Diets:{detalles[0].diets.map((e) => e.name + ',')}
                        </h3>
                    </div>
                    <div>
                        <h4>Health Score: {detalles[0].health_score}º</h4>
                        <h4>
                            Type of dish: {detalles[0].dishtypes.toString()}
                        </h4>
                        <h4>Summary:</h4>
                        <p>{detalles[0].summary.replace(/<[^>]*>/g, '')}</p>
                    </div>
                    <div>
                        <h4>Step By Step:</h4>
                        {typeof detalles[0].step_by_step === 'object' ? (
                            detalles[0].step_by_step.map((e, k) => {
                                return (
                                    <p key={k}>
                                        Paso Nº{e.number}:{e.step}
                                        <br />
                                    </p>
                                );
                            })
                        ) : (
                            <p>{detalles[0].step_by_step}</p>
                        )}
                    </div>
                    <div>
                        <Link to={'/home'}>
                            <button>Back to Home</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}
