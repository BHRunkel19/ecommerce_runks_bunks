import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import ProductList from '../data/productsList.js';

export default class Products extends Component {
  render() {

    let NavProds = ProductList.map((product) => {

      return (
        <div className="prod_box" key={product.id}>
          <NavLink activeClassName="selected" className="nav-link-prod" to={`/Products/${product.name}`}>
          <img className="prod_img" src={product.imageUrl} alt="hands holding sand"/></NavLink>

          <div className="prod_desc">

            <button className="desc_display">{product.name}
            </button>

            <div className="prod-details">
            <NavLink activeClassName="selected" className="quick_desc" to={`/Products/${product.name}`}>
              <p className="serv_desc">
                {product.details}
                <br/>
                <br/>
                {product.price}</p>
                </NavLink>
            </div>

          </div>

        </div>
      )
    });

    return (
      <div className="prod_list_container">
        <h1 className="products_title">Products</h1>
        <div className="prods">
          {NavProds}
        </div>
      </div>
    )
  }
}
