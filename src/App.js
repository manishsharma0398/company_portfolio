import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/widgets/Navbar";
import Body from "./components/widgets/Body";
import Footer from "./components/widgets/Footer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Intro from "./pages/Intro";
import Origin from "./pages/Origin";
import People from "./pages/People";
import Intentions from "./pages/Intentions";
import Management from "./pages/Management";
import Ethics from "./pages/Ethics";

// import subsidaries page from ./pages/subsidiaries

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Body} />>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/originAndFounder" component={Origin} />
        <Route exact path="/people" component={People} />
        <Route exact path="/newIntentions" component={Intentions} />
        <Route exact path="/seniorManagement" component={Management} />
        <Route exact path="/ethics" component={Ethics} />
        <Route exact path="/subsidiary/pathname" component={Ethics} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
