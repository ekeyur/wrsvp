import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import { fetchUser } from '../actions';
import Dashboard from './Dashboard';
import Upload from './Upload';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/upload" component={Upload} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default connect(null, { fetchUser })(App);