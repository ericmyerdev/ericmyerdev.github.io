import React, { useState } from 'react'
import './faqQuestion.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const faqQuestion = (props) => {
    const [Open, setOpen] = useState(false)

    const handleClick = (event) => { setOpen(!Open) }

    return (
        <div className={`faq-quest ${Open ? '' : 'closed'}`} onClick={handleClick}>
            <FontAwesomeIcon icon={faChevronDown} className='icon' />
            <div className="question">{props.Question}</div>
            <div className="answer">{props.Answer}</div>
        </div>
    )
}

export default faqQuestion