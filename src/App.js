import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Footer} from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { BlogPage } from "./containers/BlogPage/BlogPage";
import { BlogCardPage } from "./containers/BlogPage/components/BlogCardPage";
import { LoginPage } from "./containers/LoginPage/LoginPage";
import { Home } from "./containers/NoMatch/Home";
import { Profile } from "./containers/NoMatch/Profile";
import { NoMatch } from "./containers/NoMatch/NoMatch";
import { Dinosauria } from "./containers/NoMatch/DinosauriaPage";


export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin");

  return (
    <Router>
      <div className="App">
        {/* <Footer year={new Date().getFullYear()} /> */}
        <Footer year={new Date().getFullYear()} />
        <main>
          <Switch>

            <Route
              exact
              path="/"
              render={() => {
                if (isLoggedIn) return <Redirect to="/blog" />;
                return <Redirect to="/login" />;
              }}
            />

            <PublicRoute isLoggedIn={isLoggedIn} path="/login" exact>
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
                setIsAdmin={setIsAdmin}
              />
            </PublicRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path="/blog/:postId" exact>
              <BlogCardPage isAdmin={isAdmin} />
            </PrivateRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path="/blog" exact>
              <BlogPage isAdmin={isAdmin} />
            </PrivateRoute>

            <Route exact path="/404">
              <NoMatch />
            </Route>

            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/info">
              <Dinosauria/>
            </Route>
            

            <Route path="*"
              render={({ location }) => {
                return <Redirect to={{
                  pathname: '/404',
                  from: location
                }} />
              }}
            />

          </Switch>
        </main>

        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setIsAdmin={setIsAdmin}
        />
      </div>
    </Router>
  );
}
