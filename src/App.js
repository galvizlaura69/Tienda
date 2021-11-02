import React, { useState, useEffect } from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Producto from './Producto';
import Home from './Home';
import Tienda from './Tienda';
import Login from './Login';
import Registro from './Registro';
import Carrito from './Carrito';
import Actualizar from './Update';

export default function App() {
  const [listaCarrito, setListaCarrito] = useState([]);
  console.log(listaCarrito, 'from router');
  return (
    <Router listaCarrito={listaCarrito}>
      <Link className="link menu  p-2" to="/">
        Inicio
      </Link>
      <Link className="link menu  p-2" to="/tienda">
        Tienda
      </Link>
      <Link className="link menu  p-2" to="/login">
        Login
      </Link>
      <Link className="link menu  p-2" to="/actualizar">
        Actualizar
      </Link>

      <Link className="link menu  p-2" to="/registro">
        Registro
      </Link>
      <Link className="link menu  p-2" to="/carrito">
        Carrito
      </Link>

      <Switch>
        <Route path="/tienda">
          <Tienda
            listaCarrito={listaCarrito}
            setListaCarrito={setListaCarrito}
          />
        </Route>
        <Route path="/carrito">
          <Carrito
            listaCarrito={listaCarrito}
            setListaCarrito={setListaCarrito}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/actualizar">
          <Actualizar />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/producto/:id/">
          <Producto
            listaCarrito={listaCarrito}
            setListaCarrito={setListaCarrito}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
