import { payload } from "../payload";
import axios from "axios";

export const getData = (value) => {
    return (dispatch) => {
        const type = "GET_DATA";
        dispatch({ type: type, payload: payload("pending", null) });
        axios.get(`http://universities.hipolabs.com/search?name=${value}`)
            .then((res) => {
                dispatch({ type: type, payload: payload("success", res.data) });
            })
            .catch((err) =>
                dispatch({ type: type, payload: payload("error", err) })
            );
    };
};
