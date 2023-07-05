"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

import FAQ from './components/faqQuestion'

const App = () => {
    return (
        <div className={style['container']}>
            <h1>Frequently Asked Questions</h1>
            <FAQ Question='Have you heard of the band 1023MB?' Answer="They haven't got a gig yet."></FAQ>
            <FAQ Question='Have you heard of the band 1023MB?' Answer="They haven't got a gig yet."></FAQ>
            <FAQ Question='Have you heard of the band 1023MB?' Answer="They haven't got a gig yet."></FAQ>
            <FAQ Question='Have you heard of the band 1023MB?' Answer="They haven't got a gig yet."></FAQ>
            <FAQ Question='Have you heard of the band 1023MB?' Answer="They haven't got a gig yet."></FAQ>
        </div>
    )
}

export default App