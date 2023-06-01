import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

const Counter = (props) => {
  const [CurrentCount, setCurrentCount] = useState(0)

  const incrementCount = () => {
    const newCount = CurrentCount + (props.Count / 1000)
    newCount < props.Count ? setCurrentCount(newCount) : setCurrentCount(props.Count)
  }

  useEffect(() => {
    if (CurrentCount < props.Count) {
      setTimeout(incrementCount, 1);
    }
  }, [CurrentCount])


  return (
    <div className={`${style.container} ${props.className}`}>
      <div className={style.countName}>{props.Icon}</div>
      <div className={style.count}>{Math.ceil(CurrentCount)}</div>
      {props.children}
    </div>
  )
}

export default Counter