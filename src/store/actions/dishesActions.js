import {DISHES_REQUEST, DISHES_SUCCESS, EDIT_DISH, ON_CHANGE} from "./actionTypes";
import axiosApp from "../../axios-app";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = dishes => ({type: DISHES_SUCCESS, dishes});
export const onChange = (name, value) => ({type: ON_CHANGE, name, value});
export const editDishSuccess = data => ({type: EDIT_DISH, data});

export const getDishes = () => {
    return async (dispatch) => {
        dispatch(dishesRequest());
        const response = await axiosApp.get('/dishes.json');
        dispatch(dishesSuccess(response.data));
    }
};

export const postDish = dish => {
    return async (dispatch) => {
        await axiosApp.post('/dishes.json', dish);
        dispatch(getDishes());
    };

};

export const deleteDish = id => {
    return async (dispatch) => {
        await axiosApp.delete(`/dishes/${id}.json`);
        dispatch(getDishes());
    }
};

export const initDishToEdit = id => {
    return async (dispatch) => {
        const response = await axiosApp.get(`/dishes/${id}.json`);
        dispatch(editDishSuccess(response.data));
    }
};

export const postEditedDish = (dish, id) => {
    return async (dispatch) => {
        await axiosApp.put(`/dishes/${id}.json`, dish);
        dispatch(getDishes());
    }
};