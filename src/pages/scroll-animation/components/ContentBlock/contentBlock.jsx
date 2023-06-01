import React, { useState, useEffect, useRef } from 'react'
import './contentBlock.scss'

const contentBlock = (props) => {
    return (
        <div className={`content`}>
            {props.children}
        </div>
    )
}

export default contentBlock