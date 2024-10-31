import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { runInitialData } from './utils/IndexedDB';
import Main from './pages/Main';

function App() {
  const history = useHistory();
  function authentication() {
    console.log(history);
    const hasLogin = localStorage.getItem("user");
    if (hasLogin) history.push("/Index/Landing");
    else history.push("/Login");
  }

  useEffect(() => {
    console.log("App");
    runInitialData();
    authentication();
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
      >
        <Redirect to="/Login" />
      </Route>
      <Route
        // exact
        path="/Login"
        render={() => {
          return (
            <Login
              authentication={authentication}
            />
          )
        }}
      />
      <Route
        // exact
        path="/Index"
        render={() => {
          return (
            <Main />
          )
        }}
      />
      {/* <Redirect from='/' to="/Login" /> */}
      <Route
        path="/*"
        render={() => {
          return (
            <div>
              Not Found
            </div>
          )
        }}
      >
      </Route>
    </Switch>
  );
}

export default App;
