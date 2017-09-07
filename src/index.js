import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout.js';
import Contact from './components/Contact.js';
import Products from './components/Products.js';
import Reviews from './components/Reviews.js';
import Services from './components/Services.js';
import ShowProduct from './components/ShowProduct.js';
import ShowService from './components/ShowService.js';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/products/:id" component={ShowProduct} />
        <Route path="/services/:id" component={ShowService} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
