import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterCustom from "./components/footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import "./App.css";
import Post from "./components/post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/blog" exact={true} component={Blog} />
          <Route path="/admin" exact={true} component={Admin} />
          <Route path="/blog/post1" exact={true} component={Post} />
          <Redirect to="/" />
        </Switch>
        <FooterCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
