import React from 'react';
import ReactDOM from 'react-dom'

const saludo = <h1><span>Hola</span> mundo</h1>;


const divRoot = document.querySelector('#root')


ReactDOM.render(saludo, divRoot)