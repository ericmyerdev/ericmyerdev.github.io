"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [blocks, setBlocks] = useState([
        { active: false, trigger: { x: 0, y: 75 }, content: <div>First Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>New Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>Old Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>My Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>Color Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>Red Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>Seventh Content</div> },
        { active: false, trigger: { x: 0, y: 75 }, content: <div>Last Content</div> },
    ])

    const handleScroll = () => {
        const all = Array.from(document.querySelectorAll(`.${style['content']}`))
        all.map((block, idx) => {
            if (block.getBoundingClientRect().top < (0.8 * window.innerHeight)) {
                block.classList.add(style['visible'])
            }
            if (block.getBoundingClientRect().top > (0.8 * window.innerHeight)) {
                block.classList.remove(style['visible'])
            }
        })
    }

    useEffect(handleScroll, [])

    return (
        <div className={style['container']} onScroll={handleScroll}>
            <h1 className={style["title"]}>Scroll Animation</h1>
            {blocks.map((block, idx) =>
                <div key={idx} className={`${style['content']}`}
                    onLoad={({ target }) => {
                        if (target.getBoundingClientRect().top < (0.8 * window.innerHeight)) target.classList.add(style['visible'])
                    }}
                >
                    {block.content}
                </div>
            )}
        </div>
    )
}

export default App