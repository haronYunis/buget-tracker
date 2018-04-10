'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 400,
      expenses: []
    }
    this.getApp = this.getApp.bind(this);
  }

  // getApp() Returns the state of our application. 
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }
componentDidUpdate() {
  console.log('___STATE___', this.state);
}

  render() {
    return(
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/about' component={AboutContainer} />
            {/* I created a route which has a PROP of container, which then calls a function which return the dashboard container */}
            <Route exact path='/dashboard' component={() => <DashboardContainer app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
     )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
