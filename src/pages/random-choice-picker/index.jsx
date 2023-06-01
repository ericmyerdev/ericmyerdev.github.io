import React, { useState, useEffect } from 'react'
import './index.scss'

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
        }, ((ChoiceList.length * 1.5) * 100));
    }


    return (
        <div className='container'>
            <h1 className='title'>Random Choice Picker</h1>
            <form id="ChoiceInput" onSubmit={updateChoices}>
                <h3>Enter your choices:</h3>
                <input type='text' value={InputVal} onChange={updateInput} />
            </form>

            <div id="choices">
                <div className={`${!ChoiceList.length ? 'inactive' : 'active'} btn`} id="shuffle-btn" onClick={SelectRandom}>
                    {!ChoiceList.length ? 'Press Enter to add choices' : 'Shuffle'}
                </div>
                <div className={Result && 'active'} id="result">
                    {!ChoiceList.length ? null : (Result ? Result : 'Press Shuffle...')}
                </div>
                <div id='choiceList'>{ChoiceList.map((choice, idx) =>
                    <div key={idx} className={`choice ${(Result === choice) && 'active'}`} onClick={() => removeChoice(idx)}>
                        {choice}
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default App