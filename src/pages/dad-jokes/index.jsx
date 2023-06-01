import React, { useState, useEffect } from 'react'
import './index.scss'

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

    return (
        <div className='container'>
            <div id="jokeContainer">{Joke}</div>
            <div id="jokeBtn" onClick={generateJoke}>New Joke</div>
        </div>
    )
}

export default App