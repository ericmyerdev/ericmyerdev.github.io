"use client"
import React, { useState, useEffect } from 'react'
import style from './index.module.scss'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Index = () => {
    const [DarkMode, setDarkMode] = useState(false)
    const [date, setDate] = useState({})
    const [time, setTime] = useState({})

    const updateTime = (timeAPI) => {
        setDate(
            {
                weekday: daysOfWeek[timeAPI.getDay()],
                day: timeAPI.getDate(),
                month: months[timeAPI.getMonth()],
                year: timeAPI.getFullYear()
            }
        )

        setTime(
            {
                sec: formatNum(timeAPI.getSeconds()),
                min: formatNum(timeAPI.getMinutes()),
                hour: formatNum(timeAPI.getHours() % 12),
            }
        )
    }

    const formatNum = (num) => {
        if (num < 10) return (`0${num}`)
        return num
    }

    useEffect(() => {
        let timeoutId = setInterval(() => {
            updateTime(new Date())
        }, 10)

        return (() => clearTimeout(timeoutId))
    }, [])

    return (
        <div className={`${style.container} ${DarkMode && style.dark}`}>
            <div className={style.button} id={style.theme} onClick={() => setDarkMode(!DarkMode)}>Dark Mode {`${DarkMode ? 'On' : 'Off'}`}</div>
            <time dateTime={`${time.hour}:${time.min}`}>
                <div className={style.analog}>
                    <div className={style.clock}>
                        <div className={style.hand} id={style.hour} style={{ 'rotate': `${(time.hour / 12) * 360}deg` }} />
                        <div className={style.hand} id={style.min} style={{ 'rotate': `${(time.min / 60) * 360}deg` }} />
                        <div className={style.hand} id={style.sec} style={{ 'rotate': `${(time.sec / 60) * 360}deg` }} />
                    </div>
                </div>
                <div className={style.digital}>
                    <div className={style.clock}>{time.hour}:{time.min}:{time.sec}</div>
                    <div className={style.date}>{date.weekday}, {date.month} {date.day}</div>
                </div>
            </time>
        </div>
    )
}

export default Index