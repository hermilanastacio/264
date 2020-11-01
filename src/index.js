import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import './index.scss';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <HashRouter basename="frontend-crash-course">
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </HashRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
