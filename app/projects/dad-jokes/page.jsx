"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [Joke, setJoke] = useState('Default Joke')

    const generateJoke = async () => {
        const reqConfig = {
            headers: {
                Accept: 'application/json'
            }
        }

        const getJoke = await fetch('https://icanhazdadjoke.com', reqConfig)
        const response = await getJoke.json()

        setJoke(response.joke)
    }

    useEffect(() => {
        generateJoke()
    }, [])

    return (
        <div className={style['container']}>
            <div id={style["jokeContainer"]}>{Joke}</div>
            <div id={style["jokeBtn"]} onClick={generateJoke}>New Joke</div>
        </div>
    )
}

export default App