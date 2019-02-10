import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.css'

import LandingPage from './Pages/LandingPage'
import AboutUs from './Pages/AboutUs'
import Showcase from './Pages/Showcase'
import Brands from './Pages/Brands'
import Hackaton from './Pages/Hackaton'
import JoinUs from './Pages/JoinUs'
import LogIn from './Pages/LogIn'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/AboutUs' exact component={AboutUs}/>
          <Route path='/Showcase' exact component={Showcase}/>
          <Route path='/Brands' exact component={Brands}/>
          <Route path='/Hackaton' exact component={Hackaton}/>
          <Route path='/LogIn' exact component={LogIn}/>
          <Route path='/JoinUs' exact component={JoinUs}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
