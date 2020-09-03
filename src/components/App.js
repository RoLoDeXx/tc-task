import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BlogList from "./Blog/BlogList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" exact>
          <BlogList />
        </Route>
        <Route path="/post">
          <div>henlo2</div>
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
