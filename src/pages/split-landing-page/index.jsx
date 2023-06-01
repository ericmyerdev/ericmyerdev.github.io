import React, { useState, useEffect } from 'react'
import './index.scss'

const App = () => {

    const handleHover = (e) => {

    }

    return (
        <div className='container'>
            <div id="meat-view" className="split left"
                onMouseEnter={(e) => { document.querySelector('.container').classList.add('hoverLeft') }}
                onMouseLeave={(e) => { document.querySelector('.container').classList.remove('hoverLeft') }}
            >
                <h1 className='title'>Meat</h1>
                <div className='sub'>Read More</div>
            </div>
            <div id="vege-view" className="split right"
                onMouseEnter={(e) => { document.querySelector('.container').classList.add('hoverRight') }}
                onMouseLeave={(e) => { document.querySelector('.container').classList.remove('hoverRighte') }}
            >
                <h1 className='title'>Vegetables</h1>
                <div className='sub'>Read More</div>
            </div>
        </div>
    )
}

export default App