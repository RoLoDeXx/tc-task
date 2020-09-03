import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BlogList from "./Blog/BlogList";
import MenuBar from "./Common/AppBar";
import Post from "./Post/Post";
const App = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <div className="container">
        <Route path="/" exact component={BlogList}></Route>
        <Route path="/post/:id" component={Post}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
