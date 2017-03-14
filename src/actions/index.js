export const ADD_LOCATION = 'ADD_LOCATION';
export const FIND_PRODUCTS = 'FIND_PRODUCTS';
import { browserHistory } from 'react-router';

const headers = {
    'Authorization': 'Token',
    'Content-Type': 'application/json',
    'Accept_Language': 'en_EN'
}
export const addLocation = (location) => ({
    type: ADD_LOCATION,
    payload: location
});
export const findProducts = (name) => {

    return (dispatch, getState) => {
        const { startLatitude, startLongitude, endLatitude, endLongitude} = getState().location;
        //first argument is the api that we will hit
        //second argument is method, GET, POST
            //headers - data that describes data
                //authentication
        fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`, {
            method: 'GET',
            headers
        })
            .then((data) => data.json())
            .then(({prices}) => {
                dispatch({
                    type: FIND_PRODUCTS,
                    payload: prices
                });
            })
            .catch((err) => {
                console.log(err);
            });
        //change url
        //products/myname
        browserHistory.push(`/products/${name}`);
    };
};