"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [Key, setKey] = useState({ key: null, keyCode: null, code: null })

    useEffect(() => {
        window.addEventListener('keydown', event => {
            setKey({
                key: event.key,
                keyCode: event.keyCode,
                code: event.code
            })
        })
    }, [])

    return (
        <div className={style['container']} >
            <div className={style["keyInfo"]}>Key
                <div id={style["keyInfo"]}>{Key.code !== 'Space' ? Key.key : 'Space'}</div>
            </div>
            <div className={style["keyInfo"]}>Key Code
                <div id={style["keyCode"]}>{Key.keyCode}</div>
            </div>
            <div className={style["keyInfo"]}>Code
                <div id={style["code"]}>{Key.code}</div>
            </div>
        </div>
    )
}

export default App