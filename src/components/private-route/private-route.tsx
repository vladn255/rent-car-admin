import React from "react"
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

import { RoutePath } from '../../globals/const';

import { RootState } from '../../store/store'
import { IPrivateRoute } from './types'

const PrivateRoute: React.FC<IPrivateRoute> = ({ render, path, exact }) => {
    const authorizationStatus = useSelector((state: RootState) => state.auth.authorized)

    return (
        <Route
            path={path}
            exact={exact}
            render={(routeProps) => {
                return (
                    authorizationStatus === true
                        ? render(routeProps)
                        : <Redirect to={RoutePath.HOME} />
                )
            }} />
    )
}

export default PrivateRoute