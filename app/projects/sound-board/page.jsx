"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const clipsArr = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

    const playAudio = (clipName) => {
        document.querySelectorAll('audio').forEach((clipEl) => {
            clipEl.pause()
            clipEl.currentTime = 0
        })
        if (clipName) document.querySelector(`#${clipName}`).play()
    }

    return (
        <div className={style['container']}>
            <div className={style["buttons"]}>
                {clipsArr.map((name, idx) =>
                    <button key={idx} onClick={() => playAudio(name)}>
                        <audio key={idx} id={name} src={`/assets/sound-board/${name}.mp3`} />
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </button>
                )}
            </div>
            <button className={style["stopBtn"]} onClick={() => playAudio()}>Stop</button>
        </div>
    )
}

export default App