import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Search from "./Pages/Search/Search";
import SearchResult from "./Pages/SearchResult/SearchResult";
import UserNotFound from "./Pages/UserNotFound/UserNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Search} />
      <Route path="/searchresult/:searchText" component={SearchResult} />
      <Route path="/usernotfound" component={UserNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
