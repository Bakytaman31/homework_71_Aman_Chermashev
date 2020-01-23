import {DISHES_REQUEST, DISHES_SUCCESS, ON_CHANGE} from "../../actions/actionTypes";

const initialState = {
    loading: false,
    dishes: {},
    name: '',
    img: '',
    price: 0
};

export const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DISHES_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case ON_CHANGE:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state
    }
};