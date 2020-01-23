import {DISHES_REQUEST, DISHES_SUCCESS, ON_CHANGE} from "./actionTypes";
import axiosApp from "../../axios-app";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = dishes => ({type: DISHES_SUCCESS, dishes});
export const onChange = (name, value) => ({type: ON_CHANGE, name, value});

export const getDishes = () => {
    return async (dispatch) => {
        dispatch(dishesRequest());
        const response = await axiosApp.get('/dishes.json');
        dishesSuccess(response);
    }
};

export const postDish = dish => {
    return async () => {
        axiosApp.post('/dishes.json', dish);
    };

};