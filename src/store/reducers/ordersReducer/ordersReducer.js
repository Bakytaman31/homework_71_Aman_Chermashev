import {ORDERS_REQUEST, ORDERS_SUCCESS} from "../../actions/actionTypes";

const initialState = {
    loading: false,
    orders: {}
};

export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        default:
            return state;
    }
};