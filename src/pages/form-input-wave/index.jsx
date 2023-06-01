import React, { useState, useEffect } from 'react'
import './index.scss'

const App = () => {
    const [form, setForm] = useState({})

    const handleChange = ({ target }, idx) => {
        setForm({ ...form, [target.name]: target.value })
    }

    const createLabel = (labelName) => {
        return labelName.split('').map((char, idx) => <span className="labelLetter" style={{ transitionDelay: `${idx * 50}ms` }}>{char}</span>)
    }

    return (
        <div className='container'>
            <form className="formContainer">
                <div className='formControl'>
                    <input required type="text" name="email" id="emailInput" value={form.email} onChange={handleChange} />
                    <label htmlFor='emailInput' className="emailLabel" >
                        {createLabel('Email')}
                    </label>
                </div>
                <div className='formControl'>
                    <input required type='password' name="password" id="passInput" value={form.password} onChange={handleChange} />
                    <label htmlFor='passInput' className="passLabel" >
                        {createLabel('Password')}
                    </label>
                </div>
            </form>
        </div>
    )
}

export default App