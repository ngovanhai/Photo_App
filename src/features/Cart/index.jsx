import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Test from './page/test';
import Test2 from './page/test2';
import Test3 from './page/test3';



Cart.propTypes = {};

function Cart(props) {
    const match = useRouteMatch();
    console.log({ match });

    return (
        <Switch>
            <Route path={`${match.url}/test`} component={Test} />
            <Route path={`${match.url}/test2`} component={Test2} />
            <Route path={`${match.url}/test3`} component={Test3} />

        </Switch>
    );
}

export default Cart;