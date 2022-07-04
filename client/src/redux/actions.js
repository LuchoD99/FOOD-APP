import axios from 'axios';
export const GET_RECIPE = 'GET_RECIPE';
export const CLEAN_RECIPE = 'CLEAN_RECIPE';
export const GET_DIETS = 'GET_DIETS';
export const CLEAN_DIETS = 'CLEAN_DIETS';
export const POST_RECIPE = 'POST_RECIPE';
export const GET_DETAIL = 'GET_DETAIL';
export const FILTER_DB = 'FILTER_DB';
export const FILTER_A_Z = 'FILTER_A_Z';
export const FILTER_DIET = 'FILTER_DIET';
export const FILTER_SCORE = 'FILTER_SCORE';

export function getRecipe() {
    return async (dispatch) => {
        try {
            let json = await axios.get('http://localhost:3001/recipes');
            return dispatch({
                type: GET_RECIPE,
                payload: json.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function cleanRecipe(dispatch) {
    return dispatch({
        type: CLEAN_DIETS,
        payload: [],
    });
}
