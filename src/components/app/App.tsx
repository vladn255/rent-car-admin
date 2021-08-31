import React from "react"
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Theme } from '@material-ui/core';

import theme from '../../globals/style-theme';
import { RoutePath } from '../../globals/const';
import { StyledApp } from './styles';

import LoginPage from "../login-page/login-page";
import NotFound from '../not-found/not-found';
// import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';

const App: React.FC = () => {
  return (
    <StyledApp>
      <ThemeProvider<Theme> theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path={RoutePath.HOME}>
              <LoginPage />
            </Route>

            {/* Не забыть вернуть как было, когда главная будет готова */}
            <Route exact path={RoutePath.MAIN}>
              <MainPage />
            </Route>

            {/* <PrivateRoute exact
              path={RoutePath.MAIN}
              render={() => {
                return <MainPage />
              }}>
            </PrivateRoute> */}

            <Route>
              <NotFound />
            </Route>
          </Switch>


        </BrowserRouter>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
