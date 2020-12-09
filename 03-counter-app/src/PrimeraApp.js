import React from 'react';
import PropTypes from 'prop-types'

// Funcional Components

const PrimeraApp = ( { saludo, subTitulo } ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subTitulo }</p>
        </>
    );

}

//De esta forma definimos que el valor de 'saludo' debe ser ser un String y ademas de que es obligatorio pasarle un valor para poder usar este componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    // edad: PropTypes.number.isRequired
}

//Definimos valores por defecto de nuestras props
PrimeraApp.defaultProps = {
    subTitulo: 'Soy un parrafo por defecto'
}

export default PrimeraApp;