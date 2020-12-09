import React from 'react';
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#root');

//Aqui hacemos la importacion del componente PrimeraApp
ReactDOM.render( <PrimeraApp saludo='Nunca inpaspi' /> , divRoot);