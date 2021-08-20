import React from "react"
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Theme } from '@material-ui/core';

import theme from '../../style-theme';
import { RoutePath } from '../../const';

import LoginPage from "../login-page/login-page";
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider<Theme> theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path={RoutePath.HOME}>
              <LoginPage />
            </Route>

            <PrivateRoute exact
              path={RoutePath.MAIN}
              render={() => {
                return <MainPage />
              }}>
            </PrivateRoute>

            <Route>
              <NotFound />
            </Route>
          </Switch>


        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
