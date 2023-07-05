"use client"
import React, { useState, useEffect } from 'react'
import Steps from './components/stepsContainer/stepsContainer'
import style from './index.module.scss'

const App = () => {
    const [StepsList, setStepsList] = useState([
        { index: 1, name: 'One' },
        { index: 2, name: 'Two' },
        { index: 3, name: 'Three' },
        { index: 4, name: 'Four' },
    ])

    const [currentStep, setCurrentStep] = useState(1)

    useEffect(() => {
        setCurrentStep(1)
        return () => {
            console.log(currentStep)
        }
    }, [])


    const handleNext = (e) => {
        let next = currentStep == StepsList.length ? StepsList.length : currentStep + 1
        setCurrentStep(next)
        console.log(`Next - ${next}/${StepsList.length}`)
    }

    const handlePrev = (e) => {
        let prev = currentStep == 1 ? 1 : currentStep - 1
        setCurrentStep(prev)
        console.log(`Prev - ${prev}/${StepsList.length}`)
    }

    return (
        <div className={style['container']} >
            <h1 className={style['title']}>Progress Steps</h1>
            <div className={style["progressContainer"]}>
                <Steps List={StepsList} Progress={currentStep} />
            </div>
            <div className={style["controls"]}>
                <div className={style["button"]} id={style["prev"]} onClick={handlePrev}>Prev</div>
                <div className={style["button"]} id={style["next"]} onClick={handleNext}>Next</div>
            </div>
        </div>
    )
}

export default App