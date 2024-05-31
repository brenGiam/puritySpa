'use client'

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: '/inicio/carrusel1.jpg',
    altText: 'Armonización facial',
    caption: 'Armonización facial',
  },
  {
    src: '/inicio/carrusel2.jpg',
    altText: 'Hidratación de labios',
    caption: 'Hidratación de labios',
  },
  {
    src: '/inicio/carrusel3.jpg',
    altText: 'Tratamiento antiage',
    caption: 'Tratamiento antiage',
  },
];

function Carrusel() {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;