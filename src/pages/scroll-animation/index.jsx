import React, { useState, useEffect } from 'react'
import './index.scss'

import ContentBlock from './components/ContentBlock/contentBlock'

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

    const handleScroll = (e) => {
        const all = document.querySelectorAll('.content')
        console.log(all)
        all.map((block, idx) => { if (block.getBoundingClientRect().top < (0.8 * window.innerHeight)) console.log(idx) })
    }

    return (
        <div className='container' onScroll={handleScroll}>
            <h1 className="title">Scroll Animation</h1>
            {blocks.map((block, idx) =>
                <ContentBlock key={idx} Trigger={block.trigger} Active={block.active}>{block.content}</ContentBlock>
            )}
        </div>
    )
}

export default App