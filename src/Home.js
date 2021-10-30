import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function Home() {
  const [listaProductos, setListaProductos] = useState([]);
  const url = 'https://apimintic.herokuapp.com/api/product/';

  useEffect(() => {
    axios
      .get(url) //
      .then((res) => {
        setListaProductos(res.data);
      })
      .catch((e) => console.log(e, 'error'));
  }, []);

  console.log(listaProductos);

  let listaCorta = [];
  if (listaProductos.length > 0) {
    listaCorta = listaProductos.slice(0, 3);
    console.log(listaCorta);
  }

  return (
    <div>
      <div>
        <div className="row portadaHome  p-5 mt-2">
          <div className="col-sm-12">
            <h1 className="titulo">SUNGLASSES</h1>
          </div>
        </div>

        <div className="col-sm-12 ">
          <p className="parrafo pb-5">
            Las gafas de sol tienen una inconmensurable función protectora
            contra los rayos UV. Protegen nuestros ojos de enfermedades oculares
            graves y son la mejor protección contra los dañinos rayos solares.
            ¡Para adultos y niños, ya sea en verano o en invierno!
          </p>
        </div>
      </div>
      <div className="row">
        {listaCorta.map((producto) => (
          <div className="col-sm-4 pb-3">
            <div className="card producto maximotienda p-3 m-4">
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
        <div className=" imgHome ">
          <div className="col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}
