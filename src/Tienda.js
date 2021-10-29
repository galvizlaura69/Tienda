import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Tienda() {
  const [listaProductos, setListaProductos] = useState([]);

  const url = 'https://apimintic.herokuapp.com/api/product/';

  useEffect(() => {
    axios
      .get(url) // post(url, {})
      .then((res) => {
        setListaProductos(res.data);
      })
      .catch((e) => console.log(e, 'error'));
  }, []);

  console.log(listaProductos);

  return (
    <div>
      <h1 className="bg-danger subtitulo">CATALOGO DE PRODUCTOS</h1>
      <div className="row p-5">
        {listaProductos.map((producto) => (
          <div className="col-sm-4 pb-3">
            <div className="card producto maximotienda p-3">
              <img className="img-fluid imagenes" src={producto.img} />
              <h5 className="relleno">
                <b>{producto.title}</b>
              </h5>
              <h4 className="relleno">${producto.price}</h4>
              <p className="relleno">{producto.info}</p>
              <button className=" btn btn-danger mb-4">Agregar</button>
              <Link
                className=" btn btn-info mb-4"
                to={'producto/' + producto.id}
              >
                Ver
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
