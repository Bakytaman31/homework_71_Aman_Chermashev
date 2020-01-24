import axiosApp from "../../axios-app";
import {ORDERS_REQUEST, ORDERS_SUCCESS} from "./actionTypes";

export const ordersRequest = () => ({type: ORDERS_REQUEST});
export const ordersSuccess = orders => ({type: ORDERS_SUCCESS, orders});

export const getOrders = () => {
    return async (dispatch) => {
        dispatch(ordersRequest());
        const response = await axiosApp.get('/orders.json');
        dispatch(ordersSuccess(response.data));
    }
};

export const completeOrder = id => {
    return async (dispatch) => {
        await axiosApp.delete(`/orders/${id}.json`);
        dispatch(getOrders());
    }
};