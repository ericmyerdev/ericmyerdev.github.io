import React, { useState, useEffect } from 'react'
import './index.scss'

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
        <div className='container'>
            <div className="keyInfo">Key
                <div id="keyInfo">{Key.code !== 'Space' ? Key.key : 'Space'}</div>
            </div>
            <div className="keyInfo">Key Code
                <div id="keyCode">{Key.keyCode}</div>
            </div>
            <div className="keyInfo">Code
                <div id="code">{Key.code}</div>
            </div>
        </div>
    )
}

export default App