"use client"
import React, { useState } from 'react'
import style from './index.module.scss'

const App = () => {
    const [MenuOpen, setMenuOpen] = useState(false)

    const handleToggle = (e) => {
        setMenuOpen(!MenuOpen)
    }

    return (
        <div className={style["container"]}>
            <div className={`${style['contentContainer']} ${MenuOpen ? style['active'] : ''}`}>
                <div className={style["content"]}>
                    <h2 className={style["title"]}>This Title Wins!!!</h2>
                    <div className={style["body"]}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor molestias quae, corporis fugiat nesciunt adipisci vitae, provident nemo repellat quaerat, culpa ipsa aut officia repudiandae quidem magni velit distinctio.
                            Soluta, ex porro velit recusandae quis temporibus blanditiis unde id fugit nesciunt consequatur vitae, vel sint. Laudantium, architecto. Unde perspiciatis cum, voluptas vero culpa debitis ipsum commodi nihil eum quibusdam?</p>
                        <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quos voluptatem natus cum saepe est illum. Vero non facere, tempora ratione pariatur cupiditate fugiat repudiandae voluptatibus, aliquam consectetur, iste hic.
                            Assumenda aspernatur nam, saepe in sunt error, dicta recusandae dolore ratione soluta nisi fugiat quasi nihil! Ab molestiae et perferendis aut in. Est perferendis nesciunt ea recusandae dolores ex? Asperiores.
                            Perspiciatis deserunt quod at expedita quos error nulla. Iste aperiam porro, eos ratione nulla numquam omnis distinctio consequuntur molestias nihil, error architecto doloribus quis dolorum minima quod iusto repellat. Cum.
                            Soluta corrupti dolorem nihil delectus rerum expedita, praesentium fugit iure tempore tempora voluptatum blanditiis commodi inventore eos sint ipsum. Optio facilis voluptatibus minima impedit sint sunt. Commodi pariatur a soluta!</p>
                    </div>
                </div></div>
            <div className={`${style['navToggle']} ${MenuOpen ? style['active'] : ''}`} onClick={handleToggle} >
                <div className={style["open"]}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></div>
                <div className={style["close"]}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></div>
            </div>
            <nav className={`${style['navContainer']} ${MenuOpen ? style['active'] : ''}`}>
                <ul className={style["list"]}>
                    <li className={style["navButton"]} id={style['home']}><a href="#home" className={style["navLink"]}><i class="fa-solid fa-house" />Home</a></li>
                    <li className={style["navButton"]} id={style['about']}><a href="#about" className={style["navLink"]}><i class="fa-solid fa-user" />About</a></li>
                    <li className={style["navButton"]} id={style['contact']}><a href="#contact" className={style["navLink"]}><i class="fa-solid fa-envelope" />Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default App