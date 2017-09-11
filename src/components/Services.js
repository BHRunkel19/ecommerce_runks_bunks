import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import ServiceList from '../data/serviceList.js';

export default class Services extends Component {
  render() {

    let NavServs = ServiceList.map((service) => {

      return (
        <div className="prod_box" key={service.id}>
          <NavLink activeClassName="selected" className="nav-link-prod" to={`/Services/${service.name}`}>
          <img className="prod_img" src={service.imageUrl} alt="golf stuff"/></NavLink>

          <div className="prod_desc">

            <button className="desc_display">{service.name}
            </button>

            <div className="prod-details">
            <NavLink activeClassName="selected" className="quick_desc" to={`/Services/${service.name}`}>
              <p className="serv_desc">
                {service.details}
                <br/>
                <br/>
                {service.price}</p>
                </NavLink>
            </div>

          </div>

        </div>
      )
    });

    return (
      <div className="prod_list_container">
        <h1 className="products_title">Services</h1>
        <div className="prods">
          {NavServs}
        </div>
      </div>
    )
  }
}
