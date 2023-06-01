import React, { useState } from 'react'
import './index.scss'

const App = () => {
    const [active, setActive] = useState(false)

    const handleClick = (e) => {
        setActive(!active)
        if (!active) document.querySelector('.searchInput').focus()
    }

    return (
        <div className='container'>
            <div className={`search${active ? ' active' : ''}`}>
                <input type={'text'} className="searchInput" placeholder='Search...'></input>
                <button className="searchButton" onClick={handleClick}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    )
}

export default App