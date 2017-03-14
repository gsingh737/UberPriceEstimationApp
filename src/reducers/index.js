import {combineReducers} from 'redux';
import locationReducer from './locationReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    product: productReducer
});

export default rootReducer;