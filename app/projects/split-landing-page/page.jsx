"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {

    const handleHover = (e) => {

    }

    return (
        <div className={style['container']}>
            <div id={style["meat-view"]} className={`${style['split']} ${style['left']}`}
                onMouseEnter={(e) => {
                    document.querySelector(`.${style['container']}`).classList.add(style['hoverLeft'])
                }}
                onMouseLeave={(e) => {
                    document.querySelector(`.${style['container']}`).classList.remove(style['hoverLeft'])
                }}
            >
                <h1 className={style['title']}>Meat</h1>
                <div className={style['sub']}>Read More</div>
            </div>
            <div id={style["vege-view"]} className={`${style['split']} ${style['right']}`}
                onMouseEnter={(e) => {
                    document.querySelector(`.${style['container']}`).classList.add(style['hoverRight'])
                }}
                onMouseLeave={(e) => {
                    document.querySelector(`.${style['container']}`).classList.remove(style['hoverRight'])
                }}
            >
                <h1 className={style['title']}>Vegetables</h1>
                <div className={style['sub']}>Read More</div>
            </div>
        </div>
    )
}

export default App