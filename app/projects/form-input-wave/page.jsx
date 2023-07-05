"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [form, setForm] = useState({})

    const handleChange = ({ target }, idx) => {
        setForm({ ...form, [target.name]: target.value })
    }

    const createLabel = (labelName) => {
        return labelName.split('').map((char, idx) => <span className={style["labelLetter"]} style={{ transitionDelay: `${idx * 50}ms` }}>{char}</span>)
    }

    return (
        <div className={style['container']}>
            <form className={style["formContainer"]}>
                <div className={style['formControl']}>
                    <input required type="text" name="email" id={style["emailInput"]} value={form.email} onChange={handleChange} />
                    <label htmlFor='emailInput' className={style["emailLabel"]} >
                        {createLabel('Email')}
                    </label>
                </div>
                <div className={style['formControl']}>
                    <input required type='password' name="password" id={style["passInput"]} value={form.password} onChange={handleChange} />
                    <label htmlFor='passInput' className={style["passLabel"]} >
                        {createLabel('Password')}
                    </label>
                </div>
            </form>
        </div>
    )
}

export default App