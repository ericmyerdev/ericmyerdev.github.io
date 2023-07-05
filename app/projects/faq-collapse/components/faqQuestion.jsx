import React, { useState } from 'react'
import style from './faqQuestion.module.scss'

const faqQuestion = (props) => {
    const [Open, setOpen] = useState(false)

    const handleClick = (event) => { setOpen(!Open) }

    return (
        <div className={`${style.faqQuest} ${Open ? '' : style['closed']}`} onClick={handleClick}>
            <div className={style["icon"]}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></div>
            <div className={style["question"]}>{props.Question}</div>
            <div className={style["answer"]}>{props.Answer}</div>
        </div>
    )
}

export default faqQuestion