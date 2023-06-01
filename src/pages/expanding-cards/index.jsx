import React from 'react'
import './styles/app'
import './styles/panel'

const App = () => {
    const panels = [
        { key: 1, title: 'iPad', src: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80' },
        { key: 2, title: 'iPad', src: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80' },
        { key: 3, title: 'iPad', src: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80' },
        { key: 4, title: 'iPad', src: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80' },
        { key: 5, title: 'iPad', src: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80' },
    ]

    const handlePanelClick = (e) => {
        const panelElements = document.querySelectorAll('.panel')
        panelElements.forEach(panel => { panel.classList.remove('active') })
        e.target.classList.add('active')
    }

    return (
        <div className='container'>
            <h1 id='title'> Expanding Cards</h1>
            <div className="panelContainer">
                {panels.map(panel => <div key={panel.key}
                    className='panel'
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80)' }}
                    onClick={handlePanelClick}
                ><h3>{panel.title}</h3></div>)}
            </div>
        </div>
    )
}

export default App