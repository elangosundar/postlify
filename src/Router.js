import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// components
import Navbar from "./components/Navbar";
// import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";

// styles
import Container from "./styles/Container";

// pages
import Home from "./pages/Home";

const AppRouter = () => (
  <Router>
    <Sidebar />
    <Container>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  </Router>
);

export default AppRouter;
