import React, { useState, useEffect } from 'react'
import './index.scss'

const App = () => {
    const [Num, setNum] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    const handleToggle = (ev) => { 
        setIsOpen(!isOpen)
    }

    const addTransDelay = () => { 
        document.querySelectorAll('.navItem').forEach((el, idx) => el.style.transitionDelay = `${(idx+1) * 250}ms`)
    }

    useEffect(() => {
      addTransDelay()
    }, [])
    

    return (
        <div className='container'>
            <nav className={!isOpen ? 'closed' : 'open'} id='navBox'>
                <ul id="navList">
                    <li className='navItem' id="navItem1">Home</li>
                    <li className='navItem' id="navItem2">Contact</li>
                    <li className='navItem' id="navItem3">Me</li>
                    <li className='navItem' id="navItem4">Projects</li>
                </ul>
                <div className="btn" id="navToggle" onClick={handleToggle}>
                    <span className='iconLine' id='left'/>
                    <span className='iconLine' id='right'/>
                </div>
            </nav>
        </div>
    )
}

export default App