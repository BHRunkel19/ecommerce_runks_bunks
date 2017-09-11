import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="golf_ball_container">
        <div className="golf_ball">
          <div className="dropdown-content">

            <NavLink activeClassName="selected" className="nav-link" exact to="/">
              <div className="link_box">Home</div>
            </NavLink>

            <NavLink activeClassName="selected" className="nav-link" exact to="/products">
              <div className="link_box">Products</div>
            </NavLink>

            <NavLink activeClassName="selected" className="nav-link" exact to="/services">
              <div className="link_box">Services</div>
            </NavLink>

            <NavLink activeClassName="selected" className="nav-link" exact to="/reviews">
              <div className="link_box">Customer Reviews</div>
            </NavLink>

            <NavLink activeClassName="selected" className="nav-link" exact to="/contact">
              <div className="link_box">Contact</div>
            </NavLink>
          </div>
          </div>

        {this.props.children}

        </div>
    )
  }
}
