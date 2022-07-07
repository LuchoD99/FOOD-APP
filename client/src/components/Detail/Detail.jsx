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
                    <h2>{detalles[0].name}</h2>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}
