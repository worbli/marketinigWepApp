import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Context } from "./components/context";
import { Layout } from "./layout";
import { Home } from './pages/home';
import { NotFound } from './pages/notfound';


const Router: React.FC = () => {

  const [global, setGlobal] = useState({
    language: localStorage.getItem("language") || 'en',
    apiUrl: 'https://oauth.dev.worbli.io/api',
    loggedIn: localStorage.getItem("jwt") ? true : false,
    redirectUrl: '',
    modal: false,
    modalState: '',
  });

  return (
    <Context.Provider value={{ global, setGlobal }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route render = {({ location }) => (
          <Layout location = { location }>
            <Switch location = { location }>
              <Route exact path = '/' component = { Home }/>
              <Route component = { NotFound }/>
            </Switch>
          </Layout>
        )} />
      </BrowserRouter>
    </Context.Provider>
  );
}

export { Router };