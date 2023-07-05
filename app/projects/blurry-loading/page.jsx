"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (progress < 100) setTimeout(() => setProgress(progress + 1), 100)
    }, [progress])


    return (
        <div className={style.container} >
            <div className={style.bgLayer} style={{ filter: `blur(${((100 - progress) / 100) * 24}px)` }} />
            <div className={style['loadProgress']} style={{ opacity: `${1 - (progress / 100)}` }}>{progress}%</div>
        </div>
    )
}

export default App