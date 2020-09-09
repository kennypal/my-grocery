import React, { useState } from "react";
import Archive from "./Archive";
import Buttons from "./Buttons"
import Create from "./Create";
import { Route, Link } from "react-router-dom";

const Home = () => {
  // const [fetchList, setFetchList] = useState(false);
  return (
    <div>
      <header>
      <Link to="/">
          <h1>Home</h1>
      </Link>
      </header>
      <Route exact path="/">
        <Buttons />
      </Route>
      <Route path="/create">
          <Create />
      </Route>
      <Route path="/archive">
        <Archive />
      </Route>
    </div>
  );
};

export default Home;
