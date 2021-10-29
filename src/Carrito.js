import React from 'react';
import './style.css';

const listaProductos = [
  {
    name: 'gafas',
    price: 10000,
    img: 'https://aws-business.vogue.es/prod/designs/v1/assets/1000x500/5910.jpg',
  },
  {
    name: 'gafas de sol',
    price: 10000,
    img: 'https://m.media-amazon.com/images/I/71AHx9GnHZL._AC_SX522_.jpg',
  },
];

const sumarArray = (previousValue, currentValue) =>
  previousValue + currentValue;

const total = listaProductos
  .map((producto) => producto.price)
  .reduce(sumarArray);

export default function Carrito() {
  return (
    <div>
      <h2 className="bg-danger text-white">Carrito</h2>

      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card p-3">
              <h3>Detalle de la compra</h3>
              {listaProductos.map((producto) => (
                <div className="cartProduct">
                  <h3 className="text-info">{producto.name}</h3>
                  <h5>{producto.price}</h5>
                  <img className="img-fuild" src={producto.url} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4">
            <div className="card p-3">
              <h4 className="text-info">TOTAL A PAGAR:</h4>
              <h5>{total}</h5>
              <a className="btn btn-info">pagar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
