import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ROUTES } from '../../../configs/routes';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../../utils/constants';

interface Props extends RouteProps { }

const ProtectedRoute = (props: Props) => {
    const { ...rest } = props;
    const auth = Cookies.get(ACCESS_TOKEN_KEY);

    return !auth ? <Route {...rest} /> : <Redirect to={{ pathname: ROUTES.home }} />
};

export default ProtectedRoute;
