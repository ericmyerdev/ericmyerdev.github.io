import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import style from './index.module.scss'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Index = () => {
    const [timeAPI, setTimeAPI] = useState(new Date())
    const [DarkMode, setDarkMode] = useState(false)

    const [date, setDate] = useState({})

    const [time, setTime] = useState({})

    const updateTime = () => {
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
                sec: timeAPI.getSeconds(),
                min: timeAPI.getMinutes(),
                hour: timeAPI.getHours(),
            }
        )
    }

    useEffect(() => {
        let intervaId = setInterval(() => {
            setTimeAPI(new Date())
        }, 500)

        return (() => {
            clearInterval(intervaId)
            updateTime()
        })
    }, [])

    return (
        <div>
            <div className={style.button} id={style.theme} onClick={() => setDarkMode(!DarkMode)}>Dark Mode {`${DarkMode ? 'On' : 'Off'}`}</div>
            <div className={style.analog}>
                <div className={style.clock}>
                    <div className={style.hand} id={style.sec} />
                    <div className={style.hand} id={style.min} />
                    <div className={style.hand} id={style.hour} />
                </div>
                <div className={style.date}>{date.month}/{date.day}/{date.year}</div>
            </div>
            <div className={style.digital}>
                <div className={style.clock}>{time.hour}:{time.min}:{time.sec}</div>
                <div className={style.date}>{date.weekday}, {date.month} {date.day}</div>
            </div>
        </div>
    )
}

export default Index