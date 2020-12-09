import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    //handleAdd
    const handleAdd = (e) => {
        // setCounter(counter + 1)
        //Aqui lo que se esta recibiendo en la (c) es counter
        setCounter( (c) => c + 1 )
    }

    const handleReset = (e) => {
        setCounter(0)
    }

    const handleSubtract = (e) => {
        counter > 0 && setCounter( counter - 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp