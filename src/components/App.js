import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BlogList from "./Blog/BlogList";
import MenuBar from "./Common/AppBar";
import Post from "./Post/Post";
import SideContent from "./Common/SideContent";

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <div className="main-grid container">
        <div className="">
          <Route path="/" exact component={BlogList}></Route>
          <Route path="/tags/:tagid" exact component={BlogList}></Route>
          <Route path="/categories/:catid" exact component={BlogList}></Route>

          <Route path="/post/:id" component={Post}></Route>
        </div>
        <SideContent />
      </div>
    </BrowserRouter>
  );
};

export default App;
