import React, { useEffect } from 'react'
import style from './style.module.scss'

const stepsContainer = (props) => {

    return (
        <div className={style.stepsContainer}>
            <div className={style.progressBar} style={{
                backgroundColor: 'rgb(0, 0, 0)',
                width: (((props.Progress - 1) / (props.List.length - 1)) * 100) + '%',
            }} />
            <div className={style.progressBar} style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
            }} />
            {props.List.map(step =>
                <div key={step.index} className={style.step} id={'step_' + step.name}>
                    <div className={`${style.stepIndex} ${style.stepDetail} ${props.Progress < step.index ? '' : style.active}`}>{step.index}</div>
                </div>
            )}
        </div>
    )
}

export default stepsContainer
