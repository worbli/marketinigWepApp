import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Context } from "./components/context";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Direction } from "./pages/about/direction";
import { Differences } from "./pages/about/differences";
import { Governance } from "./pages/about/governance";
import { Launch } from "./pages/getInvolved/launch";
import { Partner } from "./pages/getInvolved/partner";
import { Account } from "./pages/getInvolved/account";
import { Updates } from "./pages/progress/updates";
import { Launches } from "./pages/progress/launches";
import { Technical } from "./pages/progress/technical";
import { Team } from "./pages/our/team";
import { Foundation } from "./pages/our/foundation";
import { Partners } from "./pages/our/partners";
import { Press } from "./pages/our/press";
import { Contacts } from "./pages/our/contacts";
import { Report } from "./pages/quick/report";
import { Terms } from "./pages/legal/terms";
import { Privacy } from "./pages/legal/privacy";
import { Accessibility } from "./pages/legal/accessibility";
import { NotFound } from "./pages/notfound";
import { Menu } from "./pages/menu";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDxQFHihTlYL4LYxOH0nUgdvBqvAytMByI",
  appId: "1:420274881014:web:30c6ef45aec118579e47d7",
  authDomain: "worbli.firebaseapp.com",
  databaseURL: "https://worbli.firebaseio.com",
  measurementId: "G-5Z6SK7FVKG",
  messagingSenderId: "420274881014",
  projectId: "worbli",
  storageBucket: "worbli.appspot.com"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().signInAnonymously();

const Router: React.FC = () => {
  const [global, setGlobal] = useState({
    language: localStorage.getItem("language") || "en",
    user: {},
    db: firebase.firestore()
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setGlobal(prev => ({ ...prev, user }));
      }
    });
  }, []);

  return (
    <Context.Provider value={{ global, setGlobal }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => (
            <Layout location={location}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about/direction" component={Direction} />
                <Route
                  exact
                  path="/about/differences"
                  component={Differences}
                />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/about/governance" component={Governance} />
                <Route exact path="/getInvolved/launch" component={Launch} />
                <Route exact path="/getInvolved/partner" component={Partner} />
                <Route exact path="/getInvolved/account" component={Account} />
                <Route exact path="/progress/updates" component={Updates} />
                <Route exact path="/progress/launches" component={Launches} />
                <Route exact path="/progress/technical" component={Technical} />
                <Route exact path="/our/team" component={Team} />
                <Route exact path="/our/foundation" component={Foundation} />
                <Route exact path="/our/partners" component={Partners} />
                <Route exact path="/our/press" component={Press} />
                <Route exact path="/our/contacts" component={Contacts} />
                <Route exact path="/quick/report" component={Report} />
                <Route exact path="/legal/terms" component={Terms} />
                <Route exact path="/legal/privacy" component={Privacy} />
                <Route
                  exact
                  path="/legal/accessibility"
                  component={Accessibility}
                />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          )}
        />
      </BrowserRouter>
    </Context.Provider>
  );
};

export { Router };
