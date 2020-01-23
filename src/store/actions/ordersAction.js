import axiosApp from "../../axios-app";
import {ORDERS_REQUEST, ORDERS_SUCCESS} from "./actionTypes";

export const ordersRequest = () => ({type: ORDERS_REQUEST});
export const ordersSuccess = orders => ({type: ORDERS_SUCCESS, orders});

export const getOrders = () => {
    return async (dispatch) => {
        dispatch(ordersRequest());
        const response = await axiosApp.get('/orders.json');
        dispatch(ordersSuccess(response));
    }
};
