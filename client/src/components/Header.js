import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHello } from '../actions/index';

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        )
      default:
        return (
        <Fragment>
          <li><button onClick={() => this.props.fetchHello()}className="btn-flat white-text green">hello</button></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><a href="/api/logout">Logout</a></li>
        </Fragment>
        )
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrappper">
          <Link 
            to={this.props.auth ? '/dashboard' : '/'} 
            className="left brand-logo"
          >Wrsvp</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth };
}
export default connect(mapStateToProps, { fetchHello })(Header);