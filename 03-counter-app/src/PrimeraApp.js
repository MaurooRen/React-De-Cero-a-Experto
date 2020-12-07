import React from 'react';
// import React, { Fragment } from 'react';

// Funcional Components

const PrimeraApp = () => {
    // Para funcionar SIEMPRE debe estar dentro de un div, de NO QUERER EL DIV, debemos encapsular el codigo en un <Fragment>
    // return (
    //     <Fragment>
    //         <h1><span>Hola</span> mundo</h1>
    //         <p>Parrafo</p>
    //     </Fragment>
    // );

    
    //Esta es la forma corta de hacer el <Fragment></Fragment> y no requiere importaciones
    return (
        <>
            <h1><span>Hola</span> mundo</h1>
            <p>Parrafo</p>
        </>
    );

}

export default PrimeraApp;