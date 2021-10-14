import { Product } from '../../models/producto.model';

export const PRODUCT: Product[] =
[
  {
    _id: '01',
    nombre:'Repisa a medida',
    tienda:'Le Tallere',
    imgUrl: '/assets/imagenes/le_tallere/producto_1/1.jpg',
    categoria:'fg',
    comentario:'Repisa personalizada para todos los gustos, su valor puede variar dependiendo del diseño',
    precio: '80000'
  },
  {
    _id: '02',
    nombre:'Tabla para cortar',
    tienda:'Le Tallere',
    imgUrl: '/assets/imagenes/le_tallere/producto_2/3.jpg',
    categoria:'fg',
    comentario:'tablas para cortar de madera pino e impregnada de linaza',
    precio: '6000'
  },
  {
    _id: '03',
    nombre:'Barra para balcon',
    tienda:'Le Tallere',
    imgUrl: '/assets/imagenes/le_tallere/producto_3/2.jpg',
    categoria:'fg',
    comentario:'Esta simple pero elegante barra para balcon esta ideada para lo esencial, pasa un rico momento con las amistades',
    precio: '50000'
  },
]
