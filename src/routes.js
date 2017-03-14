import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App';
import Locations from './containers/Locations';
import Products from './containers/Products';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Locations}/>
        <Route path="/products/:userName" component={Products} />
    </Route>
);