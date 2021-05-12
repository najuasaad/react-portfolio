import React from "react";
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

// style stuff
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileCode, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import './index.css';

// pages 
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"

// components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";

library.add(fab, faGithub, faFileCode, faWindowRestore)

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <div className="container-fluid"><div className="row"><Footer /></div></div>
      </div>
    </Router>
  );
}

export default App;
