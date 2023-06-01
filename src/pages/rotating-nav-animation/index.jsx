import React, { useState } from 'react'
import './index.scss'

const App = () => {
    const [MenuOpen, setMenuOpen] = useState(false)

    const handleToggle = (e) => {
        setMenuOpen(!MenuOpen)
    }

    return (
        <div className="container">
            <div className={`contentContainer ${MenuOpen ? 'active' : ''}`}>
                <div className="content">
                    <h2 className="title">This Title Wins!!!</h2>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor molestias quae, corporis fugiat nesciunt adipisci vitae, provident nemo repellat quaerat, culpa ipsa aut officia repudiandae quidem magni velit distinctio.
                            Soluta, ex porro velit recusandae quis temporibus blanditiis unde id fugit nesciunt consequatur vitae, vel sint. Laudantium, architecto. Unde perspiciatis cum, voluptas vero culpa debitis ipsum commodi nihil eum quibusdam?</p>
                        <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quos voluptatem natus cum saepe est illum. Vero non facere, tempora ratione pariatur cupiditate fugiat repudiandae voluptatibus, aliquam consectetur, iste hic.
                            Assumenda aspernatur nam, saepe in sunt error, dicta recusandae dolore ratione soluta nisi fugiat quasi nihil! Ab molestiae et perferendis aut in. Est perferendis nesciunt ea recusandae dolores ex? Asperiores.
                            Perspiciatis deserunt quod at expedita quos error nulla. Iste aperiam porro, eos ratione nulla numquam omnis distinctio consequuntur molestias nihil, error architecto doloribus quis dolorum minima quod iusto repellat. Cum.
                            Soluta corrupti dolorem nihil delectus rerum expedita, praesentium fugit iure tempore tempora voluptatum blanditiis commodi inventore eos sint ipsum. Optio facilis voluptatibus minima impedit sint sunt. Commodi pariatur a soluta!</p>
                    </div>
                </div></div>
            <div className={`navToggle ${MenuOpen ? 'active' : ''}`} onClick={handleToggle} >
                <div className="open"><i className="fa-solid fa-bars" /></div>
                <div className="close"><i class="fa-solid fa-circle-xmark" /></div>
            </div>
            <nav className={`navContainer ${MenuOpen ? 'active' : ''}`}>
                <ul className="list">
                    <li className="navButton" id='home'><a href="#home" className="navLink"><i class="fa-solid fa-house" />Home</a></li>
                    <li className="navButton" id='about'><a href="#about" className="navLink"><i class="fa-solid fa-user" />About</a></li>
                    <li className="navButton" id='contact'><a href="#contact" className="navLink"><i class="fa-solid fa-envelope" />Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default App