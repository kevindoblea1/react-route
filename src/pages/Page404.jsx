import React from 'react';
import "../assets/css/404.css"
import image from "../assets/img/doguito404.svg"

const NotFound = () => { 
  return (
    <main className="container flex flex--center flex--column">
      <img className="dog-image" src={image} alt="Doguito" />
      <p className='notfound-text'>Esta página no existe</p>
    </main>
  );
};

export default NotFound;
