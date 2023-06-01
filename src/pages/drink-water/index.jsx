import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import style from './index.module.scss'

const Index = (count) => {
    const [Target, setTarget] = useState(1000)
    const [Progress, setProgress] = useState(0)
    const [ProgressPerc, setProgressPerc] = useState(0)
    const [Increment, setIncrement] = useState(250)
    const [Steps, setSteps] = useState()

    const createSteps = (count) => {
        if (!Steps) {
            let newSteps = []
            for (let step = 0; step < count; step++) {
                newSteps.push(
                    <div
                        key={step}
                        onClick={updateProgress}
                        className={`${style.step} ${style.cup}`}
                        id={`${step + 1}`}
                    >{Increment}</div>)
            }
            setSteps(newSteps)
        }
    }

    const clearProgress = () => {
        setProgress(0)
        setProgressPerc(0)
    }

    const updateProgress = ({ target }) => {
        let stepList = document.querySelectorAll(`.${style.step}`)

        let newProgress = target.id * Increment
        let newProgressPerc = (newProgress / Target) * 100

        if (Progress === newProgress) {
            newProgress = (target.id - 1) * Increment
            newProgressPerc = (newProgress / Target) * 100
        }

        setProgress(newProgress)
        setProgressPerc(newProgressPerc)
    }

    useEffect(() => {
        createSteps((Target / Increment))
    }, [Target, Increment])

    return (
        <div className={style.container}>
            <div
                className={`${style.progressBar} ${style.cup}`}
                style={{
                    background: `linear-gradient(
                        0deg, 
                        rgba(32, 69, 235, 0.5) 0% ${ProgressPerc}%, 
                        transparent ${ProgressPerc}% 100%)`
                }}>
                <div>{ProgressPerc}%</div>
                <div>{Progress}mL/{Target}mL</div>
            </div>
            <div className={style.progressSteps}>{Steps}</div>
            <div onClick={clearProgress}>Clear</div>
        </div >
    )
}

export default Index