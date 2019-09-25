import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => isLogin ? <Component /> : <Redirect to="/login" />}
        />
    );
}

export default PrivateRoute;