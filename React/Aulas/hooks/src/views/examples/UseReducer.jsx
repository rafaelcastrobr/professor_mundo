import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import {initialState, reducer} from '../../store'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01" />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Úsuario</span>
                }

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                </div>
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberMulti7' })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' })}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberInt' })}>Integer</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: +11})}>+11</button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer


/*
num * 7
num / 25
arredondar para inteiro {parseInt}


*/