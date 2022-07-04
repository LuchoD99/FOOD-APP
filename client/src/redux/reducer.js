import { CLEAN_RECIPE, GET_RECIPE } from './actions';

const initialState = {
    recipes: [],
    allrecipes: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPE:
            return {
                ...state,
                recipes: action.payload,
                allrecipes: action.payload,
            };
        case CLEAN_RECIPE:
            return {
                ...state,
                recipes: action.payload,
            };
        default:
            return { ...state };
    }
}
