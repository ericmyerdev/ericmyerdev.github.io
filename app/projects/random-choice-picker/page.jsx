"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const App = () => {
    const [InputVal, setInputVal] = useState('')
    const [ChoiceList, setChoiceList] = useState([])
    const [Result, setResult] = useState()

    const updateInput = ({ target }) => {
        setInputVal(target.value)
    }

    const updateChoices = (e) => {
        e.preventDefault()
        if (!ChoiceList.includes(InputVal)) setChoiceList([...ChoiceList, InputVal])
        setInputVal('')
    }

    const removeChoice = (idx) => {
        setChoiceList(ChoiceList.filter(choice => choice !== ChoiceList[idx]))
        if (ChoiceList.length == 1) setResult(null)
    }

    const Shuffle = () => {
        let rng = Math.floor(Math.random() * ChoiceList.length)
        !ChoiceList.length ? setResult(null) : setResult(ChoiceList[rng])
    }

    const SelectRandom = () => {
        const shuffler = setInterval(Shuffle, 100);
        setTimeout(() => {
            clearInterval(shuffler)
        }, (3000));
    }


    return (
        <div className={style['container']}>
            <h1 className={`${style['header']} ${style['title']}`}>Random Choice Picker</h1>
            <form id={style["ChoiceInput"]} onSubmit={updateChoices}>
                <h3 className={style['header']}>Enter your choices:</h3>
                <input type='text' value={InputVal} onChange={updateInput} />
                <div className={`${!ChoiceList.length ? style['inactive'] : style['active']} ${style['btn']}`} id={style["shuffle-btn"]} onClick={SelectRandom}>
                    {!ChoiceList.length ? 'Press Enter to add choices' : 'Shuffle'}
                </div>
            </form>

            <div id={style["choices"]}>
                <div id={style['choiceList']}>{ChoiceList.map((choice, idx) =>
                    <div key={idx} className={`${style['choice']} ${(Result === choice) && style['active']}`} onClick={() => removeChoice(idx)}>
                        {choice}
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default App