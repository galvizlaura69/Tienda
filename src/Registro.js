import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory } from 'react-router-dom';

export default function Registro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registro, setRegistro] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const changeName = ({ target: { value } }) => {
    setName(value);
  };

  const changeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const changePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const guardar = async () => {
    const newUser = {
      username: email,
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);

    const url = 'https://app-ecommerce69.herokuapp.com/user';
    try {
      const response = await axios.post(url, newUser);
      console.log(response);
      if (response.status === 201) {
        setRegistro(true);
        setTimeout(() => setRedirect(true), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    const history = useHistory();
    history.push('/login');
  }

  return (
    <div className="container">
      <div className="registrar card p-3 d-block m-auto mt-5">
        <h1 className="text-center">Registrar</h1>
        <input
          value={name}
          onChange={changeName}
          className="form-control mb-3"
          type="text"
          placeHolder="name"
        />
        <input
          value={email}
          onChange={changeEmail}
          className="form-control mb-3"
          type="text"
          placeHolder="email"
        />
        <input
          value={password}
          onChange={changePassword}
          className="form-control"
          type="text"
          placeHolder="password"
        />
        <a
          onClick={guardar}
          className="btn btn-danger d-block m-auto mt-3 text-white"
        >
          Guardar
        </a>
        {registro ? (
          <div className="alert-success p-3 mt-3">
            usuario registrado con exito, serás re dirigido al login
          </div>
        ) : null}
      </div>
    </div>
  );
}
