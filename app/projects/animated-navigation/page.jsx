"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleToggle = (ev) => {
        setIsOpen(!isOpen)
    }

    const addTransDelay = () => {
        document.querySelectorAll('.navItem').forEach((el, idx) => el.style.transitionDelay = `${(idx + 1) * 250}ms`)
    }

    useEffect(() => {
        addTransDelay()
    }, [])


    return (
        <div className={style.container}>
            <nav className={!isOpen ? style.closed : style.open} id={style.navBox}>
                <ul id={style.navList}>
                    <li className={style.navItem} id={style.navItem1}>Home</li>
                    <li className={style.navItem} id={style.navItem2}>Contact</li>
                    <li className={style.navItem} id={style.navItem3}>Me</li>
                    <li className={style.navItem} id={style.navItem4}>Projects</li>
                </ul>
                <div className={style.btn} id={style.navToggle} onClick={handleToggle}>
                    <span className={style.iconLine} id={style.left} />
                    <span className={style.iconLine} id={style.right} />
                </div>
            </nav>
        </div>
    )
}

export default App