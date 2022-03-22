import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
 import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { ProfilePage } from "./containers/BlogPage/ProfilePage";
import { LoginPage } from "./containers/LoginPage/LoginPage";
import { Home } from "./containers/NoMatch/Home";
import { NoMatch } from "./containers/NoMatch/NoMatch";
import { Dinosauria } from "./containers/NoMatch/DinosauriaPage";
import { Calendar } from "./containers/NoMatch/components/Calendar/Calendar";

export function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin");

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>

            <Route
              exact
              path="/"
              render={() => {
                if (isLoggedIn) return <Redirect to="/profile"   />; 
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

            <PrivateRoute isLoggedIn={isLoggedIn} path="/profile" exact> 
              <ProfilePage isAdmin={isAdmin} />
            </PrivateRoute> 

            <PrivateRoute isLoggedIn={isLoggedIn} path="/calendar" exact> 
              <Calendar isAdmin={isAdmin} />
            </PrivateRoute> 

            <Route exact path="/404">
              <NoMatch />
            </Route>

            <Route exact path="/home">
              <Home/>
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

        <Footer
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setIsAdmin={setIsAdmin}
        />
      </div>
    </Router>
  );
}
