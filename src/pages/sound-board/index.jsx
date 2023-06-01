import React, { useState, useEffect } from 'react'
import './index.scss'

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
        <div className='container'>
            <div className="buttons">
                {clipsArr.map((name, idx) =>
                    <button key={idx} onClick={() => playAudio(name)}>
                        <audio key={idx} id={name} src={`./assets/sounds/${name}.mp3`} />
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </button>
                )}
            </div>
            <button className="stopBtn" onClick={() => playAudio()}>Stop</button>
        </div>
    )
}

export default App