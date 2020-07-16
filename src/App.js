import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterCustom from "./components/footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import Post from "./components/post";
import Signup from "./pages/Signup";
import AdminPosts from "./pages/AdminPosts";
import UserDashboard from "./pages/UserDashboard";
import UserPosts from "./pages/UserPosts";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact={true} component={Blog} />
          <Route path="/user" exact={true} component={UserDashboard} />
          <Route path="/user/post/new" exact={true} component={NewPost} />
          <Route path="/user/post/all" exact={true} component={UserPosts} />
          <Route path="/admin" exact={true} component={Admin} />
          <Route path="/admin/posts" exact={true} component={AdminPosts} />
          <Route path="/blog/post1" exact={true} component={Post} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/signup" exact={true} component={Signup} />
          <Redirect to="/" />
        </Switch>
        <FooterCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
