import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ProductList from '../data/productsList.js';

export default class Products extends Component {
  render(){

    let NavProds = ProductList.map((product) =>{

      return(
        <div className="prod_box" key={product.id}>
        <NavLink activeClassName="selected" className="nav-link-prod"  to={`/Products/${product.name}`}><span>{product.name}</span><img className="prod_img" src={product.imageUrl} alt="hands holding sand"/></NavLink>
        <p className="desc">{product.details}</p>
        </div>
    )});

    return(
      <div className="prod_list_container">
        <h1 className="products_title">Products</h1>
          <div className="prods">
              {NavProds}
          </div>
      </div>
    )
  }
}
