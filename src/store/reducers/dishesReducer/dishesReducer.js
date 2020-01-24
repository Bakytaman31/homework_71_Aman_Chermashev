import {DISHES_REQUEST, DISHES_SUCCESS, EDIT_DISH, ON_CHANGE} from "../../actions/actionTypes";

const initialState = {
    loading: false,
    dishes: {},
    name: '',
    image: '',
    price: 0,
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
                dishes: action.dishes
            };
        case ON_CHANGE:
            return {
                ...state,
                [action.name]: action.value
            };
        case EDIT_DISH:
            return {
                ...state,
                name: action.data.name,
                image: action.data.image,
                price: action.data.price
            };
        default:
            return state
    }
};