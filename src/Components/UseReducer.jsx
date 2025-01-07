
import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap'

const initialState = {
    name: "Sanjith",
    count: 0
}

function reducer(state, action) {
    console.log(state)
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'RESET': {
            return { ...initialState }
        }

        case 'UPDATE_NAME': {
            return {
                ...state,
                name: action.payload
            }
        }
    }
}

function UseReducer() {
    let [state, dispatch] = useReducer(reducer, initialState)
    return <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">useReducer</h1>
                </div>
                <div className=''>
                    <Button onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
                    &nbsp; &nbsp;
                    {state.count}
                    &nbsp; &nbsp;
                    <Button onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
                </div>



                <div className='row'>
                    <input type='text' value={state.name} onChange={(e) => dispatch({ type: 'UPDATE_NAME', payload: e.target.value })} />

                    <div>The Name is {state.name}</div>
                </div>

                <div>
                    <Button onClick={() => dispatch({ type: 'RESET' })}>RESET</Button>
                </div>
            </div>
        </div>
    </div>
}

export default UseReducer
