import React from 'react';

// Funcional Components

const PrimeraApp = () => {

    const saludo = 'Hola Mundo!'

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Parrafo</p>
        </>
    );

}

export default PrimeraApp;