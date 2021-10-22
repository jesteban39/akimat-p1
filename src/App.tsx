import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import NavBar from "./components/NavBar";
import UserDetail from "./components/UserDetail";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={UsersList} />
          <Route exact path="/user/:userName" component={UserDetail} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
