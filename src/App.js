import React from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Producto from './Producto';
import Home from './Home';
import Tienda from './Tienda';
import Login from './Login';
import Registro from './Registro';
import Carrito from './Carrito';

export default function App() {
  return (
    <Router>
      <Link className="link menu  p-2" to="/">
        Inicio
      </Link>
      <Link className="link menu  p-2" to="/tienda">
        Tienda
      </Link>
      <Link className="link menu  p-2" to="/login">
        Mi cuenta
      </Link>
      <Link className="link menu  p-2" to="/registro">
        Registro
      </Link>
      <Link className="link menu  p-2" to="/carrito">
        Carrito
      </Link>

      <Switch>
        <Route path="/tienda">
          <Tienda />
        </Route>
        <Route path="/carrito">
          <Carrito />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/producto/:id/">
          <Producto />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
